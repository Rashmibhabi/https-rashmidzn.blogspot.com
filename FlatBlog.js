$(function(){function o(I,q,t,j){var a;(q.match("mega-menu")||q.match("ticker-posts")||q.match("hot-posts")||q.match("feat-big")||q.match("slider")||q.match("col-left")||q.match("col-right")||q.match("grid-small")||q.match("grid-big")||q.match("feat-list")||q.match("post-list")||q.match("related"))&&(a="",a="recent"==j?"/feeds/posts/default?alt=json-in-script&max-results="+t:"random"==j?"/feeds/posts/default?max-results="+t+"&start-index="+(Math.floor(Math.random()*t)+1)+"&alt=json-in-script":"/feeds/posts/default/-/"+j+"?alt=json-in-script&max-results="+t,$.ajax({url:a,type:"get",dataType:"jsonp",beforeSend:function(){q.match("hot-posts")?I.html('<div class="hot-loader"/>').parent().addClass("show-hot"):q.match("slider")&&I.html('<div class="loader"></div>').parent().addClass("show-slider")},success:function(t){var a;q.match("mega-menu")?a='<ul class="mega-menu-inner">':q.match("ticker-posts")?a='<ul class="ticker-widget">':q.match("hot-posts")?a='<ul class="hot-posts">':q.match("feat-big")?a='<ul class="feat-big">':q.match("slider")?a='<ul class="main-slider">':q.match("col-right")||q.match("col-left")?a='<ul class="feat-col">':q.match("grid-small")?a='<ul class="grid-small">':q.match("grid-big")?a='<ul class="grid-big">':q.match("feat-list")?a='<ul class="feat-list">':q.match("post-list")?a='<ul class="custom-widget">':q.match("related")&&(a='<ul class="related-posts">');var e,s,i,l,o,r,c,n,m,d,h,p,u,f,g,v=t.feed.entry;if(null!=v){for(var b=0,w=v;b<w.length;b++){var k=function(t,a){for(var e=0;e<t[a].link.length;e++)if("alternate"==t[a].link[e].rel){var s=t[a].link[e].href;break}return s}(w,b),x='<a href="'+k+'">'+w[b].title.$t+"</a>",C=(f=u=p=h=void 0,g=(m=w)[d=b].title.$t,m[d].content.$t,"media$thumbnail"in m[d]?(p=(h=m[d].media$thumbnail.url).replace("/s72-c","/w640"),u=h.replace("/s72-c","/w280"),f=h.replace("/s72-c","/w100"),h.match("img.youtube.com")&&(p=h.replace("/default.","/hqdefault."),u=h.replace("/default.","/mqdefault."),f=h)):(p=noThumbnail,u=noThumbnail.replace("/s680","/w280"),f=noThumbnail.replace("/s680","/w100")),['<img class="post-thumb" alt="'+g+'" src="'+p+'"/>','<img class="post-thumb" alt="'+g+'" src="'+u+'"/>','<img class="post-thumb" alt="'+g+'" src="'+f+'"/>']),y=null!=(c=w)[n=b].category?'<span class="post-tag">'+c[n].category[0].term+"</span>":"",A='<span class="post-author">'+w[b].author[0].name.$t+" </span>",T=(i=void 0,i=w[b].published.$t,l=i.substring(0,4),o=i.substring(5,7),r=i.substring(8,10),'<span class="post-date">'+monthFormat[parseInt(o,10)-1]+" "+r+", "+l+"</span>"),_=(s=w[b].content.$t,'<p class="post-snippet">'+$("<div>").html(s).text().trim().substr(0,86)+"…</p>"),L=(e=w[b].content.$t,'<p class="post-snippet">'+$("<div>").html(e).text().trim().substr(0,150)+"…</p>"),P="";q.match("mega-menu")?P+='<div class="mega-item item-'+b+'"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="'+k+'">'+C[1]+"</a>"+y+'</div><h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div></div></div>":q.match("ticker-posts")?P+='<li class="ticker-item item-'+b+'"></a><h2 class="post-title">'+x+"</h2></li>":q.match("hot-posts")?P+=0==b?'<li class="hot-item item-'+b+'"><div class="hot-item-inner"><a class="post-image-link" href="'+k+'">'+C[0]+'</a><div class="post-info">'+y+'<h2 class="post-title">'+x+'</h2><div class="post-meta">'+A+T+"</div></div></div></li>":'<li class="hot-item item-'+b+'"><div class="hot-item-inner"><a class="post-image-link" href="'+k+'">'+C[0]+'</a><div class="post-info">'+y+'<h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div></div></div></li>":q.match("feat-big")?P+=0==b?'<li class="feat-item item-big item-'+b+'"><div class="feat-inner"><a class="post-image-link" href="'+k+'">'+C[0]+"</a>"+y+'<div class="post-info"><h2 class="post-title">'+x+'</h2><div class="post-meta">'+A+T+"</div>"+_+"</div></div></li>":'<li class="feat-item item-small item-'+b+'"><a class="post-image-link" href="'+k+'">'+C[1]+'</a><div class="post-info"><h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div></div></li>":q.match("slider")?P+='<li class="slider-item item-'+(b+1)+'"><div class="slider-item-inner"><a class="post-image-link" href="'+k+'">'+C+'</a><div class="post-info-wrap"><div class="post-info">'+y+'<h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div>"+_+"</div></div></div></li>":q.match("col-left")||q.match("col-right")?P+=0==b?'<li class="feat-item item-big item-'+b+'"><div class="feat-inner"><a class="post-image-link" href="'+k+'">'+C[0]+"</a>"+y+'<div class="post-info"><h2 class="post-title">'+x+'</h2><div class="post-meta">'+A+T+"</div>"+_+"</div></div></li>":'<li class="feat-item item-small item-'+b+'"><a class="post-image-link" href="'+k+'">'+C[2]+'</a><div class="post-info"><h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div></div></li>":q.match("grid-small")?P+='<li class="feat-item item-small item-'+b+'"><div class="post-image-wrap"><a class="post-image-link" href="'+k+'">'+C[1]+"</a>"+y+'</div><div class="post-info"><h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div></div></li>":q.match("grid-big")?P+='<li class="feat-item item-big item-'+b+'"><div class="feat-inner"><a class="post-image-link" href="'+k+'">'+C[0]+"</a>"+y+'<div class="post-info"><h2 class="post-title">'+x+'</h2><div class="post-meta">'+A+T+"</div>"+_+"</div></div></li>":q.match("feat-list")?P+='<li class="feat-item item-'+b+'"><div class="feat-inner"><a class="post-image-link" href="'+k+'">'+C[0]+"</a>"+y+'<div class="post-info"><h2 class="post-title">'+x+'</h2><div class="post-meta">'+A+T+"</div>"+L+"</div></div></li>":q.match("post-list")?P+='<li class="item-'+b+'"><a class="post-image-link" href="'+k+'">'+C[2]+'</a><h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div></div></li>":q.match("related")&&(P+='<li class="related-item item-'+b+'"><div class="post-image-wrap"><a class="post-image-link" href="'+k+'">'+C[1]+"</a>"+y+'</div><h2 class="post-title">'+x+'</h2><div class="post-meta">'+T+"</div></li>"),a+=P}a+="</ul>"}else a='<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown-o"/></ul>';q.match("mega-menu")?(I.addClass("has-sub mega-menu").append(a),I.find("a:first").attr("href",function(t,a){return a="recent"==j||"random"==j?a.replace(a,"/search/?&max-results="+postPerPage):a.replace(a,"/search/label/"+j+"?&max-results="+postPerPage)})):q.match("ticker-posts")?(I.html(a).parent().addClass("show-ticker"),I.find(".ticker-widget").owlCarousel({items:1,animateIn:"fadeInRight",animateOut:"fadeOutRight",smartSpeed:0,rtl:!1,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplayHoverPause:!0,dots:!1,mouseDrag:!1,touchDrag:!1,freeDrag:!1,pullDrag:!1})):q.match("hot-posts")?I.html(a).parent().addClass("show-hot"):q.match("slider")?(I.html(a).parent().addClass("show-slider"),I.find(".main-slider").owlCarousel({items:1,animateIn:"fadeInRight",animateOut:"fadeOutRight",smartSpeed:0,rtl:!1,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplayHoverPause:!0,dots:!1,mouseDrag:!1,touchDrag:!1,freeDrag:!1,pullDrag:!1})):q.match("feat-big")||q.match("feat-list")||q.match("col-left")||q.match("col-right")||q.match("grid-small")||q.match("grid-big")?(I.parent().find(".widget-title").append('<a class="view-all" href="/search/label/'+j+"?&max-results="+postPerPage+'">'+messages.viewAll+"</a>"),(q.match("col-left")||q.match("col-right"))&&(q.match("col-right")&&I.parent().addClass("col-right"),I.parent().addClass("col-width")),I.html(a).parent().addClass("show-widget")):I.html(a)}}))}$("#main-menu").each(function(){for(var t=$(this).find(".LinkList ul > li").children("a"),a=t.length,e=0;e<a;e++){var s,i=t.eq(e),l=i.text();"_"!==l.charAt(0)&&"_"===t.eq(e+1).text().charAt(0)&&(s=i.parent()).append('<ul class="sub-menu m-sub"/>'),"_"===l.charAt(0)&&(i.text(l.replace("_","")),i.parent().appendTo(s.children(".sub-menu")))}for(e=0;e<a;e++){var o,r=t.eq(e),c=r.text();"_"!==c.charAt(0)&&"_"===t.eq(e+1).text().charAt(0)&&(o=r.parent()).append('<ul class="sub-menu2 m-sub"/>'),"_"===c.charAt(0)&&(r.text(c.replace("_","")),r.parent().appendTo(o.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu-nav > li > a").each(function(){var t=$(this);"homepage"==t.attr("href").trim().toLowerCase()&&t.attr("href","/").parent("li").addClass("li-home")}),$("#main-menu .widget").addClass("show-menu")}),$("#main-menu-nav").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".mobile-menu ul > li a").each(function(){var t=$(this),a=t.attr("href").trim(),e=a.toLowerCase(),s=a.split("/")[0];e.match("mega-menu")&&t.attr("href","/search/label/"+s+"?&max-results="+postPerPage)}),$(".slide-menu-toggle").on("click",function(){$("body").toggleClass("nav-active"),$(".overlay").fadeToggle(170)}),$(".mobile-menu ul li .submenu-toggle").on("click",function(t){$(this).parent().hasClass("has-sub")&&(t.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))}),$(".show-search, .show-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()}),$(".hide-search, .hide-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()}),$(".Label a, a.b-label").attr("href",function(t,a){return a.replace(a,a+"?&max-results="+postPerPage)}),$(".avatar-image-container img").attr("src",function(t,a){return a=(a=a.replace("/s35-c/","/s45-c/")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")}),$(".index-post .post-image-link img").attr("src",function(t,a){return a=a.replace("https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png",noThumbnail)}),$(".author-description a").each(function(){$(this).attr("target","_blank")}),$.each($(".list-label li a"),function(){var t=colors[Math.floor(Math.random()*colors.length)];$(this).css("background-color",t)}),$(".post-nav").each(function(){var t=$("a.prev-post-link").attr("href"),a=$("a.next-post-link").attr("href");$.ajax({url:t,type:"get",success:function(t){var a=$(t).find(".blog-post h1.post-title").text();$(".post-prev a .post-nav-inner p").text(a)}}),$.ajax({url:a,type:"get",success:function(t){var a=$(t).find(".blog-post h1.post-title").text();$(".post-next a .post-nav-inner p").text(a)}})}),$(".post-body strike").each(function(){var t=$(this),a=t.text();a.match("left-sidebar")&&t.replaceWith("<style>.item #main-wrapper{float:right;padding:0 0 0 25px}.item #sidebar-wrapper{float:left}.item #content-wrapper > .container{margin:0}</style>"),a.match("right-sidebar")&&t.replaceWith("<style>.item #main-wrapper{float:left;padding:0 25px 0 0}.item #sidebar-wrapper{float:right}</style>"),a.match("full-width")&&t.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}.item #content-wrapper > .container{margin:0}</style>")}),$("#main-wrapper, #sidebar-wrapper").each(function(){1==fixedSidebar&&$(this).theiaStickySidebar({additionalMarginTop:25,additionalMarginBottom:25})}),$(".back-top").each(function(){var t=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?t.fadeIn(250):t.fadeOut(250)}),t.click(function(){$("html, body").animate({scrollTop:0},500)})}),$("#main-menu #main-menu-nav li").each(function(){var t=$(this),a=t.find("a").attr("href").trim();o(t,a.toLowerCase(),5,a.split("/")[0])}),$("#break-section .widget-content").each(function(){var t=$(this),a=t.text().trim(),e=a.toLowerCase(),s=a.split("/");o(t,e,s[0],s[1])}),$("#hot-section .widget-content").each(function(){var t=$(this),a=t.text().trim();o(t,a.toLowerCase(),5,a.split("/")[0])}),$(".featured-posts .widget-content").each(function(){var t,a=$(this),e=a.text().trim(),s=e.toLowerCase(),i=e.split("/"),l=s.match("feat-big")?(t=5,i[0]):(t=i[0],i[1]);o(a,s,t,l)}),$(".common-widget .widget-content").each(function(){var t=$(this),a=t.text().trim(),e=a.toLowerCase(),s=a.split("/");o(t,e,s[0],s[1])}),$(".related-ready").each(function(){var t=$(this),a=t.find(".related-tag").data("label");o(t,"related",3,a)}),$(".blog-post-comments").each(function(){var t,a=commentsSystem,e=(disqus_blogger_current_url,'<div class="fb-comments" data-width="100%" data-href="'+$(location).attr("href")+'" data-numposts="5"></div>'),s="comments-system-"+a;"blogger"==a?$(this).addClass(s).show():"disqus"==a?((t=document.createElement("script")).type="text/javascript",t.async=!0,t.src="//"+disqusShortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t),$("#comments, #gpluscomments").remove(),$(this).append('<div id="disqus_thread"/>').addClass(s).show()):"facebook"==a?($("#comments, #gpluscomments").remove(),$(this).append(e).addClass(s).show()):"hide"==a?$(this).hide():$(this).addClass("comments-system-default").show()})}),$(document).scroll(function(){1==fixedMenu&&$(window).on("scroll",function(t){var a=0;$(this).scrollTop()<240?(a=$(".header-header").height(),$(".header-menu, .mobile-header").removeClass("scrolled-header")):($(".header-menu, .mobile-header").addClass("scrolled-header"),$("body").css({marginTop:a}))})});