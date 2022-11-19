/* Insert your javascript here */

/*scrolling window function*/
window.onscroll = function() {
	var section = document.getElementsByTagName("main")[0].getElementsByTagName("section");
	var navlinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

	var n = -1;
	while (n < section.length - 1 && section[n+1].offsetTop <= window.scrollY) {
		n++
	}
	for (var a = 0; a < navlinks.length; a++) {
		navlinks[a].classList.remove("active");
	}
	if (n >= 0 && n < 3) {
		navlinks[n].classList.add("active");
	}
}

/*Synopsis Objects*/
var moviesTitle = {
	ACT: {
		title: "Avengers: Endgame",
	},
	ROMCOM: {
		title: "Top End Wedding",
	},
	ANIM: {
		title: "Dumbo",
	},
	DRM: {
		title: "The Happy Prince",
	},
};

var moviesSyn = {
	ACT: {
		synopsis: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
	},
	ROMCOM: {
		synopsis: "Lauren and Ned are engaged, they are in love, and they have just ten days to find Lauren's mother who has gone AWOL somewhere in the remote far north of Australia, reunite her parents and pull off their dream wedding.",
	},
	ANIM: {
		synopsis: "Struggling circus owner Max Medici enlists a former star and his two children to care for Dumbo, a baby elephant born with oversized ears. When the family discovers that the animal can fly, it soon becomes the main attraction -- bringing in huge audiences and revitalizing the run-down circus. The elephant's magical ability also draws the attention of V.A. Vandevere, an entrepreneur who wants to showcase Dumbo in his latest, larger-than-life entertainment venture.",
	},
	DRM: {
		synopsis: "His body ailing, Oscar Wilde lives out his last days in exile, observing the difficulties and failures surrounding him with ironic detachment, humour, and the wit that defined his life.",
	}
};


var moviesClassif = {
	ACT: {
		classification: "Rated: M",
	},
	ROMCOM: {
		classification: "Rated: M",
	},
	ANIM: {
		classification: "Rated: PG",
	},
	DRM: {
		classification: "Rated: 15+",
	},
};

/*Synopsis Function*/
//variable created to grab all the information inside the moviepanels
var moviepanelACT = document.getElementById("moviepanelACT");
var moviepanelROMCOM = document.getElementById("moviepanelRMC");
var moviepanelANIM = document.getElementById("moviepanelANM");
var moviepanelDRM = document.getElementById("moviepanelAHF");

//updates the Synopsis information for the action movie (Avengers: Endgame)
function actionClicked(event) {
	document.getElementById("bookingform").style.visibility = "visible";
	document.getElementById("SynopsisPanel").style.visibility = "visible";
	document.getElementById("synheading").innerHTML = moviesTitle.ACT.title;
	document.getElementById("themovie").src = "https://www.youtube.com/embed/TcMBFSGVi1c";
	document.getElementById("synopsysdesc").innerHTML = moviesSyn.ACT.synopsis;
	document.getElementById("movierating").innerHTML = moviesClassif.ACT.classification;
	document.getElementById("bookingButton1").innerHTML = "Wednesday 9pm";
	var Avengers1 = document.getElementById("bookingButton1");
	Avengers1.addEventListener("click", AvengersWed9pm);

	document.getElementById("bookingButton2").innerHTML = "Thursday 9pm";
	var Avengers2 = document.getElementById("bookingButton2");
	Avengers2.addEventListener("click", AvengersThurs9pm);

	document.getElementById("bookingButton3").innerHTML = "Friday 9pm";	
	var Avengers3 = document.getElementById("bookingButton3");
	Avengers3.addEventListener("click", AvengersFri9pm);

	document.getElementById("bookingButton4").innerHTML = "Saturday 6pm";
	var Avengers4 = document.getElementById("bookingButton4");
	Avengers4.addEventListener("click", AvengersSat6pm);

	document.getElementById("bookingButton5").style.visibility = "visible";
	document.getElementById("bookingButton5").innerHTML = "Sunday 6pm";
	var Avengers5 = document.getElementById("bookingButton5");
	Avengers5.addEventListener("click", AvengersSun6pm);

	document.getElementById("bookingButton6").style.visibility = "hidden";
	document.getElementById("bookingButton7").style.visibility = "hidden";
	var synopsis = document.getElementById("syncard");
	synopsis.scrollIntoView();
	event.stopPropagation();
}

