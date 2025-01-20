$(document).ready(function () {
    $('.button-login').magnificPopup({
        items: {
            src: '.login-popup',
            type: 'inline'
        },
        mainClass: 'mfp-fade',
        closeBtnInside: false, 
        showCloseBtn: false,   
        tLoading: '',     
     
    });

    $(document).on('click', '.close-popup', '', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $(document).ready(function () {
        
        setTimeout(function () {
            $('.link-social-popup').addClass('visible');
        }, 2000); 
    });
    
});

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.over-rg');
    const popup = document.querySelector('.confirm-rg');
    const buttons = document.querySelectorAll('.btn-form');

    
    setTimeout(() => {
        overlay.classList.add('visible'); 
        popup.classList.add('visible');
    }, 500); 

    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            overlay.classList.remove('visible'); 
            popup.classList.remove('visible'); 
        });
    });

    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && !e.target.closest('.btn-form')) {
            overlay.classList.remove('visible'); 
            popup.classList.remove('visible'); 
        }
    });
});

$(document).ready(function () {
    const overlay = $('.over-region');
    const regionPopup = $('.region-popup');
    let isPopupOpen = false; // Флаг для предотвращения немедленного закрытия

    // Открытие popup
    $('.switch, .no').on('click', function (e) {
        e.preventDefault();
        console.log("Открытие popup");
        overlay.fadeIn();
        isPopupOpen = true; // Устанавливаем флаг, что popup открыт
    });

    // Закрытие popup при клике на элементы .li_rg или кнопку закрытия
    $('.li_rg, #close-popup, close-popup').on('click', function (e) {
        e.preventDefault();
        console.log("Закрытие popup через элементы li_rg или close-popup");
        overlay.fadeOut();
        isPopupOpen = false; // Сбрасываем флаг
    });

    // Остановка всплытия событий внутри popup
    regionPopup.on('click', function (e) {
        e.stopPropagation();
    });

    // Закрытие popup при клике вне области popup
    $(document).on('click', function (e) {
        console.log("Клик по документу", e.target);

        // Игнорируем клик по кнопкам, связанным с popup
        if ($(e.target).closest('.region-popup, .switch, .no').length) {
            return;
        }

        if (isPopupOpen) {
            console.log("Закрытие popup при клике вне области");
            overlay.fadeOut();
            isPopupOpen = false; // Сбрасываем флаг
        }
    });
});



$(document).ready(function () {
    
    $('.graph-price').magnificPopup({
        type: 'inline', 
        closeOnContentClick: false, 
        showCloseBtn: false, 
        midClick: true,
        mainClass: 'mfp-fade',
    });

    
    $(document).on('click', '.close-slot', function (e) {
        e.preventDefault(); 
        $.magnificPopup.close(); 
    });
});

$(document).ready(function () {
    $('.zayavka').magnificPopup({
        type: 'inline',
        midClick: true, 
        closeOnContentClick: false, 
        showCloseBtn: false, 
    });

    
    $('.popup-close').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(document).ready(function () {
    $('.zayavka').magnificPopup({
        type: 'inline',
        midClick: true,
    });
});


$(document).ready(function() {
    
    $('.btn-contant').magnificPopup({
        type: 'inline',
        midClick: true, 
        closeBtnInside: true, 
        mainClass: 'mfp-fade', 
    });
});











