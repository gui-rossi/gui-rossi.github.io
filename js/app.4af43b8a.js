(function(){"use strict";var t={6902:function(t,e,n){var i=n(9242),s=n(3396),o=n(7139);const r={class:"square"},a={class:"title-header"},c={key:0},u={key:1},l={class:"buttons-switch"};function g(t,e,n,i,g,d){const f=(0,s.up)("ConfigsPage"),m=(0,s.up)("EventsPage");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("h1",a,(0,o.zw)("first"==this.currentPage?"Configs Page":"Events Page"),1),"first"===g.currentPage?((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(f)])):"second"===g.currentPage?((0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(m,{infos:g.eventsInfo,image:g.eventsImage},null,8,["infos","image"])])):(0,s.kq)("",!0),(0,s._)("div",l,[(0,s._)("button",{class:(0,o.C_)(["config-page-button btn",this.btnConfig]),onClick:e[0]||(e[0]=t=>d.setCurrentPage("first"))},"Configs",2),(0,s._)("button",{class:(0,o.C_)(["btn",this.btnEvent]),onClick:e[1]||(e[1]=t=>d.setCurrentPage("second"))},"Events",2)])])}const d={key:0,class:"container"},f={class:"row"},m=(0,s._)("div",{class:"light-time"},"Active light time window:",-1),h=(0,s._)("span",null,"Start Time:",-1),v=(0,s._)("span",{class:"span-2"},"End Time:",-1),p={class:"row"},T=(0,s._)("label",{for:"detectTruck"},"Detect Truck",-1),w={class:"row"},b=(0,s._)("label",{for:"detectPerson"},"Detect Person",-1),y={class:"row"},C=(0,s._)("label",{for:"soundAlarm"},"Sound Alarm on Person Detection",-1);function k(t,e,n,r,a,c){return this.configs?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",null,[(0,s._)("div",f,[m,(0,s._)("div",null,[h,(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>c.selectStartTime&&c.selectStartTime(...t))},(0,o.zw)(a.startTime),1),v,(0,s._)("button",{onClick:e[1]||(e[1]=(...t)=>c.selectEndTime&&c.selectEndTime(...t))},(0,o.zw)(a.endTime),1)])]),(0,s._)("div",p,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"detectTruck","onUpdate:modelValue":e[2]||(e[2]=t=>a.detectTruck=t)},null,512),[[i.e8,a.detectTruck]]),T]),(0,s._)("div",w,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"detectPerson","onUpdate:modelValue":e[3]||(e[3]=t=>a.detectPerson=t)},null,512),[[i.e8,a.detectPerson]]),b]),(0,s._)("div",y,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"soundAlarm","onUpdate:modelValue":e[4]||(e[4]=t=>a.soundAlarm=t)},null,512),[[i.e8,a.soundAlarm]]),C])]),(0,s._)("button",{onClick:e[5]||(e[5]=(...t)=>c.saveConfig&&c.saveConfig(...t))},"Save")])):(0,s.kq)("",!0)}var _=n(4161);const P=_.Z.create({baseURL:"http://localhost:5001/api",headers:{"Content-Type":"application/json"}});P.interceptors.request.use((t=>t),(t=>Promise.reject(t))),P.interceptors.response.use((t=>t),(t=>Promise.reject(t)));var D=P,S={data(){return{configs:null,ConfigEntity:{Id:0,ConfigLabel:"",Active:!1,StartTime:new Date,EndTime:new Date},detectTruck:!1,detectPerson:!1,soundAlarm:!1,startTime:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),endTime:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}},mounted:async function(){await this.loadData()},methods:{async loadData(){const t=await this.fetchConfigs();this.configs=t,t.forEach((t=>{"LightTime"===t.configLabel?(this.startTime=new Date(t.startTime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),this.endTime=new Date(t.endTime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})):"DetectTruck"===t.configLabel?this.detectTruck=t.active:"DetectPerson"===t.configLabel?this.detectPerson=t.active:"SoundAlarmOnPersonDetection"===t.configLabel&&(this.soundAlarm=t.active)}))},async saveConfig(){this.configs.forEach((t=>{"LightTime"===t.configLabel?(t.startTime=this.startTime,t.endTime=this.endTime):"DetectTruck"===t.configLabel?t.active=this.detectTruck:"DetectPerson"===t.configLabel?t.active=this.detectPerson:"SoundAlarmOnPersonDetection"===t.configLabel&&(t.active=this.soundAlarm)}));const t=this.parseTimeString(this.configs[0].startTime),e=this.parseTimeString(this.configs[0].endTime);this.configs[0].startTime=new Date(1900,1,1,t.hours,t.minutes),this.configs[0].endTime=new Date(1900,1,1,e.hours,e.minutes),this.configs.forEach((t=>{t.startTime=t.startTime.toString(),t.endTime=t.endTime.toString()})),await this.updateConfigs()},parseTimeString(t){const[e,n]=t.split(":").map(Number);return{hours:e,minutes:n}},async updateConfigs(){await D.put("/Config/ChangeConfig",this.configs).then((t=>{console.log(t.data)})).catch((t=>{console.error(t)}))},async fetchConfigs(){const t=await D.get("/Config/FetchConfigs").catch((t=>{console.error(t)}));return t.data},selectStartTime(){const t=window.prompt("Select Start Time (HH:mm)",this.startTime);if(t){const[e,n]=t.split(":"),i=this.isValidTime(e,n);i?this.startTime=t:window.alert("Invalid time! Please enter a valid time in the format HH:mm.")}},selectEndTime(){const t=window.prompt("Select End Time (HH:mm)",this.endTime);if(t){const[e,n]=t.split(":"),i=this.isValidTime(e,n);i?this.endTime=t:window.alert("Invalid time! Please enter a valid time in the format HH:mm.")}},isValidTime(t,e){const n=parseInt(t,10),i=parseInt(e,10);return!isNaN(n)&&!isNaN(i)&&n>=0&&n<=23&&i>=0&&i<=59}}},I=n(89);const E=(0,I.Z)(S,[["render",k]]);var L=E,q=n.p+"img/00-06-54.9189fa17.jpg";const H={key:0},A=(0,s._)("img",{src:q,alt:"Requested Image"},null,-1),O=[A],j={key:1},x={key:2},R={key:0};function V(t,e,n,i,r,a){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",null,[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>a.requestImage&&a.requestImage(...t))},"Request Image"),(0,s._)("button",{onClick:e[1]||(e[1]=(...t)=>a.requestInfo&&a.requestInfo(...t))},"Request Infos"),this.image?((0,s.wg)(),(0,s.iD)("div",H,O)):(0,s.kq)("",!0),this.infos?.gps?((0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("p",null,"GPS Coordinates: "+(0,o.zw)(this.infos.gps),1)])):(0,s.kq)("",!0),this.infos?.battery?((0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("p",null,"Battery: "+(0,o.zw)(this.infos.battery),1),(0,s._)("p",null,"Gps: "+(0,o.zw)(this.infos.gps),1)])):(0,s.kq)("",!0)]),r.eventLogHistory?.length?((0,s.wg)(),(0,s.iD)("ul",R,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.eventLogHistory,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.Id},(0,o.zw)("LogType: "+t.LogType+"Status: "+t.Status+"Value: "+t.Value+"Date: "+t.TimeStamp),1)))),128))])):(0,s.kq)("",!0)])}var z={props:{infos:{type:Array,required:!1},image:{type:String,required:!1}},mounted:async function(){await this.loadData()},data(){return{eventLogHistory:null}},methods:{async loadData(){try{const t=await D.get("/Event/GetHistory");this.eventLogHistory=t}catch(t){console.error(t)}},async requestImage(){try{await D.get("/Event/RequestImage")}catch(t){console.error(t)}},async requestInfo(){try{await D.get("/Event/RequestInfos")}catch(t){console.error(t)}}}};const N=(0,I.Z)(z,[["render",V]]);var U=N,Z=n(4900);let G=(new Z.s).withUrl("http://localhost:5001/ChatHub").build();var F={name:"App",components:{ConfigsPage:L,EventsPage:U},data(){return{currentPage:"first",pageTitle:"Configs",btnConfig:"btn-configs",btnEvent:"",eventsInfo:null,eventsImage:null}},mounted:async function(){G.on("ReceiveImage",(t=>{this.eventsImage=t})),G.on("ReceiveInfos",(t=>{this.eventsInfo=t}))},methods:{setCurrentPage(t){this.currentPage=t,"first"==t?(this.btnConfig="btn-configs",this.btnEvent=""):(this.btnEvent="btn-events",this.btnConfig="")}}};const W=(0,I.Z)(F,[["render",g]]);var B=W;(0,i.ri)(B).mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,o){if(!i){var r=1/0;for(l=0;l<t.length;l++){i=t[l][0],s=t[l][1],o=t[l][2];for(var a=!0,c=0;c<i.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(a=!1,o<r&&(r=o));if(a){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,r=i[0],a=i[1],c=i[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(c)var l=c(n)}for(e&&e(i);u<r.length;u++)o=r[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},i=self["webpackChunktcc_ui"]=self["webpackChunktcc_ui"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6902)}));i=n.O(i)})();
//# sourceMappingURL=app.4af43b8a.js.map