//updates the Synopsis information for the Romantic Comedy movie (Top End Wedding)
function romComClicked(event) {
	document.getElementById("bookingform").style.visibility = "visible";
	document.getElementById("SynopsisPanel").style.visibility = "visible";
	document.getElementById("synheading").innerHTML = moviesTitle.ROMCOM.title;
	document.getElementById("themovie").src = "https://www.youtube.com/embed/uoDBvGF9pPU";
	document.getElementById("synopsysdesc").innerHTML = moviesSyn.ROMCOM.synopsis;
	document.getElementById("movierating").innerHTML = moviesClassif.ROMCOM.classification;
	document.getElementById("bookingButton1").innerHTML = "Monday 6pm";
	var TopEndWedd1 = document.getElementById("bookingButton1");
	TopEndWedd1.addEventListener("click", TopEndWeddMon6pm);

	document.getElementById("bookingButton2").innerHTML = "Tuesday 6pm";
	var TopEndWedd2 = document.getElementById("bookingButton2");
	TopEndWedd2.addEventListener("click", TopEndWeddTues6pm);

	document.getElementById("bookingButton3").innerHTML = "Saturday 3pm";
	var TopEndWedd3 = document.getElementById("bookingButton3");
	TopEndWedd3.addEventListener("click", TopEndWeddSat3pm);

	document.getElementById("bookingButton4").innerHTML = "Sunday 3pm";
	var TopEndWedd4 = document.getElementById("bookingButton4");
	TopEndWedd4.addEventListener("click", TopEndWeddSun3pm);

	document.getElementById("bookingButton5").style.visibility = "hidden";
	document.getElementById("bookingButton6").style.visibility = "hidden";
	document.getElementById("bookingButton7").style.visibility = "hidden";
	var synopsis = document.getElementById("syncard");
	synopsis.scrollIntoView();
	event.stopPropagation();
}

//updates the Synopsis information for the animation movie (Dumbo)
function animClicked(event) {
	document.getElementById("bookingform").style.visibility = "visible";
	document.getElementById("SynopsisPanel").style.visibility = "visible";
	document.getElementById("synheading").innerHTML = moviesTitle.ANIM.title;
	document.getElementById("themovie").src = "https://www.youtube.com/embed/7NiYVoqBt-8";
	document.getElementById("synopsysdesc").innerHTML = moviesSyn.ANIM.synopsis;
	document.getElementById("movierating").innerHTML = moviesClassif.ANIM.classification;
	document.getElementById("bookingButton1").innerHTML = "Monday 12pm";
	var Dumbo1 = document.getElementById("bookingButton1");
	Dumbo1.addEventListener("click", DumboMon12pm);

	document.getElementById("bookingButton2").innerHTML = "Tuesday 12pm";
	var Dumbo2 = document.getElementById("bookingButton2");
	Dumbo2.addEventListener("click", DumboTues12pm);

	document.getElementById("bookingButton3").innerHTML = "Wednesday 6pm";
	var Dumbo3 = document.getElementById("bookingButton3");
	Dumbo3.addEventListener("click", DumboWed6pm);

	document.getElementById("bookingButton4").innerHTML = "Thursday 6pm";
	var Dumbo4 = document.getElementById("bookingButton4");
	Dumbo4.addEventListener("click", DumboThurs6pm);

	document.getElementById("bookingButton5").style.visibility = "visible";
	document.getElementById("bookingButton6").style.visibility = "visible";
	document.getElementById("bookingButton7").style.visibility = "visible";
	document.getElementById("bookingButton5").innerHTML = "Friday 6pm";
	var Dumbo5 = document.getElementById("bookingButton5");
	Dumbo5.addEventListener("click", DumboFri6pm);

	document.getElementById("bookingButton6").innerHTML = "Saturday 12pm";
	var Dumbo6 = document.getElementById("bookingButton6");
	Dumbo6.addEventListener("click", DumboSat12pm);

	document.getElementById("bookingButton7").innerHTML = "Sunday 12pm";
	var Dumbo7 = document.getElementById("bookingButton7");
	Dumbo7.addEventListener("click", DumboSun12pm);

	var synopsis = document.getElementById("syncard");
	synopsis.scrollIntoView();
	event.stopPropagation();
}

