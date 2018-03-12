//MAIN.js

const mq = window.matchMedia("(max-width: 767px)");
let HTML;

if (matchMedia)	{
	mq.addListener(menuWidthChange);
	menuWidthChange(mq);
}

function menuWidthChange() {
	const menuDiv = document.getElementById("menuToggle");
	if (mq.matches)	{
		HTML = `
		<input id="click" type="checkbox"/>
		
		<!--THIS IS THE HAMBURGER IN THE SPANS-->
		
		<span></span>
		<span></span>
		<span></span>
		<ul id="menu">
			<a href="./index.html"><li>
			<svg fill="#FFFFFF" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
			HOME</li></a>
			
			<a href="./contact.html"><li>
			<svg fill="#FFFFFF" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
				<path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/>
			</svg>
			CONTACT
			</li></a>
			
			<a href="./enrolment.html"><li>
			<svg fill="#FFFFFF" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
			</svg>
			ENROLMENT/COST</li></a>
			
			
			<li class="divider"><img src="img/triangle.svg"/></li>
			<li class="motto1">Destined for Greatness</li>
		</ul>
		`;
		menuDiv.innerHTML = HTML;
		
		
		const checkbox = document.getElementById('click');
		const menu = document.getElementById('menu');
		const menuWords = document.getElementById('menuWords');

		if (checkbox.checked = false)	{
			menu.style.visibility = 'hidden';
		} else	{
			menu.style.visibility = 'visible';
		}
		
	} else	{
		HTML = `
		<ul id="widerMenu">
			<li class="motto2">
				Destined for Greatness
			</li>
			
			<a href="index.html"><li>
			<svg fill="#000" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
			HOME</li></a>
			
			<a href="./enrolment.html"><li>
			<svg fill="#000" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
			</svg>
			ENROLMENT/COST</li></a>
			
			
			<a href="./contact.html"><li>
			<svg fill="#000" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
				<path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/>
			</svg>
			CONTACT
			</li></a>
		</ul>
		`;
		menuDiv.innerHTML = HTML;
	}
};

/* THESE ARE MENU OPTIONS
1 -
	
			<a href="./gallery.html"><li>
			<img style="width: 30px" src="./img/icons/gallery.svg" alt="gallery icon img">
			STAFF/GALLERY
			</li></a>
2 -

			<a href="./gallery.html"><li>
			<img style="width: 30px" src="./img/icons/gallery.svg" alt="gallery icon img">
			STAFF/GALLERY
			</li></a>

*/



//logo

const logo = document.getElementById('logo-image');
let logoHTML = `
	<object id="logo">
		<a href="./index.html">
	<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
		 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
		 <defs>
		  <filter id="svg_5_blur">
		   <feGaussianBlur stdDeviation="0"/>
		  </filter>
		 </defs>
		 <g>
		  <title>background</title>
		  <rect fill="none" id="canvas_background" height="102" width="102" y="-1" x="-1"/>
		  <g display="none" id="canvasGrid">
		   <rect fill="url(#gridpattern)" stroke-width="0" y="1" x="1" height="300" width="300" id="svg_1"/>
		  </g>
		 </g>
		 <g>
		  <title>Logo</title>
		  <rect stroke="#000" id="svg_3" height="94.507951" width="22.501977" y="2.746025" x="38.749012" stroke-width="0" fill="#7B572D"/>
		  <rect stroke="#000" id="svg_4" height="19.501185" width="78.006673" y="28" x="10.996663" stroke-opacity="null" stroke-width="0" fill="#7B572D"/>
		  <path class="logo-path" stroke="transparent" stroke-width="4" id="svg_5" d="m99.454481,49.994435l-19.954917,6.966715l0,-13.926012l19.954917,6.959297zm-14.488958,-34.317937l-9.091036,18.77823l-10.03227,-9.85282l19.123305,-8.92541l0,0zm-34.965522,-14.211654l7.095165,19.586933l-14.194111,0l7.098946,-19.586933zm-34.969303,14.211654l19.130867,8.92541l-10.03605,9.85282l-9.094817,-18.77823zm-14.485177,34.317937l19.958698,-6.959297l0,13.926012l-19.958698,-6.966715zm14.485177,34.317937l9.094817,-18.770809l10.03605,9.84911l-19.130867,8.921699l0,0zm34.969303,14.222783l-7.098946,-19.590641l14.194111,0l-7.095165,19.590641zm34.965522,-14.222783l-19.127087,-8.917989l10.03227,-9.84911l9.094817,18.767101l0,-0.000003zm-59.690873,-34.317937l0,0c0,-13.399241 11.071786,-24.264796 24.729129,-24.264796c13.653565,0 24.729129,10.865554 24.729129,24.264796c0,13.402952 -11.075567,24.268506 -24.729129,24.268506c-13.661125,0 -24.729129,-10.865554 -24.729129,-24.268506l0,0z" fill="#FDB813" filter="url(#svg_5_blur)" opacity="0.7"/>
		 </g>
	</svg>
<span class="name">Little Sunbeams Educare</span></a>
</object>`;

logo.innerHTML = logoHTML;


//google map

function initMap() {
	var uluru = {lat: -34.059003, lng: 18.466771};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 17,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}


/*lightbox.js

lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'resizeDuration': 200,
	'wrapAround': true,
	'showImageNumberLabel': false,
	'positionFromTop': 25
});*/

//footer

const footer = document.getElementById('footer');
let footerHTML = `
<div>
	<i>The logo at the top is made by <a href="https://misslb98.github.io/" target="_blank">Leah M. Birch</a>, the Front-end Developer responsible for this website. Other icons were made by
	
	<a href="http://www.freepik.com" target="_blank" title="Freepik">Freepik</a> 
	
	from 
	
	<a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a> 
	
	is licensed by 
	
	<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></i>
</div>
<span>&copy; Little Sunbeams Educare</span>
<a class="to-top" href="#top">
	<img src="img/icons/pointing-up-arrow.svg"/>To Top
</a>
`;

footer.innerHTML = footerHTML;



/*alert
alert('this site will lose its navigation menu, footer, logo and map if Javascript is not enabled.');*/