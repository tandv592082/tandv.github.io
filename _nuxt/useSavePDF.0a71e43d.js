import{J as g,V as d,W as f,D as v,N as h,L as P}from"./entry.ab6df25e.js";const w=()=>{const{locale:e}=g();return{switchLanguage:a=>{e.value=a,d.save(f,e.value)}}},D={margin:[25,0,25,0],image:{type:"jpeg",quality:1},html2canvas:{useCORS:!0,allowTaint:!0},jsPDF:{unit:"pt",format:"a4",orientation:"portrait",compressPDF:!0}},y=e=>({...D,filename:e==="vi"?"DUONG_VAN_TAN_CV_vi.pdf":"TAN_DUONG_VAN_CV_en.pdf"}),_={vi:[28],en:[29]},F=e=>{const s=document.createElement("div");s.className="html2pdf__page-break",e.before(s)},L=()=>(window==null?void 0:window.document)&&window.document.querySelectorAll(".html2pdf__page-break").forEach(e=>e.remove()),N=e=>{const s=_[`${e}`];console.log(s),document.querySelectorAll("p").forEach((l,r)=>s.includes(r)&&F(l))},i=e=>new Promise(s=>setTimeout(s,e)),c=v(!1),o=v(null),k=()=>{const{$savePDF:e}=h(),{locale:s,t:a}=g(),{currentTheme:l,setTheme:r}=P(),{switchLanguage:m}=w();return{isLoading:c,message:o,downloadPdfCV:async t=>{try{c.value=!0;const n=l.value,u=s.value;N(t),n==="dark"&&(o.value=a("system.messages.savePDF.changeThemeLight"),r("light"),await i(500)),s.value!==t&&(o.value=a(`system.messages.savePDF.changeLang-${t}`),m(t),await i(500));const p=y(t);await e().set(p).save(),n==="dark"&&(o.value=a("system.messages.savePDF.changeThemeDark"),r(n)),u!==s.value&&(o.value=a(`system.messages.savePDF.changeLang-${u}`),m(u),L()),o.value=null,c.value=!1}catch(n){console.log(n),o.value=`${a("system.messages.savePDF.error")}: ${a("system.messages.savePDF.errorMsg")}`}finally{c.value=!1}},isErrorMsg:()=>{var t;return(t=o.value)==null?void 0:t.includes(a("system.messages.savePDF.error"))}}};export{w as a,k as u};
