var current = "Frontpage";
var current2 = "choice1";
var startDateOut = new Date("4/5/2016");
var endDateOut = new Date("6/5/2016");
var intervalOut = 7;
var startSPOut = 10
var endSPOut = 15;

function goTo(target) {

	var targetDiv = document.getElementById(target);
		targetDiv.setAttribute('class', 'FrontpageMainDiv');

	var currentDiv = document.getElementById(current);
		currentDiv.setAttribute('class', 'FrontHide');

	current = target;
}

function goTo2(target) {

	startDate = getSDate('S');
	endDate = getSDate('E');

	if (startDate === 0) {
		showDateWarning('s');
	} 
	else if (endDate === 0) {
		showDateWarning('e');
	} 
	else {
		var currentDiv = document.getElementById(current2);
			currentDiv.setAttribute('class', 'buttonChoiceOff');

		var targetDiv = document.getElementById(target);	
			targetDiv.setAttribute('class', 'buttonChoiceOn');

		if (target === 'choice1') {
			createMilestoneDiv(7, startDate, endDate);
		}
		if (target === 'choice2') {
			createMilestoneDiv(30, startDate, endDate);
		}
		if (target === 'choice3') {
			createMilestoneDiv(15, startDate, endDate);
		}	
		current2 = target;
	}
}

function createMilestoneDiv (interval, startDate, endDate) {

	var milestones = makeMilestones (startDate, endDate, interval);
	addMilestones(milestones, interval);
	

}

function getSDate (pointe) {
	var dd = document.getElementById('inputDate1' + pointe).value
	var mm = document.getElementById('inputDate2' + pointe).value
	var yyyy = document.getElementById('inputDate3' + pointe).value
	if (dd.length !== 0 && mm.length !== 0 && yyyy.length !== 0 ) {
		if (isNaN(dd) === false && isNaN(mm) === false && isNaN(yyyy) === false) {
			if (0 < (+dd) && (+dd) < 32 && 0 < (+mm) && (+mm) < 13 && 
				2015 < (+yyyy) && (+yyyy) < 2100) {
				dateString = mm + '/' + dd + '/' + yyyy;
				var startDate = new Date(mm + '/' + dd + '/' + yyyy);
				return startDate;
			} else {
				return 0;
			}
		} else { 
			return 0;
		}
	} else {
		return 0;
	}
}

function getEDate () {
	
}


function makeMilestones (startDate, endDate, interval) {
	var mileStones = [];

	var date1 = new Date(startDate.getTime());
	date1.setDate(date1.getDate() + interval);

	while (date1 < endDate) {
		var dd = date1.getDate();
		var mm = date1.getMonth()+1;
		var yyyy = date1. getFullYear();

		var dateArray = [dd,mm,yyyy];
		mileStones.push(dateArray);

		date1.setDate(date1.getDate() + interval);
	}

	return mileStones;
}
function addMilestones (dates, interval) {
	counter = 0;

	var el = document.getElementById('wrapper1')
	if (el !== null) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
		document.getElementById('chosenChoice').removeChild(el);
	}

	var wrapperDiv1 = document.createElement('div');
	wrapperDiv1.setAttribute('id', 'wrapper1');
	wrapperDiv1.setAttribute('class', 'wrapperDiv1');
	document.getElementById('chosenChoice').appendChild(wrapperDiv1);
	var fillButton = document.createElement('div');
				fillButton.setAttribute('class', 'buttonNav');
				fillButton.setAttribute('onclick', "autoFill('" + interval + "')");
				fillButton.innerHTML = fillButton.innerHTML + 'Auto fill'; 
	document.getElementById('wrapper1').appendChild(fillButton);


	while (counter < dates.length) {
			var dateWrapperDiv = document.createElement('div');
			dateWrapperDiv.setAttribute('id', 'wrapperChoice2' + (counter + 1));
			dateWrapperDiv.setAttribute('class', 'wrapperChoice2');

			var textDiv = document.createElement('div');
				textDiv.innerHTML = textDiv.innerHTML + dates[counter][0] + '/'
				+ dates[counter][1] + ' - ' + dates[counter][2];
				textDiv.setAttribute('class', 'milestoneDate');
			var inputter = document.createElement('input');
				inputter.setAttribute('id','milestone' + (counter + 1));
				inputter.setAttribute('class', 'inputMilestone');
				inputter.setAttribute('type', 'text');

			document.getElementById('wrapper1').appendChild(dateWrapperDiv);
			document.getElementById('wrapperChoice2'  + 
				(counter + 1)).appendChild(textDiv);
			document.getElementById('wrapperChoice2'  + 
				(counter + 1)).appendChild(inputter);

			counter = counter + 1;
		}

	var fillButton2 = document.createElement('div');
				fillButton2.setAttribute('class', 'buttonNav');
				fillButton2.setAttribute('onclick', "goTo2(current2)");
				fillButton2.innerHTML = fillButton2.innerHTML + 'Reset'; 
	document.getElementById('wrapper1').appendChild(fillButton2);

}
function autoFill(interval) {
	var counter = 1
	var inputNr = 'milestone' + counter;
	var startDate = getSDate('S');
	var endDate = getSDate('E');
	var diff =  Math.floor((endDate - 
		startDate) / 86400000);
	var avg = (endSPOut - startSPOut) / diff;
	var starter = startSPOut + (avg * interval);

	while(counter < (diff/interval)) {
		document.getElementById('milestone' + 
			counter).setAttribute('value', '' + Math.round(starter * 100) / 100);

		starter = starter + (avg * interval);
		counter = counter + 1;

	}
}
