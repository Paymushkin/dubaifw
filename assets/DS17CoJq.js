import{c as d,o as m,a as e,l as h,t as o,n as v,b as i,h as b,u as a}from"./D1WeJDO0.js";import{M as g}from"./C_ildpVf.js";import{_ as x,a as y,b as _,c as w,E as S,s as r}from"./DwQaxaMc.js";import{m as k}from"./BkXslQ79.js";import{_ as D}from"./BH8aMKak.js";import"./DdIhG1Wz.js";import"./JNKvrX9B.js";const E={class:"lg:w-1/2"},$={class:"text-3xl lg:text-4xl mb-6"},B={class:"text-gray-700 mb-4"},T={key:0,class:"mb-7"},F={class:"text-[#D3D4D7]"},I={class:"bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition-opacity"},N={class:"lg:w-1/2"},W=["src","alt"],l={__name:"StationSection",props:{title:{type:String,required:!0},description:{type:String,required:!0},buttonText:{type:String,default:"Order >"},imageSrc:{type:String,required:!0},isReversed:{type:Boolean,default:!1},price:{type:[String,Number],default:"1000"}},setup(t){return(s,u)=>(m(),d("div",{class:v(["flex flex-col gap-10 py-10",t.isReversed?"lg:flex-row-reverse":"lg:flex-row","items-center justify-between"])},[e("div",E,[e("h2",$,o(t.title),1),e("p",B,o(t.description),1),t.price?(m(),d("div",T,[e("span",F,o(String(t.price))+"$",1)])):h("",!0),e("button",I,o(t.buttonText),1)]),e("div",N,[e("img",{src:t.imageSrc,alt:t.title,class:"w-full rounded-lg"},null,8,W)])],2))}},q={class:"pt-10"},A={class:"container"},O={class:"container"},V={id:"stations",class:"xl:px-4 xl:py-20 py-10"},z={class:"flex flex-col xl:gap-32 divide-y-2 divide-[#EFF5F6]"},J={__name:"station",setup(t){const s={...S.bigSponsorStation},u=[r,r,r,r],c=["Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities.","Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities.","Our AI-powered business stations transform networking and lead generation, offering an interactive, digital-first experience. With your presentations, real-time engagement tools, and seamless integration, businesses can showcase services, connect with the fashion audience, and maximize event impact. Designed for efficiency, these stations replace traditional booths with a smarter, more streamlined approach to engagement, ensuring every connection leads to meaningful business opportunities."],f=p=>{const n=document.getElementById(p);n&&n.scrollIntoView({behavior:"smooth",block:"start"})};return(p,n)=>(m(),d("div",q,[i(D,{title:"Business Stations - Emirates Fashion Week Dubai 2025",description:"Explore our AI-powered business stations at Emirates Fashion Week Dubai 2025. Transform your networking and lead generation with interactive, digital-first experiences.",keywords:"Business Stations Dubai, Fashion Week Networking, AI Business Solutions, Fashion Industry Technology, Business Opportunities Dubai, Digital Fashion Events"}),e("div",A,[i(x,{title:s.title,description:s.description,"button-text":s.buttonText,images:s.images,link:"#stations",isStationPage:!0,onClick:n[0]||(n[0]=b(C=>f("stations"),["prevent"]))},null,8,["title","description","button-text","images"])]),i(g,{content:u}),e("div",O,[e("div",V,[e("div",z,[i(l,{title:"Station 1",description:c[0],"image-src":a(y),"is-reversed":!1,price:500},null,8,["description","image-src"]),i(l,{title:"Station 2",description:c[1],"image-src":a(_),"is-reversed":!0,price:1e3},null,8,["description","image-src"]),i(l,{title:"Station 3",description:c[2],"image-src":a(w),"is-reversed":!1,price:2e3},null,8,["description","image-src"])])])]),i(g,{content:a(k)},null,8,["content"])]))}};export{J as default};
