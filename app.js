// ===== Thai listening practice — shared engine =====
// Each page defines `const SENTENCES = [[thai, romanization, english], …]` before loading this file.

// Two audio sources:
//   1) Google Translate TTS — best quality, but an unofficial endpoint that can 404
//   2) the device's own Thai voice via the Web Speech API — offline fallback / alternative
const TTS = t => "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=th&q=" + encodeURIComponent(t);
// Manual fallback: open the phrase in the Google Translate UI (tap the speaker there)
const TRANSLATE = t => "https://translate.google.com/?sl=th&tl=en&op=translate&text=" + encodeURIComponent(t);

const synth = window.speechSynthesis;
let thaiVoices = [];
let choice = "google";               // "google", or "voice:<index>" of a device Thai voice
let userPicked = false;              // once the user chooses, stop auto-defaulting
function loadVoices(){
  const vs = synth ? synth.getVoices() : [];
  thaiVoices = vs.filter(v => (v.lang || "").toLowerCase().replace("_","-").startsWith("th"));
  populateVoicePicker();
}
function populateVoicePicker(){
  const wrap = document.getElementById("voiceWrap");
  const sel = document.getElementById("voice");
  if(!wrap || !sel) return;
  const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
  sel.innerHTML = '<option value="google">Google Translate (best quality)</option>' +
    thaiVoices.map((v,i) => `<option value="voice:${i}">${esc(v.name)} · device</option>`).join("");
  // default stays Google (reliable end-of-audio event); the user can switch to a device voice
  if([...sel.options].some(o => o.value === choice)) sel.value = choice;
  else { choice = "google"; sel.value = "google"; }
  wrap.hidden = thaiVoices.length < 1;   // only worth showing once the device adds its own voice(s)
}
if(synth){
  loadVoices();
  synth.addEventListener("voiceschanged", loadVoices);
}

const PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
const STOP_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';
const EXT_ICON  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';
const STAR_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3.2l2.65 5.37 5.93.86-4.29 4.18 1.01 5.9L12 16.6 6.7 19.51l1.01-5.9L3.42 9.43l5.93-.86z"/></svg>';
const COPY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
const CHECK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';

async function copyText(t){
  try { await navigator.clipboard.writeText(t); return true; }
  catch(e){
    try{
      const ta = document.createElement("textarea");
      ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.focus(); ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    }catch(e2){ return false; }
  }
}

// starred lines persist in localStorage, keyed by the Thai text so reordering is safe
const STAR_KEY = "thai-practice-starred";
let starred = new Set();
try { starred = new Set(JSON.parse(localStorage.getItem(STAR_KEY) || "[]")); } catch(e){}
function saveStars(){ try { localStorage.setItem(STAR_KEY, JSON.stringify([...starred])); } catch(e){} }

// build a corpus (thai -> [rom, en]) across every page visited, so the Saved page
// can reconstruct starred lines gathered from any set
const CORPUS_KEY = "thai-practice-corpus";
(function mergeCorpus(){
  if(!Array.isArray(SENTENCES) || !SENTENCES.length) return;
  let corpus = {};
  try { corpus = JSON.parse(localStorage.getItem(CORPUS_KEY) || "{}"); } catch(e){}
  let changed = false;
  SENTENCES.forEach(([thai, rom, en]) => {
    const cur = corpus[thai];
    if(!cur || cur[0] !== rom || cur[1] !== en){ corpus[thai] = [rom, en]; changed = true; }
  });
  if(changed){ try { localStorage.setItem(CORPUS_KEY, JSON.stringify(corpus)); } catch(e){} }
})();

let speed = 0.5;
let audio = null;
let currentCard = null;      // the line whose audio is playing / paused
let currentThai = null;
let highlightCard = null;    // the line showing the play highlight; persists until another line plays
const list = document.getElementById("list");

SENTENCES.forEach(([thai, rom, en], i) => {
  const card = document.createElement("div");
  card.className = "card masked";
  card.style.animationDelay = (i * 35) + "ms";
  if(starred.has(thai)) card.classList.add("starred");
  card.innerHTML = `
    <span class="num">${String(i+1).padStart(2,"0")}</span>
    <button class="star" aria-label="Save sentence ${i+1}" aria-pressed="${starred.has(thai)}">${STAR_ICON}</button>
    <button class="play" aria-label="Play sentence ${i+1}">
      <span class="ring"></span>${PLAY_ICON}
    </button>
    <div class="body">
      <div class="thai">${thai}<button class="copy" aria-label="Copy the Thai text">${COPY_ICON}</button></div>
      <div class="reading">
        <div class="rom">${rom}</div>
        <div class="en">${en}</div>
      </div>
      <a class="fallback" href="${TRANSLATE(thai)}" target="_blank" rel="noopener">${EXT_ICON} hear it on Google Translate</a>
      <div class="err">Couldn't play the audio here. Tap "hear it on Google Translate" above.</div>
    </div>`;

  const btn = card.querySelector(".play");
  btn.addEventListener("click", () => toggle(card, thai, btn));

  // star / save — persists across reloads
  const star = card.querySelector(".star");
  star.addEventListener("click", e => {
    e.stopPropagation();
    const on = card.classList.toggle("starred");
    if(on) starred.add(thai); else starred.delete(thai);
    star.setAttribute("aria-pressed", on);
    saveStars();
  });

  // copy the Thai text to the clipboard
  const copyBtn = card.querySelector(".copy");
  copyBtn.addEventListener("click", async e => {
    e.stopPropagation();
    await copyText(thai);
    copyBtn.innerHTML = CHECK_ICON;
    copyBtn.classList.add("copied");
    setTimeout(() => { copyBtn.innerHTML = COPY_ICON; copyBtn.classList.remove("copied"); }, 1200);
  });

  // click anywhere in the reading block to reveal, click again to blur
  card.querySelector(".reading").addEventListener("click", ()=> card.classList.toggle("masked"));

  list.appendChild(card);
});

