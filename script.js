// Learn More Scroll

document.getElementById("learnMoreBtn")
.addEventListener("click", () => {

  document.getElementById("about")
  .scrollIntoView({
    behavior: "smooth"
  });

});


// Popup

const popup = document.getElementById("popup");
const joinBtn = document.getElementById("joinBtn");
const closePopup = document.getElementById("closePopup");

joinBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === popup){
    popup.style.display = "none";
  }
});


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});
