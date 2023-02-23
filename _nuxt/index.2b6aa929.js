import{a as u,o as s,b as l,e as t,t as i,r as h,f,h as d,F as _,i as g,j as n,u as o,w as m}from"./entry.4cf80731.js";const y={class:"w-full mb-5"},k={class:"text-xl font-semi-bold"},v=u({__name:"CVTitle",props:{title:{type:String,required:!0}},setup(r){const e=r;return(a,c)=>(s(),l("div",y,[t("p",k,i(e.title.toUpperCase()),1),h(a.$slots,"default")]))}}),b={class:"flex flex-wrap"},x=["href"],w=["href"],S=["href"],j={key:3},$=u({__name:"CVContactInfo",props:{info:{type:String,required:!0,default:""},type:{type:String,require:!1},text:{type:String,required:!1}},setup(r){const e=r;return(a,c)=>(s(),l("div",b,[e.type==="email"?(s(),l("a",{key:0,class:"flex-1",href:`mailto:${e.info}`},i(e.info),9,x)):e.type==="phone"?(s(),l("a",{key:1,class:"flex-1",href:`tel:${e.info}`},i(e.info),9,w)):e.type==="link"?(s(),l("a",{key:2,class:"flex-1",href:e.info},i(e.text||e.info),9,S)):(s(),l("p",j,i(e.info),1))]))}}),D={class:"flex flex-col items-start w-full"},N={class:"flex justify-between w-full"},T=["href"],V={key:1,class:"font-bold"},B={class:"font-semibold"},q={class:"flex justify-between w-full"},C={class:"font"},I={key:0},R={class:"mt-4"},A=t("span",{class:"font-semibold"}," Project: ",-1),P={class:"list-disc ml-8"},E=t("span",{class:"font-semibold"}," Description: ",-1),W=t("span",{class:"font-semibold"}," Technologies: ",-1),J=t("p",{class:"font-semibold"},"Responsibilities:",-1),L={class:"list-circle ml-8"},F=u({__name:"CVWorkInfo",props:{companyName:{type:String,require:!0},companyLink:{type:String,require:!1},companyAddress:{type:String,require:!0},workPosition:{type:String,require:!0},workPeriod:{type:String,require:!1},projectName:{type:String,require:!0},projectDescription:{type:String,require:!0},projectTechnologies:{type:String,require:!0},projectResponsibilities:{type:Array,require:!0}},setup(r){const e=r;return(a,c)=>(s(),l("div",D,[t("div",N,[e.companyLink?(s(),l("a",{key:0,href:e.companyLink,class:"font-bold"},i(e.companyName),9,T)):(s(),l("p",V,i(e.companyName),1)),t("p",B,i(e.companyAddress),1)]),t("div",q,[t("p",C,i(e.workPosition),1),e.workPeriod?(s(),l("p",I,i(e.workPeriod),1)):f("",!0)]),t("div",R,[t("p",null,[A,d(" "+i(e.projectName),1)]),t("ul",P,[t("li",null,[t("p",null,[E,d(" "+i(e.projectDescription),1)])]),t("li",null,[t("p",null,[W,d(" "+i(e.projectTechnologies),1)])]),t("li",null,[J,t("ul",L,[(s(!0),l(_,null,g(e.projectResponsibilities,p=>(s(),l("li",null,i(p),1))),256))])])])])]))}}),H={class:"flex"},M={key:0,class:"font-semibold"},O=u({__name:"CVSkillDetails",props:{skillTitle:{type:String,require:!1},skillDetails:{type:String,require:!0}},setup(r){const e=r;return(a,c)=>(s(),l("div",H,[e.skillTitle?(s(),l("p",M,i(`${e.skillTitle}: `),1)):f("",!0),t("p",null,i(` ${e.skillDetails}`),1)]))}}),Q=t("div",null,[t("p",{class:"text-center text-xl"},"Tan Duong Van"),t("p",{class:"text-center"},"Backend Engineer")],-1),U={class:"w-full flex justify-center"},Y={class:"w-full"},z=t("p",null,[d(" Backend Engineer with over 4 years of experience in developing and maintaining complex software applications using Java and Spring Boot. Extensive experience in deploying WebService systems for monitoring and controlling self-driving cars and drones, communicating with robot systems (ROS) through MQTT protocol, and integrating them into the WebService system. Also experienced in implementing RESTful APIs for both mobile and web. With over 1 year of experience in Frontend development using React Native, Vue.js, and optimizing WordPress sites. "),t("br"),d(" I am always dedicated and serious in my work and constantly seeking to improve my skills and knowledge through research. ")],-1),G={class:"list-disc pl-6"},ee=u({__name:"index",setup(r){const e=v,a=$,c=F,p=O;return(X,K)=>(s(),l(_,null,[Q,t("div",U,[n(o(a),{info:"Yen Thang, Y Yen, Nam Dinh",class:""}),n(o(a),{type:"email",info:"tandv.jobs@gmail.com",class:"mx-2"}),n(o(a),{type:"phone",info:"0352872240",class:"mx-2"}),n(o(a),{type:"link",text:"LinkedIn",info:"https://www.linkedin.com/in/tan-duong-van-106789126/"})]),t("div",Y,[n(o(e),{title:"Summary"},{default:m(()=>[z]),_:1}),n(o(e),{title:"Technical Skills"},{default:m(()=>[t("ul",G,[t("li",null,[n(o(p),{"skill-title":"Backend Development","skill-details":"Java, Spring Boot, Nodejs"})]),t("li",null,[n(o(p),{"skill-title":"Backend Development","skill-details":"Java, Spring Boot, Nodejs"})]),t("li",null,[n(o(p),{"skill-title":"Backend Development","skill-details":"Java, Spring Boot, Nodejs"})]),t("li",null,[n(o(p),{"skill-details":"Java, Spring Boot, Nodejs"})])])]),_:1}),n(o(e),{title:"Professional Experience"},{default:m(()=>[n(o(c),{"company-link":"https://phenikaa-x.com","company-name":"Phenikaa-X JSC","company-address":"Ha Dong, Ha Noi","work-position":"Web Application Engineer","work-period":"06/2021 - Present","project-name":"Reseach and develop control application and webservice for self-driving car and drone","project-description":"Reseach and develop control application and webservice for self-driving car and drone","project-technologies":"Spring Boot, MongoDB, Redis, Docker, Vuejs, ReactJs","project-responsibilities":[`Developed and deployed WebService system for monitoring and controlling self-driving
                    cars and drones, ensuring smooth communication between the systems and the control
                    center.`,`Implemented communication between the backend and Robot Operating System (ROS)
                    to exchange data and control signals using MQTT protocol.`,`Improved application performance by optimizing database queries and implementing
                    caching mechanisms`,`Implemented industry best practices, such as data validation and error handling, to ensure
                    the reliability and security of the applications.`]},null,8,["project-responsibilities"]),n(o(c),{"company-link":"https://khoitaodoanhnghiep.com","company-name":"FADI JSC","company-address":"Nam Dinh","work-position":"Web Application Developer","work-period":"02/2019 - 02/2021"}),n(o(c),{"company-name":"ABA Golf","company-address":"Hoang Quoc Viet, Ha Noi","work-position":"Frontend Developer","work-period":"08/2019 - 02/2019"})]),_:1}),n(o(e),{title:"Education"},{default:m(()=>[n(o(c),{"company-name":"University of Engineering and Technology, VNU","company-address":"09/2013 – 07/2018","work-position":"Bachelor of Information Technology"})]),_:1}),n(o(e),{title:"Additional Information"},{default:m(()=>[d(" Languages: Vietnamese (Native), English. ")]),_:1})])],64))}});export{ee as default};
