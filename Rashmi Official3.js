function stripTags(e,a){return e.replace(/<.*?>/gi,"").split(/\s+/).slice(0,a-1).join(" ")}function readmore(e){for(var a=document.getElementById(e),i="",r=-1,l=a.getElementsByTagName("img"),s=a.getElementsByTagName("iframe"),m=0;m<s.length;m++){if(-1!=(i=s[m].src).indexOf("//www.youtube.com/embed/")){r=m;break}if(-1!=i.indexOf("//player.vimeo.com/video/")){r=m;break}if(-1!=i.indexOf("//www.dailymotion.com/embed/video/")){r=m;break}if(-1!=i.indexOf("//w.soundcloud.com/player/")){r=m;break}}if(-1!=r)var c='<div class="item"> '+('<iframe src="'+i+'?vq=medium&rel=0" frameborder="0" allowfullscreen class="viframe"></iframe>')+' <a href="'+y+'" class="electo"> <h2>'+x+'</h2> <a href="'+y+'" class="readmore">View more</a> </a> </div>';else if(1<=l.length)c='<div class="item"> '+('<img src="'+l[0].src+'" alt="'+x+'" title="'+x+'">')+' <a href="'+y+'" class="electo"> <h2>'+x+'</h2> <a href="'+y+'" class="readmore">View more</a> </a> </div>';else c='<div class="item"><img src="https://1.bp.blogspot.com/-al_KFLCmkqE/WG6Dq6WMb4I/AAAAAAAAA_w/G02ceV-ipSA-I0v3XbOcFq9lji-PknpPgCLcB/s1600/default.jpg" alt="'+x+'" title="'+x+'"><a href="'+y+'" class="electo"> <h2>'+x+'</h2> <a href="'+y+'" class="readmore">View more</a> </a> </div>';a.innerHTML=c}
