function post_image(e,a){var n,t,s,l,c=e[a].title.$t,i=e[a].content.$t;return"media$thumbnail"in e[a]?(t=(n=e[a].media$thumbnail.url).replace("/s72-c","/w640"),s=n.replace("/s72-c","/w280"),l=n.replace("/s72-c","/w100"),-1<i.indexOf("youtube.com/embed")&&(t=n.replace("/default.","/hqdefault."),s=n.replace("/default.","/mqdefault."),l=n)):(t=noThumbnail,s=noThumbnail.replace("/s680","/w280"),l=noThumbnail.replace("/s680","/w100")),['<img class="post-thumb" alt="'+c+'" src="'+t+'"/>','<img class="post-thumb" alt="'+c+'" src="'+s+'"/>','<img class="post-thumb" alt="'+c+'" src="'+l+'"/>']}$(function(){$("#main-menu").each(function(){for(var e=$(this).find(".LinkList ul > li").children("a"),a=e.length,n=0;n<a;n++){var t,s=e.eq(n),l=s.text();"_"!==l.charAt(0)&&"_"===e.eq(n+1).text().charAt(0)&&(t=s.parent()).append('<ul class="sub-menu m-sub"/>'),"_"===l.charAt(0)&&(s.text(l.replace("_","")),s.parent().appendTo(t.children(".sub-menu")))}for(n=0;n<a;n++){var c,i=e.eq(n),o=i.text();"_"!==o.charAt(0)&&"_"===e.eq(n+1).text().charAt(0)&&(c=i.parent()).append('<ul class="sub-menu2 m-sub"/>'),"_"===o.charAt(0)&&(i.text(o.replace("_","")),i.parent().appendTo(c.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu .widget").addClass("show-menu")}),$("#main-menu-nav").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".slide-menu-toggle").on("click",function(){$("body").toggleClass("nav-active"),$(".overlay").fadeToggle(170)}),$(".mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))}),$(".show-search, .show-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()}),$(".hide-search, .hide-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()}),$(".Label a, a.b-label").attr("href",function(e,a){return a.replace(a,a+"?&max-results="+postPerPage)}),$(".avatar-image-container img").attr("src",function(e,a){return a=(a=a.replace("/s35-c/","/s45-c/")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")}),$(".index-post .post-image-link img").attr("src",function(e,a){return a=a.replace("https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png",noThumbnail)}),$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?e.fadeIn(250):e.fadeOut(250)}),e.click(function(){$("html, body").animate({scrollTop:0},500)})})});