webpackJsonp([0],{"5BDP":function(t,s){},"5OHe":function(t,s){},"5k9+":function(t,s){},"7nHD":function(t,s){},"B/Xq":function(t,s,a){"use strict";(function(t){s.a={data:function(){return{week:"",day:"0",update_time:"",total_song_num:0,topinfo:{},toplistArr:[],song_url:""}},methods:{getToplistDetail:function(){var s=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+s.$route.params.topid+"&_=1514947819525",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.day=t.day_of_year,s.update_time=t.update_time,s.total_song_num=t.total_song_num,s.topinfo=t.topinfo,s.toplistArr=t.songlist},error:function(){alert("fail")}})},searchMusicUrl:function(s){var a=this,n=s,i="C400"+n+".m4a";t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=jsonp&callback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&songmid="+n+"&filename="+i+"&guid=4529237216",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){var s=t.data.items[0];a.getSongUrl(s.vkey,s.filename)},error:function(){alert("fail")}})},getSongUrl:function(t,s){var a=t,n=s;this.song_url="http://dl.stream.qqmusic.qq.com/"+n+"?guid=4529237216&vkey="+a+"&uin=1813507032&fromtag=999"}},mounted:function(){this.$nextTick(function(){this.getToplistDetail()})}}}).call(s,a("tra3"))},MfoW:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{toplist:[]}},methods:{getToplist:function(){var s=this;t.ajax({type:"GET",async:!1,url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1514888428782",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.toplist=t.data.topList},error:function(){alert("fail")}})}},mounted:function(){this.$nextTick(function(){this.getToplist()})}}}).call(s,a("tra3"))},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("VCXJ"),i=a("wSez"),e=a.n(i),c=(a("5OHe"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}),o=a("8AGX")({name:"app"},c,!1,function(t){a("5k9+")},null,null).exports,l=a("zO6J"),r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("mt-navbar",{model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"1"}},[a("router-link",{attrs:{to:"/index/recom"}},[t._v("推荐")])],1),t._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[a("router-link",{attrs:{to:"/index/top"}},[t._v("排行榜")])],1),t._v(" "),a("mt-tab-item",{attrs:{id:"3"}},[a("router-link",{attrs:{to:"/index/search"}},[t._v("搜索")])],1)],1),t._v(" "),a("div",{staticClass:"con-view"},[a("router-view")],1)],1)},staticRenderFns:[]},u=a("8AGX")({name:"HelloWorld",data:function(){return{selected:""}}},r,!1,function(t){a("7nHD")},"data-v-3d2113f4",null).exports,p=a("B/Xq"),_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"toplist-detail"},[a("div",{staticClass:"album"},[a("div",{staticClass:"album_info"},[a("div",{staticClass:"album_media"},[a("img",{attrs:{src:t.topinfo.pic_album}})]),t._v(" "),a("div",{staticClass:"album_bd"},[a("h1",{staticClass:"album__name"},[t._v(t._s(t.topinfo.ListName))]),t._v(" "),a("p",{staticClass:"album__desc"},[t._v(t._s(t.update_time)+" 更新")])])])]),t._v(" "),a("div",{staticClass:"songlist_box"},[a("div",{staticClass:"count_box"},[a("div",{attrs:{calss:"count_box__desc"}},[t._v("\n            排行榜\n            "),a("span",{staticClass:"count_box__number"},[t._v("共"+t._s(t.total_song_num)+"首")])])]),t._v(" "),a("ul",{staticClass:"rank_list"},t._l(t.toplistArr,function(s,n){return a("li",{key:n,staticClass:"qui_list__item",on:{click:function(a){t.searchMusicUrl(s.data.songmid)}}},[a("div",{staticClass:"qui_list__order"},[a("span",{staticClass:"qui_list__decimal"},[t._v(t._s(n+1))])]),t._v(" "),a("div",{staticClass:"qui_list__bd"},[a("div",{staticClass:"qui_list__box"},[a("h3",{staticClass:"qui_list__tit"},[a("span",{staticClass:"qui_list__txt"},[t._v(t._s(s.data.songname))])]),t._v(" "),a("p",{staticClass:"qui_list__desc"},[a("span",{staticClass:"qui_list__txt"},[t._l(s.data.singer,function(s,n){return a("span",{key:n},[t._v(t._s(s.name)+" ")])}),t._v("\n                        "+t._s(s.data.albumdesc)+"\n                      ")],2)])])])])}))]),t._v(" "),a("audio",{staticStyle:{height:"0",width:"0",display:"none"},attrs:{autoplay:"",src:t.song_url}})])},staticRenderFns:[]},d=function(t){a("zF8z")},f=a("8AGX")(p.a,_,!1,d,"data-v-c17dd1b0",null).exports,m=a("pLCb"),v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"recom"},[s("mt-swipe",{attrs:{auto:4e3}},this._l(this.sliders,function(t,a){return s("mt-swipe-item",{key:a},[s("img",{attrs:{src:t.picUrl}})])})),this._v(" "),s("div",{staticClass:"songlist"},[s("p",[this._v("热门歌单")]),this._v(" "),s("ul",{staticClass:"songlist-box"},this._l(this.songlists,function(t,a){return s("li",{key:a,staticClass:"songlist-item"},[s("img",{attrs:{src:t.picUrl}})])}))])],1)},staticRenderFns:[]},h=function(t){a("p3mI")},g=a("8AGX")(m.a,v,!1,h,"data-v-4c144e4a",null).exports,C=a("pkJM"),k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("mt-search",{attrs:{"cancel-text":"取消",placeholder:"搜索"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),t._v(" "),a("div",{staticClass:"hotword"},[a("h3",[t._v("热门搜索")]),t._v(" "),a("ul",[a("li",{staticClass:"tag-s tag_hot"},[a("span",[t._v(t._s(t.special_key))])]),t._v(" "),t._l(t.hotwords,function(s,n){return a("li",{key:n,staticClass:"tag-s"},[a("span",[t._v(t._s(s.k))])])})],2)])],1)},staticRenderFns:[]},b=function(t){a("xZ+L")},y=a("8AGX")(C.a,k,!1,b,"data-v-b58b6932",null).exports,x=a("MfoW"),q={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"toplist"},[a("ul",t._l(t.toplist,function(s,n){return 201!=s.id?a("li",{key:n},[a("router-link",{attrs:{to:{name:"toplist",params:{topid:s.id}}}},[a("div",{staticClass:"topic_media"},[a("img",{attrs:{src:s.picUrl}})]),t._v(" "),a("div",{staticClass:"topic_info"},[a("h3",{staticClass:"topic_tit"},[t._v(t._s(s.topTitle))]),t._v(" "),a("ul",t._l(s.songList,function(s,n){return a("li",{key:n},[t._v("\n                    "+t._s(n+1)+"."),a("span",[t._v(t._s(s.songname))]),t._v("-"),a("span",[t._v(t._s(s.singername))])])}))])])],1):t._e()}))])},staticRenderFns:[]},j=function(t){a("5BDP")},w=a("8AGX")(x.a,q,!1,j,"data-v-6edd8c2a",null).exports;n.default.use(l.a);var T=new l.a({routes:[{path:"/",redirect:"/index/recom"},{path:"/toplist/:topid",name:"toplist",component:f},{path:"/index",component:u,children:[{path:"/",component:g},{path:"recom",component:g},{path:"search",component:y},{path:"top",component:w}]}]});a("tra3");n.default.use(e.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:T,template:"<App/>",components:{App:o}})},p3mI:function(t,s){},pLCb:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{sliders:[],songlists:[]}},methods:{topView:function(){var s=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=701075963&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1512548815061",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.sliders=t.data.slider,s.songlists=t.data.songList},error:function(){alert("fail")}})}},mounted:function(){this.$nextTick(function(){this.topView()})}}}).call(s,a("tra3"))},pkJM:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{value:"",special_key:"",hotwords:[]}},methods:{gethotword:function(){var s=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1514887002288",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.special_key=t.data.special_key,s.hotwords=t.data.hotkey},error:function(){alert("fail")}})},getsearch:function(){}},mounted:function(){this.$nextTick(function(){this.gethotword()})}}}).call(s,a("tra3"))},"xZ+L":function(t,s){},zF8z:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.f90a87b487f52155f121.js.map