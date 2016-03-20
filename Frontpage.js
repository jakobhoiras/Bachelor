var current = "Frontpage";

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



function createElem(type, id, className) {

	if (type === 'div') {
		var elem = document.createElement('div');
	}

	if (type === 'form') {
		var elem = document.createElement('form');
	}

	if (type === 'inputText') {
		var elem = document.createElement('input');
		elem.setAttribute('type', 'text');
	}
	if (type === 'inputDate') {
		var elem = document.createElement('input');
		elem.setAttribute('type', 'date');
	}

	
	if (id !== 0) { elem.setAttribute('id', id); }
	if (className !== 0) { elem.setAttribute('class', className); }

	return elem;
}

function goTo(target) {

	var targetDiv = document.getElementById(target);
		targetDiv.setAttribute('class', 'FrontpageMainDiv');

	var currentDiv = document.getElementById(current);
		currentDiv.setAttribute('class', 'FrontHide');

	current = target;
}
