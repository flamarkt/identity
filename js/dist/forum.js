module.exports=function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}([function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var a=function(){function t(){this.firstname="",this.lastname="",this.birthday="",this.addressStreet="",this.addressNumber="",this.addressCity="",this.addressZip="",this.addressState="",this.addressCountry=""}var e=t.prototype;return e.valuesFromUser=function(t){this.firstname=t.firstname()||"",this.lastname=t.lastname()||"",this.birthday=t.birthday()||"",this.addressStreet=t.addressStreet()||"",this.addressNumber=t.addressNumber()||"",this.addressCity=t.addressCity()||"",this.addressZip=t.addressZip()||"",this.addressState=t.addressState()||"",this.addressCountry=t.addressCountry()||""},e.data=function(){return{firstname:this.firstname,lastname:this.lastname,birthday:this.birthday,addressStreet:this.addressStreet,addressNumber:this.addressNumber,addressCity:this.addressCity,addressZip:this.addressZip,addressState:this.addressState,addressCountry:this.addressCountry}},t}()},function(t,e,r){"use strict";e.a=function(t,e,r){return t.add("firstname",m(".Form-group",[m("label",{for:"settings-firstname"},app.translator.trans("flamarkt-identity.lib.field.firstname")),m("input.FormControl",{id:"settings-firstname",type:"text",value:e.firstname,oninput:function(t){e.firstname=t.target.value,r()}})])),t.add("lastname",m(".Form-group",[m("label",{for:"settings-lastname"},app.translator.trans("flamarkt-identity.lib.field.lastname")),m("input.FormControl",{id:"settings-lastname",type:"text",value:e.lastname,oninput:function(t){e.lastname=t.target.value,r()}})])),t.add("birthday",m(".Form-group",[m("label",{for:"settings-birthday"},app.translator.trans("flamarkt-identity.lib.field.birthday")),m("input.FormControl",{id:"settings-birthday",type:"date",value:e.birthday,oninput:function(t){e.birthday=t.target.value,r()}})])),t.add("addressStreet",m(".Form-group",[m("label",{for:"settings-addressStreet"},app.translator.trans("flamarkt-identity.lib.field.addressStreet")),m("input.FormControl",{id:"settings-addressStreet",type:"text",value:e.addressStreet,oninput:function(t){e.addressStreet=t.target.value,r()}})])),t.add("addressNumber",m(".Form-group",[m("label",{for:"settings-addressNumber"},app.translator.trans("flamarkt-identity.lib.field.addressNumber")),m("input.FormControl",{id:"settings-addressNumber",type:"text",value:e.addressNumber,oninput:function(t){e.addressNumber=t.target.value,r()}})])),t.add("addressCity",m(".Form-group",[m("label",{for:"settings-addressCity"},app.translator.trans("flamarkt-identity.lib.field.addressCity")),m("input.FormControl",{id:"settings-addressCity",type:"text",value:e.addressCity,oninput:function(t){e.addressCity=t.target.value,r()}})])),t.add("addressZip",m(".Form-group",[m("label",{for:"settings-addressZip"},app.translator.trans("flamarkt-identity.lib.field.addressZip")),m("input.FormControl",{id:"settings-addressZip",type:"text",value:e.addressZip,oninput:function(t){e.addressZip=t.target.value,r()}})])),t.add("addressState",m(".Form-group",[m("label",{for:"settings-addressState"},app.translator.trans("flamarkt-identity.lib.field.addressState")),m("input.FormControl",{id:"settings-addressState",type:"text",value:e.addressState,oninput:function(t){e.addressState=t.target.value,r()}})])),t.add("addressCountry",m(".Form-group",[m("label",{for:"settings-addressCountry"},app.translator.trans("flamarkt-identity.lib.field.addressCountry")),m("input.FormControl",{id:"settings-addressCountry",type:"text",value:e.addressCountry,oninput:function(t){e.addressCountry=t.target.value,r()}})])),t}},function(t,e,r){"use strict";var a=r(0),n=r.n(a),s=r(1),o=r.n(s);e.a=function(){n.a.prototype.firstname=o.a.attribute("firstname"),n.a.prototype.lastname=o.a.attribute("lastname"),n.a.prototype.birthday=o.a.attribute("birthday"),n.a.prototype.addressStreet=o.a.attribute("addressStreet"),n.a.prototype.addressNumber=o.a.attribute("addressNumber"),n.a.prototype.addressCity=o.a.attribute("addressCity"),n.a.prototype.addressZip=o.a.attribute("addressZip"),n.a.prototype.addressState=o.a.attribute("addressState"),n.a.prototype.addressCountry=o.a.attribute("addressCountry")}},,function(t,e){t.exports=flarum.core.compat["forum/components/SignUpModal"]},,function(t,e){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,e){t.exports=flarum.extensions["flamarkt-core"].forum["utils/AccountControls"]},function(t,e){t.exports=flarum.extensions["flamarkt-core"].forum["pages/AbstractAccountPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,e,r){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}r.r(e);var n=r(3),s=r.n(n),o=r(2),i=r(10),d=r.n(i),u=r(11),p=r.n(u);function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,l(t,e)}var f=r(12),y=r.n(f),b=r(13),h=r.n(b),g=r(4),v=r(14),C=r.n(v),S=r(15),x=r.n(S),F=r(5),k=function(t){function e(){return t.apply(this,arguments)||this}c(e,t);var r=e.prototype;return r.view=function(){return this.fields().toArray()},r.fields=function(){var t=this.attrs,e=t.state,r=t.onchange;return Object(F.a)(new x.a,e,r)},e}(C.a),O=function(t){function e(){for(var e,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))||this).state=new g.a,e.dirty=!1,e.saving=!1,e}c(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),s.a.session.user&&this.state.valuesFromUser(s.a.session.user)},r.breadcrumbItems=function(){var e=t.prototype.breadcrumbItems.call(this);return e.add("current",m("span.breadcrumb-current","Identity")),e},r.content=function(){var t=this;return m("form",{onsubmit:this.onsubmit.bind(this)},[k.component({state:this.state,onchange:function(){t.dirty=!0}}),m(".Form-group",h.a.component({type:"submit",className:"Button Button--primary",loading:this.saving,disabled:!this.dirty},s.a.translator.trans("flamarkt-identity.forum.settings.submit")))])},r.data=function(){return a({},this.state.data())},r.onsubmit=function(t){var e=this;t.preventDefault(),this.saving=!0,s.a.session.user.save(this.data()).then((function(){e.saving=!1,e.dirty=!1,m.redraw()})).catch((function(t){throw e.saving=!1,m.redraw(),t}))},e}(y.a),j=r(8),N=r.n(j),Z=r(6);s.a.initializers.add("flamarkt-identity",(function(){Object(Z.a)(),s.a.routes["flamarkt.account.identity"]={path:"/account/identity",component:O},Object(o.extend)(p.a,"controls",(function(t){t.add("identity",d.a.component({href:s.a.route("flamarkt.account.identity")},"Identity"))})),Object(o.extend)(N.a.prototype,"oninit",(function(){this.flamarktIdentityState=new g.a})),Object(o.extend)(N.a.prototype,"fields",(function(t){t.add("flamarkt-identity",k.component({state:this.flamarktIdentityState,onchange:function(){}}))})),Object(o.override)(N.a.prototype,"submitData",(function(t){return a({},t(),this.flamarktIdentityState.data())}))}))}]);
//# sourceMappingURL=forum.js.map