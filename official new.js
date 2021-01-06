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

 jQuery(document).ready(function($) {
            $('.counter-sora').counterUp({
                delay: 10,
                time: 1000
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
$(".featured-box .HTML .widget-content").each(function() {
    var n = $(this).prev("h2").text(),
        v = $(this).find("span").attr("data-label"),
        b = $(this).find("span").attr("data-no"),
        tysum = $(this).parent().attr("id"),
        box = $(this).find("span").attr("data-type");
    if ( box != undefined && box.match('tysum')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
            type: 'get',
            dataType: "jsonp",
            success: function(e) {
                var u = "";
                var h = '<div class="ty-feat">';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
var post_comments;
            for (var k = 0; k < e.feed.entry[i].link.length; k++) {
              if ((e.feed.entry[i].link[k].rel === 'replies') && (e.feed.entry[i].link[k].type === 'text/html')) {
                post_comments = e.feed.entry[i].link[k].title;
                break;
              }
            } 
            post_comments = parseInt(post_comments, 10);
  if ("content" in e.feed.entry[i]) var summ = e.feed.entry[i].content.$t;
                else if ("summary" in b_rc) var summ = e.feed.entry[i].summary.$t;
                else var summ = "";
                var content = /<\S[^>]*>/g;
                summ = summ.replace(content, ""), summ.length > 120 && (summ = "" + summ.substring(0, 100) + "...");
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var y = e.feed.entry[i].author[0].name.$t;
                    var AuthorPic = e.feed.entry[i].author[0].gd$image.src;
                    var d = e.feed.entry[i].published.$t,
                        t = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = no_image
                    }                  
                        h += '<div class="tybox-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + g + '</a></h3><span class="yard-auth-ty">' + y + '</span><span class="tybox-time">' + r + '</span><p class="recent-summary">'+ summ +'</p></div></div>'
                    } 
                h += '</div>';
                $(".featured-box .HTML .widget-content").each(function() {
                    var text = $(this).parent().attr("id");
                    if (text == tysum) {
                        $(this).html(h);
                        $(this).parent().addClass('tysum');
                        $(this).parent().addClass('templatesyard');
                        $(this).prev("h2").wrapInner('<a href="/search/label/' + s + '?&amp;max-result=6"></a>');
                        $(this).prev("h2").wrap('<div class="tyheading-head"></div>');
                        $( ".featured-box" ).addClass( "comload" ).removeClass( "preload" );
                        $('.tysum .ty-feat .tybox-rest').matchHeight();
                        $(this).find('.yard-img,.ty-img').each(function() {
                            $(this).attr('style', function(i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function(i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
    $(".tysum-wrapper").remove();
  } 
});
$(function() {
    $('.index .post-grid-item, .archive .post-grid-item').matchHeight();
    $( ".post-body img" ).parent( "a" ).css( "margin", "0 auto!important" );
});