//updates the Synopsis information for the drama movie (The Happy Prince)
function dramaClicked(event) {
	document.getElementById("bookingform").style.visibility = "visible";
	document.getElementById("SynopsisPanel").style.visibility = "visible";
	document.getElementById("synheading").innerHTML = moviesTitle.DRM.title;
	document.getElementById("themovie").src = "https://www.youtube.com/embed/tXANCJQkUIE";
	document.getElementById("synopsysdesc").innerHTML = moviesSyn.DRM.synopsis;
	document.getElementById("movierating").innerHTML = moviesClassif.DRM.classification;
	document.getElementById("bookingButton1").innerHTML = "Wednesday 12pm";
	var HappyPrin1 = document.getElementById("bookingButton1");
	HappyPrin1.addEventListener("click", HappyPrinWed12pm);

	document.getElementById("bookingButton2").innerHTML = "Thursday 12pm";
	var HappyPrin2 = document.getElementById("bookingButton2");
	HappyPrin2.addEventListener("click", HappyPrinThu12pm);

	document.getElementById("bookingButton3").innerHTML = "Friday 12pm";
	var HappyPrin3 = document.getElementById("bookingButton3");
	HappyPrin3.addEventListener("click", HappyPrinFri12pm);

	document.getElementById("bookingButton4").innerHTML = "Saturday 9pm";
	var HappyPrin4 = document.getElementById("bookingButton4");
	HappyPrin4.addEventListener("click", HappyPrinSat9pm);

	document.getElementById("bookingButton5").style.visibility = "visible";
	document.getElementById("bookingButton5").innerHTML = "Sunday 9pm";
	var HappyPrin5 = document.getElementById("bookingButton5");
	HappyPrin5.addEventListener("click", HappyPrinSun9pm);

	document.getElementById("bookingButton6").style.visibility = "hidden";
	document.getElementById("bookingButton7").style.visibility = "hidden";
	var synopsis = document.getElementById("syncard");
	synopsis.scrollIntoView();
	event.stopPropagation();
}

//event listeners for clicking the panels to ultimately update the information
var moviepanelACTItems = Array.from(document.querySelectorAll(".moviepanelACT .item"));
for (i = 0; i < moviepanelACTItems.length; i++) {
	moviepanelACTItems[i].addEventListener('click', actionClicked);
}

var moviepanelDRMItems = Array.from(document.querySelectorAll(".moviepanelAHF .item"));
for (i = 0; i < moviepanelDRMItems.length; i++) {
	moviepanelDRMItems[i].addEventListener('click', dramaClicked);
}

var moviepanelROMCOMItems = Array.from(document.querySelectorAll(".moviepanelRMC .item"));
for (i = 0; i < moviepanelROMCOMItems.length; i++) {
	moviepanelROMCOMItems[i].addEventListener('click', romComClicked);
}

var moviepanelANIMItems = Array.from(document.querySelectorAll(".moviepanelANM .item"));
for (i = 0; i < moviepanelANIMItems.length; i++) {
	moviepanelANIMItems[i].addEventListener('click', animClicked);
}

//functions for each button to update the booking forms' id, day and hour values
function AvengersWed9pm() {
	document.getElementById("movie-id").value = "ACT";
	document.getElementById("movie-day").value = "WED";
	document.getElementById("movie-hour").value = "T21";
	var book = document.getElementById("bookingform");
	document.getElementById("movie-id").style.visibility = "visible";
	document.getElementById("movie-day").style.visibility = "visible";
	document.getElementById("movie-hour").style.visibility = "visible";
	book.scrollIntoView();

	applyDiscount();
};

