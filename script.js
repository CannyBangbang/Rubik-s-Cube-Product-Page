var x = 1;
function RotateLogo() {
  const logo = document.querySelector('#landing-img');
  console.log('spin test');
  logo.style.transform = `rotate(${120 * x}deg)`;
  x = x + 1;
}

setInterval(RotateLogo, 4000);