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
			HTML += '<button id="button" type="button">Click here for more information</button>';
		HTML += '</div>';
	HTML += '</li>';
}

HTML += '</ul>';

$('#projects').html(HTML);



//button functionality

if ($('#projects ul li:first-child')) {
	$('#projects ul li:first-child #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			<h1>Employee Directory</h1>
			<p>For this project, I used AJAX and the random user API json data to generate 12 random employees.</p>
			<p>If you click on one of the employees, a container pops up displaying more information about each employee.</p>
			<a href="projects/employeeDirectory/index.html" target="_blank">Go to Project</a>
		` });
	});
}

if ($('#projects ul li:nth-child(2)'))	{
	$('#projects ul li:nth-child(2) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: `
			
		` });
	});
}

if ($('#projects ul li:nth-child(3)'))	{
	$('#projects ul li:nth-child(3) #button').click(() => {
		vex.dialog.alert({ unsafeMessage: '<b>Hello!3</b>' });
	});
}

if ($('#projects ul li:last-child'))	{
	$('#projects ul li:last-child #button').click(() => {
		vex.dialog.alert({ unsafeMessage: '<b>Hello!4</b>' });
	});
}

