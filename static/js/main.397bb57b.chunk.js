(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{18:function(e,t,n){},2:function(e,t,n){e.exports={container:"ContactForm_container__31kRl",label:"ContactForm_label__3pxMN",input:"ContactForm_input__1cLhn",button:"ContactForm_button__1qdaK"}},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),i=n.n(r),o=(n(18),n(11)),s=n(3),u=n(22),l=n(2),b=n.n(l),m=n(1);function d(e){var t=e.submitProp,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],d=u[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}},p=function(){i(""),d("")};return Object(m.jsxs)("form",{className:b.a.container,onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),p()},children:[Object(m.jsx)("label",{className:b.a.label,id:r,children:"Name"}),Object(m.jsx)("input",{className:b.a.input,type:"text",id:"inputName",name:"name",value:r,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(m.jsx)("label",{className:b.a.label,id:r,children:"Number"}),Object(m.jsx)("input",{className:b.a.input,id:"inputNumber",type:"tel",name:"number",value:l,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(m.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})}var j=n(7),p=n.n(j),f=function(e){var t=e.getContact,n=e.deleteContact;return Object(m.jsx)("div",{className:p.a.container,children:Object(m.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsxs)("li",{className:p.a.item,children:[Object(m.jsxs)("span",{children:[a,": ",c]}),Object(m.jsx)("button",{className:p.a.btn,type:"submit",onClick:function(){return n(t)},children:"Delete"})]},t)}))})})},h=n(8),O=n.n(h),_=function(e){var t=e.value,n=e.change;return Object(m.jsxs)("div",{className:O.a.container,children:[Object(m.jsx)("p",{className:O.a.label,htmlFor:t.id,children:"Find contact"}),Object(m.jsx)("input",{id:Object(u.a)(),type:"text",className:O.a.input,name:"filter",onChange:n,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."})]})},x=n(9),v=n.n(x),C=n(12),N=(n(20),function(){var e=Object(a.useState)([{id:"id-1",name:"Denzel Hayes Washington Jr",number:"459-12-56"},{id:"id-2",name:"Julia Roberts",number:"443-89-12"},{id:"id-3",name:"Jennifer Aniston",number:"645-17-79"},{id:"id-4",name:"Robert De Niro",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],b=i[1],j="contacts";Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(j));c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem(j,JSON.stringify(n))}),[n]);var p=Object(a.useMemo)((function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}),[l,n]);return Object(m.jsxs)("div",{className:v.a.container,children:[Object(m.jsx)("h1",{className:v.a.title,children:"Phonebook"}),Object(m.jsx)(d,{submitProp:function(e){var t=e.name,n=e.number,a={name:t,number:n,id:Object(u.a)()};c((function(e){var n=e.find((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));if(n&&n.name.length===t.length)return C.b.error("".concat(t," is already in contacts")),Object(o.a)(e);c([a].concat(Object(o.a)(e)))}))}}),Object(m.jsx)("h2",{className:v.a.title,children:"Contacts"}),Object(m.jsx)(_,{change:function(e){b(e.currentTarget.value)},value:l}),Object(m.jsx)(f,{getContact:p,deleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}}),Object(m.jsx)(C.a,{})]})});i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"ContactList_container__2YV_D",item:"ContactList_item__2qmVc",btn:"ContactList_btn__1w5Sa"}},8:function(e,t,n){e.exports={container:"Filter_container__3Vo8Y",label:"Filter_label__2vciv",input:"Filter_input__3Dx9D",btn:"Filter_btn__1Yp9m"}},9:function(e,t,n){e.exports={container:"App_container__PAAzK",title:"App_title__5i3-G"}}},[[21,1,2]]]);
//# sourceMappingURL=main.397bb57b.chunk.js.map