$(document).ready(function(c){var n=-1,p="";c("#menu").find("ul").find("li").each(function(){for(var e=c(this).text(),t=c(this).find("a").attr("href"),a=0,l=0;l<e.length&&-1!=(a=e.indexOf("_",a));l++)a++;if(level=l,level>n&&(p+="<ul>"),level<n){offset=n-level;for(l=0;l<offset;l++)p+="</ul></li>"}e=e.replace(/_/gi,""),p+="<li><a href='"+t+"'>";for(l=0;l<level;l++)p+="";p+=e+"</a>",n=level});for(var e=0;e<=n;e++)p+="</ul>",0!=e&&(p+="</li>");c("#menu .LinkList").html(p),c("#menu > .LinkList > ul").attr("id","nav1"),c("#menu ul > li > ul").parent("li").addClass("parent"),c("#menu .widget").attr("style","display:block!important;")}),$(document).ready(function(){$(".menu").slicknav({prependTo:".menu-mobile",label:""}),$(".scrolling-menu").slicknav({prependTo:".menu-mobile2",label:""})}),jQuery(document).ready(function(e){e(".counter-sora").counterUp({delay:10,time:1e3})}),$(".block-image .thumb img").attr("src",function(e,t){return t.match("hqdefault.jpg")?t.replace("/hqdefault.jpg","/mqdefault.jpg"):t.match("default.jpg")?t.replace("/default.jpg","/mqdefault.jpg"):t.match("s72-c")?t.replace("/s72-c","/s1600"):t.match("w72-h72-p-nu")?t.replace("/w72-h72-p-nu","/s1600"):t.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png")}),$(".PopularPosts ul li img").attr("src",function(e,t){return t.match("hqdefault.jpg")?t.replace("/hqdefault.jpg","/mqdefault.jpg"):t.match("default.jpg")?t.replace("/default.jpg","/mqdefault.jpg"):t.match("s72-c")?t.replace("/s72-c","/s100-c"):t.match("w72-h72-p-nu")?t.replace("/w72-h72-p-nu","/s100-c"):t.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png")}),$(".comments .avatar-image-container img").attr("src",function(e,t){return t.match("hqdefault.jpg")?t.replace("/hqdefault.jpg","/mqdefault.jpg"):t.match("default.jpg")?t.replace("/default.jpg","/mqdefault.jpg"):t.match("s35-c")?t.replace("/s35-c","/s100-c"):t.match("s72-c")?t.replace("/s72-c","/s100-c"):t.match("w72-h72-p-nu")?t.replace("/w72-h72-p-nu","/s100-c"):t.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png")}),$(function(){$(".index .post-grid-item, .archive .post-grid-item").matchHeight(),$(".post-body img").parent("a").css("margin","0 auto!important")});
