import{t as y,_ as f}from"./timestamp.7d9daba8.js";import{_ as v}from"./nuxt-link.294b6717.js";import{_ as d,o,c as n,a as e,t as l,b as r,w as x,F as p,p as $,e as g,d as k,q as S,s as b}from"./entry.3fdb70b2.js";const w={props:["id"],data(){return{story:null}},mounted(){console.log("hello"),console.log(this.id),fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(t=>t.json()).then(t=>this.story=t)},computed:{time(){const t=/ GMT\+0800 \(China Standard Time\)$/;return y.toDate(this.story.time).toString().replace(t,"")}}},u=t=>($("data-v-a041e273"),t=t(),g(),t),N={key:0},I={class:"title"},j=["href"],C={class:"details"},D=u(()=>e("p",null,[e("span",{style:{"text-decoration":"underline",color:"burlywood",top:"-2px"}},"Comments"),k("     313 Points")],-1)),V={key:1},B=u(()=>e("h1",null,"loading...",-1)),T=[B],A=u(()=>e("br",null,null,-1));function F(t,h,i,m,s,c){const _=v;return o(),n(p,null,[s.story?(o(),n("div",N,[e("div",I,[e("a",{href:s.story.url},l(s.story.title),9,j)]),e("div",C,[r(_,{style:{"text-decoration":"none"},to:`/${i.id}`},{default:x(()=>[D]),_:1},8,["to"]),e("p",null,[e("span",null,l(s.story.by)+"     ",1),e("span",null,l(c.time),1)])])])):(o(),n("div",V,T)),A],64)}const L=d(w,[["render",F],["__scopeId","data-v-a041e273"]]);const q={props:["stories"],data(){return{displaystories:null}},mounted(){this.displaystories=this.stories.slice(0,10)}},E={class:"grid-container"},G={class:"all-story"};function M(t,h,i,m,s,c){const _=L;return o(),n("div",null,[e("div",E,[(o(!0),n(p,null,S(s.displaystories,a=>(o(),n("div",G,[r(_,{id:a},null,8,["id"])]))),256))])])}const P=d(q,[["render",M],["__scopeId","data-v-ab2fea3d"]]);const z={data(){return{data:null}},mounted(){fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(t=>t.json()).then(t=>this.data=t)}},H=e("link",{rel:"preconnect",href:"https://rsms.me/"},null,-1),J=e("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"},null,-1),K={key:0};function O(t,h,i,m,s,c){const _=f,a=P;return o(),n(p,null,[H,J,r(_),s.data?(o(),n("div",K,[r(a,{stories:s.data},null,8,["stories"])])):b("",!0)],64)}const W=d(z,[["render",O]]);export{W as default};
