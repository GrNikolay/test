function getRandomInRange(min, max) {
  return Math.floor(Math.random(min, max) * (max - min + 1)) + min;
}
ran = getRandomInRange(1, 9999);

if (ran > 9 && ran < 21) {
alert("Ваш баланс " + ran + " баллов");
}
else {
	let lasth = ran % 100;
	console.log(lasth);
	if (lasth > 9 && lasth < 21) {
    alert("Ваш баланс " + ran + " баллов");
	}
	else {
		let last = ran % 10;
		console.log(last);
		if (last == 0 || last > 4) {
		alert("Ваш баланс " + ran + " баллов");
		}
		if (last > 1 && last < 5) {
		alert("Ваш баланс " + ran + " балла");
		}
		if (last == 1) {
		alert("Ваш баланс " + ran + " балл");
		}
	}
}