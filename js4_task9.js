var images = [
				"1493797942_465eb.jpg",
				"marco-asensio-2.jpg",
				"665003816.0.jpg",
				"kroos-cropped_194yaww6sfuzf1fzj7lxzmj63c.jpg",
				"skysports-henrikh-mkhitaryan-manchester-united-europa-league_3848568.jpg",
			  ];
var i = 0;
var myInt;
document.getElementById("collapse").src = images[i];
function startSlider() {
	myInt = setInterval(function() {
		toSlide(1);
	}, 3000);
}
startSlider();

function toSlide(y) {
	if (y == 2) {
		i--;
		if(i == -1) {
			i=images.length - 1;
		}
	}
	else {
		i++;
		if(i == images.length) {
			i=0;
		}
	}
	document.getElementById("collapse").src = images[i];
}
function toStop() {
	clearInterval(myInt);
}
function toStart() {
	startSlider();
}