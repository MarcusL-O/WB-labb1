const cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${item}
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Ta bort</button>
        `;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = `${cart.length * 50} kr`; // Exempel: varje produkt är 50 kr
}