// empty state (used by the Saved page when nothing is starred yet)
if(list && !SENTENCES.length){
  const note = document.createElement("p");
  note.className = "empty";
  note.textContent = "No saved lines yet — tap the ☆ on any card in the other sets to save it here.";
  list.appendChild(note);
}

// the play highlight follows the last line you played and stays until another line plays
function moveHighlight(card){
  if(highlightCard && highlightCard !== card){
    highlightCard.classList.remove("playing","paused","live","ended");
    highlightCard.querySelector(".play").innerHTML = '<span class="ring"></span>' + PLAY_ICON;
  }
  highlightCard = card;
}

function clearAudio(){   // stop audio/speech — reset the play button to its off look; keep the card frame
  if(audio){ audio.pause(); audio = null; }
  if(synth) synth.cancel();
  if(currentCard){
    currentCard.classList.remove("live");                 // stop pulse + gold button
    currentCard.querySelector(".play").innerHTML = '<span class="ring"></span>' + PLAY_ICON;
  }
  currentCard = null;
  currentThai = null;
}

function toggle(card, thai, btn){
  if(currentCard === card){ clearAudio(); return; }    // tapping the playing line stops audio; the box stays highlighted
  clearAudio();
  card.classList.remove("error");
  moveHighlight(card);                                 // move the highlight to this line

  // starting a line re-hides every other reading, so you focus on what you're hearing
  document.querySelectorAll(".card").forEach(c => { if(c !== card) c.classList.add("masked"); });

  currentCard = card;
  currentThai = thai;
  card.classList.add("playing", "live");   // highlight + ring pulse
  btn.innerHTML = '<span class="ring"></span>' + STOP_ICON;

  if(choice === "google") playGoogle(card, thai);
  else speakDevice(card, thai, thaiVoices[parseInt(choice.split(":")[1], 10)]);
}

// Google clips slow down gently — the raw dial ran the low end unusably slow.
// Dial 0.1×→~0.6, 0.5×→~0.78, 1.0×→1.0 (a compressed, less dramatic range).
function googleRate(s){ return 0.55 + 0.45 * s; }

// Google Translate audio — best quality; on failure, quietly fall back to the device voice.
// A fresh element each play so replays always restart cleanly (reusing one broke seeking on iOS).
function playGoogle(card, thai){
  audio = new Audio(TTS(thai));
  audio.playbackRate = googleRate(speed);
  audio.onended = () => { if(currentCard === card) clearAudio(); };
  audio.onerror = () => speakDevice(card, thai, thaiVoices[0]);
  const p = audio.play();
  if(p && p.catch) p.catch(() => speakDevice(card, thai, thaiVoices[0]));
}

// Break Thai into words even when the text has no spaces (Thai rarely spaces words).
// Intl.Segmenter (Safari 14.1+) finds word boundaries; fall back to splitting on spaces.
function segmentThai(text){
  if(typeof Intl !== "undefined" && Intl.Segmenter){
    try{
      const seg = new Intl.Segmenter("th", { granularity: "word" });
      const words = [...seg.segment(text)].map(s => s.segment).filter(w => w.trim());
      if(words.length) return words;
    }catch(e){}
  }
  return text.split(/\s+/).filter(Boolean);
}

// Merge words into n contiguous groups (rejoined without spaces, as Thai is written).
function groupWords(words, n){
  n = Math.max(1, Math.min(n, words.length));
  const groups = [];
  for(let g = 0; g < n; g++){
    const start = Math.round(g * words.length / n);
    const end = Math.round((g + 1) * words.length / n);
    const chunk = words.slice(start, end).join("");
    if(chunk) groups.push(chunk);
  }
  return groups;
}

const RATE_FLOOR = 0.1;   // the slowest the Web Speech API will actually speak

