rcomment="comments",rdisable="disable comments",commentYN="no";var dw="";function related_results_labels(e){for(var t=0;t<e.feed.entry.length;t++){var l=e.feed.entry[t];titles[titlesNum]=l.title.$t;for(var n=0;n<l.link.length;n++)if(commentsNum[titlesNum]="thr$total"in l?l.thr$total.$t+" "+rcomment:rdisable,"alternate"==l.link[n].rel){urls[titlesNum]=l.link[n].href,timeR[titlesNum]=l.published.$t,thumb[titlesNum]="media$thumbnail"in l?l.media$thumbnail.url:"https://2.bp.blogspot.com/-pAkyABlSI9I/V5Vb3h5bgGI/AAAAAAAAEEg/03XLR_fUHfciuaylJJCi1GxDG2Lw9WqVwCLcB/s320/couper.jpg",titlesNum++;break}}}function removeRelatedDuplicates(){var t=new Array(0);c=new Array(0),e=new Array(0),f=new Array(0),g=new Array(0);for(var l=0;l<urls.length;l++)contains(t,urls[l])||(t.length+=1,t[t.length-1]=urls[l],c.length+=1,c[c.length-1]=titles[l],e.length+=1,e[e.length-1]=timeR[l],f.length+=1,f[f.length-1]=thumb[l],g.length+=1,g[g.length-1]=commentsNum[l]);urls=t,titles=c,timeR=e,thumb=f,commentsNum=g}function contains(e,t){for(var l=0;l<e.length;l++)if(e[l]==t)return!0;return!1}function printRelatedLabels(e){var t=e.indexOf("?m=0");-1!=t&&(e=e.replace(/\?m=0/g,""));for(var l=0;l<urls.length;l++)urls[l]==e&&(urls.splice(l,1),titles.splice(l,1),timeR.splice(l,1),thumb.splice(l,1),commentsNum.splice(l,1));var n=Math.floor((titles.length-1)*Math.random());l=0;if(0==titles.length)dw+=rn;else{for(dw+=ry,dw+="<ul class='bow'>";l<titles.length&&l<20&&l<maxresults;)-1!=t&&(urls[n]=urls[n]+"?m=0"),"yes"==commentYN?comments[n]=" - "+commentsNum[n]:comments[n]="",dw+='<li class="delate"><a href="'+urls[n]+'"><div class="bimb"><img src="'+thumb[n].replace(/\/s72\-c/,"/s"+size)+'"/><span class="overlay"/></div></a><h4><a href="'+urls[n]+'">'+titles[n]+"</a></h4></li></div>",n<titles.length-1?n++:n=0,l++;dw+="</ul>"}urls.splice(0,urls.length),titles.splice(0,titles.length),document.getElementById("related-article").innerHTML=dw}titles=new Array,titlesNum=0,urls=new Array,timeR=new Array,thumb=new Array,commentsNum=new Array,comments=new Array,jQuery(document).ready(function(t){var l=t("#menu"),n=t(".menu-btn"),e=t(".with-ul > a");n.click(function(e){e.preventDefault(),n.toggleClass("active"),l.toggleClass("active")}),e.click(function(e){e.preventDefault(),t(this).toggleClass("active").next("ul").toggleClass("active")})}),$(window).scroll(function(){100<$(window).scrollTop()?$("#bringup").fadeIn():$("#bringup").fadeOut()}),$(document).ready(function(){$("#bringup").click(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},"slow"),!1})});
