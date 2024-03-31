let button = document.querySelector(".button");
let tlo = document.querySelector(".strona");
let header = document.querySelector(".strona__header");
let list = document.querySelector(".list");
let container = document.querySelector(".container");
let button2 = document.querySelector(".button");

button.addEventListener("click", () => {
    tlo.classList.toggle("strona--dark");
        tlo.classList.toggle("strona__header");
        header.classList.toggle("header--dark");
        header.classList.toggle("header");
        list.classList.toggle("list--dark");
        list.classList.toggle("list");
        container.classList.toggle("container--dark");
        container.classList.toggle("container");
        button2.classList.toggle("button--dark");
        button2.classList.toggle("section__button");
        footer.classList.toggle("footer--dark");
        footer.classList.toggle("footer");
        button.innerText = button.innerText === "Włącz jasny motyw" ? "Włącz ciemny motyw" : "Włącz jasny motyw";
})