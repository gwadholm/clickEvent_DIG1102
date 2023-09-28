const buttonFoo = document.getElementById("buttonFoo");
const buttonBar = document.getElementById("buttonBar");
const buttonFooBar = document.getElementById("buttonFooBar");

const main = document.querySelector("main");

buttonFoo.addEventListener('click', function(event) {
  const headerFoo = document.createElement('h3');
  main.appendChild(headerFoo);
  headerFoo.textContent = event.target.value;
})

buttonBar.addEventListener('click', function(event) {
  const headerBar = document.createElement('h3');
  main.appendChild(headerBar);
  headerBar.textContent = event.target.value;
})

buttonFooBar.addEventListener('click', function(event) {
  const headerFooBar = document.createElement('h2');
  main.appendChild(headerFooBar);
  headerFooBar.textContent = event.target.value;
})


