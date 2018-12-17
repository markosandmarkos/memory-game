var demoContainer = document.getElementById('demo_containers');

var imgArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.png'];
var imgArrayConcat = imgArray.concat(imgArray);


imgArrayConcat = imgArrayConcat.sort(function(){ return 0.5-Math.random() });

for (var i = 0; i < imgArrayConcat.length; i++) {
	var html = '<div class="col-md-2 my-2"><img class="border" width="100%" src="public/images/'+imgArrayConcat[i]+'"></div>';
	demoContainer.innerHTML += html;
}


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