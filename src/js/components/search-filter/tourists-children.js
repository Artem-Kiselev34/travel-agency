const addChild = document.querySelector(".tourists-add-child");
const wrapContainer = document.querySelector(".children-wrap");

if (document.querySelector(".tourists-add-child") !== null) {

addChild.addEventListener("click", function () {
  wrapContainer.classList.toggle("is-hidden");
});
};
// ------------------------ adding and removing children --------------------------

const tourBody = document.querySelector(".tourists__body");
const boxChild = document.querySelector(".wrapper-children");
const listAges = document.querySelectorAll(".children-ages-list__item");
const childCounter = document.querySelector(".child-counter");
const count = document.querySelector("[data-count]");
const kid = document.querySelector(".kid");
const kids = document.querySelector(".kids");


listAges.forEach((item) => {
  item.addEventListener("click", (e) => {
    let creatDiv = document.createElement("div");
    creatDiv.className = "child-age";
    creatDiv.innerHTML = e.target.textContent;

    let span = document.createElement("span");
    span.className = "delete-child";
    span.innerHTML = "✕";
    creatDiv.append(span);

    let length = boxChild.querySelectorAll(".child-age").length;
    if (length > 2) {
      addChild.classList.add("is-hidden");
      count.innerHTML = length + 1;
    } else if (length >= 0) {
      childCounter.classList.remove('is-hidden');
      count.innerHTML = length + 1;
      if (length > 0) {
        kid.classList.add("is-hidden");
        kids.classList.remove("is-hidden");
      }
    }

    boxChild.append(creatDiv);

    let deleteChild = document.querySelectorAll(".delete-child");
    deleteChild.forEach((item) => {
      item.addEventListener("click", (e) => {
        addChild.classList.remove("is-hidden");
        e.stopPropagation();

        if (length > 0) {
          count.innerHTML = --length + 1;
          childCounter.classList.remove('is-hidden');
        } else if (length < 1) {
          childCounter.classList.add('is-hidden');
        }
        if (length < 1) {
          kid.classList.remove('is-hidden');
          kids.classList.add("is-hidden");
        } else if (length > 0) {
          kids.classList.remove("is-hidden");
          kid.classList.add("is-hidden");
        }
        item.parentElement.remove();
      });
      isHidden();
    });
  });
});

function isHidden() {
  wrapContainer.classList.add("is-hidden");
}
