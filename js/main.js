$(document).ready(() => {

    // slick slider
    $('#sample-container .products').slick({
        arrows: true,
        dots: true,

    });

    //====== modal window ============
    //open request window
    $('.open-modal').click(() => {
        $('#request-container').css('display', 'flex');
    });

    //close request window
    $('#request-container').click((e) => {
        if (e.target.id === 'request-container') {
            $('#request-container').hide();
        }
    });

    ////////////
    // Для имени позволяем вводить только буквы.
    $('#reserve-name').keypress((event) => {
        let number = parseInt(event.key);
        if (!isNaN(number)) {
            event.preventDefault();
        }
    });
    // Для номера телефона позволяем вводить только цифры
    $('#reserve-phone').keypress((event) => {
        let number = parseInt(event.key);
        if (isNaN(number)) {
            event.preventDefault();
        }
    });

    /////////////////

    //Запрос с валидацией 'Заказать звонок'
    $('#request-form').submit(() => {

        let name = $('#reserve-name');
        let phone = $('#reserve-phone');

        if (name.val() && phone.val()) {
            // $('#request-sent').show();
            // $('#request-content').hide();
            // event.preventDefault();

            //Отправка запроса
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#request-sent').show();
                    $('#request-content').hide();
                },
                error: () => {
                    $('#request-container').hide();
                    alert('Ошибка бронирования')
                }
            });

        } else {
            $('#reserve-error').show();
            event.preventDefault();
        }
    });

    //Запрос с валидацией 'Вызвать замерщика'
    $('#request-form').submit(() => {

        let name = $('#name');
        let phone = $('#phone');
        let time = $('#date_and_time');

        if (name.val() && phone.val() && time.val()) {

            //Отправка запроса
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#request-sent').show();
                    $('#request-content').hide();
                },
                error: () => {
                    $('#request-container').hide();
                    alert('Ошибка бронирования')
                }
            });

        } else {
            $('#reserve-error').show();
            event.preventDefault();
        }
    });


    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
        $('body').css('overflow', 'hidden');
    });

    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
        $('body').css('overflow', 'auto');
    });

});