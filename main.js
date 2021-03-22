let x = document.getElementById('ix');
let fullNav = document.getElementById('fullNav');
let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  fullNav.style.top = '0';
});
x.addEventListener('click', () => {
  fullNav.style.top = '-1520px';
});
