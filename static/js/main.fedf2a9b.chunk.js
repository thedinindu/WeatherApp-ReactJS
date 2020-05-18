(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),o=(a(14),a(1)),i=a.n(o),l=a(4),m=a(5),h=a(6),u=a(8),p=a(7);a(16),a(17),a(18);var d=function(e){return r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"cards pt-5"},r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp_celsius?r.a.createElement("h1",{className:"py-2"},e.temp_celsius,"\xb0"):null,function(e,t){if(e&&t)return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h6",null,r.a.createElement("span",{className:"px-4"},"min"),r.a.createElement("span",{className:"px-4"},"max")),r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0")))}(e.temp_min,e.temp_max),r.a.createElement("h4",{className:"py-3"},e.description)))};a(19);var w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,e.error?r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country"):null),r.a.createElement("h1",{className:"mt-5"},"Weather App"),r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2 py-2"},r.a.createElement("input",{type:"text",className:"form-control",name:"city",placeholder:"City",autoComplete:"off",style:{color:"white"}})),r.a.createElement("div",{className:"col-md-3 py-2"},r.a.createElement("input",{type:"text",className:"form-control",name:"country",placeholder:"Country",autoComplete:"off",style:{color:"white"}})),r.a.createElement("div",{className:"col-md-3 mt-md-0 text-md-left py-2"},r.a.createElement("button",{className:"btn btn-success",style:{borderRadius:0}},"Get Weather")))))},y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getWeather=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.city.value,r=a.target.elements.country.value,!n||!r){t.next=15;break}return t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat("da4f7caa098d66b16c99610b266bad02","&units=metric"));case 6:return c=t.sent,t.next=9,c.json();case 9:s=t.sent,console.log(s),e.setState({city:"".concat(s.name,", ").concat(s.sys.country),country:s.sys.country,celsius:Math.floor(s.main.temp),temp_max:Math.floor(s.main.temp_max),temp_min:Math.floor(s.main.temp_min),description:s.weather[0].description,error:!1}),e.get_WeatherIcon(e.weatherIcon,s.weather[0].id),t.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(h.a)(a,[{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:this.weatherIcon.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:this.weatherIcon.Drizzle});break;case t>=500&&t<=531:this.setState({icon:this.weatherIcon.Rain});break;case t>=600&&t<=622:this.setState({icon:this.weatherIcon.Snow});break;case t>=701&&t<=781:this.setState({icon:this.weatherIcon.Atmosphere});break;case 800===t:this.setState({icon:this.weatherIcon.Clear});break;case t>=801&&t<=804:this.setState({icon:this.weatherIcon.Clouds});break;default:this.setState({icon:this.weatherIcon.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,{loadweather:this.getWeather,error:this.state.error}),r.a.createElement(d,{city:this.state.city,country:this.state.country,temp_celsius:this.state.celsius,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weatherIcon:this.state.icon}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.fedf2a9b.chunk.js.map