if(!self.define){let e,n={};const i=(i,l)=>(i=new URL(i+".js",l).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let s={};const u=e=>i(e,o),t={module:{uri:o},exports:s,require:u};n[o]=Promise.all(l.map((e=>t[e]||u(e)))).then((e=>(r(...e),s)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"21128abe988b2287f8e0.png",revision:null},{url:"3da69e23a827f846b006.png",revision:null},{url:"50c2599409280572a2fb.obj",revision:null},{url:"6fae375da26d29f18540.png",revision:null},{url:"852ac608fbf3c9e19ace.png",revision:null},{url:"d3bafdf9235603b6d7f2.png",revision:null},{url:"df7f29f9530be73010ca.png",revision:null},{url:"index.html",revision:"8279421dbe749ee5785070da1986d3e5"}],{})}));
