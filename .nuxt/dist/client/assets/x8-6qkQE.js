import{P as S,r as c,c as n,h as i,o as u,a as t,k as h,C as g,Q as f,n as C,t as p}from"./Di-yUFgx.js";const E={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},T={class:"bg-white p-6 rounded-lg max-w-md w-full mx-4"},P={key:0,class:"mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"},V={key:1,class:"mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"},B={key:0,class:"mt-1 text-sm text-red-500"},M=["disabled"],O={__name:"ContactForm",props:{isOpen:Boolean},emits:["close"],setup(y,{emit:v}){const b=v,s=S({name:"",email:"",message:""}),r=c(""),d=c(!1),l=c(!1),m=c(!1),x=a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a),k=()=>{if(l.value){b("close"),l.value=!1;return}b("close"),s.name="",s.email="",s.message="",r.value="",l.value=!1,m.value=!1},w=async()=>{if(r.value="",!x(s.email)){r.value="Please enter a valid email address";return}d.value=!0;try{const a=await fetch("https://formspree.io/f/mwplnlgo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s.name,email:s.email,message:s.message})});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);l.value=!0,s.name="",s.email="",s.message="",setTimeout(()=>{l.value=!1,b("close")},3e3)}catch(a){console.error("Error sending message:",a),m.value=!0,setTimeout(()=>{m.value=!1},3e3)}finally{d.value=!1}};return(a,e)=>y.isOpen?(u(),n("div",E,[t("div",T,[t("div",{class:"flex justify-between items-center mb-6"},[e[3]||(e[3]=t("h3",{class:"text-xl font-semibold"},"Contact Us",-1)),t("button",{onClick:k,class:"text-gray-500 hover:text-gray-700 text-2xl leading-none"}," × ")]),l.value?(u(),n("div",P,e[4]||(e[4]=[t("p",null,"Your message has been sent successfully!",-1)]))):i("",!0),m.value?(u(),n("div",V,e[5]||(e[5]=[t("p",null,"An error occurred while sending your message. Please try again later.",-1)]))):i("",!0),l.value?i("",!0):(u(),n("form",{key:2,onSubmit:h(w,["prevent"]),class:"space-y-4"},[t("div",null,[e[6]||(e[6]=t("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Name",-1)),g(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.name=o),type:"text",required:"",class:"w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"},null,512),[[f,s.name]])]),t("div",null,[e[7]||(e[7]=t("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Email",-1)),g(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.email=o),type:"email",required:"",class:C(["w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black",r.value?"border-red-500":"border-gray-300"])},null,2),[[f,s.email]]),r.value?(u(),n("p",B,p(r.value),1)):i("",!0)]),t("div",null,[e[8]||(e[8]=t("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Message",-1)),g(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.message=o),required:"",rows:"4",class:"w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"},null,512),[[f,s.message]])]),t("button",{type:"submit",disabled:d.value,class:"w-full bg-black text-white py-2 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-400"},p(d.value?"Sending...":"Send Message"),9,M)],32))])])):i("",!0)}};export{O as _};
