(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["homePages-photo"],{2551:function(e,a,t){"use strict";var r=t("6957"),s=t.n(r);s.a},5537:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return r}));var r={tnNavBar:t("263e").default,tnModal:t("c667").default,tnWaterfall:t("a943").default,tnLazyLoad:t("b95f").default,tnLoadMore:t("1278").default},s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"tn-safe-area-inset-bottom"},[t("tn-nav-bar",{attrs:{fixed:!0,customBack:!0,bottomShadow:!1,backgroundColor:e.navBarBackgroundColor,id:"navbar"}},[t("v-uni-view",{staticClass:"tn-custom-nav-bar__back",style:[e.navBarStyle],attrs:{slot:"back"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goBack.apply(void 0,arguments)}},slot:"back"},[t("v-uni-text",{staticClass:"icon tn-icon-left"}),t("v-uni-text",{staticClass:"icon tn-icon-discover-fill"})],1),t("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-center",style:[e.navBarStyle2]},[t("v-uni-view",{staticClass:"tn-text-bold tn-text-xl"},[e._v("图鸟科技随拍")])],1)],1),t("v-uni-swiper",{staticClass:"card-swiper",attrs:{circular:!0,autoplay:!0,duration:"500",interval:"22000"},on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.cardSwiper.apply(void 0,arguments)}}},e._l(e.swiperList,(function(a,r){return t("v-uni-swiper-item",{key:r,class:e.cardCur==r?"cur":""},[t("v-uni-view",{staticClass:"swiper-item image-banner"},["image"==a.type?t("v-uni-image",{attrs:{src:a.url,mode:"aspectFill"}}):e._e()],1)],1)})),1),t("v-uni-view",{staticClass:"indication"},[e._l(e.swiperList,(function(a,r){return[t("v-uni-view",{key:r+"_0",staticClass:"spot",class:e.cardCur==r?"active":""})]}))],2),t("v-uni-view",{staticClass:"shop-function tn-margin-bottom-xl",style:{paddingTop:e.vuex_custom_bar_height+"px"}},[t("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-margin"},[t("v-uni-view",{staticClass:"justify-content-item"},[t("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[t("v-uni-view",{staticClass:"tn-color-white",staticStyle:{width:"70vw"}},[t("v-uni-view",{staticClass:"tn-padding-right tn-text-xxl tn-text-bold"},[e._v("图鸟科技随拍")]),t("v-uni-view",{staticClass:"tn-padding-right tn-padding-top-sm tn-text-ellipsis tn-text-sm"},[t("v-uni-text",{staticClass:"tn-padding-right-sm"},[e._v("图鸟_凶姐 & 写真图集")])],1)],1)],1)],1),t("v-uni-view",{staticClass:"justify-content-item"},[t("v-uni-view",{staticClass:"tn-icon-tip-fill tn-text-xxl tn-color-white",staticStyle:{opacity:"0.6"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.showModal.apply(void 0,arguments)}}})],1)],1)],1),t("tn-modal",{attrs:{custom:!0},model:{value:e.show1,callback:function(a){e.show1=a},expression:"show1"}},[t("v-uni-view",{staticClass:"custom-modal-content"},[t("v-uni-image",{staticClass:"tn-radius",staticStyle:{width:"100%"},attrs:{src:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683185728989-assets/web-upload/af525e21-57d0-4403-9c13-bf073d632638.jpeg",mode:"aspectFill"}}),t("v-uni-view",{staticClass:"tn-text-justify tn-padding-top"},[e._v("注意：相册图集本人为 图鸟_凶姐")]),t("v-uni-view",{staticClass:"tn-text-justify tn-padding-top"},[e._v("凶姐照片未经授权，请勿将此相册图集另作其他任何非商业、商业用途，如有疑问，请微信咨询图鸟 tnkewo")])],1)],1),t("v-uni-view",{staticClass:"group-wrap tn-bg-white",attrs:{id:"page_tips"}},[t("v-uni-view",{staticStyle:{padding:"30rpx 20rpx"}},[t("tn-waterfall",{ref:"waterfall",on:{finish:function(a){arguments[0]=a=e.$handleEvent(a),e.handleWaterFallFinish.apply(void 0,arguments)}},scopedSlots:e._u([{key:"left",fn:function(a){var r=a.leftList;return e._l(r,(function(a,r){return t("v-uni-view",{key:a.id,staticClass:"product__item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.tn("/pageA/photo/photo")}}},[t("v-uni-view",{staticClass:"item__image"},[t("tn-lazy-load",{attrs:{threshold:6e3,height:"100%",image:a.mainImage,index:a.id,imgMode:"widthFix"}})],1)],1)}))}},{key:"right",fn:function(a){var r=a.rightList;return e._l(r,(function(a,r){return t("v-uni-view",{key:a.id,staticClass:"product__item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.tn("/pageA/photo/photo")}}},[t("v-uni-view",{staticClass:"item__image"},[t("tn-lazy-load",{attrs:{threshold:6e3,height:"100%",image:a.mainImage,index:a.id,imgMode:"widthFix"}})],1)],1)}))}}]),model:{value:e.list,callback:function(a){e.list=a},expression:"list"}})],1),t("tn-load-more",{attrs:{status:e.loadStatus}})],1)],1)},o=[]},6957:function(e,a,t){var r=t("cbde");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=t("967d").default;s("26715afb",r,!0,{sourceMap:!1,shadowMode:!1})},"8ce6":function(e,a,t){"use strict";t.r(a);var r=t("5537"),s=t("c0b6");for(var o in s)["default"].indexOf(o)<0&&function(e){t.d(a,e,(function(){return s[e]}))}(o);t("2551");var i=t("828b"),n=Object(i["a"])(s["default"],r["b"],r["c"],!1,null,"1b88a5a0",null,!1,r["a"],void 0);a["default"]=n.exports},c0b6:function(e,a,t){"use strict";t.r(a);var r=t("eeef"),s=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(a,e,(function(){return r[e]}))}(o);a["default"]=s.a},cbde:function(e,a,t){var r=t("c86c");a=r(!1),a.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-1b88a5a0]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.03);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);font-size:18px}.tn-custom-nav-bar__back .icon[data-v-1b88a5a0]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-1b88a5a0]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.05;background-color:#000}\n/* 内容 start*/.tn-plan-content__item[data-v-1b88a5a0]{display:inline-block;line-height:%?45?%;padding:%?10?% %?30?%;margin:%?20?% %?20?% %?5?% %?0?%}.tn-plan-content__item--prefix[data-v-1b88a5a0]{padding-right:%?10?%}\n/* 内容 end*/\n/* 轮播视觉差 start */.card-swiper[data-v-1b88a5a0]{height:%?500?%!important}.card-swiper uni-swiper-item[data-v-1b88a5a0]{width:%?750?%!important;left:%?0?%;box-sizing:border-box;overflow:initial}.card-swiper uni-swiper-item .swiper-item[data-v-1b88a5a0]{width:100%;display:block;height:100%;-webkit-transform:scale(1);transform:scale(1);transition:all .2s ease-in 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item[data-v-1b88a5a0]{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s;will-change:transform}.image-banner[data-v-1b88a5a0]{display:flex;align-items:center;justify-content:center}.image-banner uni-image[data-v-1b88a5a0]{width:100%;height:100%}\n/* 轮播指示点 start*/.indication[data-v-1b88a5a0]{z-index:9999;width:100%;height:%?36?%;position:absolute;display:flex;flex-direction:row;align-items:center;justify-content:center;opacity:0}.spot[data-v-1b88a5a0]{background-color:#fff;opacity:.6;width:%?10?%;height:%?10?%;border-radius:%?20?%;top:%?-60?%;margin:0 %?8?%!important;position:relative}.spot.active[data-v-1b88a5a0]{opacity:1;width:%?30?%;background-color:#fff}\n/* 顶部店铺 */.shop-function[data-v-1b88a5a0]{position:relative;z-index:1;margin-top:%?-450?%;padding-bottom:%?110?%;background-image:linear-gradient(hsla(0,0%,100%,.01),rgba(0,0,0,.4))}\n/* 用户头像 start */.logo-image[data-v-1b88a5a0]{width:%?100?%;height:%?100?%;position:relative}.logo-pic[data-v-1b88a5a0]{background-size:cover;background-repeat:no-repeat;background-position:top;border:%?6?% solid hsla(0,0%,100%,.25);box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.15);border-radius:50%;overflow:hidden}\n/* 内容*/.group-wrap[data-v-1b88a5a0]{position:relative;z-index:1;margin-top:%?-130?%;margin-bottom:%?40?%;border-radius:%?30?% %?30?% 0 0}\n/* 阴影 start*/.mould-shadow[data-v-1b88a5a0]{border-radius:%?15?%;box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.07)}.tn-tabbar-height[data-v-1b88a5a0]{min-height:%?20?%;height:calc(%?40?% + env(safe-area-inset-bottom) / 2)}\n/* 图标容器5 start */.icon5__item[data-v-1b88a5a0]{background-color:#fff;border-radius:%?10?%;padding:%?0?%;margin:%?0?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon5__item--icon[data-v-1b88a5a0]{width:%?96?%;height:%?96?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}\n/* 瀑布流*/.product__item[data-v-1b88a5a0]{background-color:#fff;overflow:hidden;margin:0 %?10?%;margin-bottom:%?20?%}.product__item .item[data-v-1b88a5a0]{\n  /* 图片 start */\n  /* 图片 end */\n  /* 内容 start */\n  /* 标题 start */\n  /* 标题 end */\n  /* 标签 start */\n  /* 标签 end */\n  /* 内容 end */}.product__item .item__image[data-v-1b88a5a0]{width:100%;height:auto;background-color:#fff;border:%?1?% solid #f8f7f8;border-radius:%?10?%;overflow:hidden}.product__item .item__data[data-v-1b88a5a0]{padding:%?14?% %?0?%}.product__item .item__title-container[data-v-1b88a5a0]{text-align:justify;line-height:%?38?%;vertical-align:middle}.product__item .item__store-type[data-v-1b88a5a0]{height:%?28?%;font-size:%?20?%;position:relative;display:inline-flex;align-items:center;justify-content:center;padding:%?4?%;border-radius:%?6?%;white-space:nowrap;text-align:center;top:%?-2?%;margin-right:%?6?%}.product__item .item__title[data-v-1b88a5a0]{font-size:%?30?%}.product__item .item__tags-container[data-v-1b88a5a0]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start}.product__item .item__tag[data-v-1b88a5a0]{margin:%?10?%;color:#7c8191;background-color:#f3f2f7;padding:%?4?% %?14?% %?6?%;border-radius:%?10?%;font-size:%?20?%}.product__item .item__tag[data-v-1b88a5a0]:first-child{margin-left:%?0?%!important}',""]),e.exports=a},eeef:function(e,a,t){"use strict";t("6a54");var r=t("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("d4b5"),t("aa9c");var s=r(t("2634")),o=r(t("2fdc")),i=r(t("d86f")),n={name:"TemplateWallpaper",mixins:[i.default],data:function(){return{show1:!1,cardCur:0,swiperList:[{id:0,type:"image",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015047023-assets/web-upload/147b0b7f-8253-4b92-bc1d-e28db7f54096.jpeg"},{id:1,type:"image",url:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1671437658295-assets/web-upload/05620a1f-452e-4a14-9d30-f6c66ee4be1c.jpeg"},{id:2,type:"image",url:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116254-assets/web-upload/96b7cdd7-cbf6-44fa-bf1a-326f35262f0c.jpeg"},{id:3,type:"image",url:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116261-assets/web-upload/4fd332a1-171f-4b54-9423-41b08513b8ab.jpeg"},{id:4,type:"image",url:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116300-assets/web-upload/b46d51a8-aaa9-4600-9394-818216e7dc8c.jpeg"}],navBarRectInfo:{},navBarChangebaseLineHeight:0,navBarStyle:{color:"#FFFFFF",opacity:1,display:"flex"},navBarStyle2:{color:"rgba(255,255,255,0)",opacity:1,display:"flex"},navBarBackgroundColor:"rgba(255, 255, 255, 0)",activeBgAnimation:{},loadStatus:"loadmore",list:[],data:[{title:"酷炫外卖首页",userName:"试试就逝世",mainImage:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1671437658295-assets/web-upload/05620a1f-452e-4a14-9d30-f6c66ee4be1c.jpeg",userImage:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699098-assets/web-upload/e8b29292-72fc-4c1e-9d7c-fd9dba31cb62.jpeg",storeType:1,newProduct:!0,tags:["首页","美食"],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:338}},{title:"内容发布页",userName:"你的名字",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683185481047-assets/web-upload/1659a1f2-d66c-4eb9-9545-1419ee65f158.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",storeType:1,newProduct:!1,tags:["表单","新建"],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:289}},{title:"商品详情，带购物车动画",userName:"青梅煮马",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116287-assets/web-upload/62bcb362-2f09-403e-8381-286e9f74487c.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:1,newProduct:!0,tags:["男生头像","情侣头像"],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:381}},{title:"简约个人中心页",userName:"你的名字",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116230-assets/web-upload/a67a2574-41a1-447b-8b4c-cdaf69a14a53.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!0,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:526}},{title:"消息通知页面",userName:"坟头草三米高",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116251-assets/web-upload/808c7cd2-2aa5-49ac-a2d4-5ba8b6e4475c.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:372}},{title:"弹窗领红包",userName:"不许凶我",mainImage:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664179989916-assets/web-upload/eda197eb-42ce-44b1-9b14-fce3481db603.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",storeType:2,newProduct:!1,tags:["弹窗","模态窗"],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:694}},{title:"系统设置",userName:"seventeen",mainImage:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015047023-assets/web-upload/147b0b7f-8253-4b92-bc1d-e28db7f54096.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:2,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:508}},{title:"金融理财首页",userName:"你的名字",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116291-assets/web-upload/c4c0d31c-88ee-42c7-99ba-139ef206aaed.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:923}},{title:"图片视频编辑上传",userName:"图鸟东东",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116288-assets/web-upload/fc1aa566-9be3-4185-be44-1d36cf84c1f9.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:989}},{title:"路线导航",userName:"此处凶姐承包",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116293-assets/web-upload/15169708-1cc1-4699-89ad-5e675351698f.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129}},{title:"系统设置",userName:"seventeen",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116322-assets/web-upload/e8c4a23d-a981-4d07-9711-d4aee997438a.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:2,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:508}},{title:"金融理财首页",userName:"你的名字",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116292-assets/web-upload/6ade2579-cbd2-4755-8552-02e8d9e9056e.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:923}},{title:"图片视频编辑上传",userName:"图鸟东东",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116283-assets/web-upload/ffb5ec95-a1f9-40ba-954b-790723fa860f.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:989}},{title:"路线导航",userName:"此处凶姐承包",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116300-assets/web-upload/b46d51a8-aaa9-4600-9394-818216e7dc8c.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129}},{title:"系统设置",userName:"seventeen",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116302-assets/web-upload/18c27289-a7f1-4870-8d7d-77b72b280db9.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:2,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:508}},{title:"金融理财首页",userName:"你的名字",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116276-assets/web-upload/98845528-391c-43cf-843f-cef54e8daee5.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:923}},{title:"图片视频编辑上传",userName:"图鸟东东",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116297-assets/web-upload/13e24266-297c-4574-b726-5b252fd179b4.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:989}},{title:"路线导航",userName:"此处凶姐承包",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116254-assets/web-upload/584529de-6ac8-4c7c-8187-821217a5846e.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129}},{title:"系统设置",userName:"seventeen",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116243-assets/web-upload/71243e8f-7c98-4a1d-adc1-e603e1029303.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:2,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:508}},{title:"金融理财首页",userName:"你的名字",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116261-assets/web-upload/4fd332a1-171f-4b54-9423-41b08513b8ab.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:923}},{title:"图片视频编辑上传",userName:"图鸟东东",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116279-assets/web-upload/f9c0ca30-93d7-4b7c-86fb-ff899d7cfd26.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:989}},{title:"路线导航",userName:"此处凶姐承包",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116283-assets/web-upload/00db3659-b29f-4964-8d32-13f3789ccd5a.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129}},{title:"路线导航",userName:"此处凶姐承包",mainImage:"https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116254-assets/web-upload/96b7cdd7-cbf6-44fa-bf1a-326f35262f0c.jpeg",userImage:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg",storeType:1,newProduct:!1,tags:[],viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129}}]}},onLoad:function(){this.getRandomData()},onReachBottom:function(){this.getRandomData()},onReady:function(){var e=this;this.$nextTick((function(){e.initNavBarRectInfo()}))},onPageScroll:function(){this.updateNavBarRectInfo()},methods:{tn:function(e){uni.navigateTo({url:e})},cardSwiper:function(e){this.cardCur=e.detail.current},previewQRCodeImage:function(){wx.previewImage({urls:["https://resource.tuniaokj.com/images/advertise/qrcode.jpg"]})},showModal:function(e){this.openModal()},openModal:function(){this.show1=!0},initNavBarRectInfo:function(){var e=this;return(0,o.default)((0,s.default)().mark((function a(){var t,r;return(0,s.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e._tGetRect("#navbar");case 2:return t=a.sent,a.next=5,e._tGetRect("#page_tips");case 5:if(r=a.sent,t.hasOwnProperty("top")&&r.hasOwnProperty("top")){a.next=9;break}return setTimeout((function(){e.initNavBarRectInfo()}),10),a.abrupt("return");case 9:e.navBarRectInfo={top:t.top},e.navBarChangebaseLineHeight=r.top-t.top;case 11:case"end":return a.stop()}}),a)})))()},updateNavBarRectInfo:function(){var e=this;this._tGetRect("#page_tips").then((function(a){var t=(null===a||void 0===a?void 0:a.top)||0;if(t){var r=t-e.navBarRectInfo.top,s=r/e.navBarChangebaseLineHeight;s<0?(e.navBarStyle.color="rgba(0, 0, 0, ${opacity})",e.navBarStyle2.color="rgba(0, 0, 0, ${opacity})",e.navBarBackgroundColor="rgba(255, 255, 255, 1)"):(e.navBarStyle.color="rgba(255, 255, 255, 1)",e.navBarStyle2.color="rgba(255, 255, 255, 0)",e.navBarBackgroundColor="rgba(255, 255, 255, ".concat(1-s,")"))}}))},getRandomData:function(){console.log(13),this.loadStatus="loading";for(var e=0;e<10;e++){var a=this.$t.number.randomInt(0,this.data.length-1),t=JSON.parse(JSON.stringify(this.data[a]));t.id=this.$t.uuid(),this.list.push(t)}},handleWaterFallFinish:function(){this.loadStatus="loadmore"}}};a.default=n}}]);