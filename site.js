const cart = [];

// Lägg till produkt i varukorgen
function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        // Om produkten redan finns, öka kvantiteten
        existingProduct.quantity++;
    } else {
        // Lägg till ny produkt med kvantitet 1
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

// Ta bort produkt från varukorgen
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Uppdatera varukorgen
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${item.name} - ${item.price} kr x ${item.quantity}
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Ta bort</button>
        `;
        cartItems.appendChild(li);

        // Beräkna totalpriset
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `${total} kr`;
}
