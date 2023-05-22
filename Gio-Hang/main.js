const buy1 = document.querySelector(".buy-1");
const buy2 = document.querySelector(".buy-2");
const buy3 = document.querySelector(".buy-3");

const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");

const content = document.querySelector(".container1");
const right = document.querySelector(".content .right");

// show
buy1.addEventListener("click", () => {
  item1.classList.add("active");
  item1.classList.remove("remove");
  item2.classList.add("remove");
  item3.classList.add("remove");
  content.classList.remove("container");
  right.classList.remove("remove");
});

buy2.addEventListener("click", () => {
  item2.classList.add("active");
  item2.classList.remove("remove");
  item1.classList.add("remove");
  item3.classList.add("remove");
});

buy3.addEventListener("click", () => {
  item3.classList.add("active");
  item3.classList.remove("remove");
  item2.classList.add("remove");
  item1.classList.add("remove");
});