// Device Thai voice via the Web Speech API.
//  • dial 1.0→0.5×  : rate ramps 1.0 → 0.1 (floor); spoken as one utterance, no pauses
//  • dial below 0.5×: rate pinned at the floor, and we split the line into more and more
//    pieces so the engine's (shortest-possible) word-boundary pauses ease in and pile up
function speakDevice(card, thai, voice){
  if(audio){ audio.pause(); audio = null; }
  if(currentCard !== card) return;         // user moved on while Google was failing over
  if(!synth || !voice){ card.classList.add("error"); clearAudio(); return; }

  let rate, chunks;
  if(speed >= 0.5){
    rate = RATE_FLOOR + (speed - 0.5) / 0.5 * (1 - RATE_FLOOR);   // 0.5×→0.1, 1×→1.0
    chunks = [thai];
  } else {
    rate = RATE_FLOOR;
    const words = segmentThai(thai);
    const f = (0.5 - speed) / 0.4;                                // 0 just under 0.5×, 1 at 0.1×
    const pieces = 1 + Math.round(f * (words.length - 1));        // 1 → every word
    chunks = groupWords(words, pieces);
  }

  let i = 0;
  const speakNext = () => {
    if(currentCard !== card) return;        // stopped or replaced
    if(i >= chunks.length){ clearAudio(); return; }
    const u = new SpeechSynthesisUtterance(chunks[i++]);
    u.lang = voice.lang || "th-TH";
    u.voice = voice;
    u.rate = rate;
    u.onend = () => { if(currentCard === card) speakNext(); };   // no added delay = shortest gap
    u.onerror = e => {
      // "canceled"/"interrupted" fire whenever we stop to start another line — not real errors
      if(e.error && e.error !== "canceled" && e.error !== "interrupted") card.classList.add("error");
      if(currentCard === card) clearAudio();
    };
    synth.speak(u);
  };
  speakNext();
}

// speed dial
const rate = document.getElementById("rate");
const readout = document.getElementById("readout");
function paintSlider(){
  const pct = ((rate.value - rate.min) / (rate.max - rate.min)) * 100;
  rate.style.setProperty("--fill", pct + "%");
}
rate.addEventListener("input", () => {
  speed = parseFloat(rate.value);
  readout.textContent = speed.toFixed(2) + "×";
  paintSlider();
  if(audio) audio.playbackRate = googleRate(speed);   // live-adjust the Google clip
});
paintSlider();

// voice / engine picker
const voiceSel = document.getElementById("voice");
if(voiceSel) voiceSel.addEventListener("change", () => { userPicked = true; choice = voiceSel.value; });

// listening mode toggle
const maskToggle = document.getElementById("maskToggle");
function setMask(on){
  maskToggle.classList.toggle("on", on);
  maskToggle.setAttribute("aria-checked", on);
  document.querySelectorAll(".card").forEach(c => c.classList.toggle("masked", on));
}
maskToggle.addEventListener("click", () => setMask(!maskToggle.classList.contains("on")));
maskToggle.addEventListener("keydown", e => {
  if(e.key === " " || e.key === "Enter"){ e.preventDefault(); maskToggle.click(); }
});
// start with the reading hidden — tap a line to reveal it
setMask(true);

// Spacebar pauses / resumes the current line (instead of restarting it).
function pauseResume(){
  if(!currentCard) return;
  const btn = currentCard.querySelector(".play");
  const playIcon = '<span class="ring"></span>' + PLAY_ICON;
  const stopIcon = '<span class="ring"></span>' + STOP_ICON;
  if(audio){                                   // Google clip: reliable pause/resume
    if(audio.paused){ audio.play(); currentCard.classList.add("live"); btn.innerHTML = stopIcon; }
    else { audio.pause(); currentCard.classList.remove("live"); btn.innerHTML = playIcon; }
    return;
  }
  if(synth){                                   // device voice: best-effort (iOS support varies)
    if(synth.paused){ synth.resume(); currentCard.classList.add("live"); btn.innerHTML = stopIcon; }
    else { synth.pause(); currentCard.classList.remove("live"); btn.innerHTML = playIcon; }
  }
}
document.addEventListener("keydown", e => {
  if(e.key !== " " || !currentCard) return;
  const t = e.target;
  if(t.tagName === "SELECT" || t.tagName === "INPUT" || t === maskToggle) return;  // don't hijack controls
  e.preventDefault();
  pauseResume();
});

// cache Google TTS audio for instant replays (purely additive — playback works without it)
if("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(()=>{}));
}

// shared top nav — filled here so every page stays in sync (each page ships an empty .nav)
const NAV = [
  ["index.html","Set 1 · Sentences"],
  ["vocab.html","Set 2 · Mix"],
  ["set3.html","Set 3 · Mix"],
  ["set4.html","Set 4 · Mix"],
  ["set5.html","Set 5 · Mix"],
  ["liked.html","★ Saved"],
];
(function buildNav(){
  const navEl = document.querySelector ? document.querySelector(".nav") : null;
  if(!navEl) return;
  let here = "index.html";
  try { here = location.pathname.split("/").pop() || "index.html"; } catch(e){}
  navEl.innerHTML = NAV.map(([h,l]) => `<a href="${h}"${h===here?' class="active"':''}>${l}</a>`).join("");
})();
