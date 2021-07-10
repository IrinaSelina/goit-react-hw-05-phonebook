(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(7),i=n.n(o),s=n(4),l=n(16),u=n(8),b=n(9),d=n(12),j=n(10),m=n(37),h=n(3),O={addContact:Object(h.b)("contact/Add",(function(e,t){return{payload:{id:Object(m.a)(),name:e,number:t}}})),deleteContact:Object(h.b)("contacts/Delete"),addFilter:Object(h.b)("contacts/Filter")},f=(n(27),n(1)),p=function(e){var t=e.children;return Object(f.jsx)("section",{className:"container",children:t})},x=n(6),C=(n(29),n(30),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(x.a)({},t.currentTarget.name,t.currentTarget.value))},e.reset=function(){e.setState({name:"",number:""})},e.handelSubmit=function(t){var n=e.state,a=n.name,c=n.number;t.preventDefault(),e.props.onSubmit(a,c),e.reset()},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(f.jsxs)("form",{className:"form",onSubmit:this.handelSubmit,children:[Object(f.jsxs)("label",{className:"form-label",children:["Name:",Object(f.jsx)("input",{className:"form-input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:t})]}),Object(f.jsxs)("label",{className:"form-label",children:["Number:",Object(f.jsx)("input",{className:"form-input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:n})]}),Object(f.jsx)("button",{type:"submit",children:"Add contacts"})]})}}]),n}(c.Component)),v=Object(s.b)(null,(function(e){return{onSubmit:function(t,n){return e(O.addContact(t,n))}}}))(C),g=(n(31),Object(s.b)((function(e){var t=e.contacts,n=t.filter;t.items;return{contacts:e.contacts.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}}),(function(e){return{onDelete:function(t){return e(O.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.onDelete;return Object(f.jsx)("ul",{className:"contact-list",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(f.jsxs)("li",{className:"contact-item",children:[Object(f.jsxs)("span",{className:"contact-data-name",children:[a,":"]}),Object(f.jsx)("span",{className:"contact-data-number",children:c}),Object(f.jsx)("button",{className:"delete__btn",onClick:function(){return n(t)},type:"button",children:"Delete"})]},t)}))})}))),y=(n(32),Object(s.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(O.addFilter(t.target.value))}}}))((function(e){var t=e.onChange,n=e.value;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:" Find contact dy name "}),Object(f.jsx)("label",{children:Object(f.jsx)("input",{className:"filter-form",type:"",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:t,value:n})})]})}))),A=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(v,{}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(y,{}),Object(f.jsx)(g,{})]})}}]),n}(c.Component),N=Object(s.b)(null,(function(e){return{onSubmit:function(t){return e(O.addFilter(t))}}}))(A),k=n(11),w=n(2),z=n(5),S=Object(h.c)([],(a={},Object(x.a)(a,O.addContact,(function(e,t){var n=t.payload;return e.some((function(e){return e.name.toLocaleLowerCase()===n.name.toLocaleLowerCase()}))?(alert("".concat(n.name," is already in contacts")),e):[].concat(Object(k.a)(e),[n])})),Object(x.a)(a,O.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),F=Object(h.c)("",Object(x.a)({},O.addFilter,(function(e,t){return t.payload}))),L=Object(w.b)({items:S,filter:F}),Z=n(17),D=n.n(Z),J=Object(k.a)(Object(h.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),B={key:"items",storage:D.a,blacklist:["filter"]},M=Object(w.b)({contacts:Object(z.g)(B,L)}),T=(Object(z.g)(B,M),Object(h.a)({reducer:M,middleware:J,devTools:!1})),q={store:T,persistor:Object(z.h)(T)};n(35);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(s.a,{store:q.store,children:Object(f.jsx)(l.a,{loading:null,persistor:q.persistor,children:Object(f.jsx)(N,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5d1428e4.chunk.js.map