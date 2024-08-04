import React, { useState } from 'react';

const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
    { id: 3, name: 'Product 3', price: 15.00 },
];

const OnlineOrderingPage = () => {
    const [cart, setCart] = useState([]);
    const [checkout, setCheckout] = useState(false);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleCheckout = () => {
        setCheckout(true);
    };

    if (checkout) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Checkout</h1>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="mb-4">
                            <span>{item.name} - ${item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={() => alert('Order placed successfully!')}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Online Ordering</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded">
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-800 mb-4">${product.price.toFixed(2)}</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={handleCheckout}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default OnlineOrderingPage;
