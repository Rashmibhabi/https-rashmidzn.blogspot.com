$(document).ready(function($) {
    var k = -1,
        o = "",
        p = "";
    $("#menu").find("ul").find("li").each(function() {
        for (var text = $(this).text(), url = $(this).find("a").attr("href"), x = 0, z = 0; z < text.length && (x = text.indexOf("_", x), -1 != x); z++)
            x++;
        if (level = z, level > k && (o += "<ul>", p += "<ul>"), level < k) {
            offset = k - level;
            for (var z = 0; z < offset; z++) o += "</ul></li>", p += "</ul></li>"
        }
        text = text.replace(/_/gi, ""), o += "<li><a href='" + url + "'>" + text + "</a>", p += "<li><a href='" + url + "'>";
        for (var z = 0; z < level; z++) p += "";
        p += text + "</a>", k = level
    });
    for (var x = 0; k >= x; x++) o += "</ul>", p += "</ul>", 0 != x && (o += "</li>", p += "</li>");
    $("#menu .LinkList").html(p), $("#menu > .LinkList > ul").attr("id", "nav1"), $("#menu ul > li > ul").parent("li").addClass("parent"), $("#menu .widget").attr("style", "display:block!important;");
});
$(document).ready(function() {
 $('.menu').slicknav({
        prependTo: '.menu-mobile',
        label: ''
    });
$('.scrolling-menu').slicknav({
        prependTo: '.menu-mobile2',
        label: ''
    });
});

$(".block-image .thumb img").attr("src", function($this, img) {
        if (img.match("hqdefault.jpg")) {
            return img.replace("/hqdefault.jpg", "/mqdefault.jpg");
        } else if (img.match("default.jpg")) {
            return img.replace("/default.jpg", "/mqdefault.jpg");
        } else if (img.match("s72-c")) {
            return img.replace("/s72-c", "/s1600");
        } else if (img.match("w72-h72-p-nu")) {
            return img.replace("/w72-h72-p-nu", "/s1600");
        } else {
            return img.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png");
        }
    });
$(".PopularPosts ul li img").attr("src", function($this, img) {
        if (img.match("hqdefault.jpg")) {
            return img.replace("/hqdefault.jpg", "/mqdefault.jpg");
        } else if (img.match("default.jpg")) {
            return img.replace("/default.jpg", "/mqdefault.jpg");
        } else if (img.match("s72-c")) {
            return img.replace("/s72-c", "/s100-c");
        } else if (img.match("w72-h72-p-nu")) {
            return img.replace("/w72-h72-p-nu", "/s100-c");
        } else {
            return img.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png");
        }
    });
$(".comments .avatar-image-container img").attr("src", function($this, img) {
        if (img.match("hqdefault.jpg")) {
            return img.replace("/hqdefault.jpg", "/mqdefault.jpg");
        } else if (img.match("default.jpg")) {
            return img.replace("/default.jpg", "/mqdefault.jpg");
        } else if (img.match("s35-c")) {
            return img.replace("/s35-c", "/s100-c");
        } else if (img.match("s72-c")) {
            return img.replace("/s72-c", "/s100-c");
        } else if (img.match("w72-h72-p-nu")) {
            return img.replace("/w72-h72-p-nu", "/s100-c");
        } else {
            return img.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png");
        }
    });
$(function() {
    $('.index .post-grid-item, .archive .post-grid-item').matchHeight();
    $( ".post-body img" ).parent( "a" ).css( "margin", "0 auto!important" );
});
