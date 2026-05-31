const container = document.querySelector(".floating-hearts");

const symbols = [
  "❤️",
  "🌸",
  "💖",
  "✨",
  "💕",
  "🌹"
];

function createHeart() {

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML =
    symbols[
      Math.floor(
        Math.random() * symbols.length
      )
    ];

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.animationDuration =
    6 + Math.random() * 8 + "s";

  heart.style.fontSize =
    16 + Math.random() * 20 + "px";

  heart.style.opacity =
    0.2 + Math.random() * 0.5;

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 14000);
}

for(let i = 0; i < 20; i++){
  setTimeout(createHeart, i * 300);
}

setInterval(createHeart, 800);

const cards =
document.querySelectorAll(".message-card");

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0px)";

}

});

},
{
threshold:0.15
}
);

cards.forEach(card=>{

card.style.opacity = "0";
card.style.transform =
"translateY(40px)";

card.style.transition =
"all 0.8s ease";

observer.observe(card);

});

window.addEventListener(
"load",
()=>{

document.body.style.opacity = "0";

setTimeout(()=>{

document.body.style.transition =
"opacity 1.2s ease";

document.body.style.opacity = "1";

},100);

}
);