const title = document.getElementById("title");
const text = document.getElementById("text");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let stage = 0;

const flirtStages = [
  {
    title: "Okay okay…",
    text: "So you’re *thinking* about it?<br><br>I like that.",
    yes: "Maybe "
  },
  {
    title: "I knew it!",
    text: "You can’t resist me. 💖",
    yes: "Yes! "
  }
];

yesBtn.addEventListener("click", () => {
  if(stage < flirtStages.length) {
    title.innerHTML = flirtStages[stage].title;
    text.innerHTML = flirtStages[stage].text;
    yesBtn.innerHTML = flirtStages[stage].yes;
    stage++;
  }
});

noBtn.addEventListener("click", () => {
  alert("Aww, maybe next time! 😢");
});

#noBtn {
  background-color: #eee;
}
