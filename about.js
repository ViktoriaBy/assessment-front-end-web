console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	/**ALERT WINDOW FOR SUBMIT BTN */
	alert('Form has been submited successfully');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);





//MOUSEOVER DUCK ALERT
function mouseOver(){

	alert("You have a wonderfull smile!");
}

document.getElementById("duck").addEventListener("mouseover", mouseOver);

