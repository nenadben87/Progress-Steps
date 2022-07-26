
const prevBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBlue = document.querySelector('.progress-blue');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const circle3 = document.querySelector('.circle-3');
const circle4 = document.querySelector('.circle-4');

let currentActive = 1;

prevBtn.disabled = true;

nextBtn.addEventListener('click',goNext);
prevBtn.addEventListener('click',goPrevious);

function goNext() {
  currentActive += 1;

  if(currentActive === 2) {
    progressBlue.style.width = '25vw';
    circle2.classList.add('active');
  }

  if(currentActive === 3) {
    progressBlue.style.width = '46vw';
    circle3.classList.add('active');
  }

  if(currentActive === 4) {
    progressBlue.style.width = '68vw';
    circle4.classList.add('active');
    nextBtn.disabled = true;
  }

  if(currentActive > 1) {
    prevBtn.disabled = false;
  }
}

function goPrevious() {
  currentActive -= 1;

  if(currentActive === 3) {
    circle4.classList.remove('active');
    progressBlue.style.width = '46vw';
 }

 if(currentActive === 2) {
  circle3.classList.remove('active');
  progressBlue.style.width = '25vw';
}

if(currentActive === 1) {
  circle2.classList.remove('active');
  progressBlue.style.width = '0vw';
}

if(currentActive < 4) {
  nextBtn.disabled = false;
}

if(currentActive === 1) {
  prevBtn.disabled = true;
}
}