let btn = document.querySelector('.btn');
let form = document.forms.form;
let number = form.elements.number;
let squareNumber = form.elements.square_number;
let cleanBtn = document.querySelector('.btn_clean');

function getSquareNumber () {
    event.preventDefault();
let square = Number(number.value)**2;
    squareNumber.value = square;
}

function cleanFields () {
    number.value = '';
    squareNumber.value = '';

}

btn.addEventListener('click', getSquareNumber);
cleanBtn.addEventListener('click', cleanFields);