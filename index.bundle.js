"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826,351,176],{28:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),r=n.n(o),c=n(645),i=n.n(c)()(r());i.push([t.id,"\nbutton {\n    cursor: pointer;\n    padding: 0.5rem;\n    border-radius: 0.2rem;\n    outline: none;\n    border: none;\n    background-color: rgb(76, 168, 210);\n    max-width: 400px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 3rem;\n}\n\n.projectsBox {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.project {\n    padding: 0.5rem;\n    border-radius: 0.25rem;\n    cursor: pointer;\n}\n\n.todoContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n}\n\n.newProjectForm {\n    display: flex;\n    gap: 1rem;\n    align-items: baseline;\n}\n\n.todoItemBox {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    background: linear-gradient(200deg, skyblue, rgb(219, 155, 16));\n    padding: 1rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n}\n\n.on {\n    background: linear-gradient(140deg, rgb(138, 88, 170), rgb(230, 134, 166));\n}\n\nlabel {\n    display: inline-block;\n    width: 7rem;\n}\n\ninput {\n    display: inline-block;\n    width: 15rem;\n    border-radius: 0.2rem;\n    padding: 0.5rem;\n    outline: none;\n    border: none;\n    box-shadow: 0 0 5px black;\n}",""]);const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,c){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var c={},i=[],a=0;a<t.length;a++){var d=t[a],s=o.base?d[0]+o.base:d[0],l=c[s]||0,u="".concat(s," ").concat(l);c[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var c=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<c.length;i++){var a=n(c[i]);e[a].references--}for(var d=o(t,r),s=0;s<c.length;s++){var l=n(c[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}c=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},864:(t,e,n)=>{var o=n(617),r=n(576);let c;function i(){const t=document.querySelector(".todoContainer");t.textContent="";const e=document.createElement("div");e.classList.add("newProjectForm"),t.append(e);const n=document.createElement("label");n.textContent="Project Name: ";const r=document.createElement("input");r.classList.add("input");const i=document.createElement("button");i.setAttribute("type","button"),i.textContent="Submit",i.addEventListener("click",(()=>{const t=(0,o.q)(r.value);(0,o.D)().addProject(t),document.querySelector(".content").textContent="",a().loadProjects((0,o.D)().getAllProject()),d().loadTodoContainer(c)})),e.append(n,r,i)}function a(){const t=document.querySelector(".content"),e=document.createElement("div");e.classList.add("projectsBox"),t.append(e);const n=document.createElement("div");n.classList.add("projects"),e.append(n);const o=document.createElement("button");return o.textContent="+ Add Project",o.setAttribute("type","button"),t.append(o),o.addEventListener("click",(()=>{i()})),{projects:n,loadProjects:function(t){this.projects.textContent="";for(let e=0;e<t.length;e++){const n=t[e],o=document.createElement("div");o.textContent=n.title,o.classList.add("project"),o.addEventListener("click",(()=>{document.querySelectorAll(".on").forEach((t=>{t.classList.remove("on")})),o.classList.add("on"),d().loadTodoContainer(n)})),o.setAttribute("data-id",e),this.projects.appendChild(o)}}}}function d(){const t=document.querySelector(".todoContainer");function e(t,e){const n=document.createElement("div");n.textContent=t.title;const o=document.createElement("div");o.textContent=t.dueDate,e.append(n,o)}return{loadTodoContainer:function n(o){c=o,t.textContent="";for(const n of o.items){const o=document.createElement("div");o.classList.add("todoItemBox"),o.addEventListener("click",(()=>{s().loadItem(n)})),e(n,o),t.append(o)}const i=document.createElement("button");i.textContent="+ Add Todo",i.setAttribute("type","button"),t.append(i),i.addEventListener("click",(()=>{s().itemForm("","","","");const e=document.createElement("button");e.setAttribute("type","button"),e.textContent="Submit",t.append(e),e.addEventListener("click",(()=>{const t=(0,r.m)(document.querySelector(".title").lastChild.value,document.querySelector(".description").lastChild.value,document.querySelector(".dueDate").lastChild.value,document.querySelector(".priority").lastChild.value);c.addTodoItem(t),n(c)}))}))},loadTodoItem:e}}function s(){const t=document.querySelector(".todoContainer");function e(t,e){const n=document.createElement("div");n.textContent=`Title: ${t.title}`;const o=document.createElement("div");o.textContent=`Description: ${t.description}`;const r=document.createElement("div");r.textContent=`Due Date: ${t.dueDate}`;const c=document.createElement("div");c.textContent=`Priority: ${t.priority}`;const i=document.createElement("div");i.textContent=`Completed: ${t.complete}`,e.append(n,o,r,c,i)}function n(t,e,n){const o=document.createElement("div"),r=document.createElement("label");r.textContent=e;const c=document.createElement("input");return c.setAttribute("type",n),c.value=t,o.append(r,c),o}function o(e,o,r,c){console.log(e,o,r,c),t.textContent="";const i=n(e,"Title: ","text");i.classList.add("title");const a=n(o,"Description: ","text");a.classList.add("description");const d=n(r,"Due Date: ","date");d.classList.add("dueDate");const s=n(c,"Priority: ","number");s.classList.add("priority"),t.append(i,a,d,s)}function i(e){o(e.title,e.description,e.dueDate,e.priority);const i=n(e.complete,"Complete: ","text");i.classList.add("complete");const a=document.createElement("button");a.setAttribute("type","button"),a.textContent="Submit",t.append(i,a),a.addEventListener("click",(()=>{(0,r.D)(e,document.querySelector(".title").lastChild.value,document.querySelector(".description").lastChild.value,document.querySelector(".dueDate").lastChild.value,document.querySelector(".priority").lastChild.value,document.querySelector(".complete").lastChild.value),d().loadTodoContainer(c)}))}return{loadItemDetail:e,loadItem:function(n){t.textContent="",e(n,t);const o=document.createElement("button");t.append(o),o.setAttribute("type","button"),o.textContent="Edit",o.addEventListener("click",(()=>{i(n)}));const r=document.createElement("button");t.append(r),r.setAttribute("type","button"),r.textContent="Remove",r.addEventListener("click",(()=>{console.log(n,c.items.indexOf(n)),c.removeTodoItem(n),d().loadTodoContainer(c)}))},editItem:i,itemForm:o,createDetail:n}}var l=n(379),u=n.n(l),p=n(795),m=n.n(p),f=n(569),v=n.n(f),y=n(565),b=n.n(y),x=n(216),h=n.n(x),C=n(589),g=n.n(C),E=n(28),j={};j.styleTagTransform=g(),j.setAttributes=b(),j.insert=v().bind(null,"head"),j.domAPI=m(),j.insertStyleElement=h(),u()(E.Z,j),E.Z&&E.Z.locals&&E.Z.locals;const L=(0,o.D)(),S=(0,o.q)("exercise"),D=(0,o.q)("study");L.addProject(S),L.addProject(D),console.log(L),a().loadProjects(L.getAllProject()),d().loadTodoContainer(L.getAllProject()[0])},617:(t,e,n)=>{n.d(e,{D:()=>i,q:()=>c});let o=0,r=[];function c(t){const e=o;o+=1;let n=[];return{title:t,items:n,id:e,addTodoItem:function(t){this.items.push(t)},removeTodoItem:t=>{const e=n.indexOf(t);n.splice(e,1)}}}function i(){return{addProject:function(t){r.push(t)},removeProject:function(t){const e=r.indexOf(t);r.splice(e,1)},getAllProject:function(){return r}}}},576:(t,e,n)=>{n.d(e,{D:()=>c,m:()=>r});let o=0;function r(t,e,n,r){const c=o;return o+=1,{title:t,description:e,dueDate:n,priority:r,id:c,complete:!1}}function c(t,e,n,o,r,c){console.log(t,e,n,o,r,c),t.title=e,t.description=n,t.dueDate=o,t.priority=r,t.complete=c}}},t=>{t(t.s=864)}]);