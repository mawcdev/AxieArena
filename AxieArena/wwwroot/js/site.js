// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('.plus, .minus').on('click', function (e) {
    const isNegative = $(e.target).closest('.minus').is('.minus');
    console.log(isNegative);
    var isGreater = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.remaining').innerText;
    console.log(isGreater);
    const input = $(e.target).closest('.qty').find('input');
    console.log(input);
    if (input.is('input')) {
        //input[0][isNegative ? 'stepDown' : 'stepUp']()
        if (isNegative) {
            if (input[0].value > 0)
                input[0].value--;
        }
        else {
            if (input[0].value < isGreater) {
                input[0].value++;
            }
        }
    }
})

//$(document).ready(function () {
//    $('.count').prop('disabled', true);
//    $(document).on('click', '.plus', function () {
//        $('.count').val(parseInt($('.count').val()) + 1);
//    });
//    $(document).on('click', '.minus', function () {
//        $('.count').val(parseInt($('.count').val()) - 1);
//        if ($('.count').val() == 0) {
//            $('.count').val(1);
//        }
//    });
//});