const images = document.querySelectorAll('.slider_1 img');
let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  currentIndex = index;
}

document
  .querySelector('.slider_1 .controlls_1')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('prev')) {
      let index = currentIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage(index);
    } else if (event.target.classList.contains('next')) {
      let index = currentIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      showImage(index);
    }
  });

showImage(currentIndex);




