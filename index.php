<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Daffa Buckley's Assignment 2</title>

	<!-- Keep wireframe.css for debugging, add your css to style.css -->
	<link id='wireframecss' type="text/css" rel="stylesheet" href="../wireframe.css" disabled>
	<link id='stylecss' type="text/css" rel="stylesheet" href="style.css">
	<script src='../wireframe.js'></script>

	<link href="https://fonts.googleapis.com/css?family=Livvic&display=swap" rel="stylesheet">
	
	<style>
		body {
			font-family: 'Livvic', sans-serif;
			font-size: 17px;
		}
	</style>

</head>

<body>

	<header> 
		<img src="../../media/LunardoLogo.jpg" alt="Lunardo Cinema" height = 150px style="
    object-fit: cover;" />
	</header>

	<nav>
		<span>
			<ul class="navig">
				<li><a href="#Section.1" id="ABOUTUS">About Us</a></li>
				<li><a href="#Section.2" id="PRICES">Prices</a></li>
				<li><a href="#Section.3" id="NOW SHOWING">Now Showing</a></li>
			</ul>
		</span>
	</nav>



	<main>
		<section id="section1">
			<div id="backgroundSection1">

				<h1><a name="Section.1">About Us</a></h1>
				<div id="FirstPicYouSee">
					<img src="../../media/CinemaBackground6.jpg" alt="Cinema Photo" height = auto width =75% />
				</div>
				<p>After months of extensive renovations and improvements, it is now time to reveal the brand new and improved Lunardo Cinema. Each cinema theatres have upgraded their Projection and Sound System, alongside new Seats with First Class reclinable seats. The Lunardo Cinema has been providing local families with quality entertainment movies, creating an abundance of memories since it first opened up. It is now your turn to create your very own memories that's worth a lifetime. Attempt Lunardo Cinema near you and experience the difference. </p>
				<h4>Explore the range of Lunardo cinematics experience below: </h4>

				<div id="container1">
					<div id="experience1">
						<ul>
							<li><h3>Standard Class Seats</h3></li>
							<li><img src="../../media/Standard Class.png" alt="Cinema Photo" height = 300 width=321.587  /></li>
						</ul>
					</div>
					<div id="experience2">
						<ul>
							<li><h3>First Class Seats</h3></li>
							<li><img src="../../media/First Class.png" alt="Cinema Photo" height = 300 width=321.587 /></li>
						</ul>
					</div>
				</div>

				<h1 id="rareDesc"> All cinema theathres at Lunardo will experience the Projection and Sound System Below:</h1>

				<div id="container2"> 

					<div id="experience3">
						<h3>Dolby Imaging</h3>
						<img src="../../media/Dolby2.JPG" alt="Cinema Photo" height = 100% width = 100% />
					</div>

					<div id="experience4">
						<h3>Dolby Audio</h3>
						<img src="../../media/Dolby3.JPG" alt="Cinema Photo" height = 100% width = 100% />
					</div>
					<div id="experience5">
						<h3>Dolby Seating</h3>
						<img src="../../media/Dolby4.JPG" alt="Cinema Photo" height = 100% width = 100% />
					</div>

				</div>
				<div id="whitespace">
					<a href="http://www.dolby.com/us/en/platforms/dolby-cinema.html ">More info on the new Projection and Sound Systems</a>
				</div>
			</div>
		</section>

		<section id="section2">
			<h1><a name="Section.2">Prices</a></h1>

			<div id="container3">

				<div id ="pricestable">
					<table class ="prices" style="width:75%" style="height:50%">
						<tr>
							<th>Seat Type</th>
							<th>All day Monday and Wednesday <br> AND 12pm on weekdays</th>
							<th>All other times</th>
						</tr>
						<tr>
							<th>Standard Adult</th>
							<td>14.00</td>
							<td>19.80</td>
						</tr>
						<tr>
							<th>Standard Concession</th>
							<td>12.50</td>
							<td>17.50</td>
						</tr>
						<tr>
							<th>Standard Child</th>
							<td>11.00</td>
							<td>15.30</td>
						</tr>
						<tr>
							<th>First Class Adult</th>
							<td>24.00</td>
							<td>30.00</td>
						</tr>
						<tr>
							<th>First Class Concession</th>
							<td>22.50</td>
							<td>27.00</td>
						</tr>
						<tr>
							<th>First Class Child</th>
							<td>21.00</td>
							<td>24.00</td>
						</tr>
					</table>
				</div>

			</div>
		</section>

		<section id="section3">
			<div id ="backgroundSection3">
				<h1><a name="Section.3">Now Showing</a></h1>

				<div id ="bigcontainer1">

					<div class="moviepanelACT" id="moviepanelACT">
						<div class="item">
							<h2 class="item">Avengers: Endgame</h2>
							<img id="synpic" class="item" src="../../media/AvengersEndgame.jpg" alt="Cinema Photo" height = 400 width = 300 />
							<div id="subsubmoviepanelACT">
								<h3 class="item" >12A</h3>
								<p class="item" >Monday - N/A</p>
								<p class="item" >Tuesday - N/A</p>
								<p class="item" >Wednesday - 9pm</p>
								<p class="item" >Thursday - 9pm</p>
								<p class="item" >Friday - 9pm</p>
								<p class="item" >Saturday - 6pm</p>
								<p class="item" >Sunday - 6pm</p>
							</div>
						</div>
					</div>

					<div class="moviepanelRMC" id="moviepanelRMC">
						<div class="item">
							<h2 class="item">Top End Wedding</h2>
							<img id="synpic" class="item" src="../../media/Top End Wedding.jpg" alt="Cinema Photo" height = 400 width= 300 />
							<div class="item" id="subsubmoviepanelRMC">
								<h3 class="item">M</h3>
								<p class="item">Monday - 6pm</p>
								<p class="item">Tuesday - 6pm</p>
								<p class="item">Wednesday - N/A</p>
								<p class="item">Thursday - N/A</p>
								<p class="item">Friday - N/A </p>
								<p class="item">Saturday - 3pm</p>
								<p class="item">Sunday - 3pm</p>
							</div>
						</div>
					</div>

					<div class="moviepanelANM" id="moviepanelANM">
						<div class="item">
							<h2 class="item">Dumbo</h2>
							<img id="synpic" class="item" src="../../media/Dumbo.jpg" alt="Cinema Photo" height = 400 width = 300/>
							<div class="item" id="subsubmoviepanelANM">
								<h3 class="item">PG</h3>
								<p class="item">Monday - 12pm</p>
								<p class="item">Tuesday - 12pm</p>
								<p class="item">Wednesday - 6pm</p>
								<p class="item">Thursday - 6pm</p>
								<p class="item">Friday - 6pm</p>
								<p class="item">Saturday - 12pm</p>
								<p class="item">Sunday - 12pm</p>
							</div>
						</div>
					</div>

					<div class="moviepanelAHF" id="moviepanelAHF">
						<div class="item">
							<h2 class="item">The Happy Prince</h2>
							<img id="synpic" class="item" src="../../media/TheHappyPrince.jpg" alt="Cinema Photo" height = 400 width =300 />
							<div class="item" id="subsubmoviepanelAHF">
								<h3 class="item">15</h3>
								<p class="item">Monday - N/A</p>
								<p class="item">Tuesday - N/A</p>
								<p class="item">Wednesday - 12pm</p>
								<p class="item">Thursday - 12pm</p>
								<p class="item">Friday - 12pm</p>
								<p class="item">Saturday - 9pm</p>
								<p class="item">Sunday - 9pm</p>
							</div>
						</div>
					</div>

				</div>
			</div>	
		</section>

		<section id="section4">

			<h1 id= "SynopsisTitle">Synopsis</h1>

			<div id = "bigcontainer2">
				<div id ="SynopsisPanel">
					<div id="syncard">
						<h1 id="synheading"></h1> 
						<h1 id="movierating"></h1>
						<div id="embedmovie">
							<iframe id="themovie" src="" height=300 width=500></iframe>
						</div>
						<div>
							<p id ="synopsysdesc"></p>
						</div>
					</div>
      <!-- <div id="syniframe"> 
  
      </div>!-->
      <div id="booking">
      	<h3 id="bookinghead">Make a Booking:</h3>
      	<div id="bookingButtonContainer">
      	<button class="bookingmovies" id="bookingButton1">1</button>
      	<button class="bookingmovies" id="bookingButton2">2</button>
      	<button class="bookingmovies" id="bookingButton3">3</button>
      	<button class="bookingmovies" id="bookingButton4">4</button>
      	<button class="bookingmovies" id="bookingButton5">5</button>
      	<button class="bookingmovies" id="bookingButton6">6</button>
      	<button class="bookingmovies" id="bookingButton7">7</button>
      	</div>
      </div>
  </div>
  	<div id="bookingform">
  		<form action="https://titan.csit.rmit.edu.au/~e54061/wp/lunardo-formtest.php" method="post">

  			<input id = "movie-id" type="hidden" name="movie[id]" value="NoINPUT">
  			<input id = "movie-day" type="hidden" name="movie[day]" value="NoINPUT">
  			<input id = "movie-hour" type="hidden" name="movie[hour]" value="NoINPUT">
  			<br>
  			<div id= "StandardTicksContainer">
  			<h1 id="StandardTitle">Standard</h1>	
  			<label class= 'textLabel'>Standard Adult (STA) </label>
  			<select id= "seats-STA" name="seats[STA]" onclick="STAseatQty()" class= 'select'>
  				<option value=''>Please Select</option>
  				<option value=0>0</option>
  				<option value=1>1</option>
  				<option value=2>2</option>
  				<option value=3>3</option>
  				<option value=4>4</option>
  				<option value=5>5</option>
  				<option value=6>6</option>
  				<option value=7>7</option>
  				<option value=8>8</option>
  				<option value=9>9</option>
  				<option value=10>10</option>
  			</select><br>
  			<label class= 'textLabel'>Standard Consession (STP) </label>
  			<select id= "seats-STP" name="seats[STP]" onclick="STPseatQty()" class= 'select'>
  				<option value=''>Please Select</option>
  				<option value=0>0</option>
  				<option value=1>1</option>
  				<option value=2>2</option>
  				<option value=3>3</option>
  				<option value=4>4</option>
  				<option value=5>5</option>
  				<option value=6>6</option>
  				<option value=7>7</option>
  				<option value=8>8</option>
  				<option value=9>9</option>
  				<option value=10>10</option>
  			</select><br>
  			<label class= 'textLabel'>Standard Child (STC) </label>
  			<select id = "seats-STC" name="seats[STC]" onclick="STCseatQty()" class= 'select'>
  				<option value=''>Please Select</option>
  				<option value=0>0</option>
  				<option value=1>1</option>
  				<option value=2>2</option>
  				<option value=3>3</option>
  				<option value=4>4</option>
  				<option value=5>5</option>
  				<option value=6>6</option>
  				<option value=7>7</option>
  				<option value=8>8</option>
  				<option value=9>9</option>
  				<option value=10>10</option>
  			</select><br>
  		    </div>
  		    <div id="FirstClassTicksContainer">
  		    <h1 id="FirstClassTitle">First Class</h1>
  			<label class= 'textLabel'>First Class Adult (FCA) </label>
  			<select id= "seats-FCA" name="seats[FCA]" onclick="FCAseatQty()" class= 'select'>
  				<option value=''>Please Select</option>
  				<option value=0>0</option>
  				<option value=1>1</option>
  				<option value=2>2</option>
  				<option value=3>3</option>
  				<option value=4>4</option>
  				<option value=5>5</option>
  				<option value=6>6</option>
  				<option value=7>7</option>
  				<option value=8>8</option>
  				<option value=9>9</option>
  				<option value=10>10</option>
  			</select><br>
  			<label class= 'textLabel'>First Class Concession (FCP) </label>
  			<select id= "seats-FCP" name="seats[FCP]" onclick="FCPseatQty()" class= 'select'>
  				<option value=''>Please Select</option>
  				<option value=0>0</option>
  				<option value=1>1</option>
  				<option value=2>2</option>
  				<option value=3>3</option>
  				<option value=4>4</option>
  				<option value=5>5</option>
  				<option value=6>6</option>
  				<option value=7>7</option>
  				<option value=8>8</option>
  				<option value=9>9</option>
  				<option value=10>10</option>
  			</select><br>
  			<label class= 'textLabel'>First Class Child (FCC) </label>
  			<select id = "seats-FCC" name="seats[FCC]" onclick="FCCseatQty()" class= 'select'>
  				<option value=''>Please Select</option>
  				<option value=0>0</option>
  				<option value=1>1</option>
  				<option value=2>2</option>
  				<option value=3>3</option>
  				<option value=4>4</option>
  				<option value=5>5</option>
  				<option value=6>6</option>
  				<option value=7>7</option>
  				<option value=8>8</option>
  				<option value=9>9</option>
  				<option value=10>10</option>
  			</select><br>
  		    </div>
  		    <div id="personalInformation">
  			<!-- Accept names with spaces and hyphen -->
  			<div id="personalInformationdivider">
  			<label class ='textLabel'>Name</label><input id = "cust-name"  type="text" pattern="^[a-zA-Z \-.']{1,100}$"  name="cust[name]" placeholder="Enter Name"> 
  			<br>
  			<label class ='textLabel'>Email</label><input id = "cust-email"  type="email"   name="cust[email]" placeholder="Enter Email"> 
  			<br>

  			<!-- Customer enters number after their 61+  and dropping the 0-->
  			<label class ='textLabel'>Mobile</label><input id = "cust-mobile"  type="tel" pattern="^(\(04\)|04|\+614)( ?\d){8}$" name="cust[mobile]" placeholder="Enter Number"> 
  			<br>
  			<label class ='textLabel'>Credit Card</label><input id = "cust-card"  type="text" pattern="^(\d{1}[ ]?){14,19}$" placeholder="Enter Credit Card Details"  name="cust[card]"> 
  			<br>
  			<label class ='textLabel'>Expiry</label><input id = "cust-expiry" onclick="expiryDate()" type="month" name="cust[expiry]" > 
  			<br>
  			<br>
  			<br>
  			</div>
  			<div id="updatedPriceTotaldivider">
  			<p class ='textLabel'>Total Price:  </p>
  			<p id= 'total' class = 'textLabel' >$0.00 </p>
  			<br>
  			<input class='submitButton' id="order" type="submit" value="order" name="order">
  			</div>
  		    </div>
  		</form>
  	</div>
</div>
</section>

</main>

<footer>
	<div>&copy;<script>
		document.write(new Date().getFullYear());
	</script> Daffa Buckley, S3716875, <a href="https://github.com/s3716875/wp">Github Repository</a> . Last modified <?= date ("Y F d  H:i", filemtime($_SERVER['SCRIPT_FILENAME'])); ?>.</div>
	<div>Disclaimer: This website is not a real website and is being developed as part of a School of Science Web Programming course at RMIT University in Melbourne, Australia.</div>
	<div><button id='toggleWireframeCSS' onclick='toggleWireframe()'>Toggle Wireframe CSS</button></div>
</footer>

<script src='script.js'></script>

</body>
</html>
