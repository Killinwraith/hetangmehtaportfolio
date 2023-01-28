var r = document.querySelector('.siteHeader');

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

console.log(viewportHeight, viewportWidth);

r.style.setProperty('--width', 'viewportWidth');