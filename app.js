let sta = [
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \   |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
   \   |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`,
  `
  +---+
  |   |
      |
      |
      |
      |
=========
`,
];
import list from "./data.js";
let sec = document.querySelector("section");
let str = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < 26; i++) {
  let btn = document.createElement("button");
  btn.innerText = str[i].toUpperCase();
  sec.appendChild(btn);
}
let ran;
let life;
let p = document.querySelector("p");
let pre = document.querySelector("pre");
let res = [];
function game() {
  ran = list[Math.floor(Math.random() * list.length)].toUpperCase();
  res = [];
  for (let i = 0; i < ran.length; i++) {
    res.push("_");
  }
  p.innerHTML = res.join(" ");
  p.style.color = "#000";
  life = 6;
  pre.innerHTML = `<b><pre>${sta[6]}</pre></b>`;
  console.log(ran);
}
game();

let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    btns[i].disabled = true;
    let bool = true;
    for (let j = 0; j < ran.length; j++) {
      if (btns[i].innerText == ran[j]) {
        res[j] = ran[j];
        bool = false;
      }
    }
    if (bool) {
      life -= 1;
      pre.innerHTML = `<b><pre>${sta[life]}</pre></b>`;
    }
    p.innerHTML = res.join(" ");
    document.querySelector("span").innerText = life;

    if (res.includes("_") && life == 0) {
      pre.innerHTML = `<b><pre>${sta[0]}</pre></b>`;
      p.innerHTML = ran.split("").join(" ");
      p.style.color = "red";
      // p.style.letterSpacing = "10px";
      setTimeout(function () {
        alert("You Lose");
        game();
        document.querySelector("span").innerText = 6;
      }, 2100);

      // p.innerText = "";
      for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
      }
    } else if (!res.includes("_")) {
      pre.innerHTML = `<b><pre>${sta[life]}</pre></b>`;
      p.style.color = "green";
      setTimeout(function () {
        alert("You Win");
        p.innerText = "";
        game();
      }, 500);
      document.querySelector("span").innerText = 6;
      for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
      }
    }
  });
}
