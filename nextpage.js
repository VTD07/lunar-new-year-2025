var stylesheet = document.createElement('style');
document.head.appendChild(stylesheet);

stylesheet.sheet.insertRule(`
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`, stylesheet.sheet.cssRules.length);

document.getElementById("lett").style.display = "none";

var finishdate=new Date("Jan 8, 2025 00:00:00").getTime();

var time=setInterval(
    function()
    {
        var now=new Date().getTime();
        var distance=finishdate-now;
        if (distance < 0) 
        {
            clearInterval(time);
            document.getElementById("demo").innerHTML = "";
            document.getElementById("fi-text").innerHTML = "Xin Chào 2025";
            document.getElementById("butt").style.display = "block";
            document.getElementById("fi-text").style.animation = "fadeIn 3s"
            document.getElementById("butt").style.animation = "fadeIn 3s"

        }    
        else 
        {   
            var days=Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes=Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds=Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";             
            document.getElementById("butt").style.display = "none";
        }            
    },1000);

function direct()
{
    document.getElementById("total").remove();
    document.getElementById("lett").style.display = "block";
    document.getElementById("lett").style.animation = "fadeIn 3s"
}