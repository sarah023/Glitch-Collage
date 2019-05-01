//set up canvas
const canvasTag = document.querySelector('canvas');

canvasTag.width = window.innerWidth * 2;
canvasTag.height = window.innerHeight * 2;
canvasTag.style.width = window.innerWidth + 'px';
canvasTag.style.height = window.innerHeight + 'px';

const context = canvasTag.getContext('2d');
context.scale(2, 2);

//tweening
let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

//load src and create an image element
let i = 0;
const images = [
  'images/soap1.jpg',
  'images/soap2.jpg',
  'images/soap3.jpg',
  'images/soap4.jpg',
  'images/soap5.jpg'
].map(src => {
  const image = document.createElement('img');
  image.src = src;
  return image;
});

document.addEventListener('mousemove', event => {
  aimX = event.pageX;
  aimY = event.pageY;
  if (currentX === null) {
    currentX = event.pageX;
    currentY = event.pageY;
  }
});

canvasTag.addEventListener('click', () => {
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
});

const draw = () => {
  if (currentX) {
    if (images[i].complete) {
      context.drawImage(images[i], currentX - 100, currentY - 150, 200, 300);
    }
    currentX = currentX + (aimX - currentX) * 0.1;
    currentY = currentY + (aimY - currentY) * 0.1;
  }
  requestAnimationFrame(draw);
};
draw();
