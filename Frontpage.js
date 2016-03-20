var current = "Frontpage";

function goTo(target) {

	var targetDiv = document.getElementById(target);
		targetDiv.setAttribute('class', 'FrontpageMainDiv');

	var currentDiv = document.getElementById(current);
		currentDiv.setAttribute('class', 'FrontHide');

	current = target;
}
