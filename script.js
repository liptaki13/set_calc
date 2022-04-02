// console.log('test');

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var radius = canvas.height / 2;

// let input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let position = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];

// drawClock(ctx);
// drawLine(ctx, position);
// displaySet(position);
// cycleCalc(position);

// function zeroInput(input) {
// 	if (input[0] != 0) {
// 		var output = [];
// 		for (i = 0; i < input.length; i++) {
// 			output.push(((input[i]-input[0])+12)%12);
// 		}
// 		return output;
// 	} else {
// 		return input;
// 	}
// }

// function dozenal(num) {
// 	if (num == 11) {
// 		return `E`;
// 	} else if (num == 10) {
// 		return `X`;
// 	} else {
// 		return num;
// 	}
// }

// function decimal(num) {
// 	if (num == 'E' || num == 'e') {
// 		return 11;
// 	} else if (num == 'X' || num == 'x') {
// 		return 10;
// 	} else {
// 		return Number(num);
// 	}
// }

// function radians(r, theta) {
// 	y = Math.cos(2*Math.PI*theta/360)*r;
//     x = Math.sin(2*Math.PI*theta/360)*r;
//     return [x+300, -(y-300)];
// }

// function coordinates(x, y) {
// 	r = Math.sqrt(Math.pow((x-305), 2) + Math.pow(y-305, 2));
// 	return r;
// }

// function displaySet(set) {
// 	dummySet = [];
// 	for (i=0; i<=set.length; i++) {
// 		dummySet.push(dozenal(set[i]));
// 	}
// 	var finalSet = dummySet.join('');
// 	document.getElementById("set-display").innerHTML = finalSet;
// 	}

// function drawClock(ctx) {
// 	drawCircle(ctx, 300, 300, 200);
// 	drawNumbers(ctx, 250);
// 	drawDashes(ctx);

// 	function drawCircle(ctx, x, y, r) {
// 		ctx.strokeStyle = "#000000";
// 		ctx.beginPath();
// 		ctx.arc(x, y, r, 0, 2 * Math.PI);
// 	  	ctx.lineWidth = 5;
// 		ctx.stroke();
// 	}

// 	function drawNumbers(ctx, radius) {
// 		var ang;
// 		var num;
// 		ctx.font = "44px Arial";
// 		//ctx.fillStyle = "#52D0D3";
// 		ctx.textBaseline = "middle";
// 	  	ctx.textAlign = "center";
// 		for(num = 0; num < 12; num++){
// 			ang = num * Math.PI / 6;
// 			ctx.rotate(ang);
// 			ctx.translate(0, -radius);
// 			ctx.rotate(-ang);
// 			ctx.fillText(dozenal(num), 300, 300);
// 			ctx.rotate(ang);
// 			ctx.translate(0, radius);
// 			ctx.rotate(-ang);

// 		}
// 	}

// 	function drawDashes(ctx) {
// 		var ang;
// 		var num;
// 		var r = 200;
// 		for (num = 0; num < 12; num++) {
// 			theta = num*30;
// 			var [xpos1, ypos1] = radians(r+10, theta);
// 			var [xpos2, ypos2] = radians(r-10, theta);
// 			ctx.beginPath();
// 			ctx.strokeStyle = "#000000";
// 			ctx.lineWidth = 5;
// 			ctx.lineCap = "round";
// 			ctx.moveTo(xpos1, ypos1);
// 			ctx.lineTo(xpos2, ypos2);
// 			ctx.stroke();
// 		}
// 	}
// };

// function drawLine(ctx, tonerow) {
// 	for (j = 0; j < tonerow.length; j++) {
// 		r = 195;
// 		theta1 = tonerow[j];
// 		theta2 = tonerow[(j+1)%(tonerow.length)];
// 		var [xpos1, ypos1] = radians(r, theta1*30);
// 		var [xpos2, ypos2] = radians(r, theta2*30);
// 		ctx.beginPath();
// 		ctx.strokeStyle = "#5050FF";
// 		ctx.lineWidth = 5;
// 		ctx.lineCap = "round";
// 		ctx.moveTo(xpos1, ypos1);
// 		ctx.lineTo(xpos2, ypos2);
// 		ctx.stroke();
// 	}
// }


// // HERE


// function invert() {
// 	let inverse = [];
// 	for (let i in position) {
// 		inverse.push((12 - position[i])%12);
// 	}
// 	input = inverse;

// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	drawClock(ctx);
// 	drawLine(ctx, input);
// 	displaySet(input);

// 	position = input;
// }

