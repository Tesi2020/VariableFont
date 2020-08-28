var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');

function togglePlayPause(){
	if(video.paused){
		btn.className = "pause";
		video.play();
	} else {
		btn.className = "play";
		video.pause();
	}
}

// btn.onclick = function() {
// 	alert('play!!!');
// 	togglePlayPause();
// }

	btn.onclick = function() {
	// console.log("play!!!");
	togglePlayPause();
};

video.addEventListener('timeupdate', function(){
	var juicePos = video.currentTime / video.duration;
	juice.style.width = juicePos * 100 + "%";
	if (video.ended){
		btn.className = "play";
	}
});


var vid = document.getElementById("video");
vid.ontimeupdate = function(){
  var percentage = ( vid.currentTime / vid.duration ) * 100;
  $("#custom-seekbar span").css("width", percentage+"%");
};

$("#custom-seekbar").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar").width();
    var percentage = ( left / totalWidth );
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});//click()