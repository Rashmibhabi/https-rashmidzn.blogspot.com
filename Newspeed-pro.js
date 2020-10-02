function msgError(){return'<span class="error-msg"><b>Error:</b> No Results Found</span>'}function beforeLoader(){return'<div class="loader"/>'}function getFeedUrl(e,t,a){var r="";switch(a){case"recent":r="/feeds/posts/default?alt=json&max-results="+t;break;case"comments":r="list1"==e?"/feeds/comments/default?alt=json&max-results="+t:"/feeds/posts/default/-/"+a+"?alt=json&max-results="+t;break;default:r="/feeds/posts/default/-/"+a+"?alt=json&max-results="+t}return r}function getPostLink(e,t){for(var a=0;a<e[t].link.length;a++)if("alternate"==e[t].link[a].rel){var r=e[t].link[a].href;break}return r}function getPostTitle(e,t){var a=e[t].title.$t?e[t].title.$t:messages.noTitle;return a}function getFirstImage(e,t){var a=$("<div>").html(e).find("img:first").attr("src"),r=a.lastIndexOf("/")||0,s=a.lastIndexOf("/",r-1)||0,i=a.substring(0,s),o=a.substring(s,r),l=a.substring(r);return(o.match(/\/s[0-9]+/g)||o.match(/\/w[0-9]+/g)||"/d"==o)&&(o="/w72-h72-p-k-no-nu"),i+o+l}function getPostImage(e,t,a){var r=e[t].content.$t,s=e[t].media$thumbnail?e[t].media$thumbnail.url:"https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png";return-1<r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))?!(-1<r.indexOf("<img"))||r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<r.indexOf("<img")?s.replace("/default.","/maxresdefault."):getFirstImage(r):-1<r.indexOf("<img")?getFirstImage(r):"https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png"}function getPostLabel(e,t){var a=e[t].category?'<span class="entry-category">'+e[t].category[0].term+"</span>":"";return a}function getPostSummary(e,t,a){var r,s=e[t].content.$t?(r=e[t].content.$t,'<span class="entry-excerpt excerpt">'+$("<div>").html(r).text().trim().substr(0,a)+"…</span>"):"";return s}function getVideoClass(e,t){return e.match("img.youtube.com")?"is-video":"is-image"}function getPostComments(e,t,a){var r=e[t].author[0].name.$t,s=e[t].author[0].gd$image.src.replace("/s113","/w55-h55-p-k-no-nu"),i=e[t].title.$t;return'<article class="list1-item item-'+t+'"><a class="entry-image-wrap cmm-avatar" href="'+a+'"><span class="entry-thumb" data-image="'+(s.match("//img1.blogblog.com/img/blank.gif")||s.match("//img1.blogblog.com/img/b16-rounded.gif")?"//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg":s)+'"/></a><h2 class="entry-title cmm-title"><a href="'+a+'">'+r+'</a></h2><p class="cmm-snippet excerpt">'+i+"</p></article>"}function getCustomStyle(e,t,a){return 0!=a?"featured"==t?".id-"+e+"-"+t+" .featured-big .entry-category{background-color:"+a+";color:#fff}.id-"+e+"-"+t+" .featured-small .entry-category{color:"+a+"}.id-"+e+"-"+t+" .loader:after{border-color:"+a+";border-right-color:var(--border-color)}":".id-"+e+"-"+t+" .entry-category,body.has-vb-style .id-"+e+"-"+t+" .video-items .entry-category{color:"+a+"}.id-"+e+"-"+t+" .loader:after{border-color:"+a+";border-right-color:var(--border-color)}":""}function getAjax(m,h,e,f,r){switch(h){case"msimple":case"featured":case"block1":case"block2":case"grid1":case"videos":case"list1":case"list2":case"related":0==f&&(f="geterror404");var t=getFeedUrl(h,e,f);$.ajax({url:t,type:"GET",dataType:"json",cache:!0,beforeSend:function(e){var t=m.parent().attr("id"),a=getCustomStyle(t,h,r);switch(h){case"featured":$("#page-skin-2").prepend(a),m.html(beforeLoader()).parent().addClass("type-"+h+" id-"+t+"-"+h+" show-ify");break;case"block1":case"block2":case"grid1":case"videos":$("#page-skin-2").prepend(a),m.html(beforeLoader()).parent().addClass("type-"+h+" id-"+t+"-"+h+" show-ify");break;case"list1":case"list2":m.html(beforeLoader());break;case"related":m.html(beforeLoader()).parent().addClass("show-ify")}},success:function(e){var t="";switch(h){case"msimple":t='<ul class="mega-items">';break;case"featured":t='<div class="featured-items">';break;case"block1":t='<div class="block1-items">';break;case"block2":t='<div class="block2-items">';break;case"grid1":t='<div class="grid1-items">';break;case"videos":t='<div class="video-items">';break;case"list1":t='<div class="list1-items">';break;case"list2":t='<div class="list2-items">';break;case"related":t='<div class="related-posts">'}var a=e.feed.entry;if(null!=a)for(var r=0,s=a;r<s.length;r++){var i=getPostLink(s,r),o=getPostTitle(s,r,i),l=getPostImage(s,r,i),n=getPostLabel(s,r),c=getVideoClass(l),d="";switch(h){case"msimple":d+='<article class="mega-item"><div class="mega-content"><a class="entry-image-wrap '+c+'" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a>'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>";break;case"featured":switch(r){case 0:d+='<div class="featured-left"><article class="featured-item featured-big item-'+r+'"><div class="featured-item-inner"><a class="entry-image-wrap '+c+' before-mask" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header entry-info">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2>"+getPostSummary(s,r,150)+'</div></div></article></div><div class="featured-right">';break;default:d+='<article class="featured-item featured-small item-'+r+'"><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>"}break;case"block1":switch(r){case 0:d+='<article class="block-item block-big item-'+r+'"><a class="entry-image-wrap '+c+'" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2>"+getPostSummary(s,r,80)+"</div></article>";break;default:d+='<article class="block-item block-small item-'+r+'"><a class="entry-image-wrap '+c+'" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>"}break;case"block2":d+='<article class="block-item item-'+r+'"><a class="entry-image-wrap '+c+'" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2>"+getPostSummary(s,r,99)+"</div></article>";break;case"grid1":d+='<article class="grid-item item-'+r+'"><a class="entry-image-wrap '+c+'" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>";break;case"videos":switch(r){case 0:d+='<article class="video-item video-big item-'+r+'"><a class="entry-image-wrap is-video" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2>"+getPostSummary(s,r,90)+"</div></article>";break;default:d+='<article class="video-item video-small item-'+r+'"><a class="entry-image-wrap is-video" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>"}break;case"list1":switch(f){case"comments":d+=getPostComments(s,r,i);break;default:d+='<article class="list1-item item-'+r+'"><a class="entry-image-wrap '+c+'" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>"}break;case"list2":d+='<article class="list2-item item-'+r+'"><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>";break;case"related":d+='<article class="related-item post item-'+r+'"><a class="entry-image-wrap '+c+'" href="'+i+'"><span class="entry-thumb" data-image="'+l+'"/></a><div class="entry-header">'+n+'<h2 class="entry-title"><a href="'+i+'">'+o+"</a></h2></div></article>"}t+=d}else switch(h){case"msimple":t='<ul class="mega-items">'+msgError()+"</ul>";break;default:t=msgError()}switch(h){case"msimple":t+="</ul>",m.append(t).addClass("msimple"),m.find("a:first").attr("href",function(e,t){switch(f){case"recent":t=t.replace(t,"/search");break;default:t=t.replace(t,"/search/label/"+f)}return t});break;case"featured":t+="</div></div>",m.html(t);break;default:t+="</div>",m.html(t)}m.find("span.entry-thumb").lazyify()},error:function(){switch(h){case"msimple":m.append("<ul>"+msgError()+"</ul>");break;default:m.html(msgError())}}})}}function ajaxMega(e,t,a,r,s){if(s.match("getmega")){if("msimple"==t)return getAjax(e,t,a,r);e.append('<ul class="mega-items">'+msgError()+"</ul>")}}function ajaxFeatured(e,t,a,r,s,i){if(s.match("getfeatured")){if("featured"==t)return getAjax(e,t,a,r,i);e.html(beforeLoader()).parent().addClass("show-ify"),setTimeout(function(){e.html(msgError())},500)}}function ajaxBlock(e,t,a,r,s,i){if(s.match("getblock")){if("block1"==t||"block2"==t||"grid1"==t||"videos"==t){var o=viewAllText,l="",l=""!=o?o:messages.viewAll;return e.parent().find(".widget-title").append('<a class="more" href="/search/label/'+r+'">'+l+"</a>"),getAjax(e,t,a,r,i)}e.html(msgError()).parent().addClass("show-ify")}}function ajaxWidget(e,t,a,r,s){if(s.match("getwidget")){if("list1"==t||"list2"==t)return getAjax(e,t,a,r);e.html(msgError())}}function ajaxRelated(e,t,a,r,s){if(s.match("getrelated"))return getAjax(e,t,a,r)}function shortCodeIfy(e,t,a){for(var r=e.split("$"),s=/[^{\}]+(?=})/g,i=0;i<r.length;i++){var o=r[i].split("=");if(o[0].trim()==t)return null!=(a=o[1]).match(s)&&String(a.match(s)).trim()}return!1}function beautiAvatar(e){$(e).attr("src",function(e,t){return t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")})}$("#newspeed-preview-main-menu").menuify(),$("#newspeed-preview-main-menu .widget").addClass("show-menu"),$(".search-toggle.show").on("click",function(){$("body").addClass("search-active"),$("#nav-search-wrap").fadeIn(170).find("input").focus()}),$(".search-toggle.hide").on("click",function(){$("body").removeClass("search-active"),$("#nav-search-wrap").fadeOut(170).find("input").blur()}),$("html").each(function(){var e=$(this);1!=darkMode&&(e.attr("data-theme",localStorage.themeColor),$(".darkmode-toggle,.mobile-darkmode-toggle").on("click",function(){"dark"!=localStorage.themeColor?(e.attr("data-theme","dark"),localStorage.themeColor="dark"):(e.attr("data-theme","light"),localStorage.themeColor="light")}))}),$("#infoify ul li .info-result").each(function(e){var t=$(this),a=t.attr("content").split("$");e=a[0].trim(),null!=a[1]&&t.attr("style","color:"+a[1].trim()+";"),t.text(e)}),$(".blog-posts-title a.more,.related-title a.more").each(function(){var e=$(this),t=viewAllText;""!=t&&e.text(t)}),$(".sidebar .social-icons li a").each(function(e){var t=$(this),a=t.attr("href").split("$");e=a[0].trim(),null!=a[1]&&t.find("span.text").text(a[1].trim()),t.attr("href",e)}),$(".follow-by-email-text").each(function(){var e=$(this),t=followByEmailText;""!=t&&e.text(t)}),$("#sidebar-tabs").each(function(){var e=$(this),t=e.find(".widget").length;e.addClass("style-"+t),e.tabify()}),$(".post-body strike").each(function(){var e=$(this),t=e.text().trim();"$ads={1}"==t&&e.replaceWith('<div id="newspeed-preview-new-before-ad"/>'),"$ads={2}"==t&&e.replaceWith('<div id="newspeed-preview-new-after-ad"/>')}),$("#newspeed-preview-new-before-ad").each(function(){var e=$(this);e.length&&$("#before-ad").appendTo(e)}),$("#newspeed-preview-new-after-ad").each(function(){var e=$(this);e.length&&$("#after-ad").appendTo(e)}),$("#newspeed-preview-main-before-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#before-ad"))}),$("#newspeed-preview-main-after-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#after-ad"))}),$(".post-body a").each(function(){var e=$(this),t=e.text().trim(),a=t.split("/"),r=a[0],s=a[1],i=a.pop();t.match("button")&&(e.addClass("button").text(r),"button"!=s&&e.addClass(s),"button"!=i&&e.addClass("colored-button").css({"background-color":i}))}),$(".post-body strike").each(function(){var e=$(this),t=e.text().trim(),a=e.html();t.match("contact-form")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),t.match("alert-success")&&e.replaceWith('<div class="alert-message alert-success short-b">'+a+"</div>"),t.match("alert-info")&&e.replaceWith('<div class="alert-message alert-info short-b">'+a+"</div>"),t.match("alert-warning")&&e.replaceWith('<div class="alert-message alert-warning short-b">'+a+"</div>"),t.match("alert-error")&&e.replaceWith('<div class="alert-message alert-error short-b">'+a+"</div>"),t.match("left-sidebar")&&e.replaceWith("<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>"),t.match("right-sidebar")&&e.replaceWith("<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>"),t.match("full-width")&&e.replaceWith("<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>"),t.match("code-box")&&e.replaceWith('<pre class="code-box short-b">'+a+"</pre>"),$(".post-body .short-b").find("b").each(function(){var e=$(this),t=e.text().trim();(t.match("alert-success")||t.match("alert-info")||t.match("alert-warning")||t.match("alert-error")||t.match("code-box"))&&e.replaceWith("")})}),$(".newspeed-preview-share-links .window-ify,.entry-share .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),r=e.data("height"),s=window.screen.width,i=window.screen.height,o=Math.round(s/2-a/2),l=Math.round(i/2-r/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+r+",left="+o+",top="+l).focus()}),$(".newspeed-preview-share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-description span a").each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" target="_blank"/></li>'),$(".description-links").append($(".author-description span li")),$(".description-links").addClass("show")}),$("#newspeed-preview-main-menu li").each(function(e,t){var a=$(this),r=a,s=a.find("a").attr("href").trim(),i=s.toLowerCase();e=shortCodeIfy(s,"type"),t=shortCodeIfy(s,"label"),i.match("getmega")&&r.addClass("has-sub mega-menu"),ajaxMega(r,e,5,t,i)}),$("#featured .HTML .widget-content").each(function(e,t,a,r){var s=$(this),i=s.text().trim(),o=i.toLowerCase();ajaxFeatured(s,"featured",shortCodeIfy(i,"results"),shortCodeIfy(i,"label"),o,shortCodeIfy(i,"color"))}),$(".newspeed-preview-content-blocks .HTML .widget-content").each(function(e,t,a,r){var s=$(this),i=s.text().trim(),o=i.toLowerCase();switch(e=shortCodeIfy(i,"type"),t=shortCodeIfy(i,"results"),a=shortCodeIfy(i,"label"),r=shortCodeIfy(i,"color"),e){case"block1":t=5;break;case"videos":t=3}ajaxBlock(s,e,t,a,o,r)}),$(".newspeed-preview-widget-ready .HTML .widget-content").each(function(e,t,a){var r=$(this),s=r.text().trim(),i=s.toLowerCase();ajaxWidget(r,shortCodeIfy(s,"type"),shortCodeIfy(s,"results"),shortCodeIfy(s,"label"),i)}),$(".newspeed-preview-related-content").each(function(){var e=$(this),t=e.find(".related-tag").attr("data-label");ajaxRelated(e,"related",relatedPostsNum,t,"getrelated")}),$(".newspeed-preview-blog-post-comments").each(function(){1!=darkMode&&"dark"==localStorage.themeColor&&(fbCommentsTheme="dark");var e=$(this),t=commentsSystem,a=e.find(".comments-title > h3").data("title").trim(),r='<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-colorscheme="'+fbCommentsTheme+'" data-numposts="5"></div>',s="comments-system-"+t;switch(t){case"blogger":e.addClass(s).show(),$(".entry-meta .entry-comments-link").addClass("show"),beautiAvatar(".avatar-image-container img");break;case"disqus":e.find(".comments-title > h3").text(a),e.addClass(s).show();break;case"facebook":e.find(".comments-title > h3").text(a),e.addClass(s).find("#comments").html(r),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show"),beautiAvatar(".avatar-image-container img")}var i=e.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),o=e.find(".comments .toplevel-thread > #top-continue");i.on("click",function(){o.show()}),o.on("click",function(){o.hide()})}),$(function(){$(".index-post .entry-image-wrap .entry-thumb, .PopularPosts .entry-image-wrap .entry-thumb, .FeaturedPost .entry-image-wrap .entry-thumb,.about-author .author-avatar").lazyify(),$("#newspeed-preview-mobile-menu").each(function(){var e=$(this),t=$("#newspeed-preview-main-menu-nav").clone();t.attr("id","main-mobile-nav"),t.find(".mega-items").remove(),t.find(".mega-menu > a").each(function(e,t){var a=$(this),r=a.attr("href").trim();r.toLowerCase().match("getmega")&&(t="recent"==(e=shortCodeIfy(r,"label"))?"/search":"/search/label/"+e,a.attr("href",t))}),t.appendTo(e),$(".mobile-menu-toggle, .hide-newspeed-preview-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".newspeed-preview-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".newspeed-preview-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".newspeed-preview-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}),$(".mobile-navbar-menu").each(function(){var e=$(this);$("#footer-menu ul.link-list").clone().appendTo(e)}),$(".mobile-navbar-social").each(function(){var e=$(this),t=$("#newspeed-preview-footer-about-section ul.social").clone();t.removeClass("social-bg-hover"),t.appendTo(e)}),$(".headerify-wrap .headerify").each(function(){var t,e,a,r,s=$(this);1==fixedMenu&&0<s.length&&(t=$(document).scrollTop(),e=s.offset().top,a=s.height(),r=e+a,$(window).scroll(function(){var e=$(document).scrollTop();e<$("#footer-wrapper").offset().top-a&&(r<e?s.addClass("is-fixed"):e<=0&&s.removeClass("is-fixed"),t<e?s.removeClass("show"):s.addClass("show"),t=$(document).scrollTop())}))}),$("#main-wrapper,#sidebar-wrapper").each(function(e){1==fixedSidebar&&(e=1==fixedMenu?86:30,$(this).theiaStickySidebar({additionalMarginTop:e,additionalMarginBottom:30}))}),$("#post-body iframe").each(function(){var e=$(this);e.attr("src").match("www.youtube.com")&&e.wrap('<div class="responsive-video-wrap"/>')}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')}),$("#newspeed-preview-load-more-link").each(function(){var a=$(this).data("load");a&&$("#newspeed-preview-load-more-link").show(),$("#newspeed-preview-load-more-link").on("click",function(e){$("#newspeed-preview-load-more-link").hide(),$.ajax({url:a,success:function(e){var t=$(e).find(".blog-posts");t.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(t.html()),(a=$(e).find("#newspeed-preview-load-more-link").data("load"))?$("#newspeed-preview-load-more-link").show():($("#newspeed-preview-load-more-link").hide(),$("#blog-pager .no-more").addClass("show")),$(".index-post .entry-image-wrap .entry-thumb").lazyify(),$("#main-wrapper").each(function(){1==fixedSidebar&&$(this).theiaStickySidebar()})},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide()}}),e.preventDefault()})}),$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?e.fadeIn(250):e.fadeOut(250),e.offset().top>=$("#footer-wrapper").offset().top-16?e.addClass("on-footer"):e.removeClass("on-footer")}),e.on("click",function(){$("html, body").animate({scrollTop:0},500)})})});