// function rotateR() {
// 	let rotate = [];
// 	for (i=0 ; i<position.length ; i++) {
// 		let sex = (position[i%position.length]-position[1])+12
// 		rotate.push(sex%12);
// 	}
// 	rotate.push(rotate.shift());
// 	input = rotate;
// 	console.log(input);
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	drawClock(ctx);
// 	drawLine(ctx, input);
// 	displaySet(input);

// 	position = input;
// }

// function rotateL() {
// 	let rotate = [];
// 	for (i=0 ; i<position.length ; i++) {
// 		let sex = (position[i%position.length]-position[position.length-1]+12);
// 		rotate.push(sex%12);
// 	}
// 	rotate.unshift(rotate.pop());
// 	input = rotate;
// 	console.log(input);
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	drawClock(ctx);
// 	drawLine(ctx, input);
// 	displaySet(input);

// 	position = input;
// }

// function enterSet() {

// 	var userInput = document.getElementById("user-input").value;
// 	outputSet = [];
// 	input = userInput;
// 	for (i = 0; i < input.length; i++) {
// 		if (isNaN(parseInt(decimal(input[i]))) == false) {
// 			outputSet.push(decimal(input[i]));
// 		}
// 	}
 	
// 	input = zeroInput(outputSet); // make input into set to display

// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	drawClock(ctx);
// 	drawLine(ctx, input);
// 	displaySet(input);

// 	position = input; // update current position
// }


// function cycle() {
// 	var cycleInput = document.getElementById("cycle-input").value;
// 	let cycle = [];
// 	if (cycleInput == '') { return }; // if there is no cycle input
// 	console.log(position);
// 	console.log(cycleInput);
// 	for (i = 0; i < position.length; i++) {
// 		console.log(position[i], cycleInput[i], position[cycleInput[i]]);
// 		if (position[decimal(cycleInput[i])] == undefined) {
// 			alert("set does not cycle. consider trying one that uses all 12 pitches.");
// 			return
// 		} else {
// 			cycle.push(decimal(position[decimal(cycleInput[i])]));
// 		}
// 	}
// 	input = cycle;

// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	drawClock(ctx);
// 	drawLine(ctx, input);
// 	displaySet(input);

// 	position = input; // update current position
// }


// function cycleNotation() {
//   var output = [];
//   var array = [];
//   var allNums = [];
//   let start = null;
//   let transient = null;
//   for (i=0; i < position.length; i++) {
//     if (position[i] == input[i]) {
//       output.push([position[i]]);
//     } else if (allNums.includes(position[i]) == false) {
//       array = [];
//       start = position[i];
//       array.push(start);
//       allNums.push(start);
//       transient = input[position.indexOf(start)];
//       while (array.includes(transient) == false) {
//         array.push(transient);
//         allNums.push(transient);
//         transient = input[position.indexOf(transient)];
//       }
//       output.push(array);
//     }
//   }
//   //console.log(array);
//   return output;
// }

// cycleNotation = cycleNotation()
// var cicleDisplay = [];
// for (i=0; i < cycleNotation.length; i++) {
// 	console.log(cycleNotation[i]);
// 	if (cycleNotation[i].length > 1) {
// 		cicleDisplay += `[${cycleNotation[i]}] `
// 	}
// }

// document.getElementById("cycle-display").innerHTML = cicleDisplay;
// console.log(cicleDisplay);











var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
let speed = 1.33 //speed in seconds
var pitch = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let position = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
let lineColor = "#5050FF"; //blue line

drawClock(ctx);
drawLine(ctx, position, lineColor); 
displaySet(position);
cycleCalc(position);

function zeroInput(input) { //transpose a given set to 0 in position 1 (ie 0)
	if (input[0] != 0) {
		var output = [];
		for (i = 0; i < input.length; i++) {
			output.push(((input[i]-input[0])+12)%12);
		}
		return output;
	} else {
		return input;
	}
}
function dozenal(num) { //convert to dozenal using 'x' and 'e' for 10 and 11
	if (num == 11) {
		return `E`;
	} else if (num == 10) {
		return `X`;
	} else {
		return num;
	}
}
function decimal(num) { //convert back to using 10 and 11 for 'x' and 'e' 
	if (num == 'E' || num == 'e') {
		return 11;
	} else if (num == 'X' || num == 'x') {
		return 10;
	} else {
		return Number(num);
	}
}
function radians(r, theta) { //input radius and angle, return x and y coordinates
	y = Math.cos(2*Math.PI*theta/360)*r;
  x = Math.sin(2*Math.PI*theta/360)*r;
  return [x+300, -(y-300)];
}
function coordinates(x, y) { //input x and y coordinates, return distance from 300, 300
	r = Math.sqrt(Math.pow((x-300), 2) + Math.pow(y-300, 2));
	return r;
}


