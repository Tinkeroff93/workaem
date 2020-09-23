$(document).ready(function(){
   $('[data-i]').click(function(){
    let i = $(this).data('i');
    let inpute_1 = parseInt($('#input_1').val());
    let inpute_2 = parseInt($('#input_2').val());
    let result = '';

    switch (i) {
        case '+':
            result = inpute_1 + inpute_2
            break;
        case '-':
            result = inpute_1 - inpute_2
            break;
        case '*':
            result = inpute_1 * inpute_2
            break;
        case '/':
            result = inpute_1 / inpute_2
            break;
    }
    alert(`П1(${inpute_1}) ${i} П2(${inpute_2}) = ${result}`);
   });
});