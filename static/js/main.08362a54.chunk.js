(this["webpackJsonpfuture-group-test"]=this["webpackJsonpfuture-group-test"]||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},3:function(e,t,a){e.exports={loader:"Loader_loader__3MXRD",dot:"Loader_dot__2IXY8",dots:"Loader_dots__30LQn",first:"Loader_first__1DZ3R",second:"Loader_second__1DNol",third:"Loader_third__DhPq-"}},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),i=a(22),c=a(4),o=a(6),m=a.n(o),u=a(2),d=a(18),f=a(19),p=a(20),b=a(23),h=a(21),v=a(24),N=a(7),E=a.n(N),x=a(5),g=(a(50),function(e){var t=e.handleSubmit,a=e.handleChange,n=e.data,l=e.isCompleted,s=n.id,i=n.firstName,c=n.lastName,o=n.email,m=n.phone;return r.a.createElement("form",{className:"form",onSubmit:t(n)},r.a.createElement("input",{className:"input",type:"number",value:s,onChange:a("id"),placeholder:"id",name:"id"}),r.a.createElement("input",{className:"input",type:"text",value:i,onChange:a("firstName"),placeholder:"firstName",name:"firstName"}),r.a.createElement("input",{className:"input",type:"text",value:c,onChange:a("lastName"),placeholder:"lastName",name:"lastName"}),r.a.createElement("input",{className:"input",type:"email",value:o,onChange:a("email"),placeholder:"email",name:"email"}),r.a.createElement("input",{className:"input",type:"tel",value:m,onChange:a("phone"),placeholder:"phone number",name:"phone"}),r.a.createElement("button",{typs:"submit button",disabled:!l},"Add"))}),S=function(e){var t=e.data,a=e.goTo,n=e.isFirstPage,l=e.isLastPage,s=e.dataSize,i=e.sort,c=e.setActive,o=e.sortBy,m=e.sortDirection,u=function(e){return o===e?"table-heading__item sort-by ".concat(m):"table-heading__item"};return r.a.createElement(r.a.Fragment,null,"big"===s&&r.a.createElement("div",{className:"table-buttons"},r.a.createElement("button",{className:"button previous",onClick:a("previous"),disabled:n},"Previous"),r.a.createElement("button",{className:"button next",onClick:a("next"),disabled:l},"Next")),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table-heading"},r.a.createElement("tr",null,r.a.createElement("th",{className:u("id"),onClick:i("id")},"id"),r.a.createElement("th",{className:u("firstName"),onClick:i("firstName")},"firstName"),r.a.createElement("th",{className:u("lastName"),onClick:i("lastName")},"lastName"),r.a.createElement("th",{className:u("email"),onClick:i("email")},"email"),r.a.createElement("th",{className:u("phone"),onClick:i("phone")},"phone"))),r.a.createElement("tbody",null,t&&t.map((function(e){var t=e.id,a=e.firstName,n=e.lastName,l=e.email,s=e.phone;return r.a.createElement("tr",{key:t,onClick:c(t)},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,s))})))))},C=a(3),_=a.n(C),y=function(){var e="".concat(_.a.dot," ").concat(_.a.first),t="".concat(_.a.dot," ").concat(_.a.second),a="".concat(_.a.dot," ").concat(_.a.third);return r.a.createElement("div",{className:_.a.loader},r.a.createElement("span",{className:e}),r.a.createElement("span",{className:t}),r.a.createElement("span",{className:a}))},D=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.text;return r.a.createElement("form",{className:"filter",onSubmit:a},r.a.createElement("input",{className:"input",type:"text",value:n,onChange:t}),r.a.createElement("button",{className:"button button-submit",type:"submit"},"Filter"))},w=function(e){var t=e.firstName,a=e.lastName,n=e.address,l=e.description;return r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"info__item"},"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",r.a.createElement("b",null,"".concat(t," ").concat(a))),r.a.createElement("label",{htmlFor:"description",className:"info__item"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),r.a.createElement("textarea",{className:"info__item",name:"",id:"description",cols:"30",rows:"10",defaultValue:l}),r.a.createElement("span",{className:"info__item"},"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",r.a.createElement("b",null,n.streetAddress)),r.a.createElement("span",{className:"info__item"},"\u0413\u043e\u0440\u043e\u0434: ",n.city),r.a.createElement("span",{className:"info__item"},"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",n.state),r.a.createElement("span",null,"\u0418\u043d\u0434\u0435\u043a\u0441: ",n.zip))},j={big:new URL("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"),small:new URL("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},O={next:1,previous:-1},k=function(e){return e.every((function(e){return e}))},L=function(e,t){var a=Object.values(e);return k(a)&&!t||!k(a)&&t},F=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={appState:"initial",errorText:"",activeId:null,form:{isCompleted:!1,formData:{id:"",firstName:"",lastName:"",email:"",phone:""}},table:{tableData:null,dataSize:"small",sortBy:null,sortDirection:null,page:1},filter:{text:"",value:""}},a.componentDidUpdate=Object(d.a)(m.a.mark((function e(){var t,n,r,l,s,i,c,o,d,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,n=t.appState,r=t.form,l=r.formData,s=r.isCompleted,i=t.table,!L(l,s)){e.next=4;break}return a.setState({form:{formData:l,isCompleted:!s}}),e.abrupt("return");case 4:if("request"===n){e.next=6;break}return e.abrupt("return");case 6:return c=j[i.dataSize].href,e.prev=7,e.next=10,E.a.get(c);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(7),a.setState({appState:"fail",errorText:e.t0.message}),e.abrupt("return");case 16:return e.next=18,E.a.get(c);case 18:o=e.sent,d=o.data,f=x.uniqBy(d,"id"),a.setState({appState:"success",table:Object(u.a)({},i,{tableData:f})});case 22:case"end":return e.stop()}}),e,null,[[7,12]])}))),a.handleFormChange=function(e){return function(t){var n=t.target.value,r=a.state.form.formData;a.setState({form:{formData:Object(u.a)({},r,Object(c.a)({},e,n))}})}},a.addRow=function(e){return function(t){t.preventDefault();var n=a.state.table;if(n.tableData.find((function(t){return t.id===+e.id})))alert("User with ".concat(e.id," already exists. Choose another id."));else{var r=Object(u.a)({},n,{tableData:[e].concat(Object(i.a)(a.state.table.tableData))});a.setState({table:r}),alert("Record added succesfully.")}}},a.goTo=function(e){return function(){var t=a.state.table,n=O[e]||0,r=Object(u.a)({},t,{page:t.page+n});a.setState({table:r,activeId:null})}},a.chooseDataSize=function(e){return function(){var t=a.state,n=t.table,r=t.form,l=Object(u.a)({},n,{dataSize:e});a.setState({appState:"request",form:r,table:l})}},a.sort=function(e){return function(){var t=a.state.table,n="asc"===t.sortDirection?"desc":"asc",r=x.sortBy(t.tableData,(function(t){return t[e]})),l="asc"===n?r:r.reverse();a.setState({table:Object(u.a)({},t,{tableData:l,sortDirection:n,sortBy:e})})}},a.handleFilterChange=function(e){var t=e.target.value,n=a.state.filter.value;a.setState({filter:{text:t,value:n}})},a.handleFilterSubmit=function(e){e.preventDefault();var t=a.state,n=t.filter.text,r=t.table;a.setState({filter:{value:n,text:n},table:Object(u.a)({},r,{page:1}),activeId:null})},a.setActive=function(e){return function(){var t=Object(u.a)({},a.state);a.setState(Object(u.a)({},t,{activeId:e}))}},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.appState,a=e.filter,n=e.activeId,l=e.errorText,s=e.form,i=s.isCompleted,c=s.formData,o=e.table,m=o.tableData,u=o.dataSize,d=o.page,f=o.sortBy,p=o.sortDirection,b=a.value?x.filter(m,(function(e){return function(e,t){var a=Object.values(e).map((function(e){return e.toString().toLowerCase()})),n=t.toString().toLowerCase(),r=!1,l=!0,s=!1,i=void 0;try{for(var c,o=a[Symbol.iterator]();!(l=(c=o.next()).done);l=!0){if(c.value.includes(n)){r=!0;break}}}catch(m){s=!0,i=m}finally{try{l||null==o.return||o.return()}finally{if(s)throw i}}return r}(e,a.value)})):m,h=b&&b.find((function(e){return e.id===n})),v=1===d,N=b&&d===Math.floor(b.length/50)+1,E=50*(d-1),C=50*d,_={data:m&&b.slice(E,C),dataSize:u,goTo:this.goTo,isFirstPage:v,isLastPage:N,sort:this.sort,setActive:this.setActive,sortDirection:p,sortBy:f};return r.a.createElement("div",{className:"App"},"initial"===t&&r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"button button-initial",onClick:this.chooseDataSize("big")},"Big data"),r.a.createElement("button",{className:"button button-initial",onClick:this.chooseDataSize("small")},"Small data")),"request"===t&&r.a.createElement(y,null),"success"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{handleChange:this.handleFilterChange,handleSubmit:this.handleFilterSubmit,text:a.text}),r.a.createElement(g,{isCompleted:i,data:c,handleSubmit:this.addRow,handleChange:this.handleFormChange}),r.a.createElement(S,_)),"fail"===t&&r.a.createElement("div",{className:"fail"},r.a.createElement("span",{className:"error-message"},l),r.a.createElement("a",{href:"."},"Go back")),n&&r.a.createElement(w,h))}}]),t}(r.a.Component);s.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.08362a54.chunk.js.map