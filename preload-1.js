// Vous pouvez changer la vitesse (speed) (1 == tres rapide)
// Vous pouvez changer la qualit� de la transition (1 == best)
// Plus la transition est de qualit�, plus la rapidit� ralenti et doit �tre augment�
var speed = 10;
var transition = 10;

// Dimensions du preloader en GIF anim�
var GIFpreloadLargeur = 20;
var GIFpreloadHauteur = 20;

var timer= 0;
var opaciT = 100;

function opacity()
{
    opaciT = opaciT - transition;

    var object = document.getElementById('preloader').style;
    object.opacity = (opaciT / 100);
    object.MozOpacity = (opaciT / 100);
    object.KhtmlOpacity = (opaciT / 100);
    object.filter = "alpha(opacity=" + opaciT + ")";
       
        if (opaciT <= 0)
        {
                document.getElementById('preloader').style.visibility='hidden';
                clearInterval(timer);
        }

}
 
function preload()
{
        if (document.getElementById)
        {
                document.getElementById('preloadIMG').style.visibility='hidden';
                timer = setInterval("opacity()",speed);
        }
       
        else
        {
                if (document.layers)
                {       
                        document.preloadIMG.visibility = 'hidden';
                        timer = setInterval("opacity()",speed);
            }
                else
                {
                        document.all.preloadIMG.style.visibility = 'hidden';
                        timer = setInterval("opacity()",speed);
                }
        }
}


// �X�CUTION
window.onload = function() { preload(); }