function cycleCalc(set) { //check if numbers are chromatic
  var output = [];
  var array = [];
  var allNums = [];
  var cycleDisplay = [];
  var transient = null;
  for (i=0; i < set.length; i++) {
    if (set[set[i]] == undefined) {
      return;
   	}
    if (set[i] == i) {
      output.push([i]);
    } else if (allNums.includes(set[i]) == false) {
      array = [];
      transient = set[i];
      while (array.includes(transient) == false) {
        array.push(transient);
        allNums.push(transient);
        transient = set[transient];
      }
      output.push(array);
    }
  }
	for (i=0; i < output.length; i++) {
		if (output[i].length > 1) {
			cycleDisplay += `[${output[i]}] `
		}
	}
	document.getElementById("cycle-display").innerHTML = cycleDisplay;
	return output;
}

function displaySet(set) { // displays set position in bottom div
	setset = [];
	for (i=0; i < set.length; i++) {
		// setset.push(dozenal(set[i])); // numbers
		setset.push(pitch[set[i]]); // pitches
	}
	var finalSet = setset.join(' ');
	document.getElementById("set-display").innerHTML = finalSet;		
}

function drawClock(ctx) { // drawing the circle, dashes, and numbers on the clock
	drawCircle(ctx, 300, 300, 200);
	drawNumbers(ctx, 250);
	drawDashes(ctx);

	function drawCircle(ctx, x, y, r) {
		ctx.strokeStyle = "#000000";
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
	  ctx.lineWidth = 5;
		ctx.stroke();
	}

	function drawNumbers(ctx, radius) {
		var ang;
		var num;
		ctx.font = "48px Arial";
		ctx.fillStyle = "#E200D3"; // text color
		ctx.textBaseline = "middle";
	  ctx.textAlign = "center";
		for(num = 0; num < 12; num++){
			ang = num * Math.PI / 6;
			ctx.rotate(ang);
			ctx.translate(0, -radius);
			ctx.rotate(-ang);
			//ctx.fillText(dozenal(num), 300, 300);
			ctx.fillText(pitch[num], 300, 300);
			ctx.fillText
			ctx.rotate(ang);
			ctx.translate(0, radius);
			ctx.rotate(-ang);

		}
	}

	function drawDashes(ctx) {
		var ang;
		var num;
		var rad = 200;
		for (num = 0; num < 12; num++) {
			theta = num*30;
			var [xpos1, ypos1] = radians(rad+10, theta);
			var [xpos2, ypos2] = radians(rad-10, theta);
			ctx.beginPath();
			ctx.strokeStyle = "#000000";
			ctx.lineWidth = 5;
			ctx.lineCap = "round";
			ctx.moveTo(xpos1, ypos1);
			ctx.lineTo(xpos2, ypos2);
			ctx.stroke();
		}
	}
};

function drawLine(ctx, tonerow, color) {
	for (j = 0; j < tonerow.length; j++) {
		var r = 195;
		theta1 = tonerow[j];
		theta2 = tonerow[(j+1)%(tonerow.length)];
		var [xpos1, ypos1] = radians(r, theta1*30);
		var [xpos2, ypos2] = radians(r, theta2*30);
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 5;
		ctx.lineCap = "round";
		ctx.moveTo(xpos1, ypos1);
		ctx.lineTo(xpos2, ypos2);
		ctx.stroke();
	}
}

function enterSet() {

	var userInput = document.getElementById("user-input").value;
	outputSet = [];
	input = userInput;
	for (i = 0; i < input.length; i++) {
		if (isNaN(parseInt(decimal(input[i]))) == false) {
			outputSet.push(decimal(input[i]));
		}
	}
 	
	input = zeroInput(outputSet); // make input into set to display

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawClock(ctx);
	drawLine(ctx, input, lineColor); //blue line
	//animateLine();
	//setTimeout(() => {displaySet(input), cycleCalc(input)}, speed*1000);
	displaySet(input) 
	cycleCalc(input)
	position = input; // update current position
}



function invert() {
	let inverse = [];
	for (let i in position) {
		inverse.push((12 - position[i])%12);
	}
	input = inverse;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawClock(ctx);
	drawLine(ctx, input, lineColor);
	animateLine();
	setTimeout(() => {displaySet(input), cycleCalc(input)}, speed*1000);
	position = input;
}

