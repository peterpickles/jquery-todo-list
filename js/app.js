var inputText = $('#inputText');

$(document).ready(function(){
	$('button').click();
});

//pulling a value from the input box and submitting it to a list

$('#button').click(function() {
  $('ul').first().append("<li>" + inputText.val());
  $
});

$('ul').on('click', 'li', function() {
    console.log('Clicked!');
});