function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let phnInput = document.getElementById('phone-no').value
	let batchInput = document.getElementById('batch').value
	let moduleInput = document.getElementById('module').value
	let tnCInput = document.getElementById('tnC').checked

	let error = false

	if(firstNameInput.length>=3){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastNameInput.length>=3){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
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

	if(phnInput.includes(1,2,3,4,5,6,7,8,9,0) && phnInput.length === 10) {
		document.getElementById("phn-valid").style.display = "block";
		document.getElementById("phn-invalid").style.display = "none";
	} else {
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