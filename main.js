let sum = 0;
let allprice = [200, 550, 4000, 23, 58, 5000, 485, 711];
for (let price of allprice) {
	sum = sum + price;
}
if (sum > 1000) {
	sum = sum * 0.05;
}
else {
	sum = 0;
}
alert("Общая скидка " + Math.floor(sum) + " у.е.");
//test