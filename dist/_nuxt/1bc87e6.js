(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{273:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("7a78a04c",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";var o=n(3),r=n(4),c=n(43),l=n(197),f=n(196),m=n(2),v=RangeError,d=String,_=Math.floor,x=r(f),h=r("".slice),C=r(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},M=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=_(o/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=_(n/t),n=n%t*1e7},P=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=d(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:m((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!m((function(){C({})}))},{toFixed:function(t){var e,n,o,r,f=l(this),m=c(t),data=[0,0,0,0,0,0],_="",C="0";if(m<0||m>20)throw new v("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return d(f);if(f<0&&(_="-",f=-f),f>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(f*w(2,69,1))-69)<0?f*w(2,-e,1):f/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(M(data,0,n),o=m;o>=7;)M(data,1e7,0),o-=7;for(M(data,w(10,o,1),0),o=e-1;o>=23;)k(data,1<<23),o-=23;k(data,1<<o),M(data,1,1),k(data,2),C=P(data)}else M(data,0,n),M(data,1<<-e,0),C=P(data)+x("0",m);return C=m>0?_+((r=C.length)<=m?"0."+x("0",m-r)+C:h(C,0,r-m)+"."+h(C,r-m)):_+C}})},275:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("efc32e1e",content,!0,{sourceMap:!1})},276:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("51952987",content,!0,{sourceMap:!1})},277:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("57ff46e1",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("471bce38",content,!0,{sourceMap:!1})},279:function(t,e,n){t.exports=n.p+"img/comparisons.5228cf6.jpg"},280:function(t,e,n){"use strict";n(273)},281:function(t,e,n){var o=n(107)((function(i){return i[1]}));o.push([t.i,".NuxtLogo{animation:appear 1s;margin:1em auto auto}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),o.locals={},t.exports=o},282:function(t,e,n){"use strict";n(275)},283:function(t,e,n){var o=n(107)((function(i){return i[1]}));o.push([t.i,".component{border:1px solid #000;border-radius:15px;margin:2em auto;max-width:400px;padding:2em;width:100%}.perf{margin-top:1em}",""]),o.locals={},t.exports=o},284:function(t,e,n){"use strict";n(276)},285:function(t,e,n){var o=n(107)((function(i){return i[1]}));o.push([t.i,".component{border:1px solid #000;border-radius:15px;margin:2em auto;max-width:400px;padding:2em;width:100%}.perf{margin-top:1em}",""]),o.locals={},t.exports=o},286:function(t,e,n){"use strict";n(277)},287:function(t,e,n){var o=n(107)((function(i){return i[1]}));o.push([t.i,".pug[data-v-1a2917f7]{color:#000;font-size:1.5em}.component[data-v-1a2917f7]{border:1px solid #000;border-radius:15px;height:auto;margin:2em auto;max-width:400px;padding:2em;width:100%}.perf[data-v-1a2917f7]{margin-top:1em}",""]),o.locals={},t.exports=o},288:function(t,e,n){"use strict";n(278)},289:function(t,e,n){var o=n(107)((function(i){return i[1]}));o.push([t.i,'.container{align-items:center;display:flex;justify-content:center;margin:0 auto;min-height:100vh;text-align:center}.title{color:#35495e;display:block;font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:100px;font-size:60px;font-weight:300;letter-spacing:1px}h1{font-size:24px}h3{font-size:17px}.subtitle{color:#526488;font-size:24px;font-weight:300;padding-bottom:15px;word-spacing:5px}.links{margin-bottom:2em;padding-top:15px}.nuxt-comparison-title{margin-top:15px}.nuxt-comparisons{border-radius:15px;height:auto;margin-bottom:20px;margin-top:20px;max-width:100%;width:50%}',""]),o.locals={},t.exports=o},290:function(t,e,n){"use strict";n.r(e);n(280);var o=n(42),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"150",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E","fill-rule":"nonzero"}})])])}),[],!1,null,null,null).exports,c=(n(274),{perMaxLen:9e7});function l(){return c}var f={data:function(){return{message:"Hello from Vue2Component",count:0,result:null,timeTaken:0}},methods:{incrementCount:function(){this.count++},runTest:function(t){for(var e=0,i=1;i<=t;i++)e+=i;return e},measurePerformance:function(t,e){var n=performance.now();this.result=t(e);var o=performance.now();this.timeTaken=o-n,console.log("Function executed with result: ".concat(this.result)),console.log("Execution time: ".concat(this.timeTaken.toFixed(2)," milliseconds"))}},mounted:function(){var t=l().perMaxLen;this.measurePerformance(this.runTest,t)}},m=(n(282),Object(o.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"component"},[e("h1",[t._v("✅ Vue2 Component")]),t._v(" "),e("h3",[t._v(t._s(t.message))]),t._v(" "),e("p",[t._v("Component using Vue2 Options API")]),t._v(" "),e("button",{on:{click:t.incrementCount}},[t._v("Clicked "+t._s(t.count)+" times")]),t._v(" "),e("h3",{staticClass:"perf"},[t._v("Performance Measurement")]),t._v(" "),e("p",[t._v("Function result: "+t._s(t.result))]),t._v(" "),e("p",[t._v("Execution time: "+t._s(t.timeTaken)+" milliseconds")])])}),[],!1,null,null,null).exports),v=n(1);function d(){var t=Object(v.c)(null),e=Object(v.c)(0);return{result:t,timeTaken:e,measurePerformance:function(n){for(var o=performance.now(),r=arguments.length,c=new Array(r>1?r-1:0),l=1;l<r;l++)c[l-1]=arguments[l];t.value=n.apply(void 0,c);var f=performance.now();e.value=f-o,console.log("Function executed with result: ".concat(t.value)),console.log("Execution time: ".concat(e.value.toFixed(2)," milliseconds"))}}}var _={__name:"CompositionAPI",setup:function(t){var e=d(),n=e.result,o=e.timeTaken,r=e.measurePerformance,c=l().perMaxLen,f=Object(v.c)("Hello from Vue3Component"),m=Object(v.c)(0),_=function(t){for(var e=0,i=1;i<=t;i++)e+=i;return e};return Object(v.b)((function(){r(_,c)})),{__sfc:!0,result:n,timeTaken:o,measurePerformance:r,perMaxLen:c,message:f,count:m,runTest:_}}},x=(n(284),Object(o.a)(_,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"component"},[e("h1",[t._v("✅ Vue3 Component")]),t._v(" "),e("h3",[t._v(t._s(n.message))]),t._v(" "),e("p",[t._v("Component using Vue3 latest Composition API")]),t._v(" "),e("button",{on:{click:function(t){n.count++}}},[t._v("Clicked "+t._s(n.count)+" times")]),t._v(" "),e("h3",{staticClass:"perf"},[t._v("Performance Measurement")]),t._v(" "),e("p",[t._v("Function result: "+t._s(n.result))]),t._v(" "),e("p",[t._v("Execution time: "+t._s(n.timeTaken)+" milliseconds")])])}),[],!1,null,null,null).exports),h={__name:"Pug",setup:function(t){var e=Object(v.c)("Hello from Pug+Vue3 Component inside Bridge :)"),n=d(),o=n.result,r=n.timeTaken,c=n.measurePerformance,f=l().perMaxLen,m=Object(v.c)(0),_=function(t){for(var e=0,i=1;i<=t;i++)e+=i;return e};return Object(v.b)((function(){c(_,f)})),{__sfc:!0,message:e,result:o,timeTaken:r,measurePerformance:c,perMaxLen:f,count:m,runTest:_,ref:v.c,onMounted:v.b,usePerformance:d,useConstants:l}}},C=(n(286),{components:{Logo:r,OptionsComponent:m,CompositionComponent:x,PugComponent:Object(o.a)(h,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"component"},[e("h1",{staticClass:"pug"},[t._v("✅ Pug Template ")]),e("h3",[t._v(t._s(n.message)+" ")]),e("h3",{staticClass:"perf"},[t._v("Performance Measurement ")]),e("p",[t._v("Function result: "+t._s(n.result))]),e("p",[t._v("Execution time: "+t._s(n.timeTaken)+" milliseconds")])])}),[],!1,null,"1a2917f7",null).exports}}),w=(n(288),Object(o.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",[e("logo"),t._v(" "),e("h1",{staticClass:"title"},[t._v("\n      nuxt-migration\n    ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n      Nuxt2 to Bridge\n    ")]),t._v(" "),t._m(0),t._v(" "),e("OptionsComponent"),t._v(" "),e("CompositionComponent"),t._v(" "),e("PugComponent"),t._v(" "),e("h3",{staticClass:"nuxt-comparison-title"},[t._v("\n      Nuxt Comparisons\n    ")]),t._v(" "),e("p",[t._v("\n      In the table below, there is a quick comparison between Nuxt versions:\n    ")]),t._v(" "),e("img",{staticClass:"nuxt-comparisons",attrs:{src:n(279),alt:"nuxt comparison"}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxt.com/docs/migration/overview",target:"_blank"}},[t._v("\n        Migration Documentation\n      ")]),t._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://nuxt.com/docs/getting-started/upgrade",target:"_blank"}},[t._v("\n        Upgrade Guide\n      ")])])}],!1,null,null,null));e.default=w.exports}}]);