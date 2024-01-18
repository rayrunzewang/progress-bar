import './styles/main.scss';

const progressBar = $('.progress-bar')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const circle = $('.circle')

let currentActive = 1;

prevBtn.click(function () {
  currentActive > 1 && currentActive--;
  console.log(circle)
  updateStyle()
});

nextBtn.click(function () {
  currentActive < circle.length && currentActive++;
  updateStyle()
});

function updateStyle() {
  circle.each(function (index) {
    if (index < currentActive) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  const active = $('.active');
  progressBar.css('width', (active.length - 1) / (circle.length - 1) * 100 + '%');

  if (currentActive === 1) {
    prevBtn.addClass('disabled')
    prevBtn.prop("disabled", true)
  } else {
    prevBtn.removeClass('disabled')
    prevBtn.prop("disabled", false)
  }

  if (currentActive === 4) {
    nextBtn.addClass('disabled') 
    nextBtn.prop("disabled", true)
  } else {
    nextBtn.removeClass('disabled')
    nextBtn.prop("disabled", false)
  }
}