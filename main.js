let cartNumbers = document.querySelectorAll('.cart__number');
let priceArr = [];
for (let cartNumber of cartNumbers) {
    let price = Number(cartNumber.innerHTML);
    priceArr.push(price);
  }

let priceSum = 0;
priceArr.forEach(elem => {
    priceSum += elem;
})

let totalPriceNum = document.querySelector('.cart__totalPriceNum');
totalPriceNum.innerHTML = priceSum.toFixed(2);

function getDiscount () {
    let discount = 20/100;
    for (let cartNumber of cartNumbers) {
        let price = Number(cartNumber.innerHTML);
        let discountSum = price*discount;
        let finalPrice = price - discountSum;
        cartNumber.innerHTML = finalPrice.toFixed(2);
      }
    let totalDiscountSum = priceSum.toFixed(2)*discount;
    let finalTotalSum = priceSum.toFixed(2) - totalDiscountSum;
      totalPriceNum.innerHTML = totalDiscountSum.toFixed(2);
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', getDiscount, {once : true})





