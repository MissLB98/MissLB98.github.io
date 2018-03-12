//JS

//project data
const data = [
	{
		alt: "Project: Employee Directory",
		link: "projects/employeeDirectory/index.html",
		img: "img/logo3.png",
	},
	{
		alt: "Project: Interactive Media Player",
		link: "projects/mediaPlayer/index.html",
		img: "img/logo2.png",
	},
	{
		alt: "Project: Lightbox Photo Gallery",
		link: "projects/photoGallery/index.html",
		img: "img/logo4.png",
	},
	{
		alt: "Project: Educare",
		link: "projects/educare/index.html",
		img: "img/logo1.png",
	},	
];


//building the project html
let HTML = '<ul>';

for (let i = 0; i < data.length; i++)	{
	HTML += '<li>';
		HTML += '<a href="' + data[i].link + '" target="_blank">';
			HTML += '<img class="p-img" src="' + data[i].img + '" alt="' + data[i].alt + '" />';
		HTML += '</a>';
		HTML += '<div class="">';
			HTML += '<button id="button" type="button">Project Info</button>';
		HTML += '</div>';
	HTML += '</li>';
}

HTML += '</ul>';

$('#projects').html(HTML);



//button functionality

if ($('#projects ul li:first-child')) {
	$('#projects ul li:first-child #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div>
				<h1>Employee Directory</h1>
				<p>I used AJAX and the random user API json data to generate 12 random employees to make a directory showing their personal information.</p>
				<p>If you click on one of the employees, a container pops up displaying more information about each employee.</p>
				<a href="projects/employeeDirectory/index.html" target="_blank">Go to Project</a>
			</div>
		` });
	});
}

if ($('#projects ul li:nth-child(2)'))	{
	$('#projects ul li:nth-child(2) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div>
				<h1>Interactive Media Player</h1>
				<p>This media player has words below it that highlights the same time when it is being said in the video.</p>
				<p>I used spans with data-start and data-end attributes to indicate when the captions should highlight.</p>
				<p>To modify the controls of the video, I used mediaelement.js.</p>
				<p>I used a for loop inside an event listener to listen for changes in the video so that the captions can automatically highlight itself in sinc with the video.</p>
				<p>You can click on the captions to update the progress bar too.</p>
				<a href="projects/mediaPlayer/index.html">Go to Project</a>
			</div>
		` });
	});
}

if ($('#projects ul li:nth-child(3)'))	{
	$('#projects ul li:nth-child(3) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<div>
				<h1>Photo Gallery</h1>
				<p>Lightbox.js is used to enlarge the photos in a modal with captions when you click on one of the thumbnails.</p> 
				<p>You can navigate between photos with the left and right arrow keys or mouse.</p>
				<p>I made a search box where the user input and caption texts are stored in variables. The each method and an if statement is used to compare the caption text and user input.</p>
				<p>This will filter the photos depending on the input in the search box.</p>
				<a href="projects/photoGallery/index.html">Go to Project</a>
			</div>
		` });
	});
}

if ($('#projects ul li:last-child'))	{
	$('#projects ul li:last-child #button').click(() => {
		vex.dialog.alert({ unsafeMessage: '<b>Hello!4</b>' });
	});
}

