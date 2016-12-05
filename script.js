var fingers = document.getElementById('fingers-box');
var toes = document.getElementById('toes-box');

function startTimer(){
	var inputNumber = document.getElementById('input-number').value;
	initializeTimer(inputNumber);
}

function restartTimer(){
	var inputNumber = document.getElementById('input-number').value;
	document.getElementById('display-number').innerHTML = "0";
	initializeTimer(inputNumber);
}

function resetTimer(){
	clearAllIntervals();
	document.getElementById('input-number').value = "";
	document.getElementById('display-number').innerHTML = "0";
	fingers.style.color = 'black';
	fingers.style.backgroundColor = 'transparent';
	toes.style.color = 'black';
	toes.style.backgroundColor = 'transparent';
}

function clearAllIntervals(){
	for(var i=1;i<99999;i++){
		clearInterval(i);
	}
}

function initializeTimer(maxNumber){
	clearAllIntervals();
	var startNumber = 1;
	var displayNumber = document.getElementById('display-number');
	var intervalId = setInterval(function(){
		var newNumber = startNumber++;
		if(newNumber < maxNumber){
			if(newNumber % 5 === 0 && newNumber % 3 === 0){
				fingers.style.backgroundColor = 'cornflowerblue';
				fingers.style.color = 'white';
				toes.style.backgroundColor = 'cornflowerblue';
				toes.style.color = 'white';
				displayNumber.innerHTML = newNumber.toString();
			}
			else if(newNumber % 5 === 0){
				fingers.style.backgroundColor = 'transparent';
				fingers.style.color = 'black';
				toes.style.backgroundColor = 'cornflowerblue';
				toes.style.color = 'white';
				displayNumber.innerHTML = newNumber.toString();	
			}
			else if(newNumber % 3 === 0){
				fingers.style.backgroundColor = 'cornflowerblue';
				fingers.style.color = 'white';
				toes.style.backgroundColor = 'transparent';
				toes.style.color = 'black';
				displayNumber.innerHTML = newNumber.toString();		
			}
			else{
				fingers.style.backgroundColor = 'transparent';
				fingers.style.color = 'black';
				toes.style.backgroundColor = 'transparent';
				toes.style.color = 'black';
				displayNumber.innerHTML = newNumber.toString();	
			}
		}
		if(newNumber == maxNumber){
			if(newNumber % 5 === 0 && newNumber % 3 === 0){
				fingers.style.backgroundColor = 'cornflowerblue';
				fingers.style.color = 'white';
				toes.style.backgroundColor = 'cornflowerblue';
				toes.style.color = 'white';
				displayNumber.innerHTML = newNumber.toString();
			}
			else if(newNumber % 5 === 0){
				fingers.style.backgroundColor = 'transparent';
				fingers.style.color = 'black';
				toes.style.backgroundColor = 'cornflowerblue';
				toes.style.color = 'white';
				displayNumber.innerHTML = newNumber.toString();	
			}
			else if(newNumber % 3 === 0){
				fingers.style.backgroundColor = 'cornflowerblue';
				fingers.style.color = 'white';
				toes.style.backgroundColor = 'transparent';
				toes.style.color = 'black';
				displayNumber.innerHTML = newNumber.toString();		
			}
			else{
				fingers.style.backgroundColor = 'transparent';
				fingers.style.color = 'black';
				toes.style.backgroundColor = 'transparent';
				toes.style.color = 'black';
				displayNumber.innerHTML = newNumber.toString();	
			}
			clearInterval(intervalId);
		}
	},1000)
}