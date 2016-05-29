function validateForm() {
	var x1 	= document.forms["subscribeform"]["email"]			.value;
	var x2 	= document.forms["subscribeform"]["password"]		.value;
	var x3 	= document.forms["subscribeform"]["firstname"]		.value;
	var x4 	= document.forms["subscribeform"]["lastname"]		.value;
	var x5 	= document.forms["subscribeform"]["addressline1"]	.value;
	var x6 	= document.forms["subscribeform"]["city"]			.value;
	var x7 	= document.forms["subscribeform"]["state"]			.value;
	var x8 	= document.forms["subscribeform"]["zipcode"]		.value;
	var x9 	= document.forms["subscribeform"]["number"]			.value;
	var x10 = document.forms["subscribeform"]["name"]			.value;
	var x11 = document.forms["subscribeform"]["expiry"]			.value;
	var x12 = document.forms["subscribeform"]["cvc"]			.value;
	var x13 = document.forms["subscribeform"]["plan"]			.value;

	var missingstring = "Missing the following field:";
	var missingbool = false;

	
	if (x1 == null || x1 == "") {
		missingstring = missingstring + "\r * Email";
		missingbool = true
	}
	if (x2 == null || x2 == "") {
		missingstring = missingstring + "\r * Password";
		missingbool = true
	}
	if (x3 == null || x3 == "") {
		missingstring = missingstring + "\r * First Name";
		missingbool = true
	}
	if (x4 == null || x4 == "") {
		missingstring = missingstring + "\r * Last Name";
		missingbool = true
	}
	if (x5 == null || x5 == "") {
		missingstring = missingstring + "\r * Street Address";
		missingbool = true
	}
	if (x6 == null || x6 == "") {
		missingstring = missingstring + "\r * City";
		missingbool = true
	}
	if (x7 == null || x7 == "") {
		missingstring = missingstring + "\r * State";
		missingbool = true
	}
	if (x8 == null || x8 == "") {
		missingstring = missingstring + "\r * Zipcode";
		missingbool = true		
	}
	if (x9 == null || x9 == "") {
		missingstring = missingstring + "\r * Credit Card Number";
		missingbool = true
	}
	if (x10 == null || x10 == "") {
		missingstring = missingstring + "\r * Name on Credit Card";
		missingbool = true
	}
	if (x11 == null || x11 == "") {
		missingstring = missingstring + "\r * Credit Card Expiration Date";	
		missingbool = true		
	}
	if (x12 == null || x12 == "") {
		missingstring = missingstring + "\r * Credit Card CVC";
		missingbool = true		
	}
	if (x13 == null || x13 == "") {
		missingstring = missingstring + "\r * Subscription Plan";	
		missingbool = true
	} 
	
	if (missingbool == true) {
		alert(missingstring);
		return false;
	} else {
		return true;
	}
}




$(document).ready(function(){

	// $('.planselectbutton').mouseover(function(){
		// $(this).css("background-color", "black")
	// });
	// $('.planselectbutton').mouseleave(function(){
		// $(this).css("background-color", "")
	// });
	
	
	$('#3deliveries').click(function(){
		$('.planselectbutton').css("background-color", "#62C2CC");
		$(this).css("background-color", "#2D4D67");
		$('.chkbox').prop("checked", false);
		$('#chk1').prop("checked", true);
		$('#span_subtotal').text('$15.00');
		$('#span_total').text('$15.00');
		$('#input_plan').prop("value", "Plan1")
	});
	$('#5deliveries').click(function(){
		$('.planselectbutton').css("background-color", "#62C2CC")
		$(this).css("background-color", "#2D4D67")
		$('.chkbox').prop("checked", false)
		$('#chk2').prop("checked", true);
		$('#span_subtotal').text('$20.00');
		$('#span_total').text('$20.00');
		$('#input_plan').prop("value", "Plan2")
	});
	$('#10deliveries').click(function(){
		$('.planselectbutton').css("background-color", "#62C2CC")
		$(this).css("background-color", "#2D4D67")
		$('.chkbox').prop("checked", false)
		$('#chk3').prop("checked", true);
		$('#span_subtotal').text('$25.00');
		$('#span_total').text('$25.00');
		$('#input_plan').prop("value", "Plan3")
	});
	
	
		$('#div_purchasebutton').click(function(){
			if (validateForm()) {
				document.forms['subscribeform'].submit();
			}
		});
	
	$('#3deliveries').css('cursor', 'pointer');
	$('#5deliveries').css('cursor', 'pointer');
	$('#10deliveries').css('cursor', 'pointer');
	$('#div_purchasebutton').css('cursor', 'pointer');
	

    $("#input_zipcode").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});