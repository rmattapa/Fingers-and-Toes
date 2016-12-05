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