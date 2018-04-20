//JS

//project data. Project links from github pages.pl
const data = [
	{
		name: "Little Sunbeams Educare",
		alt: "Project: Educare",
		link: "https://misslb98.github.io/Educare/",
		img: "img/logo1.png",
	},
	{
		name: "Employee Directory",
		alt: "Project: Employee Directory",
		link: "https://misslb98.github.io/Project-10/",
		img: "img/logo3.png",
	},
	{
		name: "Interactive Media Player",
		alt: "Project: Interactive Media Player",
		link: "https://misslb98.github.io/Project-7/",
		img: "img/logo2.png",
	},
	{
		name: "Lightbox Photo Gallery",
		alt: "Project: Lightbox Photo Gallery",
		link: "https://misslb98.github.io/Project4/",
		img: "img/logo4.png",
	},
	/*{
		name: "React Flickr Gallery",
		alt:"Project: React Flickr Gallery",
		link: "https://github.com/MissLB98/project-11",
		img: "img/logo5.png",
	},*/
];

//building the project html
let HTML = '<ul id="lightSlider">';

for (let i = 0; i < data.length; i++)	{
	HTML += '<li>';
		HTML += '<a href="' + data[i].link + '" target="_blank">';
			HTML += '<div class="overlay-cont">';
				HTML += '<div id="img-overlay">';
					HTML += '<h1>Go to Project</h1>' + '<h2>' + data[i].name + '</h2>';
				HTML += '</div>';
				HTML += '<img class="p-img" src="' + data[i].img + '" alt="' + data[i].alt + '" />';
			HTML += '</div>';
		HTML += '</a>';
		HTML += '<div>';
			HTML += '<button id="button" type="button">More Info</button>';
		HTML += '</div>';
	HTML += '</li>';
}

HTML += '</ul>';

//insert html into DOM
$('#projects').html(HTML);


//button functionality
if ($('#projects ul li:first-child'))	{
	$('#projects ul li:first-child #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div class="modal-popup">
				<h1>Little Sunbeams Educare</h1>
				<p>This is a Website I made for Theresa Jacobs who is starting an Educare center in 2019.</p>
				<p>It consists of three pages. The home page has a pop up modal displaying timetables for each age group. I used css animations on a svg to make the logo.</p>
				<p>I used Google Maps API to display the location of the Educare on the contact page. There is a link to download the enrolment.</p>
				<p>The icons were made by <a href="http://www.freepik.com" target="_blank" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a>.</p>
				<a href="https://misslb98.github.io/Educare/" target="_blank">Go see Project</a>
			</div>
		` });
	});
}

if ($('#projects ul li:nth-child(2)')) {
	$('#projects ul li:nth-child(2) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div class="modal-popup">
				<h1>Employee Directory</h1>
				<p>I used AJAX and the random user API json data to generate 12 random employees to make a directory showing their personal information.</p>
				<p>If you click on one of the employees, a container pops up displaying more information about each employee.</p>
				<a href="https://misslb98.github.io/Project-10/" target="_blank">Go see Project</a>
			</div>
		` });
	});
}

if ($('#projects ul li:nth-child(3)'))	{
	$('#projects ul li:nth-child(3) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div class="modal-popup">
				<h1>Interactive Media Player</h1>
				<p>This media player has words below it that highlights the same time when it is being said in the video.</p>
				<p>I used spans with data-start and data-end attributes to indicate when the captions should highlight.</p>
				<p>To modify the controls of the video, I used mediaelement.js.</p>
				<p>I used a for loop inside an event listener to listen for changes in the video so that the captions can automatically highlight itself in sinc with the video.</p>
				<p>You can click on the captions to update the progress bar too.</p>
				<a href="https://misslb98.github.io/Project-7/" target="_blank">Go see Project</a>
			</div>
		` });
	});
}

if ($('#projects ul li:nth-child(4)'))	{
	$('#projects ul li:nth-child(4) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div class="modal-popup">
				<h1>Photo Gallery</h1>
				<p>Lightbox.js is used to enlarge the photos in a modal with captions when you click on one of the thumbnails.</p> 
				<p>You can navigate between photos with the left and right arrow keys or mouse.</p>
				<p>I made a search box where the user input and caption texts are stored in variables. The each method and an if statement is used to compare the caption text and user input.</p>
				<p>This will filter the photos depending on the input in the search box.</p>
				<a href="https://misslb98.github.io/Project4/" target="_blank">Go see Project</a>
			</div>
		` });
	});
}

/*if ($('#projects ul li:nth-child(5)'))	{
	$('#projects ul li:nth-child(5) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div class="modal-popup">
				<h1>React Photo Gallery</h1>
				<p>This project uses the Flickr API to make a photo gallery. I've set up this project using the create-react-app.</p> 
				<p>I've devided the main App component into smaller individual components. The projects has components made with the help of React Router.</p> 
				<p>Specifically: I made a main search navigation, and a container where photos are taken to from the API.</p>
				<p>I've made a loading indicator that displays each time the app fetches new data.</p>
				<p>You will have to start the project using npm once you have downloaded it from github.</p>
				<a href="https://github.com/MissLB98/project-11" target="_blank">Go see Project</a>
			</div>
		` });
	});
}*/






