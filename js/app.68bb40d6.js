(function(e){function t(t){for(var r,c,i=t[0],u=t[1],a=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/quiz/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5f5b"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{correctAns:e.correctAns,totalQue:e.index+1}}),n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{sm:"6",offset:"3"}},[e.questions.length?n("QuestionBox",{attrs:{currentQuestion:e.questions[e.index],number:e.index+1,next:e.next,incrementCorrect:e.incrementCorrect,correctAns:e.correctAns,isCompleted:e.isCompleted}}):e._e()],1)],1)],1)],1)},c=[],i=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"questionBox-container"},[e.isCompleted?e._e():n("div",[n("b-jumbotron",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("question "+e._s(e.number))]},proxy:!0},{key:"lead",fn:function(){return[e._v(" "+e._s(e.currentQuestion.question)+" ")]},proxy:!0}],null,!1,3365730427)},[n("hr",{staticClass:"my-4"}),n("b-list-group",e._l(e.suffleOptions,(function(t,r){return n("b-list-group-item",{key:r,class:[e.answered||r!==e.selectedIndex?e.answered&&r===e.correctIndex?"correctAnswer":e.answered&&e.selectedIndex===r&&r!==e.correctIndex?"wrongAnswer":"":"selectedAnswer"],on:{click:function(t){return e.selectedOption(r)}}},[e._v(" "+e._s(t)+" ")])})),1),n("b-button",{attrs:{variant:"primary",disabled:null==e.selectedIndex||e.answered},on:{click:e.checkSubmittedAns}},[e._v(" Submit ")]),e.number<10?n("b-button",{attrs:{variant:"success",disabled:!e.answered},on:{click:e.next}},[e._v(" Next ")]):e._e(),10===e.number?n("b-button",{attrs:{variant:"success",disabled:!e.answered},on:{click:e.next}},[e._v(" check result ")]):e._e()],1)],1),e.isCompleted?n("div",[n("b-jumbotron",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("RESULT")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" you answered "+e._s(e.correctAns)+" questions right from 10 geography questions. ")]},proxy:!0}],null,!1,2704149763)},[n("hr",{staticClass:"my-4"}),e.correctAns>=0&&e.correctAns<4?n("p",[e._v("you performed poorly")]):e._e(),e.correctAns>=4&&e.correctAns<=6?n("p",[e._v("you can do better")]):e._e(),e.correctAns>6&&e.correctAns<8?n("p",[e._v("you have performance was satisfactory")]):e._e(),e.correctAns>=8&&e.correctAns<=9?n("p",[e._v("your performance was good")]):e._e(),10==e.correctAns?n("p",[e._v("your performance was excellent")]):e._e()])],1):e._e()])}),u=[],a=(n("99af"),n("c975"),n("a9e3"),n("284c")),l=n("2ef0"),d=n.n(l),f={props:{currentQuestion:Object,number:Number,next:Function,incrementCorrect:Function,correctAns:Number,isCompleted:Boolean},data:function(){return{selectedIndex:null,suffleOptions:[],answered:!1,correctIndex:null}},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedIndex=null,this.answered=!1,this.suffleOptionsFunction()}}},methods:{selectedOption:function(e){this.answered||(this.selectedIndex=e)},suffleOptionsFunction:function(){var e=[].concat(Object(a["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.suffleOptions=d.a.shuffle(e),this.correctIndex=this.suffleOptions.indexOf(this.currentQuestion.correct_answer)},checkSubmittedAns:function(){this.answered=!0,this.selectedIndex===this.correctIndex&&this.incrementCorrect()}}},p=f,b=(n("e50a"),n("2877")),h=Object(b["a"])(p,i,u,!1,null,"be866394",null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",{attrs:{tabs:""}},[n("b-nav-item",{attrs:{disabled:""}},[n("b",[e._v("quiz")])]),n("b-nav-item",{attrs:{disabled:""}},[e._v("correct answered questions "+e._s(e.correctAns)+"/"+e._s(e.totalQue))])],1)],1)},_=[],x={props:{correctAns:Number,totalQue:Number}},y=x,w=Object(b["a"])(y,v,_,!1,null,null,null),O=w.exports,A={name:"app",components:{Header:O,QuestionBox:m},data:function(){return{questions:[],index:0,correctAns:0,isCompleted:!1}},methods:{next:function(){9!=this.index?this.index++:this.isCompleted=!0},incrementCorrect:function(){this.correctAns++}},mounted:function(){var e=this;fetch("https://opentdb.com/api.php?amount=10&category=22&type=multiple",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.questions=t.results}))}},g=A,j=(n("034f"),Object(b["a"])(g,s,c,!1,null,null,null)),C=j.exports;n("f9e3"),n("2dd8");r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,n){},9932:function(e,t,n){},e50a:function(e,t,n){"use strict";var r=n("9932"),o=n.n(r);o.a}});
//# sourceMappingURL=app.68bb40d6.js.map