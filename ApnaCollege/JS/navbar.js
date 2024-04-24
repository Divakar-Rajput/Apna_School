function myFunction() {
    var x = document.getElementById("menu");
    x.classList.toggle("menu");
    x.style.transition = ".3s linear";
  }

  tagButtons = document.querySelectorAll(".subnav")
  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tagButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
    });
});