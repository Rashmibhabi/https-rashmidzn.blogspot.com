!function(r){function s(e,t){this.elem=e,this.settings=t,this.megaMenuHtml(),this.ajaxcall=null,this.menulist=this.elem.find(".leftmenulist li a"),this.menuHelper(this.elem),this.addEvents()}s.prototype={regex:{islabel:new RegExp("/search/label/","g"),issearch:new RegExp("[?&]q=","g"),labelsearch:new RegExp("(https://[^/]+)/search/label/([^/?&]+).*[?&]q=([^$&]+)(?:[^$]+)?","g"),label:new RegExp("(https://[^/]+)/search/label/([^/?&$]+)","g"),search:new RegExp("(https://[^/]+)/search/?[?&]q=(.*)","g")},addEvents:function(){var e=this;this.menulist.hover(function(){"true"!==r(this).data("menuloaded")&&(e.li=r(this),e.url=e.li.attr("href"),e.container=e.li.closest("ul").siblings("ul"),e.hoverOver())},function(){e.hoverOut()})},hoverOver:function(){var t=this;this.getAJAXUrl(),this.ajaxUrl&&(this.ajaxcall=r.ajax({type:"GET",url:t.ajaxUrl,dataType:"jsonp",data:t.ajaxData,beforeSend:function(){t.showLoader()},success:function(e){t.hideLoader(),t.addArrow(),t.showPosts(e)},error:function(e){t.showError(e)}}))},hoverOut:function(){this.ajaxcall.abort(),this.hideLoader()},getAJAXUrl:function(){var a;this.url?((a=this).ajaxData={alt:"json","max-results":this.settings.postsNumber},-1!==this.url.search(this.regex.islabel)&&-1!==this.url.search(this.regex.issearch)?this.ajaxUrl=this.url.replace(this.regex.labelsearch,function(e,t,s,i){return a.ajaxData.q=i,[t,"/feeds/posts/default/-/",s,"/"].join("")}):-1!==this.url.search(this.regex.islabel)&&-1===this.url.search(this.regex.issearch)?this.ajaxUrl=this.url.replace(this.regex.label,function(e,t,s){return delete a.ajaxData.q,[t,"/feeds/posts/default/-/",s,"/"].join("")}):-1===this.url.search(this.regex.islabel)&&-1!==this.url.search(this.regex.issearch)?this.ajaxUrl=this.url.replace(this.regex.search,function(e,t,s){return a.ajaxData.q=s,[t,"/feeds/posts/default"].join("")}):this.ajaxUrl=!1):this.ajaxUrl=!1},showLoader:function(){r("<span></span>",{class:"loading-icon"}).appendTo(this.li.closest("li"))},hideLoader:function(){this.li.closest("li").find("span.loading-icon").remove()},showPosts:function(e){var s,i,a,l=this,n=[];0<e.feed.openSearch$totalResults.$t?r.each(e.feed.entry,function(e,t){s=t.title.$t,r.each(t.link,function(e,t){i="alternate"===t.rel?t.href:"#"}),a=t.media$thumbnail?t.media$thumbnail.url.replace(/\/s72\-c\//,"/s200-c/"):l.settings.noThumbnail,n.push('<li><span class="thumb-container"><a title="',s,'" href="',i,'"><img alt="',s,'" src="',a,'"/><br />',s,"</a></span></li>")}):n.push("<h5>","No posts available.","</h5>"),this.container.html(n.join("")),this.menulist.removeData("menuloaded"),this.li.data("menuloaded","true")},showError:function(e){"error"===e.statusText&&(this.hideLoader(),this.addArrow(),this.container.html("<h5>Oops... Could not fetch the blog posts.</h5>"))},addArrow:function(){this.menulist.closest("li").find("span").remove(),this.menulist.removeClass("hover-menu"),this.li.addClass("hover-menu"),r("<span></span>",{class:"menu-icon"}).appendTo(this.li.closest("li"))},menuHelper:function(e){var s=this;e.find(">li").hover(function(){var e=r(this);e.find("a:first").addClass("hover-menu");var t=r(this).find("ul.leftmenulist li").height()*r(this).find("ul.leftmenulist li").length;e.find("ul.rightmenulist").css({"min-height":t+"px"}),s.requestFirstAjax(e)},function(){r(this).find("a:first").removeClass("hover-menu")})},megaMenuHtml:function(){this.elem.find("ul ul").remove(),this.elem.addClass("megamenuid").find(">li").find("ul:first").addClass("leftmenulist").wrap(r("<div></div>",{class:this.settings.divClass})),r("ul.leftmenulist").after(r("<ul></ul>",{class:"rightmenulist"}))},requestFirstAjax:function(e){e=e.find(".leftmenulist li:first-child a"),this.url=e.attr("href"),this.container=e.closest("ul").siblings("ul"),this.li=e,this.hoverOver()}},r.fn.megaBloggerMenu=function(e){var t=r.extend({},{postsNumber:4,divClass:"megasubmenu",postsClass:"rightmenulist",noThumbnail:"/default.png"},e);return this.each(function(){new s(r(this),t)})}}(jQuery),jQuery(document).ready(function(t){var s=t("#menu"),i=t(".menu-btn"),e=t(".with-ul > a");i.click(function(e){e.preventDefault(),i.toggleClass("active"),s.toggleClass("active")}),e.click(function(e){e.preventDefault(),t(this).toggleClass("active").next("ul").toggleClass("active")})});
