const form = document.getElementById("form1");

form.addEventListener("submit",getFormvalue);

function getFormvalue(e) {
	e.preventDefault();

	const firstName = e.target.fname.value;
	const lastName = e.target.lname.value;
	
	alert(`${firstName} ${lastName}`);
}
