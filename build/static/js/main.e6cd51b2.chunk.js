(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){e.exports=a(505)},166:function(e,t,a){},490:function(e,t,a){},505:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(17),r=a.n(i),c=(a(166),a(19)),o=a(20),l=a(22),d=a(21),m=a(23),u=a(24),h=a(507),p=a(509),f=a(508),w=a(157),v=a.n(w),y=a(158),k=a.n(y),E=a(159),b=a.n(E),C=function(){function e(){Object(c.a)(this,e),this.apiKey="45c4b9b7ef7e561a24ebdbf9f36f4e44"}return Object(o.a)(e,[{key:"getDailyWeather",value:function(e,t){var a=e.trim().replace(/ /g,"+");return fetch("https://api.openweathermap.org/data/2.5/".concat(t,"?q=").concat(a,"&appid=").concat(this.apiKey)).then(function(e){return e.json()}).then(function(e){return e})}},{key:"reverseLookup",value:function(e,t){return fetch("https://us1.locationiq.com/v1/reverse.php?key=bb928de54beccd&lat=".concat(e,"&lon=").concat(t,"&format=json")).then(function(e){return e.json()}).then(function(e){return e})}},{key:"request",value:function(e){return console.log(e),Promise.all([this.getDailyWeather(e,"weather"),this.getDailyWeather(e,"forecast")])}},{key:"requestCities",value:function(e){var t=this,a=e.map(function(e){return new Promise(function(a,n){a(t.getDailyWeather(e,"weather"))})});return Promise.all(a)}}]),e}(),g=a(151),O=a.n(g),N=a(51),S=a.n(N),_=function(){return fetch("https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1").then(function(e){return e.json()}).then(function(e){return e})},L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({search:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),(new C).request(a.state.search).then(function(e){a.props.updateLocation(e)}),a.setState({search:""})},a.state={search:"",quote:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new _).then(function(t){return e.setState({quote:t[0]})})}},{key:"render",value:function(){return s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-header",dangerouslySetInnerHTML:{__html:"".concat(this.state.quote.content,' <p class="quote-auth">- <i>').concat(this.state.quote.title,"</i></p>")}}),s.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},s.a.createElement(O.a,{id:"input",label:"Location",value:this.state.search,onChange:this.handleChange,placeholder:"toronto, canada",required:!0}),s.a.createElement(S.a,{type:"submit",onSubmit:this.handleSubmit.bind(this),variant:"contained",color:"primary",className:"btn-submit"},"Search")))}}]),t}(s.a.Component),j=function(e,t){return!0===t?Math.ceil(9*(e-273.15)/5+32):Math.ceil(e-273.15)},x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){var e=this;(new C).request(this.props.name).then(function(t){e.props.updateLocation(t)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"quick-city-body",onClick:this.handleClick},s.a.createElement("p",{className:"quick-city__name"},this.props.name,", ",this.props.country),s.a.createElement("div",{className:"x"},s.a.createElement("p",{className:"quick-city__temp"},j(this.props.temp,this.props.checked),s.a.createElement("sup",null,"\xb0",this.props.checked?"F":"C")),s.a.createElement("p",{className:"quick-city__weather-desc"},this.props.weatherDesc)))}}]),t}(s.a.Component),D=a(153),q=a.n(D),M=a(154),I=a(18),A=a.n(I),W=function(e){return e.map(function(e,t){var a=e.date?e.date.split(",")[0]:"";return e.weatherDesc.toLowerCase().indexOf("clouds")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-day-cloudy"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("clear")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-day-sunny"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("thunderstorm")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-day-thunderstorm"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("drizzle")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-day-sprinkle"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("rain")>-1||e.weatherDesc.toLowerCase().indexOf("mist")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-day-rain"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("snow")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-snow"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("smoke")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-smoke"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("haze")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-day-haze"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("dust whirls")>-1||e.weatherDesc.toLowerCase().indexOf("sand")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-sandstorm"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("fog")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-day-fog"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("volcanic ash")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-volcano"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("squalls")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-sleet"}),s.a.createElement("p",{className:"forecast-date"},a)):e.weatherDesc.toLowerCase().indexOf("tornado")>-1?s.a.createElement("div",null,s.a.createElement("i",{className:"wi wi-tornado"}),s.a.createElement("p",{className:"forecast-date"},a)):void 0})},T={slider:{settings:{dots:!1,infinite:!1,speed:500,slidesToShow:7,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:5}},{breakpoint:600,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:1}}]},label:"5 DAY FOREACAST",backgroundColor:"#0074ff0f",borderColor:"#85919f",borderWidth:1,pointBackgroundColor:"#85919f"},mapsAPIKey:"AIzaSyAdOrgGoSsaX6ApmqF8WlnhNKNzbhqQuIU"},F=a(156),B=a.n(F),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={center:{lat:0,lng:0},zoom:15},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e={lat:this.props.coord.lat,lng:this.props.coord.lon};this.setState({center:e})}},{key:"componentWillReceiveProps",value:function(e,t){var a={lat:e.coord.lat,lng:e.coord.lon};this.setState({center:a})}},{key:"render",value:function(){return s.a.createElement("div",{style:{height:"500px",width:"100%"}},s.a.createElement(B.a,{bootstrapURLKeys:{key:"AIzaSyAdOrgGoSsaX6ApmqF8WlnhNKNzbhqQuIU"},center:this.state.center,defaultZoom:this.state.zoom}))}}]),t}(s.a.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={savedCities:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e!==t&&this.setState({savedCities:e.savedCities})}},{key:"displayMyCities",value:function(){var e=this;return this.props.myCities.map(function(t){return s.a.createElement(x,{name:t.name,country:t.sys.country,temp:t.main.temp,tempMin:t.main.temp_min,tempMax:t.main.temp_max,weatherType:t.weather[0].main,weatherDesc:t.weather[0].description,checked:e.props.checked,updateLocation:e.props.updateLocation})})}},{key:"handleClick",value:function(e){this.props.saveCity(this.props.location.city,e)}},{key:"displaySaveBtnCity",value:function(){var e=this;return JSON.parse(localStorage.getItem("savedCities")).find(function(t){return t===e.props.location.city})?s.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleClick.bind(this,"REMOVE"),className:"btn-save"},"Remove"):s.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleClick.bind(this,"ADD"),className:"btn-save"},"Save")}},{key:"displaySlider",value:function(){return JSON.parse(localStorage.getItem("savedCities")).length&&null!==JSON.parse(localStorage.getItem("savedCities"))?s.a.createElement(q.a,T.slider.settings,this.displayMyCities()):s.a.createElement("p",{style:{textAlign:"center",minHeight:"89px"}},"You have no saved locations")}},{key:"render",value:function(){var e=this.props.location,t=[{weatherDesc:e.week[3].weather[0].main,date:A()(e.week[3].dt_txt).format("ll")},{weatherDesc:e.week[11].weather[0].main,date:A()(e.week[11].dt_txt).format("ll")},{weatherDesc:e.week[19].weather[0].main,date:A()(e.week[19].dt_txt).format("ll")},{weatherDesc:e.week[27].weather[0].main,date:A()(e.week[27].dt_txt).format("ll")},{weatherDesc:e.week[31].weather[0].main,date:A()(e.week[31].dt_txt).format("ll")}],a=[j(e.week[3].main.temp,this.props.checked),j(e.week[11].main.temp,this.props.checked),j(e.week[19].main.temp,this.props.checked),j(e.week[27].main.temp,this.props.checked),j(e.week[31].main.temp,this.props.checked)],n={labels:[A()(this.props.location.week[3].dt_txt).format("ll"),A()(this.props.location.week[11].dt_txt).format("ll"),A()(this.props.location.week[19].dt_txt).format("ll"),A()(this.props.location.week[27].dt_txt).format("ll"),A()(this.props.location.week[31].dt_txt).format("ll")],datasets:[{label:T.slider.label,backgroundColor:T.slider.backgroundColor,borderColor:T.slider.borderColor,borderWidth:T.slider.borderWidth,pointBackgroundColor:T.slider.pointBackgroundColor,data:a}]};return s.a.createElement("div",{className:"body"},this.displaySlider(),s.a.createElement("div",{className:"user-temp"},this.displaySaveBtnCity(),s.a.createElement("div",{className:"user-temp__body"},s.a.createElement("h3",{className:"user-temp__location"},e.city,", ",e.country),s.a.createElement("h4",{className:"user-temp__date"},A()().format("LLL")),s.a.createElement("div",{className:"user-temp__inner"},W([{weatherDesc:e.weather.main,date:""}]),s.a.createElement("p",{className:"user-temp__main"},j(e.main.temp,this.props.checked),s.a.createElement("sup",null,"\xb0",this.props.checked?"F":"C")),s.a.createElement("div",{className:"user-temp__detail"},s.a.createElement("p",{className:"user-temp__desc"},e.weather.main),s.a.createElement("p",{className:"user-temp__desc2"},e.weather.desc),s.a.createElement("div",{className:"user-temp__desc3"},s.a.createElement("p",{className:"user-temp__high"},"High ",s.a.createElement("span",null,j(this.props.location.main.tempMax,this.props.checked),s.a.createElement("sup",null,"\xb0",this.props.checked?"F":"C"))),s.a.createElement("p",{className:"user-temp__high"},"Low ",s.a.createElement("span",null,j(this.props.location.main.tempMin,this.props.checked),s.a.createElement("sup",null,"\xb0",this.props.checked?"F":"C"))))))),s.a.createElement("div",{className:"user-temp__side"},s.a.createElement("div",{className:"user-temp__fiveday"},W(t)),s.a.createElement(M.a,{data:n,options:{responsive:!0}}))),s.a.createElement(z,{coord:this.props.location.coord}))}}]),t}(s.a.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"updateCity",value:function(e){this.props.saveCity(this.props.city.toLowerCase(),e)}},{key:"isSavedCityBtn",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,this.props.city),s.a.createElement("p",null,this.props.coord.lon,", ",this.props.coord.lat),s.a.createElement("p",null,A()(1e3*this.props.date).format("LLLL")),s.a.createElement("p",null,Math.ceil(this.props.main.temp-273.15)),s.a.createElement("p",null,this.props.main.tempMax-273.15),s.a.createElement("p",null,this.props.main.tempMin-273.15),s.a.createElement("p",null,this.props.weather.main),s.a.createElement("p",null,this.props.weather.desc),this.isSavedCityBtn())}}]),t}(s.a.Component),R=function(){return s.a.createElement("div",null,"Page not found")},K=(a(490),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).saveCity=a.saveCity.bind(Object(u.a)(Object(u.a)(a))),a.updateLocation=a.updateLocation.bind(Object(u.a)(Object(u.a)(a))),a.handleToggle=a.handleToggle.bind(Object(u.a)(Object(u.a)(a))),a.state={location:{city:"",country:"",date:null,cityId:null,coord:{},main:{temp:null,tempMax:null,tempMin:null},weather:{mainDesc:"",desc:""},week:[]},savedCities:[],user:{city:"",country:""},myCities:[],checked:!1,notFound:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"error",value:function(){console.log("called")}},{key:"componentDidMount",value:function(){var e,t,a,n,s;null===localStorage.getItem("savedCities")&&localStorage.setItem("savedCities",JSON.stringify(["London","New York","Paris","Tokyo","Toronto","Sydney","Moscow","Rome","Berlin"])),this.setState({savedCities:JSON.parse(localStorage.getItem("savedCities"))}),navigator.geolocation.getCurrentPosition(function(i){var r=this;e=i.coords.latitude,t=i.coords.longitude,(new C).reverseLookup(e,t).then(function(e){a=e.address.country,n=e.address.city||e.address.town,s=r.state.user,s={city:n,country:a},r.setState({user:s},function(){(new C).request("".concat(r.state.user.city,", ").concat(r.state.user.country)).then(function(e){r.updateLocation(e)})})})},function(i){var r=this;e=43.653226,t=-79.3831843,(new C).reverseLookup(e,t).then(function(e){a=e.address.country,n=e.address.city||e.address.town,s=r.state.user,s={city:n,country:a},r.setState({user:s},function(){(new C).request("".concat(r.state.user.city,", ").concat(r.state.user.country)).then(function(e){r.updateLocation(e)})})})}.bind(this)),this.quickWeather()}},{key:"quickWeather",value:function(){var e=this;(new C).requestCities(JSON.parse(localStorage.getItem("savedCities"))).then(function(t){e.setState({myCities:t})})}},{key:"saveCity",value:function(e,t){var a=this,n=this.state.savedCities;"ADD"===t?this.state.savedCities.find(function(t){return t===e})||n.unshift(e):n=n.filter(function(t){return t!==e});this.setState({savedCities:n},function(){localStorage.setItem("savedCities",JSON.stringify(a.state.savedCities)),a.quickWeather()})}},{key:"updateLocation",value:function(e){if("404"!==e[1].cod){this.setState({notFound:!1});var t=e[0];this.setState({location:{city:t.name,country:t.sys.country,date:t.dt,cityId:t.id,coord:t.coord,main:{temp:t.main.temp,tempMax:t.main.temp_max,tempMin:t.main.temp_min},weather:{main:t.weather[0].main,desc:t.weather[0].description},week:e[1].list}})}else this.setState({notFound:!0})}},{key:"handleToggle",value:function(){this.setState({checked:!this.state.checked})}},{key:"render",value:function(){var e=this,t={updateLocation:this.updateLocation},a={location:this.state.location,myCities:this.state.myCities,checked:this.state.checked,savedCities:this.state.savedCities,saveCity:this.saveCity,updateLocation:this.updateLocation};return""===this.state.location.city?s.a.createElement("div",{id:"loading"}):s.a.createElement("div",{className:"App"},s.a.createElement(L,t),s.a.createElement("div",{className:"App-inner"},this.state.notFound?s.a.createElement("p",{className:"no-results"},"No results found"):s.a.createElement("div",null,s.a.createElement(v.a,{row:!0,className:"toggle"},s.a.createElement(k.a,{control:s.a.createElement(b.a,{checked:this.state.checked,onChange:this.handleToggle,value:"checkedB",color:"primary"}),label:"C\xb0 / F\xb0"})),s.a.createElement(h.a,null,s.a.createElement(p.a,null,s.a.createElement(f.a,{exact:!0,path:"".concat("LOCAL"===this.props.build?"/":"/weather-v2/"),render:function(e){return s.a.createElement(P,Object.assign({},e,a))}}),s.a.createElement(f.a,{path:"/weather",render:function(t){return s.a.createElement(J,Object.assign({},t,e.state.location))}}),s.a.createElement(f.a,{component:R}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U="PRODUCTION";window.location.href.indexOf("localhost")>-1&&(U="LOCAL"),r.a.render(s.a.createElement(K,{build:U}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[161,2,1]]]);
//# sourceMappingURL=main.e6cd51b2.chunk.js.map