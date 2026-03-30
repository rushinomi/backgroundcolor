const white = document.getElementById("white");
const black = document.getElementById("black");
const gray = document.getElementById("gray");

const container = document.getElementById("container");

container.addEventListener("click", (e) => {
 document.body.style.backgroundColor = e.target.id;
 });