function AvengersThurs9pm() {
	document.getElementById("movie-id").value = "ACT";
	document.getElementById("movie-day").value = "THU";
	document.getElementById("movie-hour").value = "T21";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

function AvengersFri9pm() {
	document.getElementById("movie-id").value = "ACT";
	document.getElementById("movie-day").value = "FRI";
	document.getElementById("movie-hour").value = "T21";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

function AvengersSat6pm() {
	document.getElementById("movie-id").value = "ACT";
	document.getElementById("movie-day").value = "SAT";
	document.getElementById("movie-hour").value = "T18";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

function AvengersSun6pm() {
	document.getElementById("movie-id").value = "ACT";
	document.getElementById("movie-day").value = "SUN";
	document.getElementById("movie-hour").value = "T18";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

function TopEndWeddMon6pm() {
	document.getElementById("movie-id").value = "RMC";
	document.getElementById("movie-day").value = "MON";
	document.getElementById("movie-hour").value = "T18";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	applyDiscount();
};

function TopEndWeddTues6pm() {
	document.getElementById("movie-id").value = "RMC";
	document.getElementById("movie-day").value = "TUE";
	document.getElementById("movie-hour").value = "T18";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
}; 

function TopEndWeddSat3pm() {
	document.getElementById("movie-id").value = "RMC";
	document.getElementById("movie-day").value = "SAT";
	document.getElementById("movie-hour").value = "T15";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

function TopEndWeddSun3pm() {
	document.getElementById("movie-id").value = "RMC";
	document.getElementById("movie-day").value = "SUN";
	document.getElementById("movie-hour").value = "T15";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

function DumboMon12pm() {
	document.getElementById("movie-id").value = "ANM";
	document.getElementById("movie-day").value = "MON";
	document.getElementById("movie-hour").value = "T12";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	applyDiscount();
};

function DumboTues12pm() {
	document.getElementById("movie-id").value = "ANM";
	document.getElementById("movie-day").value = "TUE";
	document.getElementById("movie-hour").value = "T12";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	applyDiscount();	
};

function DumboWed6pm() {
	document.getElementById("movie-id").value = "ANM";
	document.getElementById("movie-day").value = "WED";
	document.getElementById("movie-hour").value = "T18";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	applyDiscount();	
};

function DumboThurs6pm() {
	document.getElementById("movie-id").value = "ANM";
	document.getElementById("movie-day").value = "THU";
	document.getElementById("movie-hour").value = "T18";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();	
};

function DumboFri6pm() {
	document.getElementById("movie-id").value = "ANM";
	document.getElementById("movie-day").value = "FRI";
	document.getElementById("movie-hour").value = "T18";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();	
};

function DumboSat12pm() {
	document.getElementById("movie-id").value = "ANM";
	document.getElementById("movie-day").value = "SAT";
	document.getElementById("movie-hour").value = "T12";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();	
};

function DumboSun12pm() {
	document.getElementById("movie-id").value = "ANM";
	document.getElementById("movie-day").value = "SUN";
	document.getElementById("movie-hour").value = "T12";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();		
};

function HappyPrinWed12pm() {
	document.getElementById("movie-id").value = "AHF";
	document.getElementById("movie-day").value = "WED";
	document.getElementById("movie-hour").value = "T12";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	applyDiscount();
};

function HappyPrinThu12pm() {
	document.getElementById("movie-id").value = "AHF";
	document.getElementById("movie-day").value = "THU";
	document.getElementById("movie-hour").value = "T12";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	applyDiscount();
};

function HappyPrinFri12pm() {
	document.getElementById("movie-id").value = "AHF";
	document.getElementById("movie-day").value = "FRI";
	document.getElementById("movie-hour").value = "T12";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	applyDiscount();
};

function HappyPrinSat9pm() {
	document.getElementById("movie-id").value = "AHF";
	document.getElementById("movie-day").value = "SAT";
	document.getElementById("movie-hour").value = "T21";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

function HappyPrinSun9pm() {
	document.getElementById("movie-id").value = "AHF";
	document.getElementById("movie-day").value = "SUN";
	document.getElementById("movie-hour").value = "T21";
	var book = document.getElementById("bookingform");
	book.scrollIntoView();

	fullPrice();
};

/* booking form arrays and objects */
var bookingButtons = {
	ACT : ["Wednesday 9pm" , "Thursday 9pm", "Friday 9pm", "Saturday 6pm", "Sunday 6pm"],
	RCM : [ "Monday 6pm", "Tuesday 6pm", "Saturday 3pm", "Sunday 3pm"],
	ANM : [ "Monday 12pm", "Tuesday 12pm", "Wednesday 6pm", "Thursday 6pm", "Friday 6pm", "Saturday 12pm", "Sunday 12pm"],
	AHF : [ "Wednesday 12pm" , "Thursday 12pm", "Friday 12pm", "Saturday 9pm", "Sunday 9pm"],
};

//prices of tickets
var STA = 19.80;
var STAdisc = 14.00;
var STP = 17.50;
var STPdisc = 12.50;
var STC = 15.30;
var STCdisc = 11.00;
var FCA = 30.00;
var FCAdisc = 24.00;
var FCP = 27.00;
var FCPdisc = 22.50;
var FCC = 24.00;
var FCCdisc = 21.00;

//amount of tickets
var STAticks = 0;
var STPticks = 0;
var STCticks = 0;
var FCAticks = 0;
var FCPticks = 0;
var FCCticks = 0;

//functions to find out how many seats the user decides have/buy/need
function STAseatQty() {
	var seats =  document.getElementById("seats-STA");
	var amnt = seats.options[seats.selectedIndex].value;
	STAticks = amnt;
	CalculationTotal();
}

function STPseatQty() {
	var seats =  document.getElementById("seats-STP");
	var amnt = seats.options[seats.selectedIndex].value;
	STPticks = amnt;
	CalculationTotal();
}

function STCseatQty() {
	var seats =  document.getElementById("seats-STC");
	var amnt = seats.options[seats.selectedIndex].value;
	STCticks = amnt;
	CalculationTotal();
}

function FCAseatQty() {
	var seats =  document.getElementById("seats-FCA");
	var amnt = seats.options[seats.selectedIndex].value;
	FCAticks = amnt;
	CalculationTotal();
}

function FCPseatQty() {
	var seats =  document.getElementById("seats-FCP");
	var amnt = seats.options[seats.selectedIndex].value;
	FCPticks = amnt;
	CalculationTotal();
}

function FCCseatQty() {
	var seats =  document.getElementById("seats-FCC");
	var amnt = seats.options[seats.selectedIndex].value;
	FCCticks = amnt;
	CalculationTotal();
}

//functions to find out if the tickets are discounted or fully priced
var discountTicks;

function applyDiscount() {
	discountTicks = 1;
	CalculationTotal();
}

function fullPrice() {
	discountTicks = 0;
	CalculationTotal();
}

//function that calculates all of the ticket prices
function CalculationTotal() {
	var totalEverything = 0;

	if (discountTicks === 0) {
		totalEverything = (STA*STAticks) + (STP *STPticks) + (STC *STCticks) + (FCA * FCAticks) + (FCP* FCPticks) + (FCC* FCCticks);
	}
	if (discountTicks === 1) {
		totalEverything = (STAdisc*STAticks) + (STPdisc *STPticks) + (STCdisc *STCticks) + (FCAdisc * FCAticks) + (FCPdisc* FCPticks) + (FCCdisc* FCCticks);
	}
	var OverallTotal = totalEverything.toFixed(2);
	return OverallTotal;
}

//function that updates the total price to the user
function updatedPriceTotal() {
	var AllPrice = CalculationTotal();
	document.getElementById("total").innerHTML = "$ " + AllPrice;
}

//event listeners for when the users pick how many seats they want to ultimately give the price result 
var STAseatTotalPrice = document.getElementById("seats-STA");
STAseatTotalPrice.addEventListener("click", updatedPriceTotal);

var STPseatTotalPrice = document.getElementById("seats-STP");
STPseatTotalPrice.addEventListener("click", updatedPriceTotal);

var STCseatTotalPrice = document.getElementById("seats-STC");
STCseatTotalPrice.addEventListener("click", updatedPriceTotal);

var FCAseatTotalPrice = document.getElementById("seats-FCA");
FCAseatTotalPrice.addEventListener("click", updatedPriceTotal);

var FCPseatTotalPrice = document.getElementById("seats-FCP");
FCPseatTotalPrice.addEventListener("click", updatedPriceTotal);

var FCCseatTotalPrice = document.getElementById("seats-FCC");
FCCseatTotalPrice.addEventListener("click", updatedPriceTotal);

//expiry date
function expiryDate() {
  var todayDate = new Date();
  var dayToday = todayDate.getDate();
  var monthToday = todayDate.getMonth()+1; //January is 0
  var yearToday = todayDate.getFullYear();

  if (monthToday < 10){
  	monthToday = "0" + monthToday;
  }

  todayDate = yearToday+"-"+monthToday;
  document.getElementById("cust-expiry").setAttribute("min", todayDate);


  var maxYear = yearToday + 50;
  var i = 0;
  if (i < maxYear ) {
  	document.getElementById("cust-expiry").setAttribute("max", maxYear);
  	console.log(maxYear);
  }

}