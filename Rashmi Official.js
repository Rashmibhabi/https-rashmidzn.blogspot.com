$(function(){"use strict";var t=$(window);$(".navbar-nav").singlePageNav({speed:1e3,currentClass:"active",offset:80}),t.on("scroll",function(){var t=$(window).scrollTop(),a=$(".navbar-default");300<t?a.addClass("nav-scroll"):a.removeClass("nav-scroll")}),$(".button-scroll").on("click",function(){var t=$(this).attr("data-scrollTo");$("body, html").animate({scrollTop:$("#"+t).offset().top-80},1e3)}),t.on("scroll",function(){$(".skills-progress span").each(function(){var t=$(this).offset().top+$(this).outerHeight(),a=$(window).scrollTop()+$(window).height(),o=$(this).attr("data-value");t<a&&$(this).animate({width:o},2e3)})}),$(".clients .owl-carousel").owlCarousel({items:1,loop:!0,mouseDrag:!0,autoplay:!0,smartSpeed:500}),t.stellar()}),$(window).on("load",function(){$(".loading").fadeOut(500),$("#contact-form").validator(),$("#contact-form").on("submit",function(t){if(!t.isDefaultPrevented()){return $.ajax({type:"POST",url:"contact.php",data:$(this).serialize(),success:function(t){var a="alert-"+t.type,o=t.message,s='<div class="alert '+a+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+o+"</div>";a&&o&&($("#contact-form").find(".messages").html(s),$("#contact-form")[0].reset())}}),!1}})});
