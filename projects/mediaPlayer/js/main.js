//main.js

$('video').mediaelementplayer({
  features: ['playpause', 'progress', 'volume', 'fullscreen'],
  startLanguage: 'en',
});

//variables
const video = document.getElementById('myVideo');
const transcript = document.querySelectorAll('.transcript span');
const content = document.querySelector('.transcript');

//update the progress bar
video.addEventListener('timeupdate', (e) => {
	//hightlight text
	for (let i = 0; i < transcript.length; i += 1)	{
		let currentTime = video.currentTime;
		let startTime = transcript[i].getAttribute('data-start');
		let endTime = transcript[i].getAttribute('data-end');
		if ((currentTime) >= startTime && currentTime <= (endTime))	{
			//when the video begins the background color will change
			transcript[i].className = 'highlight';
		} else	{
			//when the video ends the style is removed
			transcript[i].className = '';
		}
	}
});

//to get to a specific time progress by clicking the text
content.addEventListener('click', (e) => {
	let timePosition = e.target.getAttribute('data-start');
	video.currentTime = timePosition;
});