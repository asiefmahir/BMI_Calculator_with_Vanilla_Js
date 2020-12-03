const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const button = document.getElementById("btn");
const result = document.getElementById("dynamic__bmi");
const message = document.getElementById("bmi_text");

// Project Steps
/**
 * Step1
 * Find the functions
 */

/**
 * Step2
 * bind functions to EvnetListener
 */

/**
 * Step3
 * Find Variables and Data
 */

/**
 * Step4
 * Implement calculateBMI function
 */

/**
 * Step5
 * Implement calculateBMI function
 */

/**
 * Step6
 * Implement showMessage function
 */

/**
 * Step7
 * Reafctor the code with resetInput Function
 */

/**
 * Step8
 * Make the Application Bug free
 */

let height, weight, bmi;
let msg = "You are ";
function calculateBMI() {
	height = Number(heightInput.value);
	weight = Number(weightInput.value);
	bmi = weight / (height * 0.0254 * (height * 0.0254));
	result.textContent = bmi.toFixed(2);
	showMessage();
	message.textContent = msg;
	resetInputs();
}
function resetInputs() {
	heightInput.value = "";
	weightInput.value = "";
	msg = "You are ";
}
function showMessage() {
	if (bmi < 16) {
		msg = msg + "Severe Thin";
	} else if (bmi >= 16 && bmi <= 17) {
		msg = msg + "Moderate Thin";
	} else if (bmi > 17 && bmi <= 18.5) {
		msg = msg + "Mid Thin";
	} else if (bmi > 18.5 && bmi <= 25) {
		msg = msg + "Normal";
	} else if (bmi > 25) {
		msg = msg + "Overweight";
	}
}

function eventHandler() {
	if (!Number(heightInput.value) || !Number(weightInput.value)) {
		alert("Please Enter Valid Height and Weight");
		resetInputs();
		return;
	}
	console.log(heightInput.value);
	calculateBMI();
}
button.addEventListener("click", eventHandler);
