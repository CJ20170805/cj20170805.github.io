(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{314:function(t,n,o){var content=o(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("eb797b0c",content,!0,{sourceMap:!1})},336:function(t,n,o){t.exports=o.p+"img/bdd831a.jpg"},337:function(t,n,o){"use strict";var e=o(314);o.n(e).a},338:function(t,n,o){n=t.exports=o(48)(!1);var e=o(107),c=e(o(339)),r=e(o(340)),l=e(o(341)),d=e(o(342)),f=e(o(343));n.push([t.i,".about-us[data-v-48030082]{width:100%}.about-us .contact-banner[data-v-48030082],.about-us .contact-banner img[data-v-48030082]{height:300px;width:100%}.about-us .about-content[data-v-48030082]{width:1200px;height:800px;margin:0 auto}.about-us .about-content .about-tit[data-v-48030082]{height:86px;width:180px;margin-top:34px;border-bottom:3px solid #eb3c3c}.about-us .about-content .about-tit span[data-v-48030082]{font-size:28px;font-family:微软雅黑;color:#101010;line-height:46px}.about-us .about-content .about-tit p[data-v-48030082]{color:#b5b5b5;font-size:18px;line-height:20px}.about-us .about-content .about-main[data-v-48030082]{width:100%;height:600px;margin-top:30px}.about-us .about-content .about-main .contact-info[data-v-48030082]{width:500px;height:600px;float:left;background:url("+c+") no-repeat 50%}.about-us .about-content .about-main .contact-info .info-list[data-v-48030082]{height:350px;width:100%;background-color:rgba(245,18,18,.8);margin-top:250px;color:#fff;font-size:16px;box-sizing:border-box;padding:40px}.about-us .about-content .about-main .contact-info .info-list .info-item i[data-v-48030082]{display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:30px;vertical-align:top}.about-us .about-content .about-main .contact-info .info-list .info-item span[data-v-48030082]{display:inline-block;line-height:30px;width:350px}.about-us .about-content .about-main .contact-info .info-list .info-item .phone[data-v-48030082]{background:url("+r+") no-repeat 50%}.about-us .about-content .about-main .contact-info .info-list .info-item .email[data-v-48030082]{background:url("+l+") no-repeat 50%}.about-us .about-content .about-main .contact-info .info-list .info-item .address[data-v-48030082]{background:url("+d+") no-repeat 50%}.about-us .about-content .about-main .contact-info .info-list .info-item .bus[data-v-48030082]{background:url("+f+") no-repeat 50%}.about-us .about-content .about-main .contact-info .info-list .dashed[data-v-48030082]{width:100%;height:0;border-bottom:1px dashed #fff;margin-top:20px;margin-bottom:20px}.about-us .about-content .about-main .contact-map[data-v-48030082]{width:700px;height:600px;float:left;background-color:#eb3c3c}",""])},339:function(t,n,o){t.exports=o.p+"img/793e24c.jpg"},340:function(t,n,o){t.exports=o.p+"img/5036e90.png"},341:function(t,n,o){t.exports=o.p+"img/3b5e020.png"},342:function(t,n,o){t.exports=o.p+"img/b404d99.png"},343:function(t,n,o){t.exports=o.p+"img/b07ad8a.png"},433:function(t,n,o){"use strict";o.r(n);var e=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-us"},[e("div",{staticClass:"contact-banner"},[e("img",{attrs:{src:o(336),alt:""}})]),t._v(" "),e("div",{staticClass:"about-content"},[e("div",{staticClass:"about-tit"},[e("span",[t._v("联系我们")]),t._v(" "),e("p",[t._v("CONTACT US")])]),t._v(" "),e("div",{staticClass:"about-main"},[e("div",{staticClass:"contact-info"},[e("div",{staticClass:"info-list"},[e("div",{staticClass:"info-item"},[e("i",{staticClass:"phone"}),e("span",[t._v("电话： 010-68207631")])]),t._v(" "),e("div",{staticClass:"info-item"},[e("i",{staticClass:"email"}),e("span",[t._v("邮箱： office@anyway.org.cn")])]),t._v(" "),e("div",{staticClass:"info-item"},[e("i",{staticClass:"address"}),e("span",[t._v("地址：北京市海淀区万寿路27号院（万寿路地铁站东南口出步行至工信部大院即到）")])]),t._v(" "),e("div",{staticClass:"dashed"}),t._v(" "),e("div",{staticClass:"info-item"},[e("span",[t._v("乘车指南：")])]),t._v(" "),e("div",{staticClass:"info-item"},[e("i",{staticClass:"bus"}),e("span",[t._v("乘车路线：地铁1号线 万寿路 下车( C2东南口出 )")])]),t._v(" "),e("div",{staticClass:"info-item"},[e("i",{staticClass:"bus"}),e("span",[t._v("公交路线：万寿路东站 （120、68、451、77、335、308 ） ")])])])]),t._v(" "),e("div",{staticClass:"contact-map",attrs:{id:"mapContent"}})])])])}],c=(o(161),o(70),o(6));o(133);var r={data:function(){return{getValue:"111"}},asyncData:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),created:function(){},head:function(){return{title:"关于我们",meta:[{hid:"aboutPage",name:"about",content:"关于荣德海越"}]}},mounted:function(){var t=this;this.createMap(),this.$nextTick(function(){t.$nuxt.$loading.start(),setTimeout(function(){return t.$nuxt.$loading.finish()},5e3)})},methods:{createMap:function(){function t(){var map=new BMap.Map("mapContent"),t=new BMap.Point(116.302269,39.910018);map.centerAndZoom(t,17),window.map=map}var n=[{title:"荣德海越（北京）信息技术有限公司",content:"北京市海淀区万寿路27号院",point:"116.302278|39.909963",isOpen:0,icon:{w:21,h:21,l:46,t:46,x:1,lb:10}}];function o(i){var t=n[i];return new BMap.InfoWindow("<b class='iw_poi_title' title='"+t.title+"'>"+t.title+"</b><div class='iw_poi_content'>"+t.content+"</div>")}function e(t){return new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png",new BMap.Size(t.w,t.h),{imageOffset:new BMap.Size(-t.l,-t.t),infoWindowOffset:new BMap.Size(t.lb+5,1),offset:new BMap.Size(t.x,t.h)})}t(),map.enableDragging(),map.enableScrollWheelZoom(),map.enableDoubleClickZoom(),map.enableKeyboard(),function(){var t=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});map.addControl(t);var n=new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});map.addControl(n);var o=new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});map.addControl(o)}(),function(){for(var i=0;i<n.length;i++){var t=n[i],c=t.point.split("|")[0],r=t.point.split("|")[1],l=new BMap.Point(c,r),d=e(t.icon),marker=new BMap.Marker(l,{icon:d}),label=(o(i),new BMap.Label(t.title,{offset:new BMap.Size(t.icon.lb-t.icon.x+10,-20)}));marker.setLabel(label),map.addOverlay(marker),label.setStyle({borderColor:"#808080",color:"#333",cursor:"pointer"}),function(){var n=o(i),e=marker;e.addEventListener("click",function(){this.openInfoWindow(n)}),n.addEventListener("open",function(){e.getLabel().hide()}),n.addEventListener("close",function(){e.getLabel().show()}),label.addEventListener("click",function(){e.openInfoWindow(n)}),t.isOpen&&(label.hide(),e.openInfoWindow(n))}()}}()}}},l=(o(337),o(24)),component=Object(l.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,"48030082",null);n.default=component.exports}}]);