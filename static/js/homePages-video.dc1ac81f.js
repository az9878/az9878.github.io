(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["homePages-video"],{"11fb":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("d86f")),i={name:"TemplateResult",mixins:[r.default],data:function(){return{cardCur:0,swiperList0:[{id:0,type:"image",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699066-assets/web-upload/f7a37b29-506a-4e79-937f-826334902bb4.jpeg",mp4:"https://resource.tuniaokj.com/images/new/111.mp4",user:"图鸟猪猪",title:"晚风轻踩着云朵，月亮在贩售快乐，你从银河背后靠近我，我与星辉一同为你沉沦。。",like:"12.9W",message:"1.6W",share:"2.2W"},{id:1,type:"image",url:"https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg",mp4:"https://resource.tuniaokj.com/images/new/22.mp4",user:"图鸟北北",title:"我不喜欢带伞，因为雨水从不滴落在我的心上；心若向阳，无惧远方。。",like:"231",message:"35",share:"16"},{id:2,type:"image",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664179989916-assets/web-upload/eda197eb-42ce-44b1-9b14-fce3481db603.jpeg",mp4:"https://resource.tuniaokj.com/images/new/111.mp4",user:"你的名字",title:"为什么我没能早点遇见你...",like:"292",message:"108",share:"63"},{id:3,type:"image",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg",mp4:"https://resource.tuniaokj.com/images/new/33.mp4",user:"不许凶我",title:"有些记忆会被时间焚烧",like:"1.06K",message:"868",share:"606"}]}},methods:{cardSwiper:function(t){this.cardCur=t.detail.current;for(var e=0;e<this.swiperList0.length;e++){var a=uni.createVideoContext("video-".concat(this.swiperList0[e]["id"]),this);e===this.cardCur?a.play():a.pause()}},stopAllVideo:function(){},tn:function(t){wx.vibrateLong(),uni.navigateTo({url:t})}}};e.default=i},"263e":function(t,e,a){"use strict";a.r(e);var n=a("b9ba"),r=a("90da");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("e3ef");var o=a("828b"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"8d09fad0",null,!1,n["a"],void 0);e["default"]=s.exports},"46c5":function(t,e,a){function n(t,e,a,n,r,i,o){try{var s=t[i](o),c=s.value}catch(u){return void a(u)}s.done?e(c):Promise.resolve(c).then(n,r)}a("bf0f"),t.exports=function(t){return function(){var e=this,a=arguments;return new Promise((function(r,i){var o=t.apply(e,a);function s(t){n(o,r,i,s,c,"next",t)}function c(t){n(o,r,i,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"4b03":function(t,e,a){"use strict";var n=a("898b"),r=a.n(n);r.a},"4e1d":function(t,e,a){"use strict";a.r(e);var n=a("11fb"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"50f9":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("2634")),i=n(a("2fdc"));a("64aa");var o=n(a("9384")),s={name:"tn-nav-bar",mixins:[o.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var e=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(e,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,i.default)((0,r.default)().mark((function e(){var a,n,i;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.vuex_custom_bar_height,n=t.vuex_status_bar_height,a){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:i=e.sent,a=i.customBarHeight,n=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),e.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",n),t&&t.$t.vuex("vuex_custom_bar_height",a),t.customBarHeight=a,t.statusBarHeight=n;case 19:case"end":return e.stop()}}),e,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,i.default)((0,r.default)().mark((function e(){var a;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){e.next=10;break}if(a=t.beforeBack.bind(t.$t.$parent.call(t))(),!a||"function"!==typeof a.then){e.next=7;break}return e.next=5,a.then((function(e){t.navBack()})).catch((function(t){}));case 5:e.next=8;break;case 7:!0===a&&t.navBack();case 8:e.next=11;break;case 10:t.navBack();case 11:case"end":return e.stop()}}),e)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};e.default=s},"5f08":function(t,e,a){var n=a("9442");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("967d").default;r("c09cf6d6",n,!0,{sourceMap:!1,shadowMode:!1})},"898b":function(t,e,a){var n=a("cbc6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("967d").default;r("62a0526e",n,!0,{sourceMap:!1,shadowMode:!1})},"90da":function(t,e,a){"use strict";a.r(e);var n=a("50f9"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},9384:function(t,e,a){a("64aa"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},9442:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-custom-nav-bar[data-v-8d09fad0]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-8d09fad0]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-8d09fad0]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-8d09fad0]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-8d09fad0]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-8d09fad0]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-8d09fad0]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */margin-left:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-8d09fad0]{margin-left:%?10?%}.tn-custom-nav-bar__bar__content[data-v-8d09fad0]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=e},b652:function(t,e,a){"use strict";a.r(e);var n=a("d0c8"),r=a("4e1d");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("4b03");var o=a("828b"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"27d98ebb",null,!1,n["a"],void 0);e["default"]=s.exports},b9ba:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?a("v-uni-view",[t.customBack?a("v-uni-view",[a("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerBack.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),a("v-uni-view",[t._t("right")],2)],1)],1)},r=[]},cbc6:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-27d98ebb]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-27d98ebb]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-27d98ebb]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 全屏轮播  start*/.card-swiper[data-v-27d98ebb]{height:100vh!important}.card-swiper uni-swiper-item[data-v-27d98ebb]{width:%?750?%!important;left:%?0?%;box-sizing:border-box;overflow:initial}.card-swiper uni-swiper-item .swiper-item[data-v-27d98ebb]{width:100%;display:block;height:100vh;border-radius:%?0?%;-webkit-transform:scale(1);transform:scale(1);transition:all .2s ease-in 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item[data-v-27d98ebb]{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item-text[data-v-27d98ebb]{margin-top:%?-320?%;width:100%;display:block;height:50%;border-radius:%?10?%;-webkit-transform:translate(%?0?%,%?0?%) scale(.9);transform:translate(%?0?%,%?0?%) scale(.9);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item-text[data-v-27d98ebb]{margin-top:%?-320?%;margin-top:calc(%?-320?% - env(safe-area-inset-bottom) / 2);margin-top:calc(%?-320?% - constant(safe-area-inset-bottom));width:100%;-webkit-transform:translate(%?0?%,%?0?%) scale(.9);transform:translate(%?0?%,%?0?%) scale(.9);transition:all .6s ease 0s;will-change:transform;text-shadow:%?0?% %?10?% %?20?% rgba(0,0,0,.1)}.card-swiper uni-swiper-item .swiper-item-icon[data-v-27d98ebb]{transition:all .6s ease 0s}.card-swiper uni-swiper-item.cur .swiper-item-icon[data-v-27d98ebb]{transition:all .6s ease 0s}\n/* 用户头像 start */.user-image[data-v-27d98ebb]{width:%?87?%;height:%?87?%;position:relative;overflow:hidden;border-radius:50%}.user-pic[data-v-27d98ebb]{background-size:cover;background-repeat:no-repeat;background-position:top;border:%?6?% solid hsla(0,0%,100%,.9);box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.15);border-radius:50%;overflow:hidden}\n/* 图标容器15 start */.icon15__item[data-v-27d98ebb]{width:30%;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon15__item--icon[data-v-27d98ebb]{color:#eaebef;width:%?90?%;height:%?90?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}.icon15__item--icon[data-v-27d98ebb]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%}\n/* 按钮 */.button-0[data-v-27d98ebb]{position:fixed;\n  /* bottom:200rpx;\n      right: 20rpx; */bottom:52%;right:%?30?%;z-index:1001;border-radius:100px;opacity:.9}\n/* 按钮 */.button-1[data-v-27d98ebb]{position:fixed;\n  /* bottom:200rpx;\n      right: 20rpx; */bottom:41%;right:%?30?%;z-index:1001;border-radius:0;opacity:.9}.button-2[data-v-27d98ebb]{position:fixed;\n  /* bottom:200rpx;\n      right: 20rpx; */bottom:33%;right:%?30?%;z-index:1001;border-radius:100px;opacity:.9}.button-3[data-v-27d98ebb]{position:fixed;\n  /* bottom:200rpx;\n      right: 20rpx; */bottom:25%;right:%?30?%;z-index:1001;border-radius:0;opacity:.9}\n/* 轮播指示点 start*/.indication[data-v-27d98ebb]{z-index:9999;width:100%;height:%?36?%;position:fixed;display:block;flex-direction:row;align-items:center;justify-content:center}.spot[data-v-27d98ebb]{background-color:#000;opacity:.3;width:%?10?%;height:%?10?%;border-radius:%?20?%;margin:%?20?% 0!important;left:95vw;top:-60vh;position:relative}.spot.active[data-v-27d98ebb]{opacity:.6;height:%?30?%;background-color:#000}\n/* 悬浮 */.tnxuanfu[data-v-27d98ebb]{-webkit-animation:suspension-data-v-27d98ebb 3s ease-in-out infinite;animation:suspension-data-v-27d98ebb 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-27d98ebb{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@keyframes suspension-data-v-27d98ebb{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}\n/* 悬浮按钮 */.button-shop[data-v-27d98ebb]{width:%?90?%;height:%?90?%;display:flex;flex-direction:row;position:fixed;\n  /* bottom:200rpx;\n    right: 20rpx; */left:%?5?%;top:%?5?%;z-index:1001;border-radius:100px;opacity:.9}\n/* 按钮 */.edit[data-v-27d98ebb]{bottom:%?220?%;right:%?75?%;position:fixed;z-index:9999}.pa[data-v-27d98ebb],\n.pa0[data-v-27d98ebb]{position:absolute}.pa0[data-v-27d98ebb]{left:0;top:0}.bg0[data-v-27d98ebb]{width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bg1[data-v-27d98ebb]{width:100%;height:100%}.hx-box[data-v-27d98ebb]{top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.hx-box .pr[data-v-27d98ebb]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:hxz-data-v-27d98ebb 20s linear infinite;animation:hxz-data-v-27d98ebb 20s linear infinite}@-webkit-keyframes hxz-data-v-27d98ebb{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes hxz-data-v-27d98ebb{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}.hx-box .pr .pa0[data-v-27d98ebb]{width:%?100?%;height:%?100?%;\n  /* border: 4px solid #5ec0ff; */border-radius:1000px}.hx-box .pr .pa0 .span[data-v-27d98ebb]{display:block;width:100%;height:100%;background:url(https://resource.tuniaokj.com/images/cool_bg_image/arc4.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:hx-data-v-27d98ebb 4s linear infinite;animation:hx-data-v-27d98ebb 4s linear infinite}@-webkit-keyframes hx-data-v-27d98ebb{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes hx-data-v-27d98ebb{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.hx-k1[data-v-27d98ebb]{-webkit-transform:rotateX(-60deg) rotate(-60deg);transform:rotateX(-60deg) rotate(-60deg)}.hx-k2[data-v-27d98ebb]{-webkit-transform:rotateX(-30deg) rotate(-30deg);transform:rotateX(-30deg) rotate(-30deg)}.hx-k3[data-v-27d98ebb]{-webkit-transform:rotateX(0deg) rotate(0deg);transform:rotateX(0deg) rotate(0deg)}.hx-k4[data-v-27d98ebb]{-webkit-transform:rotateX(30deg) rotate(30deg);transform:rotateX(30deg) rotate(30deg)}.hx-k5[data-v-27d98ebb]{-webkit-transform:rotateX(60deg) rotate(60deg);transform:rotateX(60deg) rotate(60deg)}.hx-k6[data-v-27d98ebb]{-webkit-transform:rotateX(90deg) rotate(90deg);transform:rotateX(90deg) rotate(90deg)}',""]),t.exports=e},d0c8:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("263e").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-safe-area-inset-bottom"},[a("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[a("v-uni-text",{staticClass:"icon tn-icon-left"}),a("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),a("v-uni-view",[a("v-uni-swiper",{staticClass:"card-swiper",attrs:{circular:!0,vertical:"true",autoplay:!1,duration:"500",interval:"5000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList0,(function(e,n){return a("v-uni-swiper-item",{key:n,class:t.cardCur==n?"cur":""},[a("v-uni-view",{staticClass:"swiper-item image-banner"},[a("v-uni-video",{staticStyle:{height:"100vh",width:"100vw"},attrs:{id:"video-"+e.id,src:e.mp4,"show-loading":!1,"show-play-btn":!1,"show-fullscreen-btn":!1,controls:!1,autoplay:!1,"enable-play-gesture":!0,loop:!0}})],1),a("v-uni-view",{staticClass:"swiper-item-icon image-banner"},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"user-pic button-0"},[a("v-uni-view",{staticClass:"user-image"},[a("v-uni-view",{staticClass:"tn-shadow-blur",style:"background-image:url("+e.url+");width: 87rpx;height: 87rpx;background-size: cover;overflow: hidden;"})],1)],1),a("v-uni-view",{staticClass:"icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-1"},[a("v-uni-view",{staticClass:"tn-icon-like-fill",staticStyle:{"font-size":"70rpx"}}),a("v-uni-view",{staticClass:"tn-margin-top-xs",staticStyle:{"font-size":"20rpx",position:"relative"}},[t._v(t._s(e.like))])],1),a("v-uni-view",{staticClass:"icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-2"},[a("v-uni-view",{staticClass:"tn-icon-message-fill",staticStyle:{"font-size":"70rpx"}}),a("v-uni-view",{staticClass:"tn-margin-top-xs",staticStyle:{"font-size":"20rpx",position:"relative"}},[t._v(t._s(e.message))])],1),a("v-uni-view",{staticClass:"icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-3",staticStyle:{height:"100rpx"}},[a("v-uni-button",{staticClass:"tn-flex-col-center tn-button--clear-style",attrs:{"open-type":"share"}},[a("v-uni-view",{staticClass:"tn-icon-send-fill",staticStyle:{"font-size":"70rpx"}}),a("v-uni-view",{staticClass:"tn-margin-top-xs",staticStyle:{"font-size":"20rpx",position:"relative"}},[t._v(t._s(e.share))])],1)],1)],1),a("v-uni-view",{staticClass:"swiper-item-text"},[a("v-uni-view",{staticClass:"tn-color-white tn-text-xl"},[a("v-uni-text",{staticClass:"tn-icon-topics tn-padding-right-xs"}),a("v-uni-text",{staticClass:"tn-text-bold"},[t._v(t._s(e.user))])],1),a("v-uni-view",{staticClass:"tn-color-white tn-padding-top-xs tn-text-lg clamp-text-2",staticStyle:{width:"72%"}},[t._v(t._s(e.title))])],1)],1)],1)})),1)],1),a("v-uni-view",{staticClass:"edit tnxuanfu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg0 pa"},[a("v-uni-view",{staticClass:"bg1"},[a("v-uni-image",{staticClass:"button-shop shadow",attrs:{src:"https://resource.tuniaokj.com/images/my/my6.png"}})],1)],1),a("v-uni-view",{staticClass:"hx-box pa"},[a("v-uni-view",{staticClass:"pr"},[a("v-uni-view",{staticClass:"hx-k1 pa0"},[a("v-uni-view",{staticClass:"span"})],1),a("v-uni-view",{staticClass:"hx-k2 pa0"},[a("v-uni-view",{staticClass:"span"})],1),a("v-uni-view",{staticClass:"hx-k3 pa0"},[a("v-uni-view",{staticClass:"span"})],1),a("v-uni-view",{staticClass:"hx-k4 pa0"},[a("v-uni-view",{staticClass:"span"})],1),a("v-uni-view",{staticClass:"hx-k5 pa0"},[a("v-uni-view",{staticClass:"span"})],1),a("v-uni-view",{staticClass:"hx-k6 pa0"},[a("v-uni-view",{staticClass:"span"})],1)],1)],1)],1)],1)},i=[]},d86f:function(t,e,a){var n=a("dd7e").default,r=a("46c5").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index"})}else uni.reLaunch({url:"/pages/index"})},updateCustomBarInfo:function(){var t=this;return r(n().mark((function e(){var a,r,i;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.vuex_custom_bar_height,r=t.vuex_status_bar_height,a){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:i=e.sent,a=i.customBarHeight,r=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",r),t.$t.vuex("vuex_custom_bar_height",a);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},dd7e:function(t,e,a){a("6a54"),a("01a2"),a("e39c"),a("bf0f"),a("844d"),a("18f7"),a("de6c"),a("3872e"),a("4e9b"),a("114e"),a("c240"),a("926e"),a("7a76"),a("c9b5"),a("aa9c"),a("2797"),a("8a8d"),a("dc69"),a("f7a5");var n=a("bdbb")["default"];function r(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},a=Object.prototype,i=a.hasOwnProperty,o=Object.defineProperty||function(t,e,a){t[e]=a.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(E){d=function(t,e,a){return t[e]=a}}function f(t,e,a,n){var r=e&&e.prototype instanceof b?e:b,i=Object.create(r.prototype),s=new z(n||[]);return o(i,"_invoke",{value:C(t,a,s)}),i}function h(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(E){return{type:"throw",arg:E}}}e.wrap=f;var p={};function b(){}function v(){}function m(){}var g={};d(g,c,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==a&&i.call(x,c)&&(g=x);var y=m.prototype=b.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var a;o(this,"_invoke",{value:function(r,o){function s(){return new e((function(a,s){(function a(r,o,s,c){var u=h(t[r],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==n(d)&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return a("throw",t,s,c)}))}c(u.arg)})(r,o,a,s)}))}return a=a?a.then(s,s):s()}})}function C(t,e,a){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return I()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=B(o,a);if(s){if(s===p)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=h(t,e,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function B(t,e){var a=e.method,n=t.iterator[a];if(void 0===n)return e.delegate=null,"throw"===a&&t.iterator["return"]&&(e.method="return",e.arg=void 0,B(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(i.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=m,o(y,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:v,configurable:!0}),v.displayName=d(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,d(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},k(_.prototype),d(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,a,n,r,i){void 0===i&&(i=Promise);var o=new _(f(t,a,n,r),i);return e.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(y),d(y,l,"Generator"),d(y,c,(function(){return this})),d(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return o.type="throw",o.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],o=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var s=i.call(r,"catchLoc"),c=i.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),L(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:j(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},e3ef:function(t,e,a){"use strict";var n=a("5f08"),r=a.n(n);r.a}}]);