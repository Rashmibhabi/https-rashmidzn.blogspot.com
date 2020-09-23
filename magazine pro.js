$(document).ready(function () {
	$(".cmm-tabs").simplyTab({
		active: 1,
		fx: "fade",
		showSpeed: 400,
		hideSpeed: 400
	});
	$('.blogger-tab').append($('#comments'));
	$(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>");
	$('.cmm-tabs-header').prepend('<h3><h8>Post </h8>Comment<h9>s</h9></h3>')
});
$('.header-logo').children().clone().appendTo('.sidebar-menu');
$('.search-bar').children().clone().appendTo('.sidebar-menu');
$('.header-menu').clone().appendTo('.sidebar-menu');
$(document).ready(function () {
	$("ul#sub-menu").parent("li").addClass("hasSub");
	(jQuery)
});
$(document).ready(function () {
	$('a[name="ads-post-in"]').before($('#ads-post10').html());
	$('#ads-post10').html('')
});
$(document).ready(function () {
	$(".sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");
	$(".footer-sections .widget h2").wrap("<div class='widget-title'/>");
	$(".index .post-outer,.archive .post-outer").each(function () {
		$(this).find(".block-image .thumb a").attr("style", function (e, t) {
			return t.replace("/default.jpg", "/mqdefault.jpg")
		}).attr("style", function (e, t) {
			return t.replace("s72-c", "s1600")
		})
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#back-to-top').fadeIn()
		} else {
			$('#back-to-top').fadeOut()
		}
	});
	$('#back-to-top').hide().click(function () {
		$('html, body').animate({
			scrollTop: 0
		},
		1000);
		return false
	});
	var a = $('.search');
	a.click(function (e) {
		e.preventDefault();
		if (a.is('.active') && $(e.target).is(a)) {
			a.removeClass('active')
		} else {
			a.addClass('active');
			a.find('input').focus()
		}
	});
	$('body').click(function (e) {
		if (a.is('.active') && !$(e.target).is('.search, .search form, .search input')) {
			a.removeClass('active')
		}
	});
	(function (e) {
		var t = e("a.newer-link");
		var n = e("a.older-link");
		e.get(t.attr("href"), function (n) {
			t.html('<strong>Next</strong><span>' + e(n).find(".post h1.post-title").text() + "</span>")
		},
		"html");
		e.get(n.attr("href"), function (t) {
			n.html('<strong>Previous</strong><span>' + e(t).find(".post h1.post-title").text() + "</span>")
		},
		"html")
	})(jQuery)
});
$("#related-posts").each(function () {
	var g = $(this).html();
	$.ajax({
		url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
		type: 'get',
		dataType: "jsonp",
		success: function (b) {
			var c = "";
			var d = '<div class="related">';
			for (var i = 0; i < b.feed.entry.length; i++) {
				for (var j = 0; j < b.feed.entry[i].link.length; j++) {
					if (b.feed.entry[i].link[j].rel == "alternate") {
						c = b.feed.entry[i].link[j].href;
						break
					}
				}
				var f = b.feed.entry[i].title.$t;
				var g = b.feed.entry[i].content.$t;
				var h = $('<div>').html(g);
				if (g.indexOf("http://www.youtube.com/embed/") > -1 || g.indexOf("https://www.youtube.com/embed/") > -1) {
					var k = b.feed.entry[i].media$thumbnail.url;
					var l = '<a class="related-img" href="' + c + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"/>'
				} else if (g.indexOf("<img") > -1) {
					var m = h.find('img:first').attr('src');
					var l = '<a class="related-img" href="' + c + '" style="background:url(' + m + ') no-repeat center center;background-size: cover"/>'
				} else {
					var l = '<a class="related-img" href="' + c + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
				}
				d += '<li><div class="related-thumb">' + l + '</div><h3 class="related-title"><a href="' + c + '">' + f + '</a></h3></li>'
			}
			d += '</div><div class="clear"/>';
			$("#related-posts").html(d);
			$('.related-img').each(function () {
				$(this).attr('style', function (i, a) {
					return a.replace('/default.jpg', '/mqdefault.jpg')
				}).attr('style', function (i, a) {
					return a.replace('s72-c', 's1600')
				})
			});
			$("p.trans").each(function () {
				var e = $(this).text();
				var t = $(this).attr("data-tran");
				$("#pages-wrap *").replaceText(e, t)
			})
		}
	})
});
$("#feat-sec .HTML .widget-content").each(function () {
	var q = $(this),
	label = q.text(),
	h2 = $(this).prev("h2").text();
	$.ajax({
		url: "/feeds/posts/default/-/" + label + "?alt=json-in-script&max-results=3",
		type: 'get',
		dataType: "jsonp",
		success: function (b) {
			var c = "";
			var d = '<div class="uk-featured-post">';
			for (var i = 0; i < b.feed.entry.length; i++) {
				for (var j = 0; j < b.feed.entry[i].link.length; j++) {
					if (b.feed.entry[i].link[j].rel == "alternate") {
						c = b.feed.entry[i].link[j].href;
						break
					}
				}
				var e = b.feed.entry[i].title.$t;
				var f = b.feed.entry[i].author[0].name.$t;
				var g = b.feed.entry[i].published.$t,
				year = g.substring(0, 4),
				month = g.substring(5, 7),
				day = g.substring(8, 10),
				date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
				var h = b.feed.entry[i].content.$t;
				var k = $('<div>').html(h);
				var l = /<\S[^>]*>/g;
				var m = h.replace(l, "");
				if (m.length > 96) {
					m = '' + m.substring(0, 140) + '...'
				}
				if (h.indexOf("http://www.youtube.com/embed/") > -1 || h.indexOf("https://www.youtube.com/embed/") > -1) {
					var n = b.feed.entry[i].media$thumbnail.url;
					var o = n
				} else if (h.indexOf("<img") > -1) {
					var p = k.find('img:first').attr('src');
					var o = p
				} else {
					var o = NO_IMAGE
				}
				if (i == 0) {
					d += '<div class="uk-column1"><div class="uk-featured-item item1"><div class="uk-post-thumb"><a class="uk-image" href="' + c + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + c + '">' + e + '</a></h3><div class="post-meta"><div class="label-head"><span>' + label + '</span><div> X </div><div class="published timeago">' + date + '</div></div></div><div class="meta-border"/><div class="uk-snippet"><span>' + m + '</span></div></div></div></div></div>'
				} else if (i == 1) {
					d += '<div class="uk-column2"><div class="uk-featured-item item2"><div class="uk-post-thumb"><a class="uk-image" href="' + c + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + c + '">' + e + '</a></h3><div class="post-meta"><div class="label-head"><span>' + label + '</span><div> X </div><div class="published timeago">' + date + '</div></div></div></div></div></div>'
				} else if (i == 2) {
					d += '<div class="uk-featured-item item3"><div class="uk-post-thumb"><a class="uk-image" href="' + c + '" style="background:url(' + o + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + c + '">' + e + '</a></h3><div class="post-meta"><div class="label-head"><span>' + label + '</span><div> X </div><div class="published timeago">' + date + '</div></div></div></div></div></div></div>'
				}
			}
			d += '</div>';
			$("#feat-sec .HTML .widget-content").each(function () {
				q.html(d);
				$(this).prev("h2").html('<a href="/search/label/' + label + '">' + h2 + '</a>');
				$(this).prev("h2").wrap('<div class="box-title"></div>');
				$(this).removeClass('widget-content').addClass('box-content');
				$(this).find('.box-image').each(function () {
					$(this).attr('style', function (i, a) {
						return a.replace('/default.jpg', '/mqdefault.jpg')
					}).attr('style', function (i, a) {
						return a.replace('s72-c', 's1600')
					})
				})
			})
		}
	})
});
$('.HTML .widget-content').each(function () {
	var u = $(this).text();
	if (u.match('randomposts')) {
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script",
			type: 'get',
			dataType: "jsonp",
			success: function (o) {
				var p = o.feed.entry.length;
				var q = 0;
				var r = p - randomposts_number;
				var s = Math.floor(Math.random() * (r - q + 1)) + q;
				$.ajax({
					url: "/feeds/posts/default?alt=json-in-script&start-index=" + s + "&max-results=" + randomposts_number,
					type: 'get',
					dataType: "jsonp",
					success: function (b) {
						var c = "";
						var d = '<ul class="roma-widget">';
						for (var i = 0; i < b.feed.entry.length; i++) {
							for (var j = 0; j < b.feed.entry[i].link.length; j++) {
								if (b.feed.entry[i].link[j].rel == "alternate") {
									c = b.feed.entry[i].link[j].href;
									break
								}
							}
							var f = b.feed.entry[i].title.$t;
							var g = b.feed.entry[i].category[0].term;
							var h = b.feed.entry[i].content.$t;
							var k = $('<div>').html(h);
							if (h.indexOf("http://www.youtube.com/embed/") > -1 || h.indexOf("https://www.youtube.com/embed/") > -1) {
								var l = b.feed.entry[i].media$thumbnail.url;
								var m = '<a class="mag-thumb" href="' + c + '" style="background:url(' + l + ') no-repeat center center;background-size: cover"/>'
							} else if (h.indexOf("<img") > -1) {
								var n = k.find('img:first').attr('src');
								var m = '<a class="mag-thumb" href="' + c + '" style="background:url(' + n + ') no-repeat center center;background-size: cover"/>'
							} else {
								var m = '<a class="mag-thumb" href="' + c + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
							}
							d += '<li><div class="wid-thumb">' + m + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + c + '">' + f + '</a></h3></div></li>'
						}
						d += '</ul><div class="clear"/>';
						$('.HTML .widget-content').each(function () {
							if ($(this).text().match('randomposts')) {
								$(this).html(d);
								$(this).find('.rcp-thumb').each(function () {
									$(this).attr('style', function (i, a) {
										return a.replace('/default.jpg', '/mqdefault.jpg')
									}).attr('style', function (i, a) {
										return a.replace('s72-c', 's1600')
									})
								});
								$("p.trans").each(function () {
									var e = $(this).text();
									var t = $(this).attr("data-tran");
									$("#pages-wrap *").replaceText(e, t)
								})
							}
						})
					}
				})
			}
		})
	}
	if (u.match('recentposts')) {
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script",
			type: 'get',
			dataType: "jsonp",
			success: function (o) {
				$.ajax({
					url: "/feeds/posts/default?alt=json-in-script&max-results=" + recentposts_number,
					type: 'get',
					dataType: "jsonp",
					success: function (b) {
						var c = "";
						var d = '<ul class="roma-widget">';
						for (var i = 0; i < b.feed.entry.length; i++) {
							for (var j = 0; j < b.feed.entry[i].link.length; j++) {
								if (b.feed.entry[i].link[j].rel == "alternate") {
									c = b.feed.entry[i].link[j].href;
									break
								}
							}
							var f = b.feed.entry[i].title.$t;
							var g = b.feed.entry[i].category[0].term;
							var h = b.feed.entry[i].content.$t;
							var k = $('<div>').html(h);
							if (h.indexOf("http://www.youtube.com/embed/") > -1 || h.indexOf("https://www.youtube.com/embed/") > -1) {
								var l = b.feed.entry[i].media$thumbnail.url;
								var m = '<a class="mag-thumb" href="' + c + '" style="background:url(' + l + ') no-repeat center center;background-size: cover"/>'
							} else if (h.indexOf("<img") > -1) {
								var n = k.find('img:first').attr('src');
								var m = '<a class="mag-thumb" href="' + c + '" style="background:url(' + n + ') no-repeat center center;background-size: cover"/>'
							} else {
								var m = '<a class="mag-thumb" href="' + c + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
							}
							d += '<li><div class="wid-thumb">' + m + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + c + '">' + f + '</a></h3></div></li>'
						}
						d += '</ul><div class="clear"/>';
						$('.HTML .widget-content').each(function () {
							if ($(this).text().match('recentposts')) {
								$(this).html(d);
								$(this).find('.rcp-thumb').each(function () {
									$(this).attr('style', function (i, a) {
										return a.replace('/default.jpg', '/mqdefault.jpg')
									}).attr('style', function (i, a) {
										return a.replace('s72-c', 's1600')
									})
								});
								$("p.trans").each(function () {
									var e = $(this).text();
									var t = $(this).attr("data-tran");
									$("#pages-wrap *").replaceText(e, t)
								})
							}
						})
					}
				})
			}
		})
	}
});
