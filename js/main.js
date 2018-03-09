//JS

const projectsContainer = document.getElementById('projects');

//project data
const data = [
	{
		alt: "Project: Employee Directory",
		link: "projects/employeeDirectory/index.html",
		img: "img/logo3.png",
		moreInfo: () =>	{
			return vex.dialog.alert({ unsafeMessage: '<b>ello!</b>' });;
		},
	},
	{
		alt: "Project: Interactive Media Player",
		link: "projects/mediaPlayer/index.html",
		img: "img/logo2.png",
		moreInfo: () =>	{
			return vex.dialog.alert({ unsafeMessage: '<b>Hello!</b>' });;
		},
	},
	{
		alt: "Project: Lightbox Photo Gallery",
		link: "projects/photoGallery/index.html",
		img: "img/logo4.png",
		moreInfo: function ()	{
			return vex.dialog.alert({ unsafeMessage: '<b>Hello!</b>' });
		},
	},
	{
		alt: "Project: Educare",
		link: "projects/educare/index.html",
		img: "img/logo1.png",
		moreInfo: function ()	{
			return vex.dialog.alert({ unsafeMessage: '<b>Hello!</b>' });
		},
	},	
];


//building the project html
let HTML = '<ul>';

for (let i = 0; i < data.length; i++)	{
	HTML += '<li>';
		HTML += '<a href="' + data[i].link + '" target="_blank">';
			HTML += '<img class="p-img" src="' + data[i].img + '" alt="' + data[i].alt + '" />';
		HTML += '</a>';
		
		function dialog()	{
			return data[i].moreInfo();
		}
		
		HTML += '<button onclick="dialog()" id="button" type="button">Click here to read more</button>';
	HTML += '</li>';
}


HTML += '</ul>';


projectsContainer.innerHTML = HTML;

