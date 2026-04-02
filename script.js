const title = document.getElementById("title");
const text = document.getElementById("text");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let stage = 0;

const flirtStages = [
  {
    title: "To my sweet boy",
    text: "pertaining to what happened between us last january. ang funny how i thought my said so mistake before is now the best decision I made. <br><br>Im very grateful for having you in my life baby, ang biglaan pero whenever im with you i feel home and comfort at the same time, yk it kasi minsan ayaw na talaga kitang pauwiin HAHAHA.",
    yes: "kinilig ang balls"
  },
  {
    title: "To my sweet boy",
    text: "Thank you for giving me the love and efforts i never had before, I also do appreciate you working on your patience too baby and its a big W for me na youre trying hihi .<br> <br><br>I love everything about you baby, nd i'd literally risk it all for you hihi",
    yes: "kinilig ang balls"
  },
  {
    title: "to my sweet boy",
    text: "I know it took so long.. but i think its time na!",
    yes: "HANOI"
  },
  {
    title: "Lets make it official !",
    text: "I know i said my i love you na bc i cant help it kasii <br><br>pero we havent declared na we're official na soo yeah",
    yes: "HELL YEAH"
  }
];

yesBtn.addEventListener("click", () => {
  if (stage < flirtStages.length) {
    title.innerHTML = flirtStages[stage].title;
    text.innerHTML = flirtStages[stage].text;
    yesBtn.innerHTML = flirtStages[stage].yes;
    stage++;
  } else {
    document.querySelector(".card").innerHTML = `
      <h1>YAAAY</h1>
      <p>
        I MISS YOU SO MUCH BABY<br><br>
        I LOOOOVE YOUUU<br><br> -tientien
      </p>
    `;
  }
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
