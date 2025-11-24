document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.user-circle').forEach((el, index) => {
        el.style.zIndex = index + 2; // 1, 2, 3, ...
    });

    // Mobile menu
    var menu_burger = document.getElementById('header-menu_burger');
    if( menu_burger ){

        var menu_mobile = document.getElementById('header-menu_mobile');
        if( !menu_mobile ){
            return false;
        }

        menu_burger.addEventListener( 'click', function(){
            menu_mobile.classList.add('show');
        } );

        var menu_close = document.getElementById('header-menu_close');
        if( menu_close ){
            menu_close.addEventListener( 'click', function(){
                menu_mobile.classList.remove('show');
            } );
        }
    }

    // Получаем элементы
    const popupOverlay = document.getElementById('popupOverlay');
    const successOverlay = document.getElementById('successOverlay');
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popupForm = document.getElementById('popupForm');

    var openPopupBtns = document.querySelectorAll('.accent-btn');

    if( openPopupBtns ){
        openPopupBtns.forEach(function(item){
            item.addEventListener('click', openPopup);
        });
    }

    // Функции управления поп‑апами
    function openPopup() {
        popupOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popupOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openSuccessPopup() {
        successOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeSuccessPopup() {
        successOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Обработчики для основного поп‑апа
        //openPopupBtn.addEventListener('click', openPopup);

    // Закрытие основного поп‑апа: крестик, оверлей, Esc
        document.querySelectorAll('#popupOverlay .popup-close').forEach(btn => {
            btn.addEventListener('click', closePopup);
        });

        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                closePopup();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popupOverlay.classList.contains('show')) {
                closePopup();
            }
        });

    // Обработка отправки формы
    document.body.addEventListener('click', function(e) {
        // Проверяем, что клик был по нашей кнопке
        if (e.target.id === 'submitBtn') {
            e.preventDefault();

            // Имитация отправки
            closePopup();
            openSuccessPopup();
        }
    });
    //     popupForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //
    //         // Здесь можно добавить реальную отправку на сервер
    //         // Для примера — имитируем успешную отправку
    //
    //         closePopup();      // Закрываем форму
    //         openSuccessPopup(); // Открываем уведомление
    //     });

    // Обработчики для поп‑апа успеха

    // Закрытие по крестику
        document.querySelectorAll('#successOverlay .popup-close').forEach(btn => {
            btn.addEventListener('click', closeSuccessPopup);
        });

    // Закрытие по кнопке "Закрыть"
        const closeSuccessBtn = document.querySelector('.btn-close-success');
        if (closeSuccessBtn) {
            closeSuccessBtn.addEventListener('click', closeSuccessPopup);
        }

    // Закрытие по клику на оверлей
        successOverlay.addEventListener('click', (e) => {
            if (e.target === successOverlay) {
                closeSuccessPopup();
            }
        });

    // Закрытие по Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && successOverlay.classList.contains('show')) {
                closeSuccessPopup();
            }
        });



});