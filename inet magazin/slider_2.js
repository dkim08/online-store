// Получаем ссылку на элемент с классом 'slider' и сохраняем его в переменной 'slider'
const slider = document.querySelector('.slider_2');

// Ищем все элементы с классом 'content-slider', которые являются дочерними элементами 'slider',
// а затем находим все дочерние div-элементы внутри 'content-slider' и сохраняем их в переменной 'slides'
const slides = slider.querySelectorAll('.content-slider_2 > div');

// Ищем все кнопки, находящиеся внутри элемента 'slider' и сохраняем их в переменной 'buttons'
const buttons = slider.querySelectorAll('.controlls_2 button');

// Инициализируем переменную 'currentIndex' с начальным значением 0, которая будет отслеживать текущий индекс слайда

// Функция 'showSlide' отвечает за отображение слайда с указанным индексом.
function showSlide(index) {
  // Для каждого слайда в коллекции 'slides' выполняем следующее:
  slides.forEach((slide, i) => {
    // Добавляем класс 'active', если индекс слайда равен текущему индексу 'index', в противном случае убираем этот класс
    slide.classList.toggle('active', i === index);
  });

  // Для каждой кнопки в коллекции 'buttons' выполняем следующее:
  buttons.forEach((button, i) => {
    // Добавляем класс 'active', если индекс кнопки равен текущему индексу 'index', в противном случае убираем этот класс
    button.classList.toggle('active', i === index);
  });
}

// Добавляем слушателя события 'click' для элемента 'slider'
slider.addEventListener('click', (event) => {
  // Проверяем, была ли нажата кнопка (элемент button)
  const button = event.target.closest('button');
  if (!button) return; // Если кнопка не была нажата, выходим из обработчика события

  // Проверяем, была ли нажата кнопка "prev" (предыдущий слайд)
  const isPrev = button.classList.contains('prev_2');

  // Проверяем, была ли нажата кнопка "next" (следующий слайд)
  const isNext = button.classList.contains('next_2');

  // Если была нажата кнопка "prev" или "next", обновляем текущий индекс слайда и вызываем функцию 'showSlide' с новым индексом
  if (isPrev || isNext) {
    currentIndex = (currentIndex + (isPrev ? -1 : 1) + slides.length) % slides.length;
    showSlide(currentIndex);
  }
});

// Инициализируем отображение начального слайда с текущим индексом (currentIndex)
showSlide(currentIndex);
