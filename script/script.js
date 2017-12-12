// JavaScript Document to East African Recipes
function doConfrm()
{
	alert("For Enhancement");
}
		
// Function clears the fields
function doReset()
{
	// clear text inputs
	document.getElementById("fName").value = "";
	document.getElementById("lName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
						
	//clear radio buttons and check boxes
	document.getElementById("newsletter").checked = true;
					
	// clear drop down list
	document.getElementById("refr").selectedIndex = 0;		
		
	//Refresh page
	$('.ui-checkbox input').checkboxradio('refresh');
	$('.ui-radio input').checkboxradio('refresh');
	$('#refr').selectmenu('refresh',true);
	document.getElementById("fName").focus();
}

//function to toggle the retractable menu on mobile view
function doMenu()
{
    document.getElementById("menuDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.menuBtn')) 
  {
    var theDropdown = document.getElementById("menuDropdown");
      if (theDropdown.classList.contains('show')) 
	  {
        theDropdown.classList.remove('show');
      }
  }
}