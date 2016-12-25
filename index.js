var w = window.innerWidth;
var h = window.innerHeight;
var v;
var ready = false;
var playing = false;
function OnLoad()
{
v = document.getElementById("action");

v.width = 0;
v.height = 0;
window.setTimeout(SetWidth, 5000);

}

function SetWidth ()
{
	v.width = w;
	v.height = h;
	v.play();
	ready = true;
	playing = true;
	PizzaYum();
}

function Pause ()
{
	if(ready == true)
	{
		if(playing == true)
		{
			v.pause();
			playing = false;
		}
		else
		{
			v.play();
			playing = true;
		}
	}
}