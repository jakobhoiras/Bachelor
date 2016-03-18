var current = "#Frontpage";

function hideDiv(theDiv) {
	$(document).ready(function(){
		$(theDiv).hide();
	});
}

function showDiv(theDiv) {
	$(document).ready(function(){
		$(theDiv).show();
	});
}

function createCG(name) {
	var headDiv = document.createElement('div');
		headDiv.innerHTML = headDiv.innerHTML + 'CreateGoal';

	var iDiv = createDiv(name, 'FrontpageMainDiv');

	var iButton = createDiv('frontButton', 'button');
		iButton.innerHTML = iButton.innerHTML + 'Frontpage';
		iButton.setAttribute('onclick', 'goTo(\'Frontpage\');');
	
		iDiv.appendChild(headDiv);
		iDiv.appendChild(iButton);

		document.getElementById('backDiv').appendChild(iDiv);
}

function createDiv(id, className) {
	var newDiv = document.createElement('div');
		newDiv.setAttribute('id', id);
		newDiv.setAttribute('class', className);

		return newDiv;
}

function goTo(target) {

	var targetDiv = document.getElementById(target);
	var hasher = "#";
	var newTarget = hasher.concat(target);

	if (targetDiv === null) {
		createCG (target);
	} else {
		showDiv(newTarget);
	}

	hideDiv(current);
	current = newTarget;
}
