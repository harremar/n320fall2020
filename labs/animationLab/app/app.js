let navBar = document.getElementById("navigationBar");
TweenMax.to(navBar, { duration: 0.6, y: 100 });

let hero = document.getElementById("hero");
TweenMax.to(hero, { duration: 1.6, y: 300 });
let content = document.getElementById("content");

let message = document.getElementById("message");
let items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  TweenLite.from(items[i], {
    duration: 0.6,
    x: -100,
    alpha: 0,
    delay: i * 0.1,
  });
}

// ✅ addEventListener to all boxes
for (const item of items) {
  item.addEventListener("click", function onClick() {
    TweenMax.to(navBar, { duration: 0.6, y: -200 });
    TweenMax.to(hero, { duration: 1.6, y: -400 });
    TweenMax.to(content, { duration: 2.4, y: -2000, alpha: 0, delay: 0.3 });
    TweenMax.to(message, { duration: 1.6, x: 600, delay: 1 });
  });
  item.addEventListener("mouseover", function handleMouseOver() {
    item.style.backgroundColor = "#79dd";
    item.style.transition = ".5s ease";
    item.style.cursor = "pointer";
  });
  item.addEventListener("mouseout", function handleMouseOut() {
    item.style.backgroundColor = "#fff";
  });
}

message.addEventListener("click", function onClick() {
  TweenMax.to(message, { duration: 1.6, x: -600 });

  TweenMax.to(navBar, { duration: 0.6, y: 100, delay: 1 });

  TweenMax.to(hero, { duration: 1.6, y: 300, delay: 1 });
  TweenMax.to(content, { duration: 2.4, y: 300, alpha: 1, delay: 1.3 });
  content.style.marginTop = "0px";
  content.style.paddingTop = "50px";
});

function resetAnimation(el) {
  el.style.animation = "none";
  el.offsetHeight; /*trigger reflow */
  el.style.animation = null;
}
