(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commPages-nav~discoveryPages-case~homePages-group~newsPages-article"],{"06af":function(t,a,e){"use strict";e.r(a);var n=e("5370"),i=e("64cc");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("dd52");var o=e("828b"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2e0066d9",null,!1,n["a"],void 0);a["default"]=s.exports},"0c69":function(t,a,e){"use strict";e.r(a);var n=e("aa64"),i=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"1c65":function(t,a,e){"use strict";var n=e("3a7d"),i=e.n(n);i.a},2066:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("64aa"),e("5c47"),e("a1c1"),e("0506");var n={name:"tn-avatar-group",props:{lists:{type:Array,default:function(){return[]}},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},imgMode:{type:String,default:"aspectFill"},gap:{type:Number,default:.4}},computed:{itemStyle:function(){var t=this;return function(a){var e={};if(t._checkSizeIsInline())switch(t.size){case"sm":e.marginLeft=0!=a?"".concat(-48*t.gap,"rpx"):"";break;case"lg":e.marginLeft=0!=a?"".concat(-96*t.gap,"rpx"):"";break;case"xl":e.marginLeft=0!=a?"".concat(-128*t.gap,"rpx"):"";break}else{var n=Number(t.size.replace(/(px|rpx)/g,""))||64;e.marginLeft=0!=a?"-".concat(n*t.gap,"rpx"):""}return e}}},data:function(){return{}},methods:{_checkSizeIsInline:function(){return!!/(xs|sm|md|lg|xl|xxl)/.test(this.size)}}};a.default=n},"37e8":function(t,a,e){var n=e("6127");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("967d").default;i("71d090a7",n,!0,{sourceMap:!1,shadowMode:!1})},"3a7d":function(t,a,e){var n=e("6cdc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("967d").default;i("41b94d91",n,!0,{sourceMap:!1,shadowMode:!1})},"401c":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={tnBadge:e("634a").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tn-avatar-class tn-avatar",class:[t.backgroundColorClass,t.avatarClass],style:[t.avatarStyle],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[t.showImg?e("v-uni-image",{staticClass:"tn-avatar__img",class:[t.imgClass],attrs:{src:t.src,mode:t.imgMode||"aspectFill"},on:{error:function(a){arguments[0]=a=t.$handleEvent(a),t.loadImageError.apply(void 0,arguments)}}}):e("v-uni-view",{staticClass:"tn-avatar__text"},[t.text?e("v-uni-view",[t._v(t._s(t.text))]):e("v-uni-view",{class:["tn-icon-"+t.icon]})],1),t.badge&&(t.badgeIcon||t.badgeText)?e("tn-badge",{attrs:{radius:t.badgeSize,backgroundColor:t.badgeBgColor,fontColor:t.badgeColor,fontSize:t.badgeSize-8,absolute:!0,top:t.badgePosition[0],right:t.badgePosition[1]}},[t.badgeIcon&&""===t.badgeText?e("v-uni-view",[e("v-uni-view",{class:["tn-icon-"+t.badgeIcon]})],1):e("v-uni-view",[t._v(t._s(t.badgeText))])],1):t._e()],1)},r=[]},"4a3e":function(t,a,e){"use strict";e.r(a);var n=e("e143"),i=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},5370:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={tnAvatar:e("8641").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tn-avatar-group-class tn-avatar-group"},t._l(t.lists,(function(a,n){return e("v-uni-view",{key:n,staticClass:"tn-avatar-group__item",style:[t.itemStyle(n)]},[e("tn-avatar",{attrs:{src:a.src||"",text:a.text||"",icon:a.icon||"",size:t.size,shape:t.shape,imgMode:t.imgMode,border:!0,borderSize:4}})],1)})),1)},r=[]},6127:function(t,a,e){var n=e("c86c");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-avatar[data-v-40d88c0a]{display:inline-flex;margin:0;padding:0;text-align:center;align-items:center;justify-content:center;background-color:#e6e6e6;white-space:nowrap;position:relative;width:%?64?%;height:%?64?%;z-index:1}.tn-avatar--sm[data-v-40d88c0a]{width:%?48?%;height:%?48?%}.tn-avatar--lg[data-v-40d88c0a]{width:%?96?%;height:%?96?%}.tn-avatar--xl[data-v-40d88c0a]{width:%?128?%;height:%?128?%}.tn-avatar--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar--shadow[data-v-40d88c0a]{position:relative}.tn-avatar--shadow[data-v-40d88c0a]::after{content:" ";display:block;background:inherit;-webkit-filter:blur(%?10?%);filter:blur(%?10?%);position:absolute;width:100%;height:100%;top:%?10?%;left:%?10?%;z-index:-1;opacity:.4;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:inherit;-webkit-transform:scale(1);transform:scale(1)}.tn-avatar__img[data-v-40d88c0a]{width:100%;height:100%}.tn-avatar__img--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar__img--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar__text[data-v-40d88c0a]{display:flex;flex-direction:row;align-items:center;justify-content:center}',""]),t.exports=a},"634a":function(t,a,e){"use strict";e.r(a);var n=e("d183"),i=e("0c69");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("1c65");var o=e("828b"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5ef10296",null,!1,n["a"],void 0);a["default"]=s.exports},"64cc":function(t,a,e){"use strict";e.r(a);var n=e("2066"),i=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"6cdc":function(t,a,e){var n=e("c86c");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-badge[data-v-5ef10296]{width:auto;height:auto;box-sizing:border-box;display:flex;align-items:center;justify-content:center;z-index:10;font-size:%?20?%;background-color:#fff;border-radius:%?100?%;padding:%?4?% %?8?%;line-height:normal}.tn-badge--dot[data-v-5ef10296]{width:%?8?%;height:%?8?%;border-radius:50%;padding:0}.tn-badge--absolute[data-v-5ef10296]{position:absolute;top:0;right:0}.tn-badge--center-position[data-v-5ef10296]{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}',""]),t.exports=a},"73cc":function(t,a,e){var n=e("c86c");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-avatar-group[data-v-2e0066d9]{display:flex;flex-direction:row}.tn-avatar-group__item[data-v-2e0066d9]{position:relative}',""]),t.exports=a},8641:function(t,a,e){"use strict";e.r(a);var n=e("401c"),i=e("4a3e");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("8f7a");var o=e("828b"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"40d88c0a",null,!1,n["a"],void 0);a["default"]=s.exports},"8f7a":function(t,a,e){"use strict";var n=e("37e8"),i=e.n(n);i.a},9050:function(t,a,e){var n=e("73cc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("967d").default;i("74119e21",n,!0,{sourceMap:!1,shadowMode:!1})},aa64:function(t,a,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("64aa");var i=n(e("9384")),r={mixins:[i.default],name:"tn-badge",props:{index:{type:[Number,String],default:"0"},radius:{type:Number,default:0},padding:{type:String,default:""},margin:{type:String,default:""},dot:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},top:{type:[String,Number],default:""},right:{type:[String,Number],default:""},translateCenter:{type:Boolean,default:!0}},computed:{badgeClass:function(){var t="";return this.dot&&(t+=" tn-badge--dot"),this.absolute&&(t+=" tn-badge--absolute",this.translateCenter&&(t+=" tn-badge--center-position")),t},badgeStyle:function(){var t={};return 0!==this.radius&&(t.width=this.radius+"rpx",t.height=this.radius+"rpx",t.lineHeight=this.radius+"rpx"),this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontColorStyle&&(t.color=this.fontColorStyle),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.top&&(t.top=this.$t.string.getLengthUnitValue(this.top)),this.right&&(t.right=this.$t.string.getLengthUnitValue(this.right)),t}},data:function(){return{}},methods:{handleClick:function(){this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}}};a.default=r},d183:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tn-badge-class tn-badge",class:[t.backgroundColorClass,t.fontColorClass,t.badgeClass],style:[t.badgeStyle],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t.dot?t._e():t._t("default")],2)},i=[]},dd52:function(t,a,e){"use strict";var n=e("9050"),i=e.n(n);i.a},e143:function(t,a,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("64aa"),e("c223"),e("5c47"),e("0506");var i=n(e("9384")),r={mixins:[i.default],name:"tn-avatar",props:{index:{type:[Number,String],default:0},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},shadow:{type:Boolean,default:!1},border:{type:Boolean,default:!1},borderColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},borderSize:{type:Number,default:2},src:{type:String,default:""},text:{type:String,default:""},icon:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},badge:{type:Boolean,default:!1},badgeSize:{type:Number,default:0},badgeBgColor:{type:String,default:"#AAAAAA"},badgeColor:{type:String,default:"#FFFFFF"},badgeIcon:{type:String,default:""},badgeText:{type:String,default:""},badgePosition:{type:Array,default:function(){return[0,0]}}},data:function(){return{imgLoadError:!1}},computed:{showImg:function(){return""===this.text&&""===this.icon},avatarClass:function(){var t="";return t+=" tn-avatar--".concat(this.shape),this._checkSizeIsInline()&&(t+=" tn-avatar--".concat(this.size)),this.shadow&&(t+=" tn-avatar--shadow"),t},avatarStyle:function(){var t={};return this.backgroundColorStyle?t.background=this.backgroundColorStyle:this.shadow&&this.showImg&&(t.backgroundImage="url(".concat(this.src,")")),this.border&&(t.border="".concat(this.borderSize,"rpx solid ").concat(this.borderColor)),this._checkSizeIsInline()||(t.width=this.size,t.height=this.size),t},imgClass:function(){var t="";return t+=" tn-avatar__img--".concat(this.shape),t}},methods:{loadImageError:function(){this.imgLoadError=!0},click:function(){this.$emit("click",this.index)},_checkSizeIsInline:function(){return!!/^(xs|sm|md|lg|xl|xxl)$/.test(this.size)}}};a.default=r}}]);