(this.webpackJsonpanimals_facts=this.webpackJsonpanimals_facts||[]).push([[0],{3:function(a,e,t){a.exports=t(9)},8:function(a,e,t){},9:function(a,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),s=t(1),i=t.n(s),r=(t(8),{dolphin:{image:"/images/dolphin.jpg",facts:["Dolphins have been shown to give distinct names to each other!","Dolphins are known to display their own culture!","Dolphins have two stomachs!"]},lobster:{image:"/images/lobster.jpg",facts:["Lobsters taste with their legs!","Lobsters chew with their stomachs!","Lobsters can live as long as 100 years."]},starfish:{image:"/images/starfish.jpg",facts:["Starfish can have up to 40 arms!","Starfish have no brain and no blood!","Starfish can regenerate their own arms!"]}}),c=o.a.createElement("img",{className:"background",alt:"ocean",src:"/images/ocean.jpg"}),l=[];for(var h in r)l.push(o.a.createElement("img",{onClick:m,key:h,className:"animal",alt:h,src:r[h].image,"aria-label":h,role:"button"}));function m(a){var e=a.target.alt;console.log(a.target),a.target.style.visibility="hidden";var t=Math.floor(Math.random()*r[e].facts.length);console.log(r[e]),document.getElementById("fact").innerHTML=r[e].facts[t]}console.log(l);var g=o.a.createElement("div",null,c,o.a.createElement("p",{id:"fact"}),o.a.createElement("div",{className:"animals"},l[2],l[1],l[0]),o.a.createElement("h1",null,"Click an animal for a fun fact"));i.a.render(g,document.getElementById("root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[3,1,2]]]);
//# sourceMappingURL=main.ff964fa8.chunk.js.map