/* Qwik Service Worker */
const appBundles=[["q-0dad8c46.js",[17],["3sccYCDd1Z0"]],["q-0df094c7.js",[17],["mUqx2dCZJB0"]],["q-10fa4114.js",[]],["q-12ebcce9.js",[0,17],["hA9UPaY8sNQ","mYsiJcA4IBc","skxgNVWVOT8","uVE5iM9H73c"]],["q-17c7f949.js",[8,17,26],["1Y9czuiiWFg","FWyxCyR2X4M","T0Aj0No3Dvc"]],["q-1f5f1391.js",[36]],["q-214534f9.js",[17],["xYL1qOwPyDI"]],["q-23ba3b96.js",[17]],["q-25dccc47.js",[17]],["q-2e5d1878.js",[8,17,26,36],["wif2kHU0vus"]],["q-2f4cf7ba.js",[17]],["q-31940126.js",[17],["ChG2Pkgy0SA","q9pKGiJlTZQ","xnLZHKAub6k"]],["q-3313d809.js",[5,36],["r35YTGxHeL0"]],["q-334ab71d.js",[17]],["q-3baa8727.js",[17,18],["61M0FwCLuZw","7JpaGiF7pnk"]],["q-3d6eecb1.js",[17],["Jx6bRNT7000","VkLNXphUh5s"]],["q-404dc15d.js",[17]],["q-41afa2c6.js",[]],["q-43aeeab8.js",[]],["q-465b0463.js",[0,17],["ceU05TscGYE","N39ca0w8E8Y"]],["q-49346065.js",[17],["ck0sVD0QqI4","qE7WAIStPvw"]],["q-5ea8985e.js",[17]],["q-60a5e273.js",[17]],["q-6bb002cc.js",[17],["dtUB0dySFWA","XssP1h4CeIk"]],["q-701a8a2e.js",[0,17],["atvs0ehYM00","gaaiPz3DGjY","Sx5YznQkrwI","XbtQEU37bJE"]],["q-728a15a9.js",[17]],["q-790cbae0.js",[8,17]],["q-84a3f950.js",[17]],["q-a8d3b240.js",[17],["0hK8y4X1Mdg","48ZD9w3s0Fo","Nb3VDI5Ejug"]],["q-ad299db9.js",[0,17],["nVuKF7DChAY","Z0LOrbi4Nqk"]],["q-ae49e2c3.js",[0,17],["AaAlzKH0KlQ","z1nvHyEppoI"]],["q-aefcb8cd.js",[17]],["q-b0c6920a.js",[0,17],["zrbrqoaqXSY"]],["q-c0bc2dda.js",[5,36]],["q-c78fd1a8.js",[8,17],["x04JC5xeP1U","zH94hIe0Ick"]],["q-cbe59aae.js",[8,17,18,26],["lnPLxWVw0t8","WuEJZPvrMtA","YqpmyIs76mw"]],["q-d211697c.js",[]],["q-da56ac14.js",[17]],["q-e0dc4405.js",[8,17],["i4frY0Pt5lk"]],["q-e9bb1665.js",[17]],["q-eb4eb0b5.js",[17],["K6pMkbNGkJ8"]],["q-ed7bc72b.js",[17]],["q-f3f11a01.js",[0,17],["nd8yk3KO22c"]]];
const libraryBundleIds=[41];
const linkBundles=[[/^\/$/,[16,15,37,6]],[/^\/experiments\/?$/,[16,15,21,13,1,14,20,23,35,40]],[/^\/react\/?$/,[16,15,25,38]],[/^\/resume\/?$/,[16,15,10,11]],[/^\/experiments\/bender\/?$/,[16,15,21,31,28]],[/^\/experiments\/flower\/?$/,[16,15,21,22,24]],[/^\/experiments\/sd\/?$/,[16,15,21,39,4]]];
const u="QwikBuild",g=new Set,k=new Map,E=(e,n)=>n.filter(c=>!e.some(l=>c.endsWith(l[0]))),C=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},W=(e,n)=>e.some(c=>n.endsWith("/"+c[0])),q=(e,n)=>e.find(c=>c[0]===n),y=(e,n)=>n.map(c=>e[c]?e[c][0]:null),L=(e,n,c,l)=>new Promise((t,o)=>{const s=l.url,r=c.get(s);if(r)r.push([t,o]);else{const i=a=>{const h=c.get(s);if(h){c.delete(s);for(const[m]of h)m(a.clone())}else t(a.clone())},f=a=>{const h=c.get(s);if(h){c.delete(s);for(const[m,b]of h)b(a)}else o(a)};c.set(s,[[t,o]]),e.match(s).then(a=>{if(C(l,a))i(a);else return n(l).then(h=>e.put(s,h.clone()).then(()=>{i(h)}))}).catch(a=>e.match(s).then(h=>{h?i(h):f(a)}))}}),d=(e,n,c,l,t)=>{const o=s=>{try{const r=q(e,s);if(r&&!g.has(s)){g.add(s);const i=y(e,r[1]),f=new URL(s,l),a=new Request(f);L(n,c,k,a),i.forEach(o)}}catch(r){console.error(r)}};Array.isArray(t)&&t.forEach(o)},A=(e,n,c,l,t,o,s)=>{try{d(e,l,t,o,y(e,n))}catch(r){console.error(r)}for(const r of s)try{for(const i of c){const[f,a]=i;if(f.test(r)){d(e,l,t,o,y(e,a));break}}}catch(i){console.error(i)}},U=(e,n,c,l)=>{try{const t=l.href.split("/"),o=t[t.length-1];t[t.length-1]="";const s=new URL(t.join("/"));d(e,n,c,s,[o])}catch(t){console.error(t)}},B=(e,n,c,l)=>{e.addEventListener("fetch",t=>{const o=t.request;if(o.method==="GET"){const s=new URL(o.url);if(W(n,s.pathname)){const r=e.fetch.bind(e);t.respondWith(e.caches.open(u).then(i=>(U(n,i,r,s),L(i,r,k,o))))}}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const o=e.fetch.bind(e),s=await e.caches.open(u),r=new URL(t.base,e.origin);Array.isArray(t.links)&&A(n,c,l,s,fetch,r,t.links),Array.isArray(t.bundles)&&d(n,s,o,r,t.bundles)}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(u),s=(await t.keys()).map(i=>i.url),r=E(n,s);await Promise.all(r.map(i=>t.delete(i)))}catch(t){console.error(t)}})},F=()=>{typeof self<"u"&&typeof appBundles<"u"&&B(self,appBundles,libraryBundleIds,linkBundles)};F();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
