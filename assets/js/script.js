//******************************DOM OBJECTS******************************
const loader = document.getElementById("splash-screen");
const navbar = document.getElementById("nav-header");
const circleElement = document.querySelector(".cursor-circle");
const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };
const speed = 0.55; // Speed factor: Between 0 and 1 (0 = smoother, 1 = instant)

//****************************EVENT LISTENERS****************************
//hide the splash screen after 2.5s
setTimeout(() => {
  loader.classList.add("hidden-splash");
}, 2500);

//when the user scrolls down 150px from the top of the document, make the navbar colored, otherwise, keep it transparent
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 150) {
    navbar.classList.add("sections-header");
  } else {
    navbar.classList.remove("sections-header");
  }
});

//get the current cursor coordinates x and y
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

//****************************FUNCTIONS**********************************
/*this function adds a circle that follows the cursor, such that:
it fisrt calculates the difference between the current x-coordinate of the mouse and the circle
then it multiplies the difference by the speed factor, which determines how quickly the circle should move towards the mouse position
*/
const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`; //Update circle element's position
  window.requestAnimationFrame(tick); //Call function on next frame
};
tick();
