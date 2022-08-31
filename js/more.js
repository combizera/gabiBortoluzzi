// Script Veja Mais
const txt = document.querySelector(".txt-more");
const txtInitialHeight = txt.clientHeight;
const overflow = document.querySelector(".overflow");
const btnReadMore = document.querySelector(".toggleMore");

btnReadMore.addEventListener("click", initToggle);

function initToggle(e) {
  txt.style.maxHeight =
    e.target.dataset.state === "more"
      ? `${txt.scrollHeight}px`
      : `${txtInitialHeight}px`;

  e.target.setAttribute(
    "data-state",
    e.target.dataset.state === "more" ? "less" : "more"
  );

  e.taget.innerHTML =
    e.target.datast.state === "more" ? "Show more" : "Show Less";

  overflow.setAttribute(
    "data-state",
    e.target.dataset.state === "more" ? "visible" : "hidden"
  );
}
