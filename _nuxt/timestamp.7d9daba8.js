import{_ as f}from"./nuxt-link.294b6717.js";import{_ as h,o as w,c as b,a as r,b as a,w as c,p as y,e as x}from"./entry.3fdb70b2.js";const g={data(){}},i=t=>(y("data-v-ee2b5da5"),t=t(),x(),t),E={id:"navbar"},D=i(()=>r("li",null,"HackerNuxt",-1)),M=i(()=>r("li",null,"New",-1)),k=i(()=>r("li",null,"Ask Hackers",-1)),S=i(()=>r("li",null,"Best",-1)),j=i(()=>r("li",null,"Show Hackers",-1));function N(t,n,o,B,I,R){const s=f;return w(),b("nav",E,[r("ul",null,[a(s,{to:"/"},{default:c(()=>[D]),_:1}),a(s,{to:"/New"},{default:c(()=>[M]),_:1}),a(s,{to:"/ask"},{default:c(()=>[k]),_:1}),a(s,{to:"/"},{default:c(()=>[S]),_:1}),a(s,{to:"show"},{default:c(()=>[j]),_:1})])])}const P=h(g,[["render",N],["__scopeId","data-v-ee2b5da5"]]);function O(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p={exports:{}};/**
 * @license
 * [BSD-3-Clause](https://github.com/pryv/unix-timestamp-js/blob/master/LICENSE)
 */const e=p.exports={};e.Millisecond=.001;e.Second=1;e.Minute=60;e.Hour=60*e.Minute;e.Day=24*e.Hour;e.Week=7*e.Day;e.Month=30.436875*e.Day;e.Year=12*e.Month;const $=new RegExp("^\\s*([-+]?)\\s*"+["y","M","w","d","h","m","s","ms"].map(function(t){return"(?:(\\d+)\\s*"+t+")?"}).join("\\s*")+"\\s*$");let u=l;function l(t){return t}function _(t){return Math.round(t)}Object.defineProperty(e,"round",{get:function(){return u===_},set:function(t){u=t?_:l}});e.now=function(t){const n=Date.now()/1e3;return u(t?e.add(n,t):n)};e.add=function(t,n){if(!d(t))throw new Error("Time must be a number");if(m(n)){const o=$.exec(n);if(!o)throw new Error("Expected offset string format: [+|-] [{years}y] [{months}M] [{weeks}w] [{days}d] [{hours}h] [{minutes}m] [{seconds}s] [{milliseconds}ms]");n=(o[1]==="-"?-1:1)*((o[2]||0)*e.Year+(o[3]||0)*e.Month+(o[4]||0)*e.Week+(o[5]||0)*e.Day+(o[6]||0)*e.Hour+(o[7]||0)*e.Minute+(o[8]||0)*e.Second+(o[9]||0)*e.Millisecond)}else if(!d(n))throw new Error("Offset must be either a string or a number");return u(t+n)};e.duration=function(t){return e.add(0,t)};e.fromDate=function(t){if(m(t))t=new Date(t);else if(!v(t))throw new Error("Expected either a string or a date");return u(t.getTime()/1e3)};e.toDate=function(t){if(!d(t))throw new Error("Expected a number");return new Date(t*1e3)};function m(t){return typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"}function d(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function v(t){return Object.prototype.toString.call(t)==="[object Date]"}var H=p.exports;const T=O(H);export{P as _,T as t};
