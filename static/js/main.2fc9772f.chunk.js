(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={notFoundPage:"pages_notFoundPage__32a0X",kitty:"pages_kitty__29MJ7",headerWrapper:"pages_headerWrapper__3lJLD",panelToClick:"pages_panelToClick__2t0Ey",itemsWrapperShow:"pages_itemsWrapperShow__1YCqU",itemsWrapperHidden:"pages_itemsWrapperHidden__2G_6U",item:"pages_item__2QiMz",active:"pages_active__397iz"}},,function(e,a,t){e.exports={hw2Wrapper:"Affairs_hw2Wrapper__3R7XP",AffairsWrapper:"Affairs_AffairsWrapper__3eR39",AffairWrapper:"Affairs_AffairWrapper__34sF7",deleteBtn:"Affairs_deleteBtn__3gnQY",btnWrapper:"Affairs_btnWrapper__Npul3",forActiveBtn:"Affairs_forActiveBtn__36J7v"}},,,function(e,a,t){e.exports={hw3Wrapper:"Greeting_hw3Wrapper__1Uyb4",greetingContainerWrapper:"Greeting_greetingContainerWrapper__23vF_",greetingWrapper:"Greeting_greetingWrapper__2Q-Zt",error:"Greeting_error__25K9O",errorMessage:"Greeting_errorMessage__2AFMb",totalUsersResult:"Greeting_totalUsersResult__qTA7J"}},function(e,a,t){e.exports={Hw1Block:"Message_Hw1Block__2SySs",TxtWindow:"Message_TxtWindow__OR2Ac",Avatar:"Message_Avatar__3Ub4f",Name:"Message_Name__clbkN",Time:"Message_Time__2Grae"}},,,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__xxVO-",errorInput:"SuperInputText_errorInput__2CY1s",error:"SuperInputText_error__7ulbm",spanClassName:"SuperInputText_spanClassName__kVybu"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__NfT6r",spanClassName:"SuperCheckbox_spanClassName__25Otv"}},,function(e,a,t){e.exports={default:"SuperButton_default__3CZhN",red:"SuperButton_red__2hv4o"}},,,,,,,function(e,a,t){e.exports={App:"App_App__2xFWW"}},function(e,a,t){e.exports={blue:"HW4_blue__acgP6",column:"HW4_column__6cqcm"}},function(e,a,t){e.exports={superEditableSpan:"SuperEditableSpan_superEditableSpan__1tXlA"}},,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),i=(t(34),t(25)),o=t.n(i),s=t(1),u=t(10),m=t(3),p=t.n(m),d=t(2),E=t(9),f=t.n(E),v=function(e){return r.a.createElement("div",{className:f.a.MessageWindow},r.a.createElement("div",{className:f.a.Avatar}," ",r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:f.a.TxtWindow},r.a.createElement("div",{className:f.a.Name},e.name),r.a.createElement("div",{className:f.a.Message},e.message),r.a.createElement("div",{className:f.a.Time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Artem",g="some text",b="22:00",k=function(){return r.a.createElement("div",{className:f.a.Hw1Block},r.a.createElement("div",null,r.a.createElement(v,{avatar:_,name:h,message:g,time:b})))},C=t(5),N=t.n(C);var O=function(e){return r.a.createElement("div",{className:N.a.AffairWrapper},e.name,r.a.createElement("button",{className:N.a.deleteBtn,onClick:function(){e.deleteAffairCallback(e.id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,id:a._id,affair:a,name:a.name,deleteAffairCallback:e.deleteAffairCallback})})),t="all"===e.filter?N.a.forActiveBtn:"",n="high"===e.filter?N.a.forActiveBtn:"",l="middle"===e.filter?N.a.forActiveBtn:"",c="low"===e.filter?N.a.forActiveBtn:"";return r.a.createElement("div",{className:N.a.AffairsWrapper},a,r.a.createElement("div",{className:N.a.btnWrapper},r.a.createElement("button",{className:t,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:n,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:l,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:c,onClick:function(){e.setFilter("low")}},"Low")))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(j),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(s.a)(c,2),o=i[0],u=i[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("div",{className:N.a.hw2Wrapper},r.a.createElement(w,{data:m,setFilter:u,deleteAffairCallback:function(e){l(function(e,a){return e=e.filter((function(e){return e._id!=a}))}(t,e))},filter:o})),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(14),S=t(8),A=t.n(S),x=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=e.onKeyPress,o=A.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,onKeyPress:i,className:l?o:""}),l&&r.a.createElement("div",{className:A.a.errorMessage},l),r.a.createElement("button",{onClick:function(){n(a)}},"add"),r.a.createElement("div",{className:A.a.totalUsersResult},"Total friends  ",c))},T=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),i=c[0],o=c[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],d=m[1],E=a.length;return r.a.createElement("div",null,r.a.createElement(x,{name:i,setNameCallback:function(e){e.currentTarget.value&&d(""),o(e.currentTarget.value)},addUser:function(e){""!==e.trim()?(t(e.trim()),o("")):d("enter correct name")},error:p,totalUsers:E,onKeyPress:function(e){e.currentTarget.value?"Enter"===e.key&&(d(""),t(i.trim()),o("")):d("enter correct name")}}),a.map((function(e){return r.a.createElement("p",{className:A.a.greetingWrapper},"Hello ",e.name,"!")})))},B=t(42);var P=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:A.a.hw3Wrapper},r.a.createElement("hr",null),"homeworks 3",r.a.createElement("div",{className:A.a.greetingContainerWrapper},r.a.createElement(T,{users:t,addUserCallback:function(e){var a={_id:Object(B.a)(),name:e};l([].concat(Object(W.a)(t),[a]))}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(7),M=t(15),H=t.n(M),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=(e.className,e.spanClassName),o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(H.a.error," ").concat(i||""),u="".concat(c?H.a.errorInput:H.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},o)),c&&r.a.createElement("span",{className:s},c))},U=t(26),J=t.n(U),G=t(18),K=t.n(G),R=function(e){var a=e.red,t=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(a?K.a.red:K.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},D=t(16),L=t.n(D),X=function(e){e.type,e.onChange;var a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),l=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(L.a.checkbox," ").concat(t||"");return r.a.createElement("label",{className:L.a.label},r.a.createElement("p",{className:c},"1111"),r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:L.a.spanClassName},n))};var q=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):l(t)},o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],p=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:i,error:c}),r.a.createElement(R,{onClick:i},"delete "),r.a.createElement(X,{checked:m,onChangeChecked:p},"check me "),r.a.createElement(X,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})))},Y=t(27),Q=t.n(Y),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),i=Object(n.useState)(!1),o=Object(s.a)(i,2),u=o[0],m=o[1],p=l||{},d=p.children,E=p.onDoubleClick,f=p.className,v=Object(F.a)(p,["children","onDoubleClick","className"]),_="".concat(Q.a.superEditableSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:_},v),d||c.value))};function z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function V(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}z("test",{x:"A",y:1});V("test",{x:"",y:0});var $=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"doubleclick and enter text..."}})),r.a.createElement(R,{onClick:function(){z("editable-span-value",t)}},"save"),r.a.createElement(R,{onClick:function(){l(V("editable-span-value",t))}},"restore"),r.a.createElement("hr",null))};var ee=function(){return r.a.createElement("div",null,"123",r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(P,null),r.a.createElement(q,null),r.a.createElement($,null))};var ae=function(){return r.a.createElement("div",{className:p.a.notFoundPage},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",{className:p.a.kitty},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var te=function(){var e=Object(n.useState)("y"),a=Object(s.a)(e,2);return a[0],a[1],r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7")},ne="homeworks/HW8/SORT",re=function(e,a){switch(a.type){case ne:var t=Object(W.a)(e).sort((function(e,a){return e.name>a.name?1:a.name>e.name?-1:0}));return"down"===a.payload?t:"up"===a.payload?t.reverse():e;case"homeworks/HW8/CHECK":return e.filter((function(e){return e.age>=18}));default:return e}},le=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ce=function(){var e=Object(n.useState)(le),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name," "),r.a.createElement("span",null," -",e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"HW 8",c,r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(re(le,{type:ne,payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(re(le,{type:ne,payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(re(le,{type:"homeworks/HW8/CHECK",payload:"sortBy18"}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ie=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),i=Object(s.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),d=p[0],E=p[1],f=o.toLocaleTimeString(),v=o.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},f),d&&r.a.createElement("div",null,v),r.a.createElement(R,{onClick:function(){var e=setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(R,{onClick:function(){clearInterval(t)}},"stop"))};var oe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ie,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var se=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ue=function(){return r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement(ce,null),r.a.createElement(oe,null),r.a.createElement(se,null))};var me=function(){return r.a.createElement("div",null)},pe="/pre-junior",de="/junior",Ee="/juniorPlus";var fe=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:pe})}}),r.a.createElement(d.b,{path:pe,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(d.b,{path:de,render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(d.b,{path:Ee,render:function(){return r.a.createElement(me,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(ae,null)}})))};var ve=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:p.a.headerWrapper},r.a.createElement("div",{className:t?p.a.itemsWrapperShow:p.a.itemsWrapperHidden},r.a.createElement("div",{className:p.a.item},r.a.createElement(u.b,{to:"/pre-junior",activeClassName:p.a.active},"PreJunior")),r.a.createElement("div",{className:p.a.item},r.a.createElement(u.b,{to:de,activeClassName:p.a.active},"Junior")),r.a.createElement("div",{className:p.a.item},r.a.createElement(u.b,{to:"/juniorPlus",activeClassName:p.a.active},"Junior+")),r.a.createElement("div",{className:p.a.item},r.a.createElement(u.b,{to:"/blabla",activeClassName:p.a.active},"nothing to see"))),r.a.createElement("button",{onClick:function(){l(!t)},className:p.a.panelToClick}," Menu "))};var _e=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(ve,null),r.a.createElement(fe,null)))};var he=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.2fc9772f.chunk.js.map