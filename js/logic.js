const cards = document.querySelectorAll('.card')
const cartList = document.getElementById('customer-products-list')
const purchaseBtn = document.querySelector('.make-purchase-btn')
const cart = document.getElementById('cart')
const purchase = cart.childNodes[5]
const couponApplyBtn = cart.childNodes[1].childNodes[5]

let totalPrice = 0;
let discount = 0;
let total = 0;


for (const card of cards) {
    card.addEventListener('click', function () {
        const productName = card.childNodes[3].childNodes[3].textContent
        const productPriceString = card.childNodes[3].childNodes[5].childNodes[0].textContent
        const productPrice = parseFloat(productPriceString)
        const totalField = document.getElementById('total-payable-amount')
        const totalPriceField = document.getElementById('total-price')

        totalPrice += productPrice
        totalField.innerText =totalPrice
        totalPriceField.innerText = totalPrice

        if (totalPrice != 0) {
            purchase.removeAttribute('disabled')
            purchase.classList.remove('bg-slate-500')

            purchase.classList.add('bg-[#E527B2]')
        }
        if (totalPrice >= 200) {
            couponApplyBtn.removeAttribute('disabled')
            couponApplyBtn.classList.remove('bg-slate-500')

            couponApplyBtn.classList.add('bg-[#E527B2]')
        }
        const newListItemName = document.createElement('li')
        newListItemName.classList.add('font-bold')
        newListItemName.innerHTML = `
        <span class="font-bold">${productName}</span>
        `;
        cartList.appendChild(newListItemName)


    })
}

const applyBtn = document.getElementById('coupon-apply-btn')
applyBtn.addEventListener('click',function(){
    discount =0;
    total =0;
    const coupon = document.getElementById('coupon')
    const discountField = document.getElementById('discount-amount')
    const totalField = document.getElementById('total-payable-amount')
    let couponCode= coupon.value

    if(couponCode === "SELL200"){
        discount = (20/100)*totalPrice
        total = totalPrice - discount
        discountField.innerText = discount
        totalField.innerText =total
        coupon.value ="";
    }
    else{
        coupon.value ="";
        alert("NOT A VALID COUPON CODE")
    }

})

    function goHome(){
        location.reload()
}