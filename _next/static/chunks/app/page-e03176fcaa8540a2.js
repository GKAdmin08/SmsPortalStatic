(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9306:function(e,t,s){Promise.resolve().then(s.bind(s,1641))},1641:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var a=s(7437),n=s(2265),r=s(6648);let l={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:"400px",margin:"auto",padding:"20px",border:"1px solid #ccc",borderRadius:"8px",backgroundColor:"#fff"};var i=e=>{let{onLogin:t}=e,[s,r]=(0,n.useState)(""),[i,d]=(0,n.useState)(""),[c,u]=(0,n.useState)("");return(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),JSON.parse('[{"username":"mirza","password":"SKG2024skg!"},{"username":"alexum","password":"AX2024ax!"}]').some(e=>e.username===s&&e.password===i)?t(!0):u("Ogiltiga inloggningsuppgifter")},style:l,children:[(0,a.jsx)("h2",{children:"Logga in"}),c&&(0,a.jsx)("p",{style:{color:"red"},children:c}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Anv\xe4ndarnamn:"}),(0,a.jsx)("input",{type:"text",value:s,onChange:e=>r(e.target.value),required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"L\xf6senord:"}),(0,a.jsx)("input",{type:"password",value:i,onChange:e=>d(e.target.value),required:!0})]}),(0,a.jsx)("button",{type:"submit",children:"Logga in"})]})},d=s(8472);let c=d.Z.create({baseURL:"https://sms.alxm.se",auth:{username:"t0w-dIll135-f0rG0n3-duAn",password:"Juy%jjSbu#SJXvs^gcYVs7a3k#HhKK9G#%b&7kfHV2czWuFRMrBwtNMkh5gJ"}});var u=()=>{let[e,t]=(0,n.useState)(""),[s,r]=(0,n.useState)(""),[l,i]=(0,n.useState)(""),[d,u]=(0,n.useState)(null),[o,h]=(0,n.useState)(null),x=async t=>{if(t.preventDefault(),h(null),u(null),!/^[a-zA-Z]{1,10}$/.test(e)){h("Avs\xe4ndarnamn m\xe5ste bara vara engelska bokst\xe4ver och upp till 10 tecken.");return}try{let t=p(s);await c.post("/send-sms",{from:e,to:t,message:l}),u("SMS skickades framg\xe5ngsrikt!")}catch(e){h("Fel vid skickning av SMS: ".concat(e.response?e.response.data:e.message))}},p=e=>{let t=e.replace(/\D/g,"");return t.startsWith("0")?"+46".concat(t.slice(1)):t.startsWith("+")?t:"+46".concat(t)};return(0,a.jsxs)("form",{onSubmit:x,children:[(0,a.jsx)("h2",{children:"Skicka enstaka SMS"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Fr\xe5n:"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Till:"}),(0,a.jsx)("input",{type:"text",value:s,onChange:e=>r(e.target.value),required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["Meddelande (",l.length,"/",160,"):"]}),(0,a.jsx)("textarea",{value:l,onChange:e=>i(e.target.value),maxLength:160,required:!0})]}),(0,a.jsx)("button",{type:"submit",children:"Skicka SMS"}),d&&(0,a.jsx)("p",{style:{color:"green"},children:d}),o&&(0,a.jsx)("p",{style:{color:"red"},children:o})]})},o=()=>{let[e,t]=(0,n.useState)(""),[s,r]=(0,n.useState)(""),[l,i]=(0,n.useState)(null),[d,u]=(0,n.useState)(null),[o,h]=(0,n.useState)(null),x=async t=>{if(t.preventDefault(),h(null),u(null),!/^[a-zA-Z]{1,10}$/.test(e)){h("Avs\xe4ndarnamn m\xe5ste bara vara engelska bokst\xe4ver och upp till 10 tecken.");return}let a=new FormData;a.append("file",l),a.append("from",e),a.append("message",s);try{await c.post("/upload-excel",a,{headers:{"Content-Type":"multipart/form-data"}}),u("Excel-fil bearbetades framg\xe5ngsrikt!")}catch(e){h("Fel vid uppladdning av fil: ".concat(e.response?e.response.data:e.message))}};return(0,a.jsxs)("form",{onSubmit:x,children:[(0,a.jsx)("h2",{children:"Ladda upp Excel-fil"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Fr\xe5n:"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["Meddelande (",s.length,"/",160,"):"]}),(0,a.jsx)("textarea",{value:s,onChange:e=>r(e.target.value),maxLength:160,required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Excel-fil:"}),(0,a.jsx)("input",{type:"file",onChange:e=>{i(e.target.files[0])},required:!0})]}),(0,a.jsx)("button",{type:"submit",children:"Ladda upp och skicka SMS"}),d&&(0,a.jsx)("p",{style:{color:"green"},children:d}),o&&(0,a.jsx)("p",{style:{color:"red"},children:o}),(0,a.jsx)("p",{style:{color:"#0C2C49"},children:'Programmet fungerar b\xe4ttre om numren \xe4r formaterade som "+46761010101" och Excel-filen ska ha en kolumn med namnet "Mobil" och numret ska vara under den kolumnen.'})]})};let h={display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"};var x=()=>{let[e,t]=(0,n.useState)(""),[s,r]=(0,n.useState)(""),[l,i]=(0,n.useState)(""),[d,u]=(0,n.useState)([]),[o,x]=(0,n.useState)(0),[p,j]=(0,n.useState)(1),[g,m]=(0,n.useState)(1),[v,S]=(0,n.useState)(null);(0,n.useEffect)(()=>{let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),s=new Date(e.getFullYear(),e.getMonth()+1,0);r(t.toISOString().split("T")[0]),i(s.toISOString().split("T")[0])},[]);let b=async e=>{e.preventDefault(),S(null),j(1),k(1)},f=async()=>{p<g&&(await k(p+1),j(p+1))},y=async()=>{p>1&&(await k(p-1),j(p-1))},k=async t=>{try{let a=await c.get("/search-logs",{params:{from:e,startDate:s,endDate:l,page:t,limit:50}});u(a.data.logs),x(a.data.totalResults),m(a.data.totalPages)}catch(e){S("Error fetching logs: ".concat(e.response?e.response.data.message:e.message))}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"S\xf6k loggar"}),(0,a.jsxs)("form",{onSubmit:b,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Fr\xe5n:"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Startdatum:"}),(0,a.jsx)("input",{type:"date",value:s,onChange:e=>r(e.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Slutdatum:"}),(0,a.jsx)("input",{type:"date",value:l,onChange:e=>i(e.target.value)})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("button",{type:"submit",children:"S\xf6k"}),o>0&&(0,a.jsxs)("p",{style:{marginLeft:"10px"},children:["Totalt antal resultat: ",o]})]})]}),v&&(0,a.jsx)("p",{style:{color:"red"},children:v}),(0,a.jsx)("div",{className:"table-container",children:d.length>0&&(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Fr\xe5n"}),(0,a.jsx)("th",{children:"Till"}),(0,a.jsx)("th",{children:"Meddelande"}),(0,a.jsx)("th",{children:"Status"}),(0,a.jsx)("th",{children:"Skapad"})]})}),(0,a.jsx)("tbody",{children:d.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.from}),(0,a.jsx)("td",{children:e.to}),(0,a.jsx)("td",{children:e.message}),(0,a.jsx)("td",{children:e.status}),(0,a.jsx)("td",{children:new Date(e.created).toLocaleString()})]},e.smsId))})]})}),(0,a.jsxs)("div",{style:h,children:[(0,a.jsx)("button",{onClick:y,disabled:1===p,children:"F\xf6reg\xe5ende"}),(0,a.jsxs)("span",{children:["Sida ",p," av ",g]}),(0,a.jsx)("button",{onClick:f,disabled:p===g,children:"N\xe4sta"})]})]})},p=s(357);let j=d.Z.create({baseURL:p.env.NEXT_PUBLIC_LINK_SHORTENER_API_BASE_URL,auth:{username:p.env.NEXT_PUBLIC_LINK_SHORTENER_API_USER,password:p.env.NEXT_PUBLIC_LINK_SHORTENER_API_PASS},withCredentials:!0});var g=()=>{let[e,t]=(0,n.useState)(""),[s,r]=(0,n.useState)(""),[l,i]=(0,n.useState)(""),[d,c]=(0,n.useState)(null),u=async t=>{t.preventDefault(),c(null),i("");try{let t=await j.post("/create",{url:e,customShort:s});i(t.data.shortUrl)}catch(e){c("Error creating short link: ".concat(e.response?e.response.data.message:e.message))}};return(0,a.jsxs)("form",{onSubmit:u,children:[(0,a.jsx)("h2",{children:"Shorten Link"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"URL:"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Custom Short (optional):"}),(0,a.jsx)("input",{type:"text",value:s,onChange:e=>r(e.target.value)})]}),(0,a.jsx)("button",{type:"submit",children:"Shorten"}),l&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["Short URL: ",(0,a.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:l})]}),(0,a.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(l)},children:"Copy URL"})]}),d&&(0,a.jsx)("p",{style:{color:"red"},children:d})]})},m=()=>{let[e,t]=(0,n.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)(r.default,{src:"/alexumbannerlogo.png",alt:"ALEXUM SMS Company Logo",width:250,height:30})}),(0,a.jsx)("div",{className:e?"container":"centered",children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"form-container",children:[(0,a.jsx)("h1",{children:"SMS API Interface"}),(0,a.jsx)(g,{}),(0,a.jsx)("div",{className:"divider"}),(0,a.jsx)(o,{}),(0,a.jsx)("div",{className:"divider"}),(0,a.jsx)(u,{})]}),(0,a.jsx)("div",{className:"logs-container",children:(0,a.jsx)(x,{})})]}):(0,a.jsx)("div",{className:"form-container",children:(0,a.jsx)(i,{onLogin:t})})})]})}}},function(e){e.O(0,[539,971,23,744],function(){return e(e.s=9306)}),_N_E=e.O()}]);