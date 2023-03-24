const adviceBtn = document.querySelector(".advice__btn");
const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice__quote");
const adviceEl = document.querySelector(".advice__text");
const url = "https://api.adviceslip.com/advice";

window.addEventListener("load", function () {
  adviceEl.classList.add("generated");
});

const generateAdvice = async function (link) {
  try {
    const res = await fetch(link);
    const data = await res.json();
    const { id, advice } = data.slip;

    adviceId.textContent = `${id}`;
    adviceText.textContent = `${advice}`;
  } catch (err) {
    console.error("Error:", err);
  }
};

adviceBtn.addEventListener("click", function () {
  adviceBtn.setAttribute("disabled", true);
  setTimeout(() => {
    adviceBtn.removeAttribute("disabled");
  }, 2000);

  adviceEl.classList.remove("generated");
  setTimeout(() => {
    adviceEl.classList.add("generated");
  }, 500);

  setTimeout(() => {
    generateAdvice(url);
  }, 300);
});
