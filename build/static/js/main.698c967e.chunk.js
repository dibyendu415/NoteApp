(this.webpackJsonpNoteApp=this.webpackJsonpNoteApp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),o=(a(14),a(8)),m=a(4),i=(a(15),a(16),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("h1",null,"DMNotes")))}),u=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"note col-md-6 col-lg-4 d-flex"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-text"},e.content),c.a.createElement("button",{className:"btn btn-success",onClick:function(t){t.preventDefault(),e.deleteitem(e.id)}},"DELETE")))))},s=a(3),E=a(5),d=function(e){var t=Object(n.useState)({title:"",content:""}),a=Object(m.a)(t,2),l=a[0],r=a[1],o=function(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(s.a)({},a,n))}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mainnote my-5"},c.a.createElement("form",{className:"createnote"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"title",onChange:o,value:l.title,placeholder:"Title",autoComplete:"off",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{rows:"",column:"",name:"content",onChange:o,value:l.content,placeholder:"Write a Note",className:"form-control"})),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"submit",onClick:function(t){e.passnote(l),r({title:"",content:""}),t.preventDefault()},className:"btn button-small"},"ADD NOTE")))))},f=function(){var e=(new Date).getFullYear();return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",null,c.a.createElement("h5",null,"Made by Dibyendu Maji"),c.a.createElement("p",null,"Copyrights @ ",e," ")))};var p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],r=function(e){l((function(t){return t.filter((function(t,a){return a!=e}))}))};return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(d,{passnote:function(e){l((function(t){return[].concat(Object(o.a)(t),[e])}))}}),c.a.createElement("div",{className:"notegroup container my-5"},c.a.createElement("div",{className:"row"},a.map((function(e,t){return c.a.createElement(u,{key:t,id:t,title:e.title,content:e.content,deleteitem:r})})))),c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.698c967e.chunk.js.map