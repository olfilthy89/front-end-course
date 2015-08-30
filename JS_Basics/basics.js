// task1
for (var number = 0; number < 301; number++) {
	console.log (number);
}

// task2
var delenie = 16;
var deleniena3 = 10 % 3;
console.log (10%3)

// task3

var number = 1;

	if (1 % 3 === 0 || 1 % 7 === 0) {
		if (1 % 3 === 0 && 1 % 7 > 0) {
			console.log('3no7 ');
		} else if (1 % 7 === 0 && 1 % 3 > 0) {
			console.log('7no3');	
		} else if (1 % 3 === 0 &&1 % 7 === 0) {
			console.log('together3-7');
		}
	} else {
		console.log('no7-3');
	}

// task4
var lenght = 10;
var height = 5;
var total = lenght*height;
console.log(total);

// task5
var lenght1 = 10;
var other = 0.5;
var lenght2 = 10;
var space = 4;
var total1 = other*(lenght1 + lenght2)*space;
console.log(total1);