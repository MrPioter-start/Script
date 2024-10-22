var x = 0,
  u = 0,
  y = 0;

function enterX() {
  x = Number(prompt("Введите x: "));
  while (u !== 1 && u !== 2 && u !== 3) {
    u = Number(
      prompt(
        "Выберите по какой формуле:\n1. u = sin x\n2. u = cos x\n3. u = tg x"
      )
    );
  }
  if (u === 1) u = Math.sin(x);
  else if (u === 2) u = Math.cos(x);
  else u = Math.tan(x);
}

document.getElementById("button1").addEventListener("click", enterX);

let button2 = document.getElementById("button2");
let show = function () {
  alert(`x = ${x}\nu = ${u}`);
};
button2.addEventListener("click", show);

document.getElementById("result").addEventListener("click", function () {
  if (x !== 0 && u !== 0) {
    if (u + x > -0.5) {
      y = (Math.pow(2 * u + 1, 2) / 7) * Math.PI + x;
      alert(`u + x > -0.5\ny = ${y}`);
    } else if (-0.5 <= u + x && u + x <= Math.pow(10, -3)) {
      y = Math.pow(Math.cos(u), 2) - Math.sin(u / 3.0);
      alert(`-0.5 <= u+x && u+x <= Math.pow(10,-3)\ny = ${y}`);
    } else if (u + x > Math.pow(10, -3)) {
      y = ((Math.log10(u + x) - Math.E(x)) / 3.5) * x;
      alert(`u + x > Math.pow(10, -3)\nu = ${y}`);
    } else alert("Не подходят ваши знавчения под условия");
  } else alert("Сначала введите значения и они не должны ыть раны 0");
});
