import{K as S,r as d,c as u,y as c,o as g,a as s,q as C,L as r,M as i,x as E,t as b,N as M}from"./DozNpUxQ.js";const T={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},j={class:"bg-white p-6 rounded-lg max-w-md w-full mx-4"},q={key:0,class:"mt-1 text-sm text-red-500"},B=["disabled"],U={__name:"ContactForm",props:{isOpen:Boolean},emits:["close"],setup(p,{emit:f}){const x=f,t=S({name:"",email:"",message:""}),l=d(""),n=d(!1),y=M(),v=a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a),m=()=>{x("close"),t.name="",t.email="",t.message="",l.value=""},k=async()=>{if(l.value="",!v(t.email)){l.value="Please enter a valid email address";return}n.value=!0;try{const a=y.public.apiBase+"/api/send-email";console.log("Sending request to:",a);const e=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.name,email:t.email,message:t.message})});if(!e.ok){const w=await e.text();throw console.error("Server response:",w),new Error(`HTTP error! status: ${e.status}`)}const o=await e.json();console.log("Success:",o),alert("Message sent successfully!"),m()}catch(a){console.error("Error sending message:",a),alert("Failed to send message. Please try again.")}finally{n.value=!1}};return(a,e)=>p.isOpen?(g(),u("div",T,[s("div",j,[s("div",{class:"flex justify-between items-center mb-6"},[e[3]||(e[3]=s("h3",{class:"text-xl font-semibold"},"Contact Us",-1)),s("button",{onClick:m,class:"text-gray-500 hover:text-gray-700 text-2xl leading-none"}," × ")]),s("form",{onSubmit:C(k,["prevent"]),class:"space-y-4"},[s("div",null,[e[4]||(e[4]=s("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Name",-1)),r(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.name=o),type:"text",required:"",class:"w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"},null,512),[[i,t.name]])]),s("div",null,[e[5]||(e[5]=s("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Email",-1)),r(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.email=o),type:"email",required:"",class:E(["w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black",l.value?"border-red-500":"border-gray-300"])},null,2),[[i,t.email]]),l.value?(g(),u("p",q,b(l.value),1)):c("",!0)]),s("div",null,[e[6]||(e[6]=s("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Message",-1)),r(s("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.message=o),required:"",rows:"4",class:"w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"},null,512),[[i,t.message]])]),s("button",{type:"submit",disabled:n.value,class:"w-full bg-black text-white py-2 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-400"},b(n.value?"Sending...":"Send Message"),9,B)],32)])])):c("",!0)}};export{U as _};
