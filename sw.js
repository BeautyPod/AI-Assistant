const CACHE="beautypod-ai-v8";
const CORE=["./","./index.html","./manifest.json","./icons/icon-192.png","./icons/icon-512.png","./img/una-encarnada.jpg","./img/verrugas.jpg","./img/mal-olor.jpg","./img/callosidades.jpg","./img/onicomicosis.jpg"];
const OPTIONAL=["./assets/img/beautypod-logo.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(async c=>{await c.addAll(CORE);await Promise.all(OPTIONAL.map(u=>c.add(u).catch(()=>{})));self.skipWaiting()}))});
self.addEventListener("message",e=>{if(e.data==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET")return;
  if(new URL(r.url).origin!==self.location.origin)return;
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{
    if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res;
  }).catch(()=>r.mode==="navigate"?caches.match("./index.html"):Response.error())));
});
