let demoContainer = document.getElementById('demo_containers');
let buttons = document.getElementsByClassName("disable-change");
// let step = 1;

let imgArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.png'];
let imgArrayConcat = imgArray.concat(imgArray);

imgArrayConcat = imgArrayConcat.sort(function(){ return 0.5-Math.random() });

for (let i = 0; i < imgArrayConcat.length; i++) {
	console.log(i);
	let dataVal = imgArrayConcat[i].split('.');
	let html = `<div class="col-2 px-0 node">
		<img class="border bg-white p-2" width="100%" src="public/images/${imgArrayConcat[i]}" alt="image-${i}">
		<input type="button" data-value="${dataVal[0]}" data-num="${i}" class="position-absolute disable-change w-100 h-100 top-0 left-0 right-0">
		</div>`;
	demoContainer.innerHTML += html;
}

let imageIndexStore = "";
let imageIndexNum = "";
// let timer = 0;
demoContainer.addEventListener("click",function (e) {

	if (!e.target) return;
	/** @namespace e.target.dataset */
	let {value} = e.target.dataset;
	let {num} = e.target.dataset;

	let b = e.target;

	if (!b.classList.contains('unset')){
		b.style.backgroundColor = 'unset';
	}

	if(imageIndexStore === ""){
		imageIndexStore = value;
		imageIndexNum = num;
	}else if(imageIndexStore !== value) {
        let a = imageIndexStore;
        let indexNnum = imageIndexNum;
		setTimeout(function () {
			b.style.backgroundColor = '';
			demoContainer.querySelector(`[data-value="${a}"][data-num="${indexNnum}"]`).style.backgroundColor = '';
        }, 900);

		setTimeout(function () {
			imageIndexStore = "";
			imageIndexNum = "";
		},1000);

	}else if(imageIndexStore !== "" && imageIndexStore === value) {
		imageIndexStore = "";
		imageIndexNum = "";
	}


});


let x = null;
function timeWork() {

// Set the date we're counting down to

	let dateNew = new Date();
	let minutesNew = dateNew.getMinutes();
	let hoursNew = dateNew.getHours();
	let secondsNew = dateNew.getSeconds();
	let monthNew = dateNew.getMonth() + 1;
	let dayNew = dateNew.getDate();
	let yearNew = dateNew.getFullYear();
	secondsNew = secondsNew;
	minutesNew = minutesNew + 1;
	let countDownDate = new Date(monthNew+" "+dayNew+", "+yearNew+" "+hoursNew+":"+minutesNew+":"+secondsNew).getTime();

	// Update the count down every 1 second
	x = setInterval(function() {

		// Get todays date and time
		let now = new Date().getTime();

		// Find the distance between now and the count down date
		let distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		let minutes = Math.floor((+distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((+distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		document.getElementById("countDown").innerHTML = minutes + ":" + seconds;
		buttonsActiveDeactive(false);

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);

            document.getElementById('game_over').classList.add('scile');

            setTimeout(function () {
               document.getElementById('game_over').classList.remove('scile');
            }, 18000);

			document.getElementById("countDown").innerHTML = "00:00";
            fullStartPosition();
		}
	}, 1000);

}


function fullStartPosition() {
	setTimeout(function () {
		for(let i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor = '';
		}
		buttonsActiveDeactive(true);
		document.getElementById('play').disabled = false;
		document.getElementById('pause').disabled = false;
	},1500)
}

// Buttons click disable and enable
function buttonsActiveDeactive(e) {

	for(let i = 0; i < buttons.length; i++) {
		buttons[i].disabled = e;
		if (e === false) {
			buttons[i].classList.add("cursor-p");
		}else {
			buttons[i].classList.remove("cursor-p");
		}

		if (buttons[i].style.backgroundColor === 'unset') {
			buttons[i].disabled = true;
			buttons[i].classList.remove("cursor-p");
		}
	}
}
buttonsActiveDeactive(true);

// Play Game
function playGame(e) {
    e.disabled = true;
    document.getElementById('pause').disabled = false;
	buttonsActiveDeactive(false);
	timeWork();
}

// Pause Game
function pauseGame(e) {
    e.disabled = true;
    document.getElementById('play').disabled = false;
	buttonsActiveDeactive(true);
	clearInterval(x);
}

// Full screen function
function toggleFullScreenMode() {
    let btn = document.getElementById( 'btnFullScreenToggle' );
	let parentBlock = document.getElementById("parentBlock");
	let elem = document.documentElement; // html or root element
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
