// Caches Google Translate TTS audio so replays don't refetch.
// Keyed by the full request URL (i.e. the query param / phrase). Only TTS audio
// is intercepted — the app HTML/JS is left to the normal browser cache, so
// deploys are never served stale.
const CACHE = "thai-tts-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", event => {
  if (event.request.url.indexOf("translate_tts") === -1) return;   // only TTS audio
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(event.request);
    if (hit) return hit;                                            // served from cache, no network
    try {
      const resp = await fetch(event.request);                     // opaque (cross-origin) response
      cache.put(event.request, resp.clone()).catch(() => {});      // opaque responses are cacheable
      return resp;
    } catch (e) {
      return (await cache.match(event.request)) || Response.error();
    }
  })());
});
