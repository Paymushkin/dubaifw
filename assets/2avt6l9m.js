import{_ as v,c as n,o,a as t,g as b,h as x,t as y,w as f,b as k,F as u,i as g,n as w,r as _,e as L,f as U,u as B}from"./BzxqQlnL.js";import{_ as z}from"./BQzgiHCe.js";import{_ as E}from"./CbkJ4Maf.js";const R=""+new URL("photo-1-1.1OOLMoCP.webp",import.meta.url).href,$=""+new URL("photo-1-2.MK22AT4S.webp",import.meta.url).href,C=""+new URL("photo-1-3.9z0ZBNE4.webp",import.meta.url).href,P=""+new URL("photo-2-1.DHAG0YGP.webp",import.meta.url).href,j=""+new URL("photo-2-2.BerCoi1z.webp",import.meta.url).href,T=""+new URL("photo-2-3.DmZbNXwt.webp",import.meta.url).href,W=""+new URL("photo-3-1.BX49Ce0J.webp",import.meta.url).href,M=""+new URL("photo-3-2.an515QQu.webp",import.meta.url).href,S=""+new URL("photo-3-3.BXgCFzvb.webp",import.meta.url).href,V=""+new URL("photo-4-1.sfbIK9Cg.webp",import.meta.url).href,I=""+new URL("photo-4-2.CSmUUwOW.webp",import.meta.url).href,O=""+new URL("photo-4-3.021R2wph.webp",import.meta.url).href,N=[{name:"1 pre-launch: MOB Kempinsky. Christina Zinovieva",profession:"Photographer",photos:[R,$,C],galleryUrl:"https://kriszinoveva.gallery.photo/gallery/pre-lunch-event/"},{name:"2 pre-launch: Belcanto, Dubai Opera. Alexandra Kozlova",profession:"Photographer",photos:[V,I,O],galleryUrl:"https://kriszinoveva.gallery.photo/gallery/pre-lunch-event/"},{name:"1, 2 & 3 days of EFW (Welcome Zone, SkyLight Gallery)",photos:[P,j,T],galleryUrl:"https://6803584fdefaa9-24566832.gallery.photo/gallery/emirates-fashion-week/"},{name:"Awards, SkyLight Gallery. Leo Skryabin",profession:"Photographer",photos:[W,M,S],galleryUrl:"https://leoskryabin.gallery.photo/gallery/emirates-fashion-week-x-deluxe-beauty-awards/"},{name:"TV-Lobby",profession:"Videographer",videos:["https://storage.yandexcloud.net/videos-meyou/efw2025/ETW1.mov ","https://storage.yandexcloud.net/videos-meyou/efw2025/ETW2.mov ","https://storage.yandexcloud.net/videos-meyou/efw2025/ETW3.mov "],galleryUrl:"https://disk.yandex.ru/d/th-0hjIjKyPuag/TV%20Lobby"}],A={class:"photographer-block mb-16 md:mb-24"},K={class:"mb-6 md:mb-8 flex justify-between items-center"},F={class:"text-xl md:text-2xl font-medium md:mb-2 mb-1"},G={class:"md:text-xl text-gray-600"},D={class:"hidden md:grid grid-cols-3 gap-6"},Z=["src","alt","loading"],X=["src","title"],H={class:"md:hidden -mx-5 px-5"},Q={class:"flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"},q=["src","alt"],J=["src","title"],Y={__name:"PhotographerBlock",props:{photographer:{type:Object,required:!0}},setup(e){return(c,i)=>{const d=z;return o(),n("div",A,[t("div",K,[t("div",null,[t("h3",F,y(e.photographer.name),1),t("p",G,y(e.photographer.profession),1)]),e.photographer.galleryUrl?(o(),b(d,{key:0,to:e.photographer.galleryUrl,target:"_blank",rel:"noopener noreferrer"},{default:f(()=>[k(E,{variant:"primary"},{default:f(()=>i[0]||(i[0]=[t("span",null,"View Gallery",-1),t("span",null,">",-1)])),_:1})]),_:1},8,["to"])):x("",!0)]),t("div",D,[(o(!0),n(u,null,g(e.photographer.photos||e.photographer.videos,(s,r)=>(o(),n("div",{key:r,class:w(["overflow-hidden rounded-lg",e.photographer.videos?"aspect-[16/9]":"aspect-[3/4]"])},[e.photographer.videos?(o(),n("video",{key:1,src:s,title:`Video ${r+1} by ${e.photographer.name}`,class:"w-full h-full object-cover",playsinline:"",autoplay:"",loop:"",muted:""},null,8,X)):(o(),n("img",{key:0,src:s,alt:`Photo ${r+1} by ${e.photographer.name}`,class:"w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300",loading:r===0?"eager":"lazy"},null,8,Z))],2))),128))]),t("div",H,[t("div",Q,[(o(!0),n(u,null,g(e.photographer.photos||e.photographer.videos,(s,r)=>(o(),n("div",{key:r,class:w(["flex-shrink-0 w-[85vw] max-w-[300px] overflow-hidden rounded-lg snap-center",e.photographer.videos?"aspect-[16/9]":"aspect-[3/4]"])},[e.photographer.videos?(o(),n("video",{key:1,src:s,title:`Video ${r+1} by ${e.photographer.name}`,class:"w-full h-full object-cover",playsinline:"",autoplay:"",loop:"",muted:""},null,8,J)):(o(),n("img",{key:0,src:s,alt:`Photo ${r+1} by ${e.photographer.name}`,class:"w-full h-full object-cover",loading:"lazy"},null,8,q))],2))),128)),i[1]||(i[1]=t("div",{class:"flex-shrink-0 w-5"},null,-1))])])])}}},ee=v(Y,[["__scopeId","data-v-5a7ae68b"]]),oe={class:"container mx-auto px-5 py-10 md:py-16"},te={class:"photographers-list"},p=768,re={__name:"gallery",setup(e){const c=_((window==null?void 0:window.innerWidth)<768);let i=window==null?void 0:window.innerWidth;const d=(a,l)=>a<p&&l>=p||a>=p&&l<p,s=()=>{const a=window.innerWidth;d(a,i)&&(c.value=a<p,r()),i=a},r=()=>{const a=document.getElementById("reportage");if(!a)return;a.innerHTML="";const l=document.getElementById("meyou_init");l&&l.remove();const h=document.createElement("script");h.src="https://meyou.id/public/meyou_init.js",h.id="meyou_init";const m=c.value?"UTM=smi&header&footer&tag&count=6&nobutton&size=100&noclick":"UTM=smi&header&footer&tag&count=14&nobutton&size=150&noclick";h.setAttribute("data-event",`https://meyou.id/efw2025/live?${m}`),a.appendChild(h)};return L(()=>{window.addEventListener("resize",s),r()}),U(()=>{window.removeEventListener("resize",s)}),(a,l)=>(o(),n("div",oe,[l[0]||(l[0]=t("h1",{class:"text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16"},"EFW gallery",-1)),t("div",te,[(o(!0),n(u,null,g(B(N),(h,m)=>(o(),b(ee,{key:m,photographer:h},null,8,["photographer"]))),128))])]))}},le=v(re,[["__scopeId","data-v-2886d0c5"]]);export{le as default};
