const filter_btns = document.querySelectorAll(".filter-btn");

filter_btns.forEach ((btn) => 
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
  })
);

$(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
  });