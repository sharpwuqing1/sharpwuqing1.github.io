webpackJsonp([0],{"4jWT":function(t,s){},"5OHe":function(t,s){},EFoV:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{sliders:[],songlists:[]}},methods:{topView:function(){var s=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=701075963&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1512548815061",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.sliders=t.data.slider,s.songlists=t.data.songList},error:function(){alert("fail")}})}},mounted:function(){this.$nextTick(function(){this.topView()})}}}).call(s,a("qqHy"))},EXXh:function(t,s){},FsDG:function(t,s){},H1it:function(t,s){},HmRU:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{value:"",special_key:"",hotwords:[],songlists:[]}},methods:{gethotword:function(){var s=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1514887002288",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.special_key=t.data.special_key,s.hotwords=t.data.hotkey},error:function(){alert("fail")}})},getsearch:function(){var s=this;s.value&&t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w="+s.value,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.songlists=t.data.song.list},error:function(){alert("fail")}})},show:function(){t(".mint-searchbar-cancel").show(),t(".hotword").hide(),t(".searchList").show()},display:function(){t(".mint-searchbar-cancel").hide(),t(".hotword").show(),t(".searchList").hide(),this.songlists=""}},mounted:function(){this.$nextTick(function(){this.gethotword()})}}}).call(s,a("qqHy"))},IeFE:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{week:"",day:"0",update_time:"",total_song_num:0,topinfo:{},pic_album_url:"",toplistArr:[]}},methods:{getToplistDetail:function(){var s=this;t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+s.$route.params.topid+"&_=1514947819525",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.day=t.day_of_year,s.update_time=t.update_time,s.total_song_num=t.total_song_num,s.topinfo=t.topinfo,s.toplistArr=t.songlist,s.pic_album_url=t.topinfo.pic_album.replace(/http/,"https")},error:function(){alert("fail")}})}},mounted:function(){this.$nextTick(function(){this.getToplistDetail()})}}}).call(s,a("qqHy"))},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("xd7I"),n=a("2bvH"),e=a("wSez"),o=a.n(e),c=(a("5OHe"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var r=a("C7Lr")({name:"app"},c,!1,function(t){a("EXXh")},null,null).exports,l=a("7LQH"),u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("header",{staticClass:"mod_header"},[a("i",{staticClass:"music_logo"},[a("svg",{staticClass:"icon",attrs:{t:"1516344677429",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"659","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"25",height:"25"}},[a("path",{attrs:{d:"M405.333333 704m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z",fill:"#fff","p-id":"660"}}),a("path",{attrs:{d:"M512 128v576h85.333333V298.666667l234.666667 64v-149.333334z",fill:"#fff","p-id":"661"}})])]),t._v(" "),a("span",{staticClass:"app-name"},[t._v("iMusic")])]),t._v(" "),a("mt-navbar",{model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"1"}},[a("router-link",{attrs:{to:"/index/recom"}},[t._v("推荐")])],1),t._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[a("router-link",{attrs:{to:"/index/top"}},[t._v("排行榜")])],1),t._v(" "),a("mt-tab-item",{attrs:{id:"3"}},[a("router-link",{attrs:{to:"/index/search"}},[t._v("搜索")])],1)],1),t._v(" "),a("div",{staticClass:"con-view"},[a("router-view")],1)],1)},staticRenderFns:[]};var _=a("C7Lr")({name:"HelloWorld",data:function(){return{selected:""}}},u,!1,function(t){a("FsDG")},"data-v-1754c594",null).exports,p=a("IeFE"),d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"toplist-detail"},[a("div",{staticClass:"album"},[a("div",{staticClass:"album_info"},[a("div",{staticClass:"album_media"},[a("img",{attrs:{src:t.pic_album_url}})]),t._v(" "),a("div",{staticClass:"album_bd"},[a("h1",{staticClass:"album__name"},[t._v(t._s(t.topinfo.ListName))]),t._v(" "),a("p",{staticClass:"album__desc"},[t._v(t._s(t.update_time)+" 更新")])])])]),t._v(" "),a("div",{staticClass:"songlist_box"},[a("div",{staticClass:"count_box"},[a("div",{attrs:{calss:"count_box__desc"}},[t._v("\n              排行榜\n              "),a("span",{staticClass:"count_box__number"},[t._v("共"+t._s(t.total_song_num)+"首")])])]),t._v(" "),a("ul",{staticClass:"rank_list"},t._l(t.toplistArr,function(s,i){return a("li",{key:i,staticClass:"qui_list__item"},[a("router-link",{attrs:{to:{name:"play",params:{data:s.data}}}},[a("div",{staticClass:"qui_list__order"},[a("span",{staticClass:"qui_list__decimal"},[t._v(t._s(i+1))])]),t._v(" "),a("div",{staticClass:"qui_list__bd"},[a("div",{staticClass:"qui_list__box"},[a("h3",{staticClass:"qui_list__tit"},[a("span",{staticClass:"qui_list__txt"},[t._v(t._s(s.data.songname))])]),t._v(" "),a("p",{staticClass:"qui_list__desc"},[a("span",{staticClass:"qui_list__txt"},[t._l(s.data.singer,function(s,i){return a("span",{key:i},[t._v(t._s(s.name)+" ")])}),t._v("\n                                "+t._s(s.data.albumdesc)+"\n                              ")],2)])])])])],1)}),0)])])},staticRenderFns:[]};var m=function(t){a("iyvW")},f=a("C7Lr")(p.a,d,!1,m,"data-v-3e373e6e",null).exports,v=a("Z7qO"),h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"play_ui"},[a("audio",{staticStyle:{height:"0",width:"0",display:"none"},attrs:{id:"music-player",autoplay:"",loop:"",src:t.song_url}}),t._v(" "),a("div",{staticClass:"main_box"},[a("div",{staticClass:"song_info"},[a("span",{staticClass:"album_cover js-imgbox"},[a("img",{staticClass:"album_cover__img",attrs:{src:t.img_url}})]),t._v(" "),a("div",{staticClass:"song_info__flex"},[a("h1",{staticClass:"song_name"},[a("span",{staticClass:"song_name__text",staticStyle:{transition:"none",transform:"translate(0px)"},attrs:{id:"songname"}},[t._v(t._s(t.song_info.songname))])]),t._v(" "),a("p",{staticClass:"singer_name"},t._l(t.song_info.singer,function(s,i){return a("span",{key:i,staticClass:"singer_name__text",attrs:{id:"singername"}},[t._v("\n                       "+t._s(s.name)+"\n                   ")])}),0)]),t._v(" "),a("a",{staticClass:"icon_play js-play",attrs:{href:"javascript:;"},on:{click:function(s){return t.playSong()}}})]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"bg blur",style:{backgroundImage:"url("+t.img_url+")"},attrs:{id:"bg"}}),t._v(" "),a("div",{staticClass:"bg_mask",staticStyle:{opacity:"0.6"}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex_item"},[s("div",{staticClass:"lyric",attrs:{id:"lyric"}},[s("div",{staticClass:"lyric_box",attrs:{id:"lyric_box"}},[s("div",{staticClass:"lyric_text",attrs:{id:"lyricDiv"}},[s("p")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"control"},[a("div",{staticClass:"operate operate--right"},[a("a",{staticClass:"operate__item js-like",attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon_like"},[t._v("喜欢")])])]),t._v(" "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress__bar progress--no_dot"},[a("div",{staticClass:"progress__box"},[a("div",{staticClass:"progress__bg"}),t._v(" "),a("div",{staticClass:"progress__load",staticStyle:{"-webkit-transform":"translateX(100%)"}}),t._v(" "),a("div",{staticClass:"progress__play",staticStyle:{transform:"translateX(0.657556%)","transition-duration":"1s"},attrs:{id:"js-progress"}}),t._v(" "),a("div",{staticClass:"progress__play",attrs:{id:"play_on"}},[a("span",{staticClass:"progress__dot",staticStyle:{display:"none"},attrs:{id:"btn_pro"}})])])]),t._v(" "),a("span",{staticClass:"progress__start js-time-start"},[t._v("00:01")]),t._v(" "),a("span",{staticClass:"progress__end js-time-total"},[t._v("03:52")])])])}]};var g=function(t){a("yGrt")},C=a("C7Lr")(v.a,h,!1,g,null,null).exports,y=a("EFoV"),b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"recom"},[s("mt-swipe",{attrs:{auto:4e3}},this._l(this.sliders,function(t,a){return s("mt-swipe-item",{key:a},[s("img",{attrs:{src:t.picUrl.replace(/http/,"https")}})])}),1),this._v(" "),s("div",{staticClass:"songlist"},[s("p",[this._v("热门歌单")]),this._v(" "),s("ul",{staticClass:"songlist-box"},this._l(this.songlists,function(t,a){return s("li",{key:a,staticClass:"songlist-item"},[s("img",{attrs:{src:t.picUrl.replace(/http/,"https")}})])}),0)])],1)},staticRenderFns:[]};var k=function(t){a("a5NF")},x=a("C7Lr")(y.a,b,!1,k,"data-v-5e0878e0",null).exports,j=a("HmRU"),q={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"mint-searchbar"},[a("div",{staticClass:"mint-searchbar-inner"},[a("i",{staticClass:"mintui mintui-search"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"mint-searchbar-core",attrs:{type:"search",placeholder:"搜索歌曲、歌单、专辑"},domProps:{value:t.value},on:{focus:t.show,keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.getsearch(s)},input:function(s){s.target.composing||(t.value=s.target.value)}}})]),t._v(" "),a("a",{staticClass:"mint-searchbar-cancel",staticStyle:{display:"none"},on:{click:t.display}},[t._v("取消")])]),t._v(" "),a("div",{staticClass:"searchList",staticStyle:{display:"none"}},[a("ul",{staticClass:"song-list"},t._l(t.songlists,function(s,i){return a("li",{key:i},[a("router-link",{attrs:{to:{name:"play",params:{data:s}}}},[a("i",{staticClass:"icon"}),t._v(" "),a("h6",{staticClass:"main_tit"},[t._v(t._s(s.songname))]),t._v(" "),a("p",{staticClass:"sub_tit"},t._l(s.singer,function(s,i){return a("span",{key:i},[t._v(t._s(s.name)+" ")])}),0)])],1)}),0)]),t._v(" "),a("div",{staticClass:"hotword"},[a("h3",[t._v("热门搜索")]),t._v(" "),a("ul",[a("li",{staticClass:"tag-s tag_hot"},[a("span",[t._v(t._s(t.special_key))])]),t._v(" "),t._l(t.hotwords,function(s,i){return a("li",{key:i,staticClass:"tag-s"},[a("span",[t._v(t._s(s.k))])])})],2)])])},staticRenderFns:[]};var w=function(t){a("4jWT")},T=a("C7Lr")(j.a,q,!1,w,"data-v-0de7504f",null).exports,E=a("PUXq"),$={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"toplist"},[a("ul",t._l(t.toplist,function(s,i){return 201!=s.id?a("li",{key:i},[a("router-link",{attrs:{to:{name:"toplist",params:{topid:s.id}}}},[a("div",{staticClass:"topic_media"},[a("img",{attrs:{src:s.picUrl.replace(/http/,"https")}})]),t._v(" "),a("div",{staticClass:"topic_info"},[a("h3",{staticClass:"topic_tit"},[t._v(t._s(s.topTitle))]),t._v(" "),a("ul",t._l(s.songList,function(s,i){return a("li",{key:i},[t._v("\n                    "+t._s(i+1)+"."),a("span",[t._v(t._s(s.songname))]),t._v("-"),a("span",[t._v(t._s(s.singername))])])}),0)])])],1):t._e()}),0)])},staticRenderFns:[]};var H=function(t){a("H1it")},S=a("C7Lr")(E.a,$,!1,H,"data-v-7d408401",null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},L=a("C7Lr")({data:function(){return{d:""}}},F,!1,null,null,null).exports;i.default.use(l.a);var N=new l.a({routes:[{path:"/",redirect:"/index/recom"},{path:"/toplist/:topid",name:"toplist",component:f},{path:"/play/:data",name:"play",component:C},{path:"/index",component:_,children:[{path:"/",component:x},{path:"recom",component:x},{path:"search",component:T},{path:"top",component:S}]},{path:"/ele",component:L}]});i.default.use(n.a);var U=new n.a.Store({state:{count:1},getters:{count:function(t){return t.count}},actions:{increment:function(t){(0,t.commit)("increment")}},mutations:{increment:function(t){t.count++}}});a("qqHy");i.default.use(n.a),i.default.use(o.a),i.default.config.productionTip=!1,new i.default({el:"#app",store:U,router:N,template:"<App/>",components:{App:r}})},PUXq:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{toplist:[]}},methods:{getToplist:function(){var s=this;t.ajax({type:"GET",async:!1,url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1514888428782",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){s.toplist=t.data.topList},error:function(){alert("fail")}})}},mounted:function(){this.$nextTick(function(){this.getToplist()})}}}).call(s,a("qqHy"))},Z7qO:function(t,s,a){"use strict";(function(t){var i=a("3cXf"),n=a.n(i);s.a={data:function(){return{song_url:"",img_url:"",song_info:""}},methods:{searchMusicUrl:function(){var s=this,a="C400"+this.song_info.songmid+".m4a";t.ajax({type:"get",async:!1,url:"https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=jsonp&callback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&songmid="+this.song_info.songmid+"&filename="+a+"&guid=4529237216",dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",scriptCharset:"GBK",success:function(t){var a=t.data.items[0];s.getSongUrl(a.vkey,a.filename)},error:function(){alert("fail")}})},getSongUrl:function(t,s){var a=t,i=s;this.song_url="http://ws.stream.qqmusic.qq.com/"+i+"?guid=4529237216&vkey="+a+"&fromtag=0"},getlyric:function(){},playSong:function(){t(".js-play").hasClass("icon_play--pause")?(t(".js-play").removeClass("icon_play--pause"),this.song_url=""):(t(".js-play").addClass("icon_play--pause"),this.searchMusicUrl())}},created:function(){},mounted:function(){this.$nextTick(function(){"string"!=typeof this.$route.params.data&&sessionStorage.setItem("data",n()(this.$route.params.data)),this.song_info=JSON.parse(sessionStorage.getItem("data")),this.img_url="http://y.gtimg.cn/music/photo_new/T002R150x150M000"+this.song_info.albummid+".jpg?max_age=2592000"})}}}).call(s,a("qqHy"))},a5NF:function(t,s){},iyvW:function(t,s){},yGrt:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.9be8f41e378d48b88feb.js.map