let itemCount = 0;
let totalPrice = 0;

function handleCLikCard(target) {
    ///////////
    const cartItems = document.getElementById('cart-items');
    const itemName = target.childNodes[5].innerText;
    itemCount = itemCount + 1;
    const p = document.createElement('p');
    p.innerText = itemCount + '.' + ' ' + itemName;
    cartItems.appendChild(p);
    ///////////
    const priceString = target.childNodes[7].childNodes[0].innerText;
    const price = parseFloat(priceString);
    totalPrice = totalPrice + price;
    ///////////
    const btnCoupon = document.getElementById('btn-coupon');
    const couponField = document.getElementById('coupon-field');
    const totalPriceText = document.getElementById('total-price');
    const discount = document.getElementById('discount');
    const total = document.getElementById('total');
    ///////////
    if (totalPrice >= 200) {
        btnCoupon.removeAttribute('disabled');
        btnCoupon.style.backgroundColor = '#E527B2';
        total.innerText = totalPrice;
        totalPriceText.innerText = totalPrice;
    }
    else {
        total.innerText = totalPrice;
        totalPriceText.innerText = totalPrice;
    }
    ////////////
    const btnPurchase = document.getElementById('btn-purchase');
    if (totalPrice > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.style.backgroundColor = '#E527B2';
    }
    else {
        btnPurchase.setAttribute('disabled', true);
    }
    ///////////
}
document.getElementById('btn-coupon').addEventListener('click', function () {
    const totalPriceText = document.getElementById('total-price');
    const couponField = document.getElementById('coupon-field');
    const discount = document.getElementById('discount');
    const total = document.getElementById('total');
    if (couponField.value === 'SELL200') {
        const discount01 = totalPrice / 100;
        const discount02 = discount01 * 20;
        const discount03 = totalPrice - discount02;
        totalPriceText.innerText = totalPrice;
        discount.innerText = discount02.toFixed(2);
        total.innerText = discount03;
        couponField.value = '';
    }
    else{
        alert('Please insert valid coupon');
    }
    ///////////
});
document.getElementById('go-home').addEventListener('click', function(){
    window.location.href = 'index.html'
}); ///////////