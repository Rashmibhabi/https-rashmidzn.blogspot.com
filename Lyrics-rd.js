$(function(){$("#main-menu").each(function(){for(var e=$(this).find(".LinkList ul > li").children("a"),a=e.length,t=0;t<a;t++){var s,o=e.eq(t),i=o.text();"_"!==i.charAt(0)&&"_"===e.eq(t+1).text().charAt(0)&&(s=o.parent()).append('<ul class="sub-menu m-sub"/>'),"_"===i.charAt(0)&&(o.text(i.replace("_","")),o.parent().appendTo(s.children(".sub-menu")))}for(t=0;t<a;t++){var n,l=e.eq(t),r=l.text();"_"!==r.charAt(0)&&"_"===e.eq(t+1).text().charAt(0)&&(n=l.parent()).append('<ul class="sub-menu2 m-sub"/>'),"_"===r.charAt(0)&&(l.text(r.replace("_","")),l.parent().appendTo(n.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu .widget").addClass("show-menu")}),$("#main-menu-nav").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".mobile-menu ul > li a").each(function(){var e=$(this),a=e.attr("href").trim(),t=a.toLowerCase(),s=a.split("/")[0];t.match("mega-menu")&&e.attr("href","/search/label/"+s+"?&max-results="+postPerPage)}),$(".mobile-menu-toggle").on("click",function(){$("body").toggleClass("nav-active")}),$(".mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))}),$(".show-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()}),$(".hide-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()}),$(".Label a, a.b-label, a.post-tag").attr("href",function(e,a){return a.replace(a,a+"?&max-results="+postPerPage)}),$(".avatar-image-container img").attr("src",function(e,a){return a=(a=a.replace("/s35-c/","/s45-c/")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")}),$(".emoji-toggle").on("click",function(){$("#emoji-box").slideToggle(170)}),$(".comment-content").each(function(){var e=$(this);e.replaceText("(y)","<span class='sora-moji mj-0'/>"),e.replaceText(":)","<span class='sora-moji mj-1'/>"),e.replaceText(":(","<span class='sora-moji mj-2'/>"),e.replaceText("hihi","<span class='sora-moji mj-3'/>"),e.replaceText(":-)","<span class='sora-moji mj-4'/>"),e.replaceText(":D","<span class='sora-moji mj-5'/>"),e.replaceText("=D","<span class='sora-moji mj-6'/>"),e.replaceText(":-d","<span class='sora-moji mj-7'/>"),e.replaceText(";(","<span class='sora-moji mj-8'/>"),e.replaceText(";-(","<span class='sora-moji mj-9'/>"),e.replaceText("@-)","<span class='sora-moji mj-10'/>"),e.replaceText(":P","<span class='sora-moji mj-11'/>"),e.replaceText(":o","<span class='sora-moji mj-12'/>"),e.replaceText(":>)","<span class='sora-moji mj-13'/>"),e.replaceText("(o)","<span class='sora-moji mj-14'/>"),e.replaceText(":p","<span class='sora-moji mj-15'/>"),e.replaceText("(p)","<span class='sora-moji mj-16'/>"),e.replaceText(":-s","<span class='sora-moji mj-17'/>"),e.replaceText("(m)","<span class='sora-moji mj-18'/>"),e.replaceText("8-)","<span class='sora-moji mj-19'/>"),e.replaceText(":-t","<span class='sora-moji mj-20'/>"),e.replaceText(":-b","<span class='sora-moji mj-21'/>"),e.replaceText("b-(","<span class='sora-moji mj-22'/>"),e.replaceText(":-#","<span class='sora-moji mj-23'/>"),e.replaceText("=p~","<span class='sora-moji mj-24'/>"),e.replaceText("x-)","<span class='sora-moji mj-25'/>"),e.replaceText("(k)","<span class='sora-moji mj-26'/>")}),$(".author-description a").each(function(){$(this).attr("target","_blank")}),$(".post-nav").each(function(){var e=$("a.prev-post-link").attr("href"),a=$("a.next-post-link").attr("href");$.ajax({url:e,type:"get",success:function(e){var a=$(e).find(".blog-post h1.post-title").text();$(".post-prev a .post-nav-inner p").text(a)}}),$.ajax({url:a,type:"get",success:function(e){var a=$(e).find(".blog-post h1.post-title").text();$(".post-next a .post-nav-inner p").text(a)}})}),$(".post-body strike").each(function(){var e=$(this),a=e.text();a.match("left-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>"),a.match("right-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>"),a.match("full-width")&&e.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>")}),$(".post-body blockquote").wrap('<div class="copied-lyrics"></div>'),$(".post-body .copied-lyrics").append('<button class="btn-copied" data-clipboard-action="copy" data-clipboard-target="blockquote">Copy</button>');new ClipboardJS(".post-body .copied-lyrics .btn-copied");function o(C,A,e,_){var a;(A.match("mega-menu")||A.match("hot-posts")||A.match("post-list")||A.match("related"))&&(a="",a="recent"==_?"/feeds/posts/default?alt=json-in-script&max-results="+e:"random"==_?"/feeds/posts/default?max-results="+e+"&start-index="+(Math.floor(Math.random()*e)+1)+"&alt=json-in-script":"/feeds/posts/default/-/"+_+"?alt=json-in-script&max-results="+e,$.ajax({url:a,type:"get",dataType:"jsonp",success:function(e){var a;A.match("mega-menu")?a='<ul class="mega-menu-inner">':A.match("hot-posts")?a='<ul class="hot-posts">':A.match("post-list")?a='<ul class="custom-widget">':A.match("related")&&(a='<ul class="related-posts">');var t,s,o,i,n,l,r,c,m,p,d,h,u,f=e.feed.entry;if(null!=f){for(var g=0,b=f;g<b.length;g++){var v=function(e,a){for(var t=0;t<e[a].link.length;t++)if("alternate"==e[a].link[t].rel){var s=e[a].link[t].href;break}return s}(b,g),j='<a href="'+v+'">'+b[g].title.$t+"</a>",x=(u=h=p=m=void 0,d=(r=b)[c=g].title.$t,h=r[c].content.$t,u=$("<div>").html(h),"media$thumbnail"in r[c]?(p=(m=r[c].media$thumbnail.url).replace("/s72-c","/w680"),-1<h.indexOf("youtube.com/embed")&&(p=m.replace("/default.","/hqdefault."))):p=-1<h.indexOf("<img")?u.find("img:first").attr("src"):noThumbnail,'<img class="post-thumb" alt="'+d+'" src="'+p+'"/>'),y=null!=(n=b)[l=g].category?'<span class="post-tag">'+n[l].category[0].term+"</span>":"",T='<span class="post-author"><a>'+b[g].author[0].name.$t+"</a></span>",w=(t=void 0,t=b[g].published.$t,s=t.substring(0,4),o=t.substring(5,7),i=t.substring(8,10),'<span class="post-date">'+monthFormat[parseInt(o,10)-1]+" "+i+", "+s+"</span>"),k="";A.match("mega-menu")?k+='<div class="mega-item item-'+g+'"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="'+v+'">'+x+'</a></div><h2 class="post-title">'+j+"</h2></div></div>":A.match("hot-posts")?k+='<li class="hot-item item-'+g+'"><div class="hot-item-inner"><a class="post-image-link" href="'+v+'">'+x+"</a>"+y+'<div class="post-info"><h2 class="post-title">'+j+'</h2><div class="post-meta">'+T+w+"</div></div></div></li>":A.match("post-list")?k+='<li class="item-'+g+'"><a class="post-image-link" href="'+v+'">'+x+'</a><div class="post-info"><h2 class="post-title">'+j+"</h2></div></div></li>":A.match("related")&&(k+='<li class="related-item item-'+g+'"><a class="post-image-link" href="'+v+'">'+x+'</a><h2 class="post-title">'+j+"</h2></li>"),a+=k}a+="</ul>"}else a='<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>';A.match("mega-menu")?(C.addClass("has-sub mega-menu").append(a),C.find("a:first").attr("href",function(e,a){return a="recent"==_||"random"==_?a.replace(a,"/search/?&max-results="+postPerPage):a.replace(a,"/search/label/"+_+"?&max-results="+postPerPage)})):A.match("hot-posts")?C.html(a).parent().addClass("show-hot"):C.html(a)}}))}$(".post-body .copied-lyrics .btn-copied").click(function(e){alert("Lyrics Have Been Copied")}),document.oncopy=function(){var e=document.getElementsByTagName("body")[0],a=window.getSelection(),t=a+("<br /><br /> Read more at: <a href='"+document.location.href+"'>"+document.location.href+"</a><br />Copyright &#169;"),s=document.createElement("div");s.style.position="absolute",s.style.left="-99999px",e.appendChild(s),s.innerHTML=t,a.selectAllChildren(s),window.setTimeout(function(){e.removeChild(s)},0)},$("#main-wrapper, #sidebar-wrapper").each(function(){1==fixedSidebar&&$(this).theiaStickySidebar({additionalMarginTop:30,additionalMarginBottom:30})}),$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?e.fadeIn(250):e.fadeOut(250)}),e.click(function(){$("html, body").animate({scrollTop:0},500)})}),$("#main-menu #main-menu-nav li").each(function(){var e=$(this),a=e.find("a").attr("href").trim();o(e,a.toLowerCase(),4,a.split("/")[0])}),$("#hot-section .widget-content").each(function(){var e=$(this),a=e.text().trim();o(e,a.toLowerCase(),3,a.split("/")[0])}),$(".common-widget .widget-content").each(function(){var e=$(this),a=e.text().trim(),t=a.toLowerCase(),s=a.split("/");o(e,t,s[0],s[1])}),$(".related-ready").each(function(){var e=$(this),a=e.find(".related-tag").data("label");o(e,"related",3,a)}),$(".blog-post-comments").each(function(){var e,a=commentsSystem,t=(disqus_blogger_current_url,'<div class="fb-comments" data-width="100%" data-href="'+$(location).attr("href")+'" data-numposts="5"></div>'),s="comments-system-"+a;"blogger"==a?$(this).addClass(s).show():"disqus"==a?((e=document.createElement("script")).type="text/javascript",e.async=!0,e.src="//"+disqusShortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e),$("#comments, #gpluscomments").remove(),$(this).append('<div id="disqus_thread"/>').addClass(s).show()):"facebook"==a?($("#comments, #gpluscomments").remove(),$(this).append(t).addClass(s).show()):"hide"==a?$(this).hide():$(this).addClass("comments-system-default").show()})});
