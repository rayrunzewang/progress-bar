import './styles/main.scss';

const process = $('.process')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const circle = $('.circle')

let currentActive = 1;

prevBtn.click(function () {
  alert(currentActive)
  currentActive > 0 && currentActive--;
  console.log(circle)
  updateStyle()
});

nextBtn.click(function () {
  currentActive < circle.length && currentActive++;
  alert(currentActive)
  updateStyle()
});

function updateStyle() {
  circle.each(function(index) {
    if (index < currentActive) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  const active = $('.active');
  process.css('width', (active.length - 1)/(circle.length - 1) * 100 + '%');

  currentActive === 1 ? prevBtn.disable = true:prevBtn.disable = false;
}