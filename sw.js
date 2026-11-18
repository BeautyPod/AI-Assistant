const CACHE="beautypod-ai-v12";
const CORE=["./","./index.html","./manifest.json","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png","./icons/icon-maskable-512.png","./img/una-encarnada.jpg","./img/verrugas.jpg","./img/mal-olor.jpg","./img/callosidades.jpg","./img/onicomicosis.jpg","./assets/img/beautypod-logo.svg"];
// Un archivo faltante ya no impide instalar la app
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET"||new URL(r.url).origin!==self.location.origin)return;
  const put=res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res};
  if(r.mode==="navigate"){ // páginas: red primero (siempre la versión nueva), caché si no hay conexión
    e.respondWith(fetch(r).then(put).catch(()=>caches.match("./index.html")));return;
  }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(put).catch(()=>Response.error())));
});
