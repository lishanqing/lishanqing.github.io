webpackJsonp([1],{IrlZ:function(t,e){},fPug:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hzh-switch",style:{height:t.hei?t.hei+"rem":"0.5rem"},on:{click:function(e){t.hToggle(e,t.idx)}}},[o("div",{staticClass:"h-switch-area",style:{background:t.bc}},[o("div",{staticClass:"h-switch-ball",style:{left:t.left+"px"}})])])},staticRenderFns:[]};var i={components:{mySwitch:o("C7Lr")({props:{bool:{type:null,required:!0},idx:{type:null,required:!1},hei:{type:null,required:!1}},data:function(){return{left:1,bc:"#f3f3f3",isOpen:this.bool}},mounted:function(){this.bool&&(this.left=36,this.bc="#c33c49")},methods:{hToggle:function(t,e){this.isOpen=!this.isOpen,1==this.left?(this.left=36,this.bc="#c33c49"):(this.left=1,this.bc="#f3f3f3"),this.$emit("goToggle",this.isOpen,t,e)}}},s,!1,function(t){o("IrlZ")},"data-v-40e60d2e",null).exports},data:function(){return{ipt:"",bool:!1,isOpen:0,project:localStorage.getItem("path")||"",notes:localStorage.getItem("notes")||0,opt:"",opt2:""}},mounted:function(){var t=this,e=document.getElementById("tt");window.addEventListener("keyup",function(e){e.ctrlKey&&67==e.keyCode&&t.copyTextFun()}),window.addEventListener("paste",function(o){t.isOpen?(console.log("右边"),t.isOpen=0,t.project="",t.$refs.project.focus(),document.getElementById("sw").click()):(t.ipt="",e.focus())})},watch:{opt:function(t){var e=t.split(":")[1];e=e.replace(/'|,| /g,""),console.log(e),this.opt2=e,console.log(e.length)}},activated:function(){},methods:{goToggle:function(t){this.isOpen=t},notesFun:function(t){t?(localStorage.setItem("notes",1),this.opt&&(this.opt=this.opt.replace(/\/\//gi,""),this.opt=this.opt+" //")):(localStorage.removeItem("notes"),this.opt=this.opt.replace(/ \/\//gi,""))},copyTextFun:function(t){var e=t?this.opt2:this.opt,o=document.getElementById("copy_text");o.innerHTML=e,o.readOnly=!1,o.select(),o.setSelectionRange(0,o.value.length),document.execCommand("copy"),o.readOnly=!0},iptFun:function(){this.ipt=this.ipt.replace(/\s+/g,"");var t=localStorage.getItem("path"),e=this.ipt;if(-1!=e.indexOf(t)){var o=e.split(t)[1];"/"==o.slice(0,1)&&(o=o.substr(1));var s=localStorage.getItem("notes")?" //":"";this.opt=this.transform(o)+": '"+o+"',"+s}else{console.log("不存在"),"/"==e.slice(0,1)&&(e=e.substr(1));var i=localStorage.getItem("notes")?" //":"";this.opt=this.transform(e)+": '"+e+"',"+i}},transform:function(t){return t.replace(/\/(\w)/g,function(t,e){return e.toUpperCase()})},projectFun:function(){localStorage.setItem("path",this.project)},clearProject:function(){this.project="",localStorage.removeItem("path")}}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"left"},[o("div",{staticClass:"text"},[t._v("输入:")]),t._v(" "),o("div",{staticClass:"top"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ipt,expression:"ipt"}],ref:"tt",staticClass:"bsbb",attrs:{id:"tt"},domProps:{value:t.ipt},on:{input:[function(e){e.target.composing||(t.ipt=e.target.value)},function(e){t.iptFun()}]}}),t._v(" "),o("div",{staticClass:"empty flex-center bsbb",on:{click:function(e){t.ipt=""}}},[t._v("清除")])]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"text"},[t._v("输出:")]),t._v(" "),o("div",{staticClass:"bottom"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.opt,expression:"opt"}],staticClass:"bsbb",domProps:{value:t.opt},on:{input:function(e){e.target.composing||(t.opt=e.target.value)}}}),t._v(" "),o("div",{staticClass:"copy flex-center bsbb",on:{click:t.copyTextFun}},[t._v("复制")])]),t._v(" "),o("div",{staticClass:"text",staticStyle:{"margin-top":"50px"}},[t._v("输出:")]),t._v(" "),o("div",{staticClass:"bottom"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.opt2,expression:"opt2"}],staticClass:"bsbb",domProps:{value:t.opt2},on:{input:function(e){e.target.composing||(t.opt2=e.target.value)}}}),t._v(" "),o("div",{staticClass:"copy flex-center bsbb",on:{click:function(e){t.copyTextFun(!0)}}},[t._v("复制")])])]),t._v(" "),o("div",{staticClass:"right"},[o("div",{staticClass:"text"},[t._v("当前项目:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.project,expression:"project"}],ref:"project",attrs:{type:"text"},domProps:{value:t.project},on:{input:[function(e){e.target.composing||(t.project=e.target.value)},t.projectFun]}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.project,expression:"project"}],staticStyle:{padding:"5px 10px"},on:{click:t.clearProject}},[t._v("X")]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"setting"},[o("div",[t._v("监听右边粘贴")]),t._v(" "),o("mySwitch",{staticClass:"sw",attrs:{id:"sw",bool:t.bool},on:{goToggle:t.goToggle}})],1),t._v(" "),o("div",{staticClass:"setting"},[o("div",[t._v("添加注释")]),t._v(" "),o("mySwitch",{staticClass:"sw",attrs:{bool:t.notes},on:{goToggle:t.notesFun}})],1),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v("\n    ps:驼峰命名格式化接口"),o("br"),t._v("\n    支持ctrl + c ; ctrl + v\n  ")]),t._v(" "),o("textarea",{staticStyle:{position:"absolute",left:"-9999px"},attrs:{readonly:"",id:"copy_text"}})])},staticRenderFns:[]};var a=o("C7Lr")(i,n,!1,function(t){o("xUKl")},"data-v-336a512a",null);e.default=a.exports},xUKl:function(t,e){}});