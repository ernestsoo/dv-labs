
var selected = "2011";

var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');

var img = document.getElementById('img');
var figcaption = document.getElementById('figcaption');

btn1.style.background = "darkblue";
btn1.style.color="white";

function select(year)
{
	if(year=='2011')
	{
		//The year 2011 is selected

		btn1.style.background = "darkblue";
		btn1.style.color="white";

		btn2.style.background = "white";
		btn2.style.color="darkblue";
		img.src="images/NT_Naplan_Reading_Results_2011.png";
		figcaption.innerHTML="Fig1. - Percent of children above national maximum standard in reading in 2011 for Year 3,5,7 and 9 for Non-Indigenous and Indigenous children in the Northern Territory. Data Source<a href='www.google.com'> NAPLAN results</a>";

	}else {
		//The year 2017 is selected

		btn2.style.background = "darkblue";
		btn2.style.color="white";

		btn1.style.background = "white";
		btn1.style.color="darkblue";
		img.src="images/NT_Naplan_Reading_Results_2017.png";
		figcaption.innerHTML="Fig2. - Percent of children above national maximum standard in reading in 2017 for Year 3,5,7 and 9 for Non-Indigenous and Indigenous children in the Northern Territory. Data Source<a href='www.google.com'> NAPLAN results</a>";

	}
}
