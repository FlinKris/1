let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Удаляем класс active у всех изображений
        if (i === index) {
            slide.classList.add('active'); // Добавляем класс active только к текущему изображению
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Если меньше 0, переходим к последнему изображению
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Если больше последнего, переходим к первому изображению
    }
    showSlide(currentSlide);
}

// Показать первое изображение при загрузке
showSlide(currentSlide);
