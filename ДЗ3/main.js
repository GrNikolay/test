let allplay = [74989, 74990, 84990, 62000, 58480, 61800];
alert ("Лучший игрок набрал " + Math.max.apply (Math, allplay) + " очков");

let allball = [74989, 74990, 84990, 62000, 58480, 61800];
let sred = 0;
for (var i = 0; i < 3; i++) {
  let first = Math.max.apply (Math, allball);
  let ind = allball.indexOf(Math.max.apply(Math, allball));
  sred = sred + first;
  allball.splice(ind, 1);
}
sred = sred / 3;
alert ("Средний результат лучших 3 игроков " + sred + " очков");