var demoContainer = document.getElementById('demo_containers');

var imgArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.png'];
var imgArrayConcat = imgArray.concat(imgArray);

imgArrayConcat = imgArrayConcat.sort(function(){ return 0.5-Math.random() });

for (var i = 0; i < imgArrayConcat.length; i++) {
	var dataVal = imgArrayConcat[i].split('.');
	var html = '<div class="col-2 px-0">' +
		'<img class="border bg-white p-2" width="100%" src="public/images/'+imgArrayConcat[i]+'">' +
		'<input type="button" onclick="showImage(this)" data_value="'+dataVal[0]+'" class="position-absolute disable-change w-100 h-100 top-0 left-0 right-0">' +
		'</div>';
	demoContainer.innerHTML += html;
}

// show images
function showImage(e) {
	e.previousSibling.classList.add('zoom-animation');
	setTimeout(function(){
		e.previousSibling.classList.remove('zoom-animation');
	}, 1500);

	e.style.backgroundColor = 'unset';
	// if (e.attributes.data_value.value >= 2){
	// 	console.log(e.attributes.data_value.value);
	// } else {
	// 	console.log('no');
	// }
	// for (var i = 0; i < e.attributes.data_value.value.length; i++) {
	// 	// console.log(e.attributes.data_value.value);
	// }


}

var x;
function timeWork() {

// Set the date we're counting down to

	var dateNew = new Date();
	var minutesNew = dateNew.getMinutes();
	var hoursNew = dateNew.getHours();
	var secondsNew = dateNew.getSeconds();
	var monthNew = dateNew.getMonth() + 1;
	var dayNew = dateNew.getDate();
	var yearNew = dateNew.getFullYear();
	secondsNew = secondsNew;
	minutesNew = minutesNew + 2;
	var countDownDate = new Date(monthNew+" "+dayNew+", "+yearNew+" "+hoursNew+":"+minutesNew+":"+secondsNew).getTime();

	// Update the count down every 1 second
	x = setInterval(function() {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var minutes = Math.floor((+distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((+distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		document.getElementById("countDown").innerHTML = minutes + ":" + seconds;

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("countDown").innerHTML = "game over";
		}
	}, 1000);

}


// Buttons click disable and enable
function buttonsActiveDeactive(e) {
	var buttons = document.getElementsByClassName("disable-change");
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = e;
		if (e === false) {
			buttons[i].classList.add("cursor-p");
		}else {
			buttons[i].classList.remove("cursor-p");
		}
	}
}
buttonsActiveDeactive(true);

// Play Game
function playGame() {
	buttonsActiveDeactive(false);
	timeWork();
}

// Pause Game
function pauseGame(e) {
	buttonsActiveDeactive(true);
	clearInterval(x);
}

// Full screen function
function toggleFullScreenMode() {
    var btn = document.getElementById( 'btnFullScreenToggle' );
    var parentBlock = document.getElementById("parentBlock");
    var elem = document.documentElement; // html or root element
    if ( btn.value == 'goFull' ) {
        if (elem.requestFullscreen) {
  		  elem.requestFullscreen();
  		} else if (elem.mozRequestFullScreen) { /* Firefox */
  		  elem.mozRequestFullScreen();
  		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  		  elem.webkitRequestFullscreen();
  		} else if (elem.msRequestFullscreen) { /* IE/Edge */
  		  elem.msRequestFullscreen();
  		}
  		document.body.style.backgroundColor = '#98891f';
  		parentBlock.className = 'col-md-8 offset-md-2';
        btn.value = 'goNormal';
    } else if ( btn.value == 'goNormal' ) {
        if (document.exitFullscreen) {
  		  document.exitFullscreen();
  		} else if (document.mozCancelFullScreen) {
  		  document.mozCancelFullScreen();
  		} else if (document.webkitExitFullscreen) {
  		  document.webkitExitFullscreen();
  		} else if (document.msExitFullscreen) {
  		  document.msExitFullscreen();
		}
		document.body.style.backgroundColor = '#fff';
		parentBlock.className = 'col-md-6 offset-md-3';
        btn.value = 'goFull';
    }

}
