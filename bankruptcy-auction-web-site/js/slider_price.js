const sliderOne = document.getElementById("slider-1");
const sliderTwo = document.getElementById("slider-2");
const priceOne = document.getElementById("prc-min");
const priceTwo = document.getElementById("prc-max");

const minGap = 380000; // Установленный минимальный разрыв
const maxValue = 5000000; // Максимальное значение слайдера

priceOne.value = sliderOne.value;
priceTwo.value = sliderTwo.value;

function updateSliderTrack() {
    const percent1 = (sliderOne.value / maxValue) * 100;
    const percent2 = (sliderTwo.value / maxValue) * 100;
    const sliderTrack = document.querySelector(".slider-track");
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #232323 ${percent1}%, #232323 ${percent2}%, #dadae5 ${percent2}%)`;
    // Дополнительная проверка, чтобы предотвратить возможные проблемы с визуализацией в Firefox
    sliderTrack.style.transition = 'background 0.3s ease';
}


function slideOne() {
    const sliderOneValue = parseInt(sliderOne.value);
    const sliderTwoValue = parseInt(sliderTwo.value);

    if (sliderTwoValue - sliderOneValue <= minGap) {
        sliderOne.value = sliderTwoValue - minGap;
    }
    priceOne.value = sliderOne.value;
    updateSliderTrack();
}

function slideTwo() {
    const sliderOneValue = parseInt(sliderOne.value);
    const sliderTwoValue = parseInt(sliderTwo.value);

    if (sliderTwoValue - sliderOneValue <= minGap) {
        sliderTwo.value = sliderOneValue + minGap;
    }
    priceTwo.value = sliderTwo.value;
    updateSliderTrack();
}

function inputPriceOne() {
    let value = parseInt(priceOne.value);
    if (isNaN(value) || value < 0) value = 0;
    if (value > parseInt(priceTwo.value) - minGap) {
        value = parseInt(priceTwo.value) - minGap;
    }
    sliderOne.value = value;
    priceOne.value = value;
    slideOne();
}

function inputPriceTwo() {
    let value = parseInt(priceTwo.value);
    if (isNaN(value) || value > maxValue) value = maxValue;
    if (value < parseInt(priceOne.value) + minGap) {
        value = parseInt(priceOne.value) + minGap;
    }
    sliderTwo.value = value;
    priceTwo.value = value;
    slideTwo();
}


function handleClick(event) {
    if (event.target === sliderOne || event.target === sliderTwo) {
        return;
    }
    event.preventDefault(); 
}

sliderOne.addEventListener('mousedown', handleClick);
sliderTwo.addEventListener('mousedown', handleClick);



sliderOne.addEventListener("input", slideOne);
sliderTwo.addEventListener("input", slideTwo);


priceOne.addEventListener("blur", inputPriceOne); 
priceTwo.addEventListener("blur", inputPriceTwo); 


updateSliderTrack();
