(this["webpackJsonpjob-tracker"]=this["webpackJsonpjob-tracker"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),o=n(26),r=n.n(o),s=n(9),l=n(11),u=n(27),d=n(28),j=n(31),p=n(30),b=n(61),m=Object(a.createContext)({applications:[],error:null,setError:function(){},clearError:function(){},setApplications:function(){},removeApplication:function(){},addStatus:function(){}}),h=m,O=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={error:null,applications:[{id:Object(b.a)(),column:[{id:0,date:new Date(2020,4,13)}],company:"Ultimate Software",job:"Sotware Engineer 2",site:"https://www.ultimatesoftware.com/"},{id:Object(b.a)(),column:[{id:0,date:new Date(2020,4,14)},{id:4,date:new Date(2020,4,14)}],company:"Art & Logic",job:"Full Stack Web Developer",site:"https://artandlogic.com/"},{id:Object(b.a)(),column:[{id:0,date:new Date(2020,4,14)}],company:"GitStart",job:"Full Stack JavaScript Developer - Junior",site:"https://www.gitstart.com/"},{id:Object(b.a)(),column:[{id:0,date:new Date(2020,4,14)}],company:"CyberCoders",job:"Web Developer",site:"https://www.cybercoders.com/"},{id:Object(b.a)(),column:[{id:0,date:new Date(2020,4,14)}],company:"Digital Media Solutions",job:"Frontend Developer",site:"https://digitalmediasolutions.com/"},{id:Object(b.a)(),column:[{id:0,date:new Date(2020,11,1)}],company:"Fake",job:"Fake",site:"https://www.google.com"}]},e.setError=function(t){console.error(t),e.setState({error:t})},e.clearError=function(){e.setState({error:null})},e.setApplications=function(t){e.setState({applications:t})},e.removeApplication=function(t){var n=e.state.applications;n=n.filter((function(e){return e.id!==t})),e.setApplications(n)},e.addStatus=function(t,n){var c=e.state.applications,a={id:n=parseInt(n),date:new Date};c.find((function(e){return e.id===t})).column.push(a),e.setState({applications:Object(l.a)(e.state.applications)})},e.getApplicationIdx=function(t){return e.state.applications.findIndex((function(e){return e.id===t}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e={applications:this.state.applications,error:this.state.error,setError:this.setError,clearError:this.clearError,setApplications:this.setApplications,removeApplication:this.removeApplication,addStatus:this.addStatus};return Object(c.jsx)(m.Provider,{value:e,children:this.props.children})}}]),n}(a.Component);n(39);function v(e){return Object(c.jsx)("div",{className:"NavBar",children:Object(c.jsx)("div",{className:"container",children:"Job Tracker"})})}var f=n(10),x=n(3),y=n(60);n(40);function g(e){var t=e.application,n=t.id,a=t.company,i=t.job,o=t.column,r=o[o.length-1].date;return r=Object(y.a)(r,"MMM dd, yyyy"),Object(c.jsx)(s.b,{className:"Card",to:"/?app=".concat(n),children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"company",children:a}),Object(c.jsx)("div",{className:"job",children:i}),Object(c.jsx)("div",{className:"date",children:r})]})})}n(45);function S(e){var t=e.id,n=Object(a.useContext)(h).applications;return n&&(n=n.filter((function(e){return e.column[e.column.length-1].id===t}))),n&&(n=n.map((function(e,t){return Object(c.jsx)(g,{application:e},t)}))),Object(c.jsx)("div",{className:"Column",children:Object(c.jsx)("div",{className:"card-container",children:n})})}n(46);function C(e){var t=e.options,n=e.selected,a=e.handleChange,i=t.map((function(e,t){return Object(c.jsx)("option",{value:e.id,children:e.name},t)}));return Object(c.jsx)("select",{className:"Options",value:n,onChange:function(e){return a(e)},children:i})}n(47);function N(e){var t=e.column,n=e.columns;return t=t.map((function(e,t){var a=n.find((function(t){return t.id===e.id}));return a=a.name,Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"name",children:a}),Object(c.jsx)("div",{className:"date",children:Object(y.a)(e.date,"MMM dd")})]},t)})),Object(c.jsx)("div",{className:"History",children:Object(c.jsx)("ul",{children:t})})}var w=n(5),D=n(24),A=n(15),k=n(16);n(51);function F(e){return Object(c.jsx)("div",{className:"Overlay ".concat(e.className),children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)(s.b,{to:"/",className:"close",children:Object(c.jsx)(A.a,{icon:k.a})}),e.ellipsis&&Object(c.jsx)("button",{type:"button",className:"ellipsis-button",onClick:function(t){return e.ellipsisClick(t)},children:Object(c.jsx)(A.a,{icon:k.b})})]}),e.children]})})}function T(e){return Object(c.jsx)("div",{className:"LabelGroup ".concat(e.className),children:e.children})}function I(e){var t=e.error,n=e.className,a=Object(D.a)(e,["error","className"]),i=t?["Input","Input--error",n]:["Input",n];return Object(c.jsx)("input",Object(w.a)({className:i.join(" ")},a))}function E(e){var t=e.className,n=Object(D.a)(e,["className"]);return Object(c.jsx)("label",Object(w.a)({className:["Label",t].join(" ")},n))}F.defaultProps={ellipsesClick:function(){}};n(52);function L(e){var t=Object(a.useContext)(h),n=Object(x.d)(),i=Object(a.useState)(!1),o=Object(f.a)(i,2),r=o[0],s=o[1],l=t.applications,u=t.removeApplication,d=t.addStatus,j=e.columns,p=e.appId;var b=l.find((function(e){return e.id===p})),m=b.column,O=b.job,v=b.company,y=b.site,g=m.length;return Object(c.jsxs)(F,{className:"LargeCard",ellipsis:!0,ellipsisClick:function(e){e.preventDefault(),s(!0)},children:[r&&Object(c.jsxs)("div",{className:"ellipsis-menu",children:[Object(c.jsx)("button",{type:"button",onClick:function(){n.push("/?edit=".concat(p))},children:"Edit"}),Object(c.jsx)("button",{type:"button",onClick:function(){n.push("/"),u(p)},children:"Delete"})]}),Object(c.jsxs)("header",{onClick:function(e){return s(!1)},children:[Object(c.jsx)("h2",{children:Object(c.jsx)("a",{href:y,rel:"noreferrer",target:"_blank",children:v})}),Object(c.jsx)("div",{className:"job",children:O})]}),Object(c.jsxs)("div",{className:"content",onClick:function(e){return s(!1)},children:[Object(c.jsx)(C,{options:j,selected:m[g-1].id,handleChange:function(e){var t=e.target.value;d(p,t)}}),Object(c.jsx)(N,{column:m,columns:j})]})]})}var M=n(13);n(53);function J(e){var t=e.columns,n=e.application,i=n.column,o=Object(a.useContext)(h),r=o.setApplications,s=o.applications;function u(e,t){var c=e.date.split("-"),a=Object(f.a)(c,3),i=a[0],o=a[1],u=a[2];o=parseInt(o)-1;var d=new Date(i,o,u);u&&(n.column[t].date=d,n.column[t].id=parseInt(e.id),r(Object(l.a)(s)))}function d(e){i.splice(e,1),r(Object(l.a)(s))}return Object(c.jsx)("div",{className:"EditStatus",children:i.map((function(e,n){return Object(c.jsx)(P,{id:e.id,date:e.date,idx:n,columns:t,colLength:i.length,handleStatusChange:u,removeStatus:d},n)}))})}function P(e){var t=e.idx,n=e.id,i=e.date,o=e.columns,r=e.handleStatusChange,s=e.removeStatus,l=e.colLength,u=i.getFullYear(),d=i.getMonth()+1;d=(d=d.toString()).lenght>1?d:"0".concat(d);var j=i.getDate().toString();j=j.length>1?j:"0".concat(j);var p="".concat(u,"-").concat(d,"-").concat(j),b=Object(a.useState)({id:n,date:p}),m=Object(f.a)(b,2),h=m[0],O=m[1];return Object(c.jsxs)("div",{className:"Status",children:[Object(c.jsx)("div",{className:"divider"}),Object(c.jsxs)("div",{className:"options-container",children:[Object(c.jsx)(C,{options:o,selected:h.id,handleChange:function(e){var n=Object(w.a)(Object(w.a)({},h),{},{id:e.target.value});O(n),r(n,t)}}),l>1&&Object(c.jsx)(A.a,{icon:k.c,onClick:function(e){return s(t)}})]}),Object(c.jsxs)(T,{children:[Object(c.jsx)(E,{htmlFor:"statusDate".concat(t),children:"Date"}),Object(c.jsx)(I,{type:"date",id:"statusDate".concat(t),name:"statusDate".concat(t),value:h.date,onChange:function(e){return function(e){var n=e.target.value,c=Object(w.a)(Object(w.a)({},h),{},{date:n});O(c),r(c,t)}(e)}})]})]})}n(54);function B(e){var t=Object(a.useContext)(h),n=t.applications,i=e.appId,o=e.columns,r=Object(x.d)(),s=n.find((function(e){return e.id===i})),u=Object(a.useState)({company:{value:s.company,touched:!1},companySite:{value:s.site,touched:!1},jobTitle:{value:s.job,touched:!1}}),d=Object(f.a)(u,2),j=d[0],p=d[1];function b(e){var t=e.target,n=t.name,c=t.value;p(Object(w.a)(Object(w.a)({},j),{},Object(M.a)({},n,{value:c,touched:!0})))}return Object(c.jsx)(F,{className:"LargeCardEdit",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.company=j.company.value,s.site=j.companySite.value,s.job=j.jobTitle.value,t.setApplications(Object(l.a)(n)),r.push("/")},children:[Object(c.jsxs)(T,{children:[Object(c.jsx)(E,{htmlFor:"company",children:"Company"}),Object(c.jsx)(I,{type:"text",id:"company",name:"company",placeholder:"ex: Mindera",value:j.company.value,onChange:function(e){return b(e)}})]}),Object(c.jsxs)(T,{children:[Object(c.jsx)(E,{htmlFor:"companySite",children:"Company Site"}),Object(c.jsx)(I,{type:"url",id:"companySite",name:"companySite",value:j.companySite.value,onChange:function(e){return b(e)}})]}),Object(c.jsxs)(T,{children:[Object(c.jsx)(E,{htmlFor:"jobTitle",children:"Job Title"}),Object(c.jsx)(I,{type:"text",id:"jobTitle",name:"jobTitle",value:j.jobTitle.value,onChange:function(e){return b(e)}})]}),Object(c.jsx)(J,{application:s,columns:o}),Object(c.jsx)("button",{type:"submit",children:"Save"})]})})}n(55);function G(e){var t=Object(x.d)(),n=Object(a.useContext)(h),i=Object(a.useState)({company:{value:"",touched:!1},companySite:{value:"",touched:!1},jobTitle:{value:"",touched:!1}}),o=Object(f.a)(i,2),r=o[0],s=o[1];function u(e){var t=e.target,n=t.name,c=t.value;s(Object(w.a)(Object(w.a)({},r),{},Object(M.a)({},n,{value:c,touched:!0})))}return Object(c.jsx)(F,{className:"AddApplication",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=Object(b.a)(),a={id:c,column:[{id:0,date:new Date}],company:r.company.value,job:r.jobTitle.value,site:r.companySite.value},i=n.applications;(0,n.setApplications)([].concat(Object(l.a)(i),[a])),s({company:{value:"",touched:!1},companySite:{value:"",touched:!1},jobTitle:{value:"",touched:!1}}),t.push("/?app=".concat(c))},children:[Object(c.jsxs)(T,{children:[Object(c.jsx)(E,{htmlFor:"company",children:"Company"}),Object(c.jsx)(I,{type:"text",id:"company",name:"company",placeholder:"ex: Mindera",value:r.company.value,onChange:function(e){return u(e)}})]}),Object(c.jsxs)(T,{children:[Object(c.jsx)(E,{htmlFor:"companySite",children:"Company Site"}),Object(c.jsx)(I,{type:"url",id:"companySite",name:"companySite",value:r.companySite.value,onChange:function(e){return u(e)}})]}),Object(c.jsxs)(T,{children:[Object(c.jsx)(E,{htmlFor:"jobTitle",children:"Job Title"}),Object(c.jsx)(I,{type:"text",id:"jobTitle",name:"jobTitle",value:r.jobTitle.value,onChange:function(e){return u(e)}})]}),Object(c.jsx)("button",{type:"submit",children:"Save"})]})})}n(56);function R(e){var t=Object(a.useContext)(h).applications,n=new URLSearchParams(Object(x.e)().search),i=n.get("app"),o=n.get("edit"),r=n.get("add"),l=Object(a.useState)([{id:0,name:"Applied"},{id:1,name:"Intro Interview"},{id:2,name:"Recruiter Call"},{id:3,name:"Sent Follow-up"},{id:4,name:"Coding Challenge"},{id:5,name:"Sent Follow-up"},{id:6,name:"Technical Interview"},{id:7,name:"Sent Follow-up"},{id:8,name:"Onsite Interview"},{id:9,name:"Offer Letter Date"}]),u=Object(f.a)(l,2),d=u[0],j=(u[1],d.map((function(e,t){return Object(c.jsx)("div",{children:e.name},t)}))),p=d.map((function(e){return Object(c.jsx)(S,{id:e.id},e.id)}));return Object(c.jsxs)("div",{className:"ApplicationsPage",children:[Object(c.jsx)("div",{className:"top",children:Object(c.jsx)(s.b,{to:"/?add=true",className:"add-app",children:"Add"})}),Object(c.jsx)("div",{className:"column-headers",children:j}),Object(c.jsx)("div",{className:"columns",children:p}),t.find((function(e){return e.id===i}))&&Object(c.jsx)(L,{columns:d,appId:i}),t.find((function(e){return e.id===o}))&&Object(c.jsx)(B,{columns:d,appId:o}),"true"===r&&Object(c.jsx)(G,{})]})}n(57);var U=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(v,{}),Object(c.jsx)(R,{})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};n(58);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(s.a,{children:Object(c.jsx)(O,{children:Object(c.jsx)(U,{})})})}),document.getElementById("root")),W()}},[[59,1,2]]]);
//# sourceMappingURL=main.30775122.chunk.js.map