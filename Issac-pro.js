function stripTags(e,a){return e.replace(/<.*?>/gi,"").split(/\s+/).slice(0,a-1).join(" ")}function readmore(e){for(var a,i=document.getElementById(e),r="",l=-1,s=i.getElementsByTagName("img"),m=i.getElementsByTagName("iframe"),c=0;c<m.length;c++){if(-1!=(r=m[c].src).indexOf("//www.youtube.com/embed/")){l=c;break}if(-1!=r.indexOf("//player.vimeo.com/video/")){l=c;break}if(-1!=r.indexOf("//www.dailymotion.com/embed/video/")){l=c;break}if(-1!=r.indexOf("//w.soundcloud.com/player/")){l=c;break}}a=-1!=l?'<div class="item"> '+('<iframe src="'+r+'?vq=medium&rel=0" frameborder="0" allowfullscreen class="viframe"></iframe>')+' <a href="'+y+'" class="electo"> <h2>'+x+'</h2> <a href="'+y+'" class="readmore">View more</a> </a> </div>':1<=s.length?'<div class="item"> '+('<img src="'+s[0].src+'" alt="'+x+'" title="'+x+'">')+' <a href="'+y+'" class="electo"> <h2>'+x+'</h2> <a href="'+y+'" class="readmore">View more</a> </a> </div>':'<div class="item"><img src="https://1.bp.blogspot.com/-al_KFLCmkqE/WG6Dq6WMb4I/AAAAAAAAA_w/G02ceV-ipSA-I0v3XbOcFq9lji-PknpPgCLcB/s1600/default.jpg" alt="'+x+'" title="'+x+'"><a href="'+y+'" class="electo"> <h2>'+x+'</h2> <a href="'+y+'" class="readmore">View more</a> </a> </div>',i.innerHTML=a}