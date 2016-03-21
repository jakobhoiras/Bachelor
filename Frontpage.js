var current = "Frontpage";
var current2 = "choice1";
var current3 = "chosenChoice1";

function goTo(target) {

	var targetDiv = document.getElementById(target);
		targetDiv.setAttribute('class', 'FrontpageMainDiv');

	var currentDiv = document.getElementById(current);
		currentDiv.setAttribute('class', 'FrontHide');

	current = target;
}
function goTo2(target, target2) {

	var currentDiv = document.getElementById(current2);
		currentDiv.setAttribute('class', 'buttonChoiceOff');
		var currentDiv2 = document.getElementById(current3);
		currentDiv2.setAttribute('class', 'chosenChoiceOff');
	


	var targetDiv = document.getElementById(target);
		targetDiv.setAttribute('class', 'buttonChoiceOn');
		var targetDiv2 = document.getElementById(target2);
		targetDiv2.setAttribute('class', 'chosenChoiceOn');

	current2 = target;
	current3 = target2;
}
