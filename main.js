
$( document ).ready(function() {

    $("#main_button").on("click", function(){
  // When the HTML element with ID 'main_button' is clicked
  // this code will run  // "Alert" is a JS function which trigger a pop-up window
  	alert("The Button has been clicked!");
  	});
  	
  	$("#text_input").on("keyup", function(){
  // When the HTML element with ID text_input registers
  // the 'keyup' event, this code will run
  // $(this) is a special jQuery selector that refers to the HTML
  // element that is currently selected. In this case, it refers to 
  // the #text_input element, since it was the element which triggered 
  // this code. This line simply takes the value of the #text_input
  // and puts it into the #display_text element
  	$("#display_text").html($(this).val());
  	});
  	
  	
  	$(".cat").on("click", function(){
      alert("Oh so you want cats, eh?");
      $('#display_pic').html('<img src = "cat.jpg">');
      $('#display_text2').html('<p> You got it! </p>');

      
    
      });
    

});
