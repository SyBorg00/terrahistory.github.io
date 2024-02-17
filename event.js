window.onload = function() {
    
    
    
    var currTime = new Date().getHours();
    if (document.body) {
        if (7 <= currTime && currTime < 18) {
            document.body.className = "day";
            document.getElementById("web-music-day").play();
            document.getElementById("current-music").innerHTML="Now playing: Terraria - Day Theme by Scott Lloyd Shelly"
        }
        else {
            document.body.className = "night";
            document.getElementById("web-music-night").play();
            document.getElementById("current-music").innerHTML="Now playing: Terraria - Night Theme by Scott Lloyd Shelly"
        }
    }
}

    