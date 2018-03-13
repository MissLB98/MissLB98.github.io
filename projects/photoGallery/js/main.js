//main.js



//LIGHTBOX

	lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'resizeDuration': 200,
	'wrapAround': true,
	'showImageNumberLabel': false,
	'positionFromTop': 25
	});
	
//CUSTOM SEARCH BOX
	
	
	//Store the user input in a variable. The 'keyup' will check for text entered into the search box.
		$("#search-box").change().keyup( function() {
			var search = $(this).val().toUpperCase();
			
			//Store the caption text in a variable.
			$('#list li').each(function() {
				$(this).find('a').attr('data-lightbox', 'pics');
				var $Caption = $(this).find('a').attr('data-title');
				
				//Compare the caption and the user input.
				if($Caption.toUpperCase().includes(search))	{
					$(this).show();
				} else	{
					$(this).hide().find('a').removeAttr('data-lightbox');
				}
			});
		});
	
	/*I find that by pressing the enter key, the search results disappear. preventdefault() does not work.
	So I write this alert for the users not to do that.*/
	
	$('#search-box').click(function(e) {
		alert('Please do not click the "enter" key after typing your keywords. Instead you can click on the blank space anywhere on the viewport. Thank you.');
	});