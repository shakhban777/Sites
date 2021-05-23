(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),s=a.n(r),i=a(2),o=a(3),l=a.n(o),d=a(5),u=a(7),j=function e(){var t=this;Object(u.a)(this,e),this._apiKey="9f794cbee16169a67f1379107a9a4b6e",this._baseURL="https://api.openweathermap.org/data/2.5/onecall",this.getWeatherForSevenDays=function(){var e=Object(d.a)(l.a.mark((function e(a,n){var c,r,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(t._baseURL,"?lat=").concat(a,"&lon=").concat(n,"&&exclude=current,minutely,hourly,alerts&appid=").concat(t._apiKey),e.next=3,fetch(c);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Could not fetch ".concat(c,", received ").concat(r.status));case 6:return e.next=8,r.json();case 8:return s=e.sent,i=s.daily,o=[],e.next=13,i.forEach((function(e){var t,a=e.temp.day-273.15>=0?"+":"-",n={id:Math.random(),icon:"https://openweathermap.org/img/wn/".concat(null===(t=e.weather.find((function(e){return e.icon})))||void 0===t?void 0:t.icon,"@2x.png"),date:new Date(1e3*e.dt).toLocaleString("en",{year:"numeric",month:"short",day:"numeric"}).split(", ").join(" "),temperature:a+Math.round(e.temp.day-273.15).toString()+"\xb0"};o.push(n)}));case 13:return e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getWeatherForHistoricDate=function(){var e=Object(d.a)(l.a.mark((function e(a,n,c){var r,s,i,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t._baseURL,"/timemachine?lat=").concat(a,"&lon=").concat(n,"&dt=").concat(c,"&appid=").concat(t._apiKey),e.prev=1,e.next=4,fetch(r);case 4:return s=e.sent,e.next=7,s.json();case 7:return i=e.sent,o=i.current,d=o.temp-273.15>=0?"+":"-",e.abrupt("return",{icon:"https://openweathermap.org/img/wn/".concat(o.weather[0].icon,"@2x.png"),date:new Date(1e3*o.dt).toLocaleString("en",{year:"numeric",month:"short",day:"numeric"}).split(", ").join(" "),temperature:"".concat(d).concat(Math.round(o.temp-273.15).toString(),"\xb0")});case 13:return e.prev=13,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",{icon:"",date:"",temperature:""});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a,n){return e.apply(this,arguments)}}()},h=a(0),b=function(){return Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("div",{className:"title__item title__item-1",children:"Weather"}),Object(h.jsx)("div",{className:"title__item title__item-2",children:"forecast"})]})},m=function(e){var t=e.cities,a=e.onChangeHandler,c=e.blockNum,r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],l=s[1],d="select-city__wrapper";return o?d+=" active":d="select-city__wrapper",Object(h.jsx)("div",{className:d,children:Object(h.jsxs)("select",{className:"select select-city",onFocus:function(){l(!0)},onBlur:function(){l(!1)},onChange:function(e){a(e.target.value,c),e.target.blur()},children:[Object(h.jsx)("option",{hidden:!0,children:"Select city"}),t.map((function(e){return Object(h.jsx)("option",{value:"".concat(e.lat,", ").concat(e.lon),children:e.name},e.lat)}))]})})},O=a.p+"static/media/placeholder.59a85e9a.svg",p=function(){return Object(h.jsxs)("div",{className:"placeholder",children:[Object(h.jsx)("img",{className:"placeholder__image",src:O,alt:"cloud"}),Object(h.jsx)("p",{className:"placeholder__text",children:"Fill in all the fields and the weather will be displayed"})]})},f=function(e){var t=e.date,a=e.icon,n=e.temperature;return Object(h.jsx)("div",{className:"weather-card",children:Object(h.jsxs)("div",{className:"weather-card__flex",children:[Object(h.jsx)("div",{className:"weather-card__date",children:t}),Object(h.jsx)("img",{className:"weather-card__image",src:a,alt:""}),Object(h.jsx)("div",{className:"weather-card__temp",children:n})]})})},v=a.p+"static/media/arrow-left.c57d52d4.svg",x=a.p+"static/media/arrow-right.e6596943.svg",w=function(e){var t=e.data,a=e.showSevenDaysForecast,n=e.cities,c=e.onChangeHandler,r=e.onPrevHandler,s=e.onNextHandler,i=e.showAllWeatherCards,o=function(){return Object(h.jsx)("div",{onClick:r,className:"weather__arrow-left",children:Object(h.jsx)("img",{src:v,alt:"arrow-left"})})},l=function(){return Object(h.jsx)("div",{onClick:s,className:"weather__arrow-right",children:Object(h.jsx)("img",{src:x,alt:"arrow-right"})})},d=i?null:Object(h.jsx)(o,{}),u=i?null:Object(h.jsx)(l,{}),j=function(){return Object(h.jsxs)("div",{className:"weather",children:[d,t.map((function(e){return Object(h.jsx)(f,{date:e.date,icon:e.icon,temperature:e.temperature},e.id)})),u]})},b=a?Object(h.jsx)(j,{}):Object(h.jsx)(p,{});return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card__content",children:[Object(h.jsxs)("div",{className:"card__content-header",children:[Object(h.jsx)("h2",{className:"card__content-title",children:"7 Days Forecast"}),Object(h.jsx)(m,{onChangeHandler:c,cities:n,blockNum:0})]}),Object(h.jsx)("div",{children:b})]})})},_=function(e){var t=e.onChangeDateHandler,a=new Date(Date.now()-432e6).toISOString().slice(0,10),n=(new Date).toISOString().slice(0,10);return Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(e){var a=Date.parse(e.target.value)/1e3;t(a)},className:"select select-date",type:"date",min:a,max:n})})},g=function(e){var t=e.date,a=e.icon,n=e.temperature,c=a?Object(h.jsx)("img",{className:"historic-weather-card__image",src:a,alt:""}):null,r=t?Object(h.jsx)("div",{className:"historic-weather-card__date",children:t}):Object(h.jsx)("div",{className:"error-text",children:"Please enter last 5 days or choose from calendar"});return Object(h.jsx)("div",{className:"historic-weather-card",children:Object(h.jsxs)("div",{className:"historic-weather-card__flex",children:[r,c,Object(h.jsx)("div",{className:"historic-weather-card__temp",children:n})]})})},N=function(e){var t=e.cities,a=e.showHistoricForecast,n=e.onChangeHandler,c=e.onChangeDateHandler,r=e.historicData,s=a?Object(h.jsx)(g,{date:r.date,icon:r.icon,temperature:r.temperature}):Object(h.jsx)(p,{});return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card__content",children:[Object(h.jsxs)("div",{className:"card__content-header",children:[Object(h.jsx)("h2",{className:"card__content-title",children:"Forecast for a Date in the Past"}),Object(h.jsxs)("div",{className:"card__select",children:[Object(h.jsx)(m,{cities:t,onChangeHandler:n,blockNum:1}),Object(h.jsx)(_,{onChangeDateHandler:c})]})]}),Object(h.jsx)("div",{children:s})]})})};a(14);var y=function(){var e=function(){var e=c.a.useState(window.innerWidth),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}));var s=function(){r(window.innerWidth)};return a}(),t=Object(n.useState)([{name:"\u0421\u0430\u043c\u0430\u0440\u0430",lat:53.195873,lon:50.100193},{name:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",lat:53.507836,lon:49.420393},{name:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",lat:51.533557,lon:46.034257},{name:"\u041a\u0430\u0437\u0430\u043d\u044c",lat:55.796127,lon:49.106405},{name:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",lat:45.03547,lon:38.975313}]),a=Object(i.a)(t,1)[0],r=Object(n.useState)([{lat:null,lon:null},{lat:null,lon:null}]),s=Object(i.a)(r,2),o=s[0],l=s[1],d=Object(n.useState)(null),u=Object(i.a)(d,2),m=u[0],O=u[1],p=Object(n.useState)([]),f=Object(i.a)(p,2),v=f[0],x=f[1],_=Object(n.useState)({date:"",icon:"",temperature:""}),g=Object(i.a)(_,2),y=g[0],S=g[1],C=Object(n.useState)(!1),D=Object(i.a)(C,2),H=D[0],F=D[1],k=Object(n.useState)(!1),E=Object(i.a)(k,2),L=E[0],W=E[1],P=Object(n.useState)(!1),I=Object(i.a)(P,2),M=I[0],B=I[1],K=Object(n.useState)(0),R=Object(i.a)(K,2),U=R[0],z=R[1],A=Object(i.a)(o,2),J=A[0],T=A[1];Object(n.useEffect)((function(){var e=J.lat,t=J.lon;e&&t&&(new j).getWeatherForSevenDays(e,t).then((function(e){return x([]),e})).then((function(e){return M?e:e.slice(U,3+U)})).then((function(e){x(e),F(!0)}))}),[J,U,M]),Object(n.useEffect)((function(){var e=T.lat,t=T.lon;e&&t&&m&&(new j).getWeatherForHistoricDate(e,t,m).then((function(e){S(e),W(!0)}))}),[T,m]),Object(n.useEffect)((function(){B(e<=660)}),[e]);var q=function(e,t){var a=e.split(", "),n=Object(i.a)(a,2),c={lat:+n[0],lon:+n[1]};l((function(e){return e.map((function(a){return a===e[t]?c:a}))}))};return Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)("div",{className:"_container",children:[Object(h.jsx)("div",{className:"app__title",children:Object(h.jsx)(b,{})}),Object(h.jsxs)("div",{className:"app__blocks",children:[Object(h.jsx)(w,{cities:a,onChangeHandler:q,onPrevHandler:function(){0<U&&U<=5&&z((function(e){return--e}))},onNextHandler:function(){0<=U&&U<5&&z((function(e){return++e}))},showSevenDaysForecast:H,data:v,showAllWeatherCards:M}),Object(h.jsx)(N,{cities:a,showHistoricForecast:L,onChangeHandler:q,onChangeDateHandler:function(e){O(e)},historicData:y})]})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),S()}},[[15,1,2]]]);
//# sourceMappingURL=main.adb0b9db.chunk.js.map