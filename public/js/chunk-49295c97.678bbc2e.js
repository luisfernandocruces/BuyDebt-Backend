(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49295c97"],{"297c":function(t,e,a){"use strict";a("a9e3");var r=a("2b0e"),i=a("37c6");e["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2e11":function(t,e,a){t.exports=a.p+"img/arrow.396ce290.png"},"37c6":function(t,e,a){"use strict";a("a9e3"),a("c7cd");var r=a("5530"),i=a("ade3"),s=(a("6ece"),a("0789")),n=a("a9ad"),o=a("fe6c"),c=a("a452"),l=a("7560"),d=a("80d2"),u=a("58df"),h=Object(u["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]),g=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.$vuetify.rtl?"right":"left",Object(d["g"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(d["g"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["c"]:s["d"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["p"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),a=e.width;this.internalValue=t.offsetX/a*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=g},"41e8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pantalla"},[r("div",{staticClass:"column1"},[r("img",{staticClass:"positionPerson1",attrs:{src:a("dfd1"),height:"200",width:"400"}}),r("v-card",{staticClass:"white--text sizeCard",attrs:{color:"purple"}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"centerTitle sizeTitle"},[t._v("¡Bienvenido!")]),r("p",{staticClass:"text-justify space"},[t._v("Como persona jurídica en nuestra plataforma, podrá ofertar deudas que tengan las demás empresas con usted a lago plazo, dentro de su portafolio. Esto permitirá que diferentes inversionistas la compren a un menor precio pero ofreciendole un flujo efectivo en el presente. ¡No deje desaprovechar esta oportunidad!")])])])],1),r("div",{staticClass:"centerButton"},[r("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",color:"purple darken-2",to:"/registerDebt",dark:""}},[r("i",{staticClass:"fas fa-plus-circle"}),r("v-icon",{attrs:{dark:"",left:""}},[t._v("mdi-plus-circle")]),t._v("Crear venta deuda ")],1)],1)],1),t._m(0)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column2"},[r("div",{staticClass:"row1"},[r("img",{attrs:{src:a("2e11"),height:"150",width:"150"}}),r("img",{staticClass:"money",attrs:{src:a("a4ec"),height:"150",width:"150"}}),r("img",{staticClass:"rotate1",attrs:{src:a("2e11"),height:"150",width:"150"}})]),r("div",{staticClass:"row2"},[r("img",{attrs:{src:a("9f43"),height:"150",width:"150"}}),r("img",{staticClass:"rotate2",attrs:{src:a("2e11"),height:"150",width:"150"}}),r("img",{attrs:{src:a("d83d"),height:"150",width:"150"}})])])}],s={name:"WelcomeJudicialPerson"},n=s,o=(a("e6d6"),a("2877")),c=a("6544"),l=a.n(c),d=a("8336"),u=a("b0af"),h=a("99d9"),g=a("132d"),f=Object(o["a"])(n,r,i,!1,null,"66a59fbf",null);e["default"]=f.exports;l()(f,{VBtn:d["a"],VCard:u["a"],VCardTitle:h["d"],VIcon:g["a"]})},"615b":function(t,e,a){},"6ece":function(t,e,a){},7079:function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return c}));var r=a("b0af"),i=a("80d2"),s=Object(i["h"])("v-card__actions"),n=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),c=Object(i["h"])("v-card__title");r["a"]},"9f43":function(t,e,a){t.exports=a.p+"img/increase.ea5d500a.png"},a4ec:function(t,e,a){t.exports=a.p+"img/money.da1601bd.png"},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var r=a("5530"),i=(a("615b"),a("10d2")),s=a("297c"),n=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(s["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(r["a"])({"v-card":!0},n["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},d83d:function(t,e,a){t.exports=a.p+"img/idea.8dfcb8b6.png"},dfd1:function(t,e,a){t.exports=a.p+"img/person3.c0a7eaf8.png"},e6d6:function(t,e,a){"use strict";var r=a("7079"),i=a.n(r);i.a}}]);
//# sourceMappingURL=chunk-49295c97.678bbc2e.js.map