const DEFAULT_SETS = [
  {
    "id": "set1",
    "title": "Set 1 · Alltag",
    "lines": [
      {
        "th": "Buongiorno, come stai?",
        "rom": "buon-DSCHOR-no, KO-me stai",
        "en": "Guten Morgen, wie geht es dir?"
      },
      {
        "th": "Ciao, mi chiamo Marco.",
        "rom": "tschau, mi KJA-mo MAR-ko",
        "en": "Hallo, ich heiße Marco."
      },
      {
        "th": "Come ti chiami?",
        "rom": "KO-me ti KJA-mi",
        "en": "Wie heißt du?"
      },
      {
        "th": "Molto piacere.",
        "rom": "MOL-to pja-TSCHE-re",
        "en": "Sehr angenehm."
      },
      {
        "th": "Come va?",
        "rom": "KO-me wa",
        "en": "Wie geht's?"
      },
      {
        "th": "Tutto bene, grazie.",
        "rom": "TUT-to BE-ne, GRA-tsje",
        "en": "Alles gut, danke."
      },
      {
        "th": "A più tardi!",
        "rom": "a pju TAR-di",
        "en": "Bis später!"
      },
      {
        "th": "Buonanotte e sogni d'oro.",
        "rom": "buona-NOT-te e SON-ji DO-ro",
        "en": "Gute Nacht und süße Träume."
      },
      {
        "th": "Scusa, non ho capito.",
        "rom": "SKU-sa, non o ka-PI-to",
        "en": "Entschuldige, ich habe nicht verstanden."
      },
      {
        "th": "Puoi ripetere, per favore?",
        "rom": "puoi ri-PE-te-re, per fa-WO-re",
        "en": "Kannst du das bitte wiederholen?"
      },
      {
        "th": "Non parlo bene italiano.",
        "rom": "non PAR-lo BE-ne ita-LJA-no",
        "en": "Ich spreche nicht gut Italienisch."
      },
      {
        "th": "Parli tedesco?",
        "rom": "PAR-li te-DES-ko",
        "en": "Sprichst du Deutsch?"
      },
      {
        "th": "Di dove sei?",
        "rom": "di DO-we sei",
        "en": "Woher kommst du?"
      },
      {
        "th": "Sono di Berlino.",
        "rom": "SO-no di ber-LI-no",
        "en": "Ich komme aus Berlin."
      },
      {
        "th": "Che lavoro fai?",
        "rom": "ke la-WO-ro fai",
        "en": "Was machst du beruflich?"
      },
      {
        "th": "Oggi sono molto stanco.",
        "rom": "OD-dschi SO-no MOL-to STAN-ko",
        "en": "Heute bin ich sehr müde."
      },
      {
        "th": "Ho bisogno di aiuto.",
        "rom": "o bi-SON-jo di a-JU-to",
        "en": "Ich brauche Hilfe."
      },
      {
        "th": "Mi puoi aiutare?",
        "rom": "mi puoi aju-TA-re",
        "en": "Kannst du mir helfen?"
      },
      {
        "th": "Grazie mille!",
        "rom": "GRA-tsje MIL-le",
        "en": "Tausend Dank!"
      },
      {
        "th": "Non c'è problema.",
        "rom": "non tsche pro-BLE-ma",
        "en": "Kein Problem."
      }
    ]
  },
  {
    "id": "set2",
    "title": "Set 2 · Essen",
    "lines": [
      {
        "th": "Vorrei un caffè, per favore.",
        "rom": "vor-REI un kaf-FE, per fa-WO-re",
        "en": "Ich hätte gerne einen Kaffee, bitte."
      },
      {
        "th": "Un cappuccino e un cornetto.",
        "rom": "un kaput-TSCHI-no e un kor-NET-to",
        "en": "Einen Cappuccino und ein Hörnchen."
      },
      {
        "th": "Il conto, per favore.",
        "rom": "il KON-to, per fa-WO-re",
        "en": "Die Rechnung, bitte."
      },
      {
        "th": "Ha un tavolo per due?",
        "rom": "a un TA-wo-lo per DU-e",
        "en": "Haben Sie einen Tisch für zwei?"
      },
      {
        "th": "Che cosa mi consiglia?",
        "rom": "ke KO-sa mi kon-SI-lja",
        "en": "Was empfehlen Sie mir?"
      },
      {
        "th": "Sono vegetariano.",
        "rom": "SO-no wedsche-ta-RJA-no",
        "en": "Ich bin Vegetarier."
      },
      {
        "th": "L'acqua è naturale o frizzante?",
        "rom": "LAK-kua e natu-RA-le o frit-TSAN-te",
        "en": "Ist das Wasser still oder mit Kohlensäure?"
      },
      {
        "th": "Vorrei ordinare la pizza.",
        "rom": "vor-REI ordi-NA-re la PIT-tsa",
        "en": "Ich möchte die Pizza bestellen."
      },
      {
        "th": "È molto buono!",
        "rom": "e MOL-to BUO-no",
        "en": "Es ist sehr lecker!"
      },
      {
        "th": "Ho fame.",
        "rom": "o FA-me",
        "en": "Ich habe Hunger."
      },
      {
        "th": "Ho sete.",
        "rom": "o SE-te",
        "en": "Ich habe Durst."
      },
      {
        "th": "Prendo un bicchiere di vino rosso.",
        "rom": "PREN-do un bik-KJE-re di WI-no ROS-so",
        "en": "Ich nehme ein Glas Rotwein."
      },
      {
        "th": "Quanto costa il gelato?",
        "rom": "KUAN-to KOS-ta il dsche-LA-to",
        "en": "Was kostet das Eis?"
      },
      {
        "th": "Non mangio carne.",
        "rom": "non MAN-dscho KAR-ne",
        "en": "Ich esse kein Fleisch."
      },
      {
        "th": "Il pane è fresco.",
        "rom": "il PA-ne e FRES-ko",
        "en": "Das Brot ist frisch."
      },
      {
        "th": "Vorrei pagare con la carta.",
        "rom": "vor-REI pa-GA-re kon la KAR-ta",
        "en": "Ich möchte mit Karte zahlen."
      },
      {
        "th": "Buon appetito!",
        "rom": "buon appe-TI-to",
        "en": "Guten Appetit!"
      },
      {
        "th": "Posso avere il menù?",
        "rom": "POS-so a-WE-re il me-NU",
        "en": "Kann ich die Speisekarte haben?"
      },
      {
        "th": "Questo piatto è piccante.",
        "rom": "KUES-to PJAT-to e pik-KAN-te",
        "en": "Dieses Gericht ist scharf."
      },
      {
        "th": "Ancora un po' d'acqua, grazie.",
        "rom": "an-KO-ra un po DAK-kua, GRA-tsje",
        "en": "Noch etwas Wasser, danke."
      }
    ]
  },
  {
    "id": "set3",
    "title": "Set 3 · Reisen",
    "lines": [
      {
        "th": "Dov'è la stazione?",
        "rom": "do-WE la sta-TSJO-ne",
        "en": "Wo ist der Bahnhof?"
      },
      {
        "th": "Scusi, dov'è il bagno?",
        "rom": "SKU-si, do-WE il BAN-jo",
        "en": "Entschuldigung, wo ist die Toilette?"
      },
      {
        "th": "Vado a Roma domani.",
        "rom": "VA-do a RO-ma do-MA-ni",
        "en": "Ich fahre morgen nach Rom."
      },
      {
        "th": "A che ora parte il treno?",
        "rom": "a ke O-ra PAR-te il TRE-no",
        "en": "Wann fährt der Zug ab?"
      },
      {
        "th": "Quanto costa il biglietto?",
        "rom": "KUAN-to KOS-ta il bi-LJET-to",
        "en": "Was kostet die Fahrkarte?"
      },
      {
        "th": "Vorrei un biglietto di andata e ritorno.",
        "rom": "vor-REI un bi-LJET-to di an-DA-ta e ri-TOR-no",
        "en": "Ich hätte gerne eine Hin- und Rückfahrkarte."
      },
      {
        "th": "È lontano da qui?",
        "rom": "e lon-TA-no da kui",
        "en": "Ist es weit von hier?"
      },
      {
        "th": "Giri a destra.",
        "rom": "DSCHI-ri a DES-tra",
        "en": "Biegen Sie rechts ab."
      },
      {
        "th": "Vada sempre dritto.",
        "rom": "VA-da SEM-pre DRIT-to",
        "en": "Gehen Sie immer geradeaus."
      },
      {
        "th": "Sono in ritardo.",
        "rom": "SO-no in ri-TAR-do",
        "en": "Ich bin spät dran."
      },
      {
        "th": "Dove posso prendere un taxi?",
        "rom": "DO-we POS-so PREN-de-re un TAK-si",
        "en": "Wo kann ich ein Taxi nehmen?"
      },
      {
        "th": "Ho perso il volo.",
        "rom": "o PER-so il WO-lo",
        "en": "Ich habe den Flug verpasst."
      },
      {
        "th": "L'albergo è vicino al mare.",
        "rom": "lal-BER-go e wi-TSCHI-no al MA-re",
        "en": "Das Hotel ist in der Nähe des Meeres."
      },
      {
        "th": "Ho una prenotazione.",
        "rom": "o U-na prenota-TSJO-ne",
        "en": "Ich habe eine Reservierung."
      },
      {
        "th": "Mi sono perso.",
        "rom": "mi SO-no PER-so",
        "en": "Ich habe mich verlaufen."
      },
      {
        "th": "Può aiutarmi a trovare la strada?",
        "rom": "puo aju-TAR-mi a tro-VA-re la STRA-da",
        "en": "Können Sie mir helfen, den Weg zu finden?"
      },
      {
        "th": "Il museo è aperto oggi?",
        "rom": "il mu-SE-o e a-PER-to OD-dschi",
        "en": "Ist das Museum heute geöffnet?"
      },
      {
        "th": "Quanto dista l'aeroporto?",
        "rom": "KUAN-to DIS-ta lae-ro-POR-to",
        "en": "Wie weit ist der Flughafen?"
      },
      {
        "th": "Prendo l'autobus numero cinque.",
        "rom": "PREN-do LAU-to-bus NU-me-ro TSCHIN-kue",
        "en": "Ich nehme den Bus Nummer fünf."
      },
      {
        "th": "Buon viaggio!",
        "rom": "buon VJAD-dscho",
        "en": "Gute Reise!"
      }
    ]
  },
  {
    "id": "set4",
    "title": "Set 4 · Zeit & Zahlen",
    "lines": [
      {
        "th": "Che ore sono?",
        "rom": "ke O-re SO-no",
        "en": "Wie spät ist es?"
      },
      {
        "th": "Sono le tre.",
        "rom": "SO-no le tre",
        "en": "Es ist drei Uhr."
      },
      {
        "th": "Oggi è lunedì.",
        "rom": "OD-dschi e lune-DI",
        "en": "Heute ist Montag."
      },
      {
        "th": "Domani è il mio compleanno.",
        "rom": "do-MA-ni e il MI-o komple-AN-no",
        "en": "Morgen ist mein Geburtstag."
      },
      {
        "th": "Ho trent'anni.",
        "rom": "o tren-TAN-ni",
        "en": "Ich bin dreißig Jahre alt."
      },
      {
        "th": "Quanto costa in tutto?",
        "rom": "KUAN-to KOS-ta in TUT-to",
        "en": "Was kostet es insgesamt?"
      },
      {
        "th": "Sono le otto e mezza.",
        "rom": "SO-no le OT-to e MED-dsa",
        "en": "Es ist halb neun."
      },
      {
        "th": "Fa molto caldo oggi.",
        "rom": "fa MOL-to KAL-do OD-dschi",
        "en": "Heute ist es sehr heiß."
      },
      {
        "th": "Fa freddo e piove.",
        "rom": "fa FRED-do e PJO-we",
        "en": "Es ist kalt und es regnet."
      },
      {
        "th": "Domani ci sarà il sole.",
        "rom": "do-MA-ni tschi sa-RA il SO-le",
        "en": "Morgen wird die Sonne scheinen."
      },
      {
        "th": "Ci vediamo alle sette.",
        "rom": "tschi ve-DJA-mo AL-le SET-te",
        "en": "Wir sehen uns um sieben."
      },
      {
        "th": "Un momento, per favore.",
        "rom": "un mo-MEN-to, per fa-WO-re",
        "en": "Einen Moment, bitte."
      },
      {
        "th": "Aspetta cinque minuti.",
        "rom": "as-PET-ta TSCHIN-kue mi-NU-ti",
        "en": "Warte fünf Minuten."
      },
      {
        "th": "È troppo caro.",
        "rom": "e TROP-po KA-ro",
        "en": "Es ist zu teuer."
      },
      {
        "th": "Ne vorrei due, per favore.",
        "rom": "ne vor-REI DU-e, per fa-WO-re",
        "en": "Ich hätte gerne zwei davon, bitte."
      },
      {
        "th": "Il negozio apre alle nove.",
        "rom": "il ne-GO-tsjo A-pre AL-le NO-we",
        "en": "Das Geschäft öffnet um neun."
      },
      {
        "th": "Che tempo fa oggi?",
        "rom": "ke TEM-po fa OD-dschi",
        "en": "Wie ist das Wetter heute?"
      },
      {
        "th": "La settimana prossima parto.",
        "rom": "la setti-MA-na PROS-si-ma PAR-to",
        "en": "Nächste Woche reise ich ab."
      },
      {
        "th": "È presto, ho ancora tempo.",
        "rom": "e PRES-to, o an-KO-ra TEM-po",
        "en": "Es ist früh, ich habe noch Zeit."
      },
      {
        "th": "A domani!",
        "rom": "a do-MA-ni",
        "en": "Bis morgen!"
      }
    ]
  }
];

const MANIFEST_KEY = "italian-practice-manifest";
const MANIFEST_VERSION = 1;   // bump when DEFAULT_SETS content changes -> reseed (stars preserved)

function cloneSets(sets){
  return sets.map(s => ({
    id: s.id, title: s.title,
    lines: (s.lines || []).map(l => { const o = { th: l.th, rom: l.rom || "", en: l.en || "" }; if(l.star) o.star = l.star; return o; }),
  }));
}
function starMap(sets){
  const m = {};
  for(const s of (sets || [])){ for(const l of (s.lines || [])){ if(l && l.star) m[l.th] = l.star; } }
  return m;
}
function applyStars(sets, stars){
  for(const s of sets){ for(const l of s.lines){ if(stars[l.th]) l.star = stars[l.th]; } }
  return sets;
}
function saveManifest(sets){
  try { localStorage.setItem(MANIFEST_KEY, JSON.stringify({ version: MANIFEST_VERSION, sets })); return true; } catch(e){ return false; }
}
function loadManifest(){
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(MANIFEST_KEY) || "null"); } catch(e){}
  let storedSets = null, ver = 0;
  if(raw && Array.isArray(raw.sets)){ storedSets = raw.sets; ver = raw.version || 1; }
  else if(Array.isArray(raw)){ storedSets = raw; ver = 1; }

  let sets, changed = false;
  if(!storedSets){ sets = cloneSets(DEFAULT_SETS); changed = true; }
  else if(ver < MANIFEST_VERSION){ sets = applyStars(cloneSets(DEFAULT_SETS), starMap(storedSets)); changed = true; }
  else {
    sets = storedSets;
    for(const def of DEFAULT_SETS){ if(!sets.find(s => s && s.id === def.id)){ sets.push(cloneSets([def])[0]); changed = true; } }
  }
  if(changed) saveManifest(sets);
  return sets;
}