function rotateL() {
	let rotate = [];
	for (i=0 ; i<position.length ; i++) {
		let sex = (position[i%position.length]-position[position.length-1]+12);
		rotate.push(sex%12);
	}
	input = rotate;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawClock(ctx);
	drawLine(ctx, input, lineColor);
	animateLine();
	input.unshift(input.pop());
	setTimeout(() => {displaySet(input), cycleCalc(input)}, speed*1000);
	position = input;
}

function rotateR() {
	let rotate = [];
	for (i=0 ; i<position.length ; i++) {
		let sex = (position[i%position.length]-position[1])+12
		rotate.push(sex%12);
	}
	input = rotate;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawClock(ctx);
	drawLine(ctx, input, lineColor);
	animateLine();
	input.push(input.shift());
	setTimeout(() => {displaySet(input)}, speed*1000);
	position = input;
}

function cycle() {
	var cycleInput = document.getElementById("cycle-input").value;
	let cycle = [];
	if (cycleInput == '') { return }; // if there is no cycle input
	for (i = 0; i < position.length; i++) {
		if (position[decimal(cycleInput[i])] == undefined) {
			alert("set does not cycle. consider trying one that uses all 12 pitches.");
			return
		} else {
			cycle.push(decimal(position[decimal(cycleInput[i])]));
		}
	}
	input = cycle;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawClock(ctx);
	drawLine(ctx, input, lineColor);
	animateLine();
	setTimeout(() => {displaySet(input), cycleCalc(input)}, speed*1000);
	position = input; // update current position
}

function Line(num1, num2, num3, num4) {	
	this.radius = 195;
	this.speed = speed;
	this.ax1 = radians(this.radius, num1*30)[0]
	this.ay1 = radians(this.radius, num1*30)[1]
	this.ax2 = radians(this.radius, num2*30)[0]
	this.ay2 = radians(this.radius, num2*30)[1]
	this.axs = (radians(this.radius, num2*30)[0]-radians(this.radius, num1*30)[0])/(this.speed*60)
	this.ays = (radians(this.radius, num2*30)[1]-radians(this.radius, num1*30)[1])/(this.speed*60)

	this.bx1 = radians(this.radius, num3*30)[0]
	this.by1 = radians(this.radius, num3*30)[1]
	this.bx2 = radians(this.radius, num4*30)[0]
	this.by2 = radians(this.radius, num4*30)[1]
	this.bxs = (radians(this.radius, num4*30)[0]-radians(this.radius, num3*30)[0])/(this.speed*60)
	this.bys = (radians(this.radius, num4*30)[1]-radians(this.radius, num3*30)[1])/(this.speed*60)

	this.draw = function() {
		ctx.beginPath();
		ctx.moveTo(this.ax1, this.ay1);
		ctx.lineTo(this.bx1, this.by1);
		ctx.strokeStyle = "#5050FF";
		ctx.lineWidth = 5;
		ctx.lineCap = "round";
		ctx.stroke();
	}

	this.update = function() {
		if (coordinates(this.ax1, this.ay1) > 195.1) {
			ctx.beginPath();
			ctx.moveTo(this.ax2, this.ay2);
			ctx.lineTo(this.bx2, this.by2);
			ctx.strokeStyle = "#5050FF";
			ctx.lineWidth = 5;
			ctx.lineCap = "round";
			ctx.stroke();
		} else if (coordinates(this.bx1, this.by1) > 195.1) {
			ctx.beginPath();
			ctx.moveTo(this.ax2, this.ay2);
			ctx.lineTo(this.bx2, this.by2);
			ctx.strokeStyle = "#5050FF";
			ctx.lineWidth = 5;
			ctx.lineCap = "round";
			ctx.stroke();
		} else {
			this.ax1 += this.axs;
			this.ay1 += this.ays;
			this.bx1 += this.bxs;
			this.by1 += this.bys;
			this.draw();
		}
	}
}

function animateLine() {
	var linesArray = [];
	for (i = 0; i < position.length; i++) {
		linesArray.push(new Line(position[i], input[i], position[(i+1)%position.length], input[(i+1)%position.length]));
	};

	function animate() {
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawClock(ctx);
		//drawCycle(position);
		for (i = 0; i < linesArray.length; i++) {
			linesArray[i].update();
		}
	}
	animate()
}

function drawCycle(set) {
	let cycles = cycleCalc(set);
	for (i=0; i<cycles.length; i++) {
		cycles = cycles.filter(cycle => cycle.length > 1);
	}
	for (i=0; i<cycles.length; i++) {
		drawLine(ctx, cycles[i], "#FFC900"); //cycle line colors contrast the tonerow line
	}
}



















