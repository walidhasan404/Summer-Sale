const cards = document.querySelectorAll(".card");

// console.log(cards);

let titleCount = 1;
let totalPrice = 0;
for (const item of cards) {
    // console.log(item);

    item.addEventListener("click", function () {
        const title = item.querySelector('h3').innerText;
        // console.log(title.innerText);

        const price = parseFloat(item.querySelector('p').innerText);
        // console.log(price);

        const titleContainer = document.getElementById('container');
        const titles = document.createElement('p');
        titles.innerText = titleCount + '. ' + title;
        titleContainer.appendChild(titles);
        // console.log('clicked');
        titleCount++;

        // How to add total price
        totalPrice += price;
        // console.log(totalPrice);

        const buyBtn = document.getElementById('buy-btn');
        if(totalPrice >= 0){
            buyBtn.removeAttribute('disabled');
        }
        else{
            buyBtn.disabled = false;
        }

        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function(){

    const coupon = document.getElementById('input-field').value;
    const couponCode  = coupon.split(' ').join('').toUpperCase();

    if(totalPrice >= 200){
        if(couponCode === 'SELL200'){
            const discount = document.getElementById('discount');
            const discountAmmount = totalPrice * 0.2;

            discount.innerText = discountAmmount.toFixed(2);

            // Total Calculation
            const total = document.getElementById('total');
            total.innerText = (totalPrice - discountAmmount).toFixed(2);
            document.getElementById('input-field').value = '';
        }
        else{
            alert('Invalid Coupon!');
        }
    }
    else{
        alert('Spend minimum 200tk');
    }
})

function handleAction() {
    location.reload();
}