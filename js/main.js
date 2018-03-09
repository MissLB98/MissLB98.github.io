//JS

const projectsContainer = document.getElementById('projects');
const button = document.getElementById('button');

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


//info pop up

function popup()	{
	
}


//building the project html
let HTML = '<ul>';

for (let i = 0; i < data.length; i++)	{
	HTML += '<li>';
		HTML += '<a href="' + data[i].link + '" target="_blank">';
			HTML += '<img src="' + data[i].img + '" alt="' + data[i].alt + '" />';
		HTML += '</a>';
		HTML += '<input id="button" type="button" value="Click here to read more" />';
	HTML += '</li>';
}

HTML += '</ul>';





projectsContainer.innerHTML = HTML;