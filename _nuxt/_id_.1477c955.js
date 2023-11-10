import{t as a,_ as I}from"./timestamp.9523f012.js";import{_ as p,o as s,c as o,a as e,t as l,n as S,v as M,F as h,p as $,e as g,q as b,b as m,s as C,u as R,r as y,x as j,y as c}from"./entry.7e0c84ba.js";import"./nuxt-link.f84f6fb1.js";const L={props:["time"],data(){return{abs_time:null,relative_time:null}},mounted(){const t=/ GMT\+0800 \(China Standard Time\)$/;this.abs_time=a.toDate(this.time).toString().replace(t,"")},computed:{relative_time(){var t={hour:Math.round((parseInt(a.now())-parseInt(this.time))/3600),min:(parseInt(a.now())-parseInt(this.time))%60};return`${t.hour} hours ago`}}};function D(t,_,i,d,n,r){return s(),o("div",null,[e("span",null,l(n.abs_time),1),S(e("span",null,"          "+l(r.relative_time),513),[[M,!0]])])}const H=p(L,[["render",D]]);const N={props:["id"],data(){return{reply:null,author:null,time:null}},mounted(){fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(t=>t.json()).then(t=>{this.reply=t.text,this.author=t.by,this.time=t.time}).catch(t=>console.log(t))},computed:{postTime(){const t=/ GMT\+0800 \(China Standard Time\)$/;return a.toDate(this.time).toString().replace(t,"")}}},k=t=>($("data-v-fa77065d"),t=t(),g(),t),B={key:0},G=["innerHTML"],V={id:"author"},F={key:1},q=k(()=>e("div",null,"loading",-1)),E=[q],U=k(()=>e("br",null,null,-1));function z(t,_,i,d,n,r){return s(),o(h,null,[n.reply?(s(),o("div",B,[e("div",{class:"replay",innerHTML:n.reply},null,8,G),e("div",V," by "+l(n.author)+"         "+l(r.postTime),1)])):(s(),o("div",F,E)),U],64)}const A=p(N,[["render",z],["__scopeId","data-v-fa77065d"]]);const J={props:["id"],data(){return{comment:null,kids:[],showReply:!0,time:null,user:null}},methods:{toggle(){this.showReply=!this.showReply,console.log(this.showReply)}},computed:{showTime(){return{hour:(parseInt(a.now())-parseInt(this.time))/3600,min:(parseInt(a.now())-parseInt(this.time))%60}},postTime(){const t=/ GMT\+0800 \(China Standard Time\)$/;return a.toDate(this.time).toString().replace(t,"")}},mounted(){fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then(t=>t.json()).then(t=>{this.kids=t.kids||[],this.comment=t.text,this.time=t.time,this.user=t.by}).catch(t=>console.log(t))}},v=t=>($("data-v-d16836bd"),t=t(),g(),t),K=v(()=>e("link",{rel:"preconnect",href:"https://rsms.me/"},null,-1)),O=v(()=>e("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"},null,-1)),P={class:"comment"},Q={id:"comment-root"},W=["innerHTML"],X=["hidden"],Y=v(()=>e("br",null,null,-1)),Z=v(()=>e("br",null,null,-1)),tt={key:0,class:"grid-container"},et={class:"no-number"};function nt(t,_,i,d,n,r){const f=A;return s(),o(h,null,[K,O,e("div",P,[e("div",Q,[e("div",{class:"comment-html",innerHTML:n.comment},null,8,W),e("div",null,l(Math.round(r.showTime.hour))+" hours "+l(r.showTime.min.toString().slice(0,2))+" mins ago ",1),e("button",{onClick:_[0]||(_[0]=(...u)=>r.toggle&&r.toggle(...u)),hidden:!n.kids.length},"show "+l(n.kids.length)+" replies",9,X),Y,Z,n.showReply?(s(),o("ol",tt,[(s(!0),o(h,null,b(n.kids,u=>(s(),o("li",et,[m(f,{id:u},null,8,["id"])]))),256))])):C("",!0)])])],64)}const st=p(J,[["render",nt],["__scopeId","data-v-d16836bd"]]);const w=t=>($("data-v-da7faf43"),t=t(),g(),t),ot=w(()=>e("base",{href:"."},null,-1)),it={key:0,id:"Comments-root"},rt=["href"],lt={id:"time ",class:"container"},_t=["href"],ct=w(()=>e("br",null,null,-1)),at={key:1},dt=w(()=>e("h1",null,"loading...",-1)),ut=[dt],ht={__name:"[id]",setup(t){const _=R();console.log(_.params.id);const i=y(null),d=y(null);return y(null),j(()=>{fetch(`https://hacker-news.firebaseio.com/v0/item/${_.params.id}.json?print=pretty`).then(n=>n.json()).then(n=>(i.value=n,null)).then(n=>{var r=new URL(i.value.url);d.value=r.hostname,console.log("succ")})}),(n,r)=>{const f=I,u=H,T=st;return s(),o(h,null,[ot,m(f),c(i)?(s(),o("div",it,[e("a",{class:"title",href:c(i).url},[e("h3",null,l(c(i).title),1)],8,rt),e("div",lt,[e("a",{href:c(i).url,class:"domain"},"www."+l(c(d)),9,_t)]),m(u,{id:"source-time",time:c(i).time},null,8,["time"]),(s(!0),o(h,null,b(c(i).kids,x=>(s(),o("ul",null,[e("li",null,[m(T,{id:x},null,8,["id"]),ct])]))),256))])):(s(),o("div",at,ut))],64)}}},ft=p(ht,[["__scopeId","data-v-da7faf43"]]);export{ft as default};