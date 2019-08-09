webpackJsonp([0],{"2juF":function(t,e){},NAyX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{obj:{type:Object,required:!0}},data:function(){return{}},mounted:function(){},activated:function(){},methods:{}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"title"},[t._v(t._s(t.obj.title))]),t._v(" "),a("div",{staticClass:"item"},[t._v("\n      累计支付利息\n        "),a("h6",[t._v(t._s(t.obj.totalInterest)),a("span",[t._v("元")])])]),t._v(" "),a("div",{staticClass:"item"},[t._v("\n      累计还款总额\n      "),a("h6",[t._v(t._s(t.obj.totalRepayment)),a("span",[t._v("元")])])]),t._v(" "),t.obj.everyMonth?a("div",{staticClass:"item"},[t._v("\n      每期偿还：\n      "),a("h6",[t._v(t._s(t.obj.everyMonth)),a("span",[t._v("元")])])]):t._e()])},staticRenderFns:[]};var i={components:{compareItem:a("C7Lr")(n,o,!1,function(t){a("mYl0")},"data-v-566f01c5",null).exports},data:function(){return{loan:null,year:null,month:0,monthList:12,totalTime:0,lixi:null,interest:"365",interestList:[{name:"年利率",value:365},{name:"月利率",value:30},{name:"日利率",value:1}],dedxObj:{title:"等本等息",totalInterest:0,totalRepayment:0,everyMonth:0},debxObj:{title:"等额本息",totalInterest:0,totalRepayment:0,everyMonth:0},debjObj:{title:"等额本金",totalInterest:0,totalRepayment:0}}},watch:{},mounted:function(){},methods:{compute:function(t){var e=this;this.loan&&this.totalTime&&this.lixi&&t?(setTimeout(function(){e.dbdx()},0),setTimeout(function(){e.debx()},0),setTimeout(function(){e.debj()},0)):t||(this.dedxObj={title:"等本等息",totalInterest:0,totalRepayment:0,everyMonth:0},this.debxObj={title:"等额本息",totalInterest:0,totalRepayment:0,everyMonth:0},this.debjObj={title:"等额本金",totalInterest:0,totalRepayment:0},this.loan=null,this.year=null,this.month=0,this.lixi=null)},dbdx:function(){var t=this.loan,e=this.totalTime,a=this.lixi/1200,n=t/e,o=t*e*a;this.dedxObj.totalInterest=this.formatNum(o),this.dedxObj.totalRepayment=this.formatNum(o+parseFloat(this.loan)),this.dedxObj.everyMonth=this.formatNum(n+t*a)},debx:function(){var t=parseFloat(this.loan),e=parseFloat(this.lixi)/1200,a=parseFloat(this.totalTime),n=t*e*Math.pow(1+e,a)/(Math.pow(1+e,a)-1);this.debxObj.totalInterest=this.formatNum(n*a-t),this.debxObj.totalRepayment=this.formatNum(n*a),this.debxObj.everyMonth=this.formatNum(n)},debj:function(){for(var t=0,e=this.lixi/12,a=parseFloat(this.loan),n=this.totalTime,o=a/n,i=1;i<=n;i++)t+=a*e/100,a-=o;this.debjObj.totalInterest=this.formatNum(t),this.debjObj.totalRepayment=this.formatNum(t+parseFloat(this.loan))},formatNum:function(t){return t=t.toFixed(2)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"50px"}},[a("div",{staticClass:"item"},[t._v("\n    贷款金额"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loan,expression:"loan"}],attrs:{type:"text"},domProps:{value:t.loan},on:{input:function(e){e.target.composing||(t.loan=e.target.value)}}}),a("span",[t._v("元")]),a("span",[t._v("("+t._s(t.loan/1e4)+"万)")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("\n    贷款期限"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],attrs:{type:"text"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}}),a("span",[t._v("年")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticStyle:{height:"25px",border:"1px solid #B5B8C8","font-size":"16px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.month=e.target.multiple?a:a[0]}}},t._l(t.monthList,function(e,n){return a("option",{domProps:{value:e-1}},[t._v(t._s(e-1))])}),0),a("span",[t._v("月")]),a("span",[t._v("(共"+t._s(t.totalTime=12*t.year+t.month)+"期)")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("\n    贷款利率 "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lixi,expression:"lixi"}],attrs:{type:"text"},domProps:{value:t.lixi},on:{input:function(e){e.target.composing||(t.lixi=e.target.value)}}}),a("span",[t._v("%")]),a("span",[t._v("(年利率)")])]),t._v(" "),a("div",{staticStyle:{padding:"5px 0","border-bottom":"1px dashed #ccc"}},[a("button",{on:{click:function(e){t.compute(0)}}},[t._v("重置")]),t._v(" "),a("button",{on:{click:function(e){t.compute(1)}}},[t._v("计算")]),t._v(" "),a("div",{staticClass:"clearfix"})]),t._v(" "),a("div",{staticClass:"compare"},[a("compareItem",{attrs:{obj:t.dedxObj}}),t._v(" "),a("compareItem",{attrs:{obj:t.debxObj}}),t._v(" "),a("compareItem",{attrs:{obj:t.debjObj}})],1)])},staticRenderFns:[]};var l=a("C7Lr")(i,s,!1,function(t){a("2juF")},"data-v-3b42f60e",null);e.default=l.exports},mYl0:function(t,e){}});