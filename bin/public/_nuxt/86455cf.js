(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{393:function(e,t,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(33).default)("4d3778e0",content,!0,{sourceMap:!1})},429:function(e,t,r){"use strict";r(393)},430:function(e,t,r){var n=r(32)(!1);n.push([e.i,".user-select-none[data-v-1566a064]{-webkit-user-select:none;-moz-user-select:none;user-select:none}",""]),e.exports=n},439:function(e,t,r){"use strict";r.r(t);var n=r(363),o=r(436),c=r(440),l=r(437),v=r(359),m=r(434),d=r(171),f=r(435),h=r(438),w=r(31),k=(r(97),r(406)),x=r.n(k),R={name:"IndexPage",data:function(){return{power:0,mute:0,volume:20,input:4,reset:"~",inputs:[{label:"Balanced",value:1},{label:"Analogue 1",value:2},{label:"Analogue 2",value:3},{label:"Coaxial",value:4},{label:"Optical 1",value:5},{label:"Optical 2",value:6},{label:"Optical 3",value:7},{label:"USB",value:8},{label:"Network",value:9}],presets:[],snackbar:!1,timeoutId:null,volumeSafeThreshold:65,exceedSafeThreshold:!1}},fetch:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadPresets();case 2:return t.next=4,e.loadStatus();case 4:case"end":return t.stop()}}),t)})))()},methods:{powerOn:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.power){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.doRequest("/command/p/1");case 4:return t.next=6,e.loadStatus();case 6:case"end":return t.stop()}}),t)})))()},powerOff:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.power){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.doRequest("/command/p/0",(function(t){var p=t.p;e.power=p}));case 4:case"end":return t.stop()}}),t)})))()},toggleMute:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.volume){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.doRequest("/command/m/t",(function(t){var r=t.m;e.mute=r}));case 4:case"end":return t.stop()}}),t)})))()},volumeUp:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.exceedSafeThreshold||!(e.volume>=e.volumeSafeThreshold)||confirm("Are you sure you want to exceed the safety threshold?")){t.next=2;break}return t.abrupt("return");case 2:return e.exceedSafeThreshold=e.volume>=e.volumeSafeThreshold,t.next=5,e.doRequest("/command/v/u",(function(t){var r=t.v;e.volume=r,e.mute=0}));case 5:case"end":return t.stop()}}),t)})))()},volumeDown:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doRequest("/command/v/d",(function(t){var r=t.v;e.volume=r,e.mute=0===r?1:0}));case 2:case"end":return t.stop()}}),t)})))()},selectInput:function(e){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.input!==e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.doRequest("/command/i/".concat(e),(function(e){var i=e.i;t.input=i}));case 4:case"end":return r.stop()}}),r)})))()},selectPreset:function(e){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.doRequest("/preset/".concat(e),(function(e){var i=e.i,r=e.v;t.volume=r,t.input=i}));case 2:case"end":return r.stop()}}),r)})))()},loadStatus:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doRequest("/status",(function(t){var p=t.p,r=t.m,n=t.v,i=t.i,o=t.r;e.power=p,e.volume=n,e.mute=r,e.input=i,e.reset=o}));case 2:case"end":return t.stop()}}),t)})))()},loadPresets:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doRequest("/presets",(function(data){e.presets=data}));case 2:case"end":return t.stop()}}),t)})))()},doRequest:function(e,t){var r=this;return Object(w.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.snackbar=!1,n.prev=1,n.next=4,x.a.get(e,{baseURL:r.$config.isDev?"http://localhost:43931/api":"/api",timeout:3e3}).then((function(e){return null==t?void 0:t(e.data)}));case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),console.error(n.t0.message),r.snackbar=!0;case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))()}}},_=(r(429),r(93)),component=Object(_.a)(R,(function(){var e=this,t=e._self._c;return t(c.a,[t(m.a,{attrs:{value:e.$fetchState.pending,absolute:""}},[t(d.a,{attrs:{indeterminate:""}})],1),e._v(" "),t(f.a,[t(o.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{color:e.power?"primary":void 0,block:"",large:"",depressed:""},on:{click:e.powerOn}},[e._v("\n        On\n      ")])],1),e._v(" "),t(o.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{color:e.power?void 0:"primary",block:"",large:"",depressed:""},on:{click:e.powerOff}},[e._v("\n        Off\n      ")])],1),e._v(" "),t(o.a,{class:["text-center text-h4 user-select-none",{"text--disabled":!e.power||e.mute}],attrs:{cols:"12"}},[e._v("\n      "+e._s(e.power?e.volume:0)+"\n    ")]),e._v(" "),t(o.a,{attrs:{cols:"4"}},[t(n.a,{attrs:{disabled:!e.power,color:e.mute||0===e.volume?"primary":void 0,block:"",large:"",depressed:""},on:{click:e.toggleMute}},[t(v.a,[e._v("mdi-volume-off")])],1)],1),e._v(" "),t(o.a,{attrs:{cols:"4"}},[t(n.a,{attrs:{disabled:!e.power||0===e.volume,block:"",large:"",depressed:""},on:{click:e.volumeDown}},[t(v.a,[e._v("mdi-volume-medium")])],1)],1),e._v(" "),t(o.a,{attrs:{cols:"4"}},[t(n.a,{attrs:{disabled:!e.power||100===e.volume,block:"",large:"",depressed:""},on:{click:e.volumeUp}},[t(v.a,[e._v("mdi-volume-high")])],1)],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t(l.a)],1),e._v(" "),e._l(e.inputs,(function(r){var label=r.label,c=r.value;return t(o.a,{key:label,attrs:{cols:"6",sm:"4"}},[t(n.a,{attrs:{disabled:!e.power,color:e.input===c?"primary":void 0,block:"",large:"",depressed:""},on:{click:function(t){return e.selectInput(c)}}},[e._v("\n        "+e._s(label)+"\n      ")])],1)})),e._v(" "),e.presets.length>0?[t(o.a,{attrs:{cols:"12"}},[t(l.a)],1),e._v(" "),e._l(e.presets,(function(r,c){var label=r.label;return t(o.a,{key:label,attrs:{cols:"6",sm:"4"}},[t(n.a,{attrs:{disabled:!e.power,block:"",large:"",depressed:""},on:{click:function(t){return e.selectPreset(c)}}},[e._v("\n          "+e._s(label)+"\n        ")])],1)}))]:e._e()],2),e._v(" "),t(h.a,{attrs:{text:"",bottom:"",color:"error"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    An error occurred\n  ")])],1)}),[],!1,null,"1566a064",null);t.default=component.exports}}]);