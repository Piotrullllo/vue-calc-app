(function(){"use strict";var t={6642:function(t,e,n){var s=n(9242),r=n(3396);function o(t,e,n,s,o,i){const u=(0,r.up)("Display"),l=(0,r.up)("Keypad");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,{displayedNumber:o.displayedNumber,toggleMemory:o.toggleMemory},null,8,["displayedNumber","toggleMemory"]),(0,r.Wm)(l,{onBtnInfo:i.btnClick},null,8,["onBtnInfo"])],64)}function i(t,e,n,o,i,u){const l=(0,r.up)("Widget");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[1]||(e[1]=(...t)=>u.onSubmit&&u.onSubmit(...t)),class:"display-form"},[(0,r.Wm)(l,{color:n.toggleMemory?"White":"#2c3e50",text:"Memory"},null,8,["color"]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>this.displayedNumber=t),type:"String",readonly:""},null,512),[[s.nr,this.displayedNumber]])],32)}var u=n(7139);function l(t,e,n,s,o,i){return(0,r.wg)(),(0,r.iD)("p",{style:(0,u.j5)({color:n.color})},(0,u.zw)(n.text),5)}var b={name:"Widget",props:{text:String,color:String}},a=n(89);const m=(0,a.Z)(b,[["render",l]]);var d=m,p={name:"Display",props:{displayedNumber:String,toggleMemory:Boolean,operand:String},components:{Widget:d},methods:{onSubmit(t){t.preventDefault()}}};const h=(0,a.Z)(p,[["render",i],["__scopeId","data-v-29b98d31"]]);var c=h;function y(t,e,n,s,o,i){const u=(0,r.up)("Button");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"big-btn",btnCode:"192",btnType:"change",text:"+/-"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"big-btn",btnCode:"54",btnType:"power",text:"x²"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"big-btn",btnCode:"55",btnType:"root",text:"√"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"medium-btn",btnCode:"53",btnType:"percent",text:"%"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"medium-btn",btnCode:"77",btnType:"memory",text:"MR"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"medium-btn",btnCode:"188",btnType:"memory",text:"M-"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"medium-btn",btnCode:"190",btnType:"memory",text:"M+"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"8",btnType:"backspace",text:"->"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"103",btnType:"number",text:"7"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"104",btnType:"number",text:"8"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"105",btnType:"number",text:"9"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"111",btnType:"operand",text:"/"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"red-btn",btnCode:"46",btnType:"C",text:"C"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"100",btnType:"number",text:"4"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"101",btnType:"number",text:"5"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"102",btnType:"number",text:"6"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"106",btnType:"operand",text:"*"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"red-btn",btnCode:"27",btnType:"AC",text:"AC"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"97",btnType:"number",text:"1"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"98",btnType:"number",text:"2"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"99",btnType:"number",text:"3"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"109",btnType:"operand",text:"-"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"96",btnType:"number",text:"0"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnType:"number",text:"00"},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"110",btnType:"point",text:"."},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"13",btnType:"equals",text:"="},null,8,["onBtnInfo"]),(0,r.Wm)(u,{onBtnInfo:i.emitBtns,btnClass:"small-btn",btnCode:"107",btnType:"operand",text:"+"},null,8,["onBtnInfo"])])}function f(t,e,n,s,o,i){return(0,r.wg)(),(0,r.iD)("button",{onClick:e[0]||(e[0]=e=>t.$emit("btnInfo",this.text,this.btnType)),class:(0,u.C_)(n.btnClass)},(0,u.zw)(n.text),3)}var N={name:"Button",props:{btnClass:String,btnCode:String,btnType:String,text:String},mounted(){window.addEventListener("keyup",(t=>{t.preventDefault(),this.btnCode==t.keyCode&&this.$emit("btnInfo",this.text,this.btnType)}))},emits:["btnInfo"]};const B=(0,a.Z)(N,[["render",f],["__scopeId","data-v-95e1c3ca"]]);var C=B,I={name:"Keypad",components:{Button:C},methods:{emitBtns(t,e){this.$emit("btnInfo",t,e)}},emits:["btnInfo"]};const v=(0,a.Z)(I,[["render",y],["__scopeId","data-v-0a96a77a"]]);var g=v,x={name:"App",components:{Display:c,Keypad:g},data(){return{currentNumber:"0",displayedNumber:"0",equalsPressed:!1,previousNumber:void 0,operand:void 0,memoryNumber:0,toggleMemory:!1}},methods:{btnClick(t,e){switch(e){case"number":"0"===this.currentNumber[0]&&"."!==this.currentNumber[1]&&(this.currentNumber=this.currentNumber.slice(0,0)),"00"==t&&""==this.currentNumber?this.currentNumber="0":this.currentNumber+=t,this.equalsPressed=!1,this.displayedNumber=this.currentNumber;break;case"backspace":this.displayedNumber.length>1?this.displayedNumber=this.displayedNumber.slice(0,-1):this.displayedNumber="0","-"===this.displayedNumber&&(this.displayedNumber="0"),this.previousNumber=void 0,this.equalsPressed=!1,this.currentNumber=this.displayedNumber;break;case"point":if("00"===this.displayedNumber&&(this.displayedNumber="0"),-1!==this.displayedNumber.indexOf(t))break;this.displayedNumber+=t,this.equalsPressed=!1,this.currentNumber=this.displayedNumber;break;case"power":let e=parseFloat(this.displayedNumber)**2;this.displayedNumber=`${e}`,this.equalsPressed=!1,this.currentNumber=this.displayedNumber;break;case"root":let n=parseFloat(this.displayedNumber)**.5;this.displayedNumber=`${n}`,this.equalsPressed=!1,this.currentNumber=this.displayedNumber;break;case"change":"-"!==this.displayedNumber[0]&&"0"!==this.displayedNumber?this.displayedNumber="-"+this.displayedNumber:"-"===this.displayedNumber[0]&&(this.displayedNumber=this.displayedNumber.slice(1)),this.equalsPressed=!1,this.currentNumber=this.displayedNumber;break;case"AC":this.memoryNumber=0,this.toggleMemory=!1;case"C":this.currentNumber="0",this.previousNumber=void 0,this.operand=void 0,this.equalsPressed=!1,this.displayedNumber=this.currentNumber;break;case"percent":this.displayedNumber=""+Number(this.displayedNumber)/100,this.equalsPressed=!1,this.currentNumber=this.displayedNumber;break;case"memory":"M+"===t&&(this.memoryNumber+=parseFloat(this.displayedNumber)),"M-"===t&&(this.memoryNumber-=parseFloat(this.displayedNumber)),"MR"===t&&(this.displayedNumber==`${this.memoryNumber}`?this.memoryNumber=0:this.displayedNumber=`${this.memoryNumber}`,this.currentNumber=this.displayedNumber),0!=this.memoryNumber?this.toggleMemory=!0:this.toggleMemory=!1,this.equalsPressed=!1,this.displayedNumber=this.currentNumber;break;case"operand":void 0===this.previousNumber?this.previousNumber=this.currentNumber:this.equalsPressed||(this.previousNumber=W(this.previousNumber,this.operand,this.currentNumber)),this.equalsPressed=!1,this.operand=t,this.currentNumber="0",this.displayedNumber=this.previousNumber;break;case"equals":this.previousNumber=W(this.previousNumber,this.operand,this.currentNumber),this.equalsPressed=!0,this.displayedNumber=this.previousNumber;break}}}};const W=(t,e,n)=>{let s;switch(e){case"+":s=parseFloat(t)+parseFloat(n);break;case"-":s=parseFloat(t)-parseFloat(n);break;case"/":"0"===n?(alert("Error: Cannot divide by zero!"),s="0"):s=parseFloat(t)/parseFloat(n);break;case"*":s=parseFloat(t)*parseFloat(n);break;case void 0:s=parseFloat(n)}return`${s}`},T=(0,a.Z)(x,[["render",o]]);var k=T;(0,s.ri)(k).mount("#app")}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,o){if(!s){var i=1/0;for(a=0;a<t.length;a++){s=t[a][0],r=t[a][1],o=t[a][2];for(var u=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(u=!1,o<i&&(i=o));if(u){t.splice(a--,1);var b=r();void 0!==b&&(e=b)}}return e}o=o||0;for(var a=t.length;a>0&&t[a-1][2]>o;a--)t[a]=t[a-1];t[a]=[s,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,i=s[0],u=s[1],l=s[2],b=0;if(i.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var a=l(n)}for(e&&e(s);b<i.length;b++)o=i[b],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(a)},s=self["webpackChunkvue_calc_app"]=self["webpackChunkvue_calc_app"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(6642)}));s=n.O(s)})();
//# sourceMappingURL=app.6e16676e.js.map