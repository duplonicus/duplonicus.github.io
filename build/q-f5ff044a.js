import{c as d,u as o,_ as a,Y as l,O as u,X as n,b as h,a as c,K as _}from"./q-a3b7a4d8.js";import{K as z}from"./q-a3b7a4d8.js";import{g as b}from"./q-9989d6d4.js";const v=()=>{d(o(()=>a(()=>Promise.resolve().then(()=>s),void 0),"s_XbtQEU37bJE"));const r=b(),e=l({count:0,number:20});return u(o(()=>a(()=>Promise.resolve().then(()=>s),void 0),"s_gaaiPz3DGjY",[e])),n(h,{children:[n("br",{}),n("input",{type:"range",value:e.number,max:45,onInput$:o(()=>a(()=>Promise.resolve().then(()=>s),void 0),"s_atvs0ehYM00",[e])}),n("div",{style:{"--state":`${e.count*.1}`},class:{host:!0,pride:r.query.pride==="true"},children:Array.from({length:e.number},(i,t)=>n("div",{class:{square:!0,odd:t%2===0},style:{"--index":`${t+1}`}},t)).reverse()})]})},p=({cleanup:r})=>{const[e]=c(),i=setTimeout(()=>e.count=1,500);r(()=>clearTimeout(i));const t=setInterval(()=>e.count++,7e3);r(()=>clearInterval(t))},m=`.host{display:grid;align-items:center;justify-content:center;justify-items:center;--rotation: 135deg;--rotation: 225deg;--size-step: 10px;--odd-color-step: 5;--even-color-step: 5;--center: 12;width:100%;height:500px;contain:strict}input{width:100%}.square{--size: calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);transform:rotate(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transition-property:transform,border-color;transition-duration:5s;transition-timing-function:ease-in-out;grid-area:1 / 1;background:white;border-width:2px;border-style:solid;border-color:#000;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd{--luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));background:rgb(calc(172 * var(--luminance)),calc(127 * var(--luminance)),calc(244 * var(--luminance)))}.pride .square:nth-child(12n + 1){background:#e70000}.pride .square:nth-child(12n + 3){background:#ff8c00}.pride .square:nth-child(12n + 5){background:#ffef00}.pride .square:nth-child(12n + 7){background:#00811f}.pride .square:nth-child(12n + 9){background:#0044ff}.pride .square:nth-child(12n + 11){background:#760089}
`,g=m,f=r=>{const[e]=c();e.number=r.target.valueAsNumber},s=Object.freeze(Object.defineProperty({__proto__:null,s_Sx5YznQkrwI:v,s_gaaiPz3DGjY:p,s_XbtQEU37bJE:g,s_atvs0ehYM00:f,_hW:_},Symbol.toStringTag,{value:"Module"}));export{z as _hW,v as s_Sx5YznQkrwI,g as s_XbtQEU37bJE,f as s_atvs0ehYM00,p as s_gaaiPz3DGjY};
