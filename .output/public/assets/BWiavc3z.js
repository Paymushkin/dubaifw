import{_ as C}from"./55MdzKGG.js";import{_ as E,B as S,r as y,i as W,e as I,f as O,c as l,o as c,a as n,l as F,F as h,d as f,j as P,b as v,n as m,t as x,w as b,C as A,D as T,T as j,k as g}from"./BRQMpLxL.js";const V={class:"text-xl md:text-3xl xl:text-4xl mb-8 md:mb-12"},L={class:"flex flex-col gap-4"},N=["id"],M=["onClick"],U={class:"text-base md:text-xl xl:text-2xl pr-8 text-left"},D={key:0,class:"mt-8 text-center"},k=5,H={__name:"FaqSection",props:{standalone:{type:Boolean,default:!1}},setup(d){const i=d,p=S();y(p.hash.slice(1));const r=[{id:"ai-matchmaking",question:"What is the AI matchmaking tool? How does it work?",answer:"The AI matchmaking tool is available on laptops at each exhibitor station. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. Some visitors will approach the station directly, while others will be connected via chat for online introductions and follow-ups."},{id:"visitor-passes",question:"Are visitor passes free? How many invites are out? What's the audience profile?",answer:"Visitor entry is free. We usually welcome 300–700 guests, depending on the show. For April 15, we expect 300–500 attendees throughout the day. Our audience is diverse and international, mainly beauty- and fashion-conscious individuals from mid- to high-income backgrounds. We do not track nationality at registration."},{id:"buyers",question:"Who are the 'Buyers'? What's their ratio to media, influencers, stylists, bloggers?",answer:"Buyers include individuals purchasing for themselves and for retail stores. We don't publish an exact ratio, but the crowd includes a mix of media, influencers, stylists, bloggers, and direct buyers."},{id:"no-showcase",question:"What if I don't want a showcase station but still want to engage buyers?",answer:"You can attend for free, observe how other beauty service providers present their services, and interact with the audience. Many providers offer special promotions and discounts to visitors."},{id:"example-brands",question:"What are some example brands in the business showcase corner?",answer:"Over 30 brands are confirmed — including designers from the Middle East, CIS, Eastern Europe, and local UAE talents. We also host a wide range of beauty service providers: clinics, plastic surgery, botox, fitness, cosmetology, nails, lashes, brows, hair, and styling."}],_=W(()=>i.standalone?r:r.slice(0,k)),s=y(r.reduce((e,t)=>(e[t.id]=!1,e),{})),q=e=>{const t=s.value[e];if(Object.keys(s.value).forEach(o=>{s.value[o]=!1}),t){const o=window.location.pathname;i.standalone?window.history.pushState(null,"",o):window.history.replaceState(null,"",o)}else{s.value[e]=!0;const o=`${window.location.pathname}#${e}`;i.standalone?window.history.pushState(null,"",o):window.history.replaceState(null,"",o),g(()=>{const a=document.getElementById(e);if(a){const u=i.standalone?80:100,B=a.getBoundingClientRect().top+window.pageYOffset-u;window.scrollTo({top:B,behavior:"smooth"})}})}},w=()=>{const e=window.location.hash.slice(1);Object.keys(s.value).forEach(t=>{s.value[t]=!1}),e&&r.some(t=>t.id===e)&&(s.value[e]=!0,g(()=>{const t=document.getElementById(e);if(t){const o=i.standalone?80:100,u=t.getBoundingClientRect().top+window.pageYOffset-o;window.scrollTo({top:u,behavior:"smooth"})}}))};return I(async()=>{const e=p.hash.slice(1);Object.keys(s.value).forEach(t=>{s.value[t]=!1}),e&&r.some(t=>t.id===e)?s.value[e]=!0:i.standalone||(s.value["ai-matchmaking"]=!0),i.standalone&&window.addEventListener("hashchange",w)}),O(()=>{i.standalone&&window.removeEventListener("hashchange",w)}),(e,t)=>{const o=C;return c(),l("section",{class:m(["container mx-auto px-4",{"py-20 md:py-[100px]":!d.standalone},{"py-[60px] md:py-[120px]":d.standalone}])},[n("h2",V,[d.standalone?(c(),l(h,{key:0},[f(" Frequently Asked Questions ")],64)):(c(),l(h,{key:1},[f(" FAQ ")],64))]),n("div",L,[(c(!0),l(h,null,P(_.value,a=>(c(),l("div",{key:a.id,id:a.id},[n("div",{class:"border border-black cursor-pointer",onClick:u=>q(a.id)},[n("div",{class:m(["w-full p-4 md:p-6 flex justify-between items-start hover:bg-gray-50",{"border-b border-black":s.value[a.id]}])},[n("span",U,x(a.question),1),n("span",{class:m(["text-2xl transform transition-transform duration-300 flex-shrink-0",{"rotate-45":s.value[a.id]}])},"+",2)],2),v(j,{"enter-active-class":"transition duration-500 ease-out","enter-from-class":"transform scale-y-95 -translate-y-1 opacity-0","enter-to-class":"transform scale-y-100 translate-y-0 opacity-100","leave-active-class":"transition duration-400 ease-in-out","leave-from-class":"transform scale-y-100 translate-y-0 opacity-100","leave-to-class":"transform scale-y-95 -translate-y-1 opacity-0"},{default:b(()=>[A(n("div",{class:"p-4 md:p-6 text-sm md:text-base xl:text-lg text-black-70 border-t border-black origin-top"},x(a.answer),513),[[T,s.value[a.id]]])]),_:2},1024)],8,M)],8,N))),128))]),!d.standalone&&r.length>k?(c(),l("div",D,[v(o,{to:"/faq",class:"inline-flex items-center text-base hover:text-gray-600 transition-colors"},{default:b(()=>t[0]||(t[0]=[f(" View all questions "),n("svg",{class:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])),_:1})])):F("",!0)],2)}}},z=E(H,[["__scopeId","data-v-ebf77918"]]);export{z as F};
