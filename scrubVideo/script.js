let $spacer = document.querySelector('.spacer');
let $video = document.querySelector('.video');
const lettera = document.getElementById("text")

// The height of the spacer element
let spacerHeight = $spacer.clientHeight;
// the height of the viewport
let viewportHeight = document.documentElement.getBoundingClientRect().height;

lettera.style["font-size"] = 200 + "px";

// We can get the total scrollable height be subtracting the spacer element's height by the viewport height
let scrollableHeight = spacerHeight - viewportHeight;
// Get the full duration of the video
let videoDuration;
// Keep track the video's playtime
let currentTime = 0;

// The scroll event handler
function handleScrollEvent(event) {
  // Here we sync the y position of the scrollbar to the progress of the video
  currentTime = window.scrollY * videoDuration / scrollableHeight;
  $video.currentTime = currentTime;
	const prova = Math.floor(map_range(currentTime,0,videoDuration,0,300))
	console.log(currentTime,videoDuration, prova)
	lettera.style["font-variation-settings"] = " 'SIZE' " + prova
}

// Loaded Data handler, that is, the function that runs after the video is ready to play
function handleLoadedData(event) {
  // Get the full video duration
  videoDuration = $video.duration;
  // Do stuff when user scrolls
  window.addEventListener('scroll', handleScrollEvent);
}

// Do stuff when the video is ready to play
$video.addEventListener('loadeddata', handleLoadedData);

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}



