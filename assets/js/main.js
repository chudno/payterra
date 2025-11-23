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

});