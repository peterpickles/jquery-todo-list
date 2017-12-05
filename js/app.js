var inputText = $('#inputText');
var todos = $('#todos');
var button = $('#button');


$(document).ready(function(){
	$('button').click();

//pulling a value from the input box and submitting it to a list
	$(button).on('click', function(){
		$(todos).append($(todos).append(
		  	'<li><input class = "checkDone" type = "checkbox">' + 
		  	inputText.val() + 
		  	"<button>X</button>" + 
		  	"</li>"));
		$(inputText).val("");
		// $('li').on('click', function(){
		// 	this.remove(); //removing the task when hitting X button
		// }); //blanks the input box after use
	})

	$(todos).on('change',function(){
		$(this).parent().toggleClass('done');
	});
 

});

//To-dos list:
//Add completeTask logic
//add CSS styling to make it look less crappy