function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let phnInput = document.getElementById('phone-no').value
	let batchInput = document.getElementById('batch').value
	let moduleInput = document.getElementById('module').value
	let tnCInput = document.getElementById('tnC').checked

	let error = false

	if(firstNameInput.length<3 || (firstNameInput.includes(0)||firstNameInput.includes(1)||firstNameInput.includes(2)||firstNameInput.includes(3)||firstNameInput.includes(4)
    || firstNameInput.includes(5)||firstNameInput.includes(6)||firstNameInput.includes(7)||firstNameInput.includes(8)||firstNameInput.includes(9)))
    {
		document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true;
	} 
    else {
		document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
	}

	if(lastNameInput.length<3 || (lastNameInput.includes(0)||lastNameInput.includes(1)||lastNameInput.includes(2)||lastNameInput.includes(3)||lastNameInput.includes(4)
    || lastNameInput.includes(5)||lastNameInput.includes(6)||lastNameInput.includes(7)||lastNameInput.includes(8)||lastNameInput.includes(9))){
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById('last-name-invalid').style.display = 'block'
        error = true;
	} 

    else {
		document.getElementById('last-name-invalid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'block'
	}

	if (
    emailInput!="" &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
		emailInput.indexOf('@') !== 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
		error = true
  }

	if(phnInput.length === 10 && parseInt(phnInput)) {
		document.getElementById("phn-valid").style.display = "block";
		document.getElementById("phn-invalid").style.display = "none";
	} 
    else {
		document.getElementById("phn-invalid").style.display = "block";
		document.getElementById("phn-valid").style.display = "none";
		error = true
	}

	if(batchInput !== 'None'){
		document.getElementById('batch-valid').style.display = "block";
		document.getElementById('batch-invalid').style.display = "none";
	} else {
		document.getElementById('batch-invalid').style.display = "block";
		document.getElementById('batch-valid').style.display = "none";
		error = true
	}

    if(moduleInput !== 'None'){
		document.getElementById('module-valid').style.display = "block";
		document.getElementById('module-invalid').style.display = "none";
	} else {
		document.getElementById('module-invalid').style.display = "block";
		document.getElementById('module-valid').style.display = "none";
		error = true
	}

	if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}

	if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('phone-no').value = ''
		document.getElementById('batch').value = 'None'
		document.getElementById('module').value = 'None'
		document.getElementById('tnC').checked = false

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("phn-valid").style.display = "none";
		document.getElementById("batch-valid").style.display = "none";
		document.getElementById('module-valid').style.display = "none";
	}
}