$('.trash_wrap').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.container_items').remove();

    var sum = 0;
    $('.total').each(function () {
        var priceEach = parseInt($(this).html().replace("$", ""));
        sum = sum + priceEach;
        $('.total_all').html("$" + sum);
    });
})

$('.minus').click(function (event) {
    event.preventDefault();
    var multi = $(this).parent().find('.input_select').val();
    multi = multi - 1;
    if (multi < 1) {
        multi = 1;
    };
    $(this).parent().find('.input_select').val(multi);
    var price = parseInt($(".price").html().replace("$", ""));
    price = multi * price;
    $(this).closest('.choose_price').find('.total').html("$" + price);

    var sum = 0;
    $('.total').each(function () {
        var priceEach = parseInt($(this).html().replace("$", ""));
        sum = sum + priceEach;
        $('.total_all').html("$" + sum);
    });
});

$('.plus').click(function (event) {
    event.preventDefault();
    var multi = $(this).parent().find('.input_select').val();
    multi = parseInt(multi) + 1;
    if (multi > 100) {
        multi = 100;
    };
    $(this).parent().find('.input_select').val(multi);
    var price = parseInt($(".price").html().replace("$", ""));
    price = multi * price;
    $(this).closest('.choose_price').find('.total').html("$" + price);

    var sum = 0;
    $('.total').each(function () {
        var priceEach = parseInt($(this).html().replace("$", ""));
        sum = sum + priceEach;
        $('.total_all').html("$" + sum);
    });
});

$('.input_select').on('keydown', function (evt) {
    var key = evt.charCode || evt.keyCode || 0;
    return (key == 8 ||
        key == 9 ||
        key == 46 ||
        key == 110 ||
        key == 190 ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105));
});


$('.input_select').on('keyup', function () {
    var multi = $(this).val();
    if (multi > 100) {
        multi = 100;
    };
    $(this).val(multi);

    $(this).parent().find('.input_select').val(multi);
    var price = parseInt($(".price").html().replace("$", ""));
    price = multi * price;
    $(this).closest('.choose_price').find('.total').html("$" + price);

    var sum = 0;
    $('.total').each(function () {
        var priceEach = parseInt($(this).html().replace("$", ""));
        sum = sum + priceEach;
        $('.total_all').html("$" + sum);
    });
});

$(".delivery_choose").click(function (e) {
    e.preventDefault();
    var delivery = parseInt($(this).attr("data-price").replace("$", ""));
    $(this).closest('.delivery_block').find('.total').html("$" + delivery);

    var sum = 0;
    $('.total').each(function () {
        var priceEach = parseInt($(this).html().replace("$", ""));
        sum = sum + priceEach;
        $('.total_all').html("$" + sum);
    });
})

$('.first_color').click(function (chang) {
    chang.preventDefault();
    $(this).closest('.change_color').find('.selector_colors').addClass('active');
});

$('.option_a').click(function (ch) {
    ch.preventDefault();
    var color = $(this).attr("data-color");
    $(this).closest('.change_color').find('.first_color').css('background-color', color);
})

$(document).ready(function () {
    $('.option_a').each(function () {
        var colorFirst = $(this).closest('.change_color').find('.option_a:first-child').attr("data-color");
        $(this).closest('.change_color').find('.first_color').css('background-color', colorFirst);
        $(this).css('background-color', $(this).attr("data-color"));
    })
})

$('.color_hide_in').click(function (close) {
    close.preventDefault();
    $(this).closest('.change_color').find('.selector_colors').removeClass('active');
});
