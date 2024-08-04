import React, { useState } from 'react';

const dresses = [
    { id: 1, name: 'Evening Gown', basePrice: 150.00, imageUrl: '/images/evening-gown.jpg' },
    { id: 2, name: 'Summer Dress', basePrice: 80.00, imageUrl: '/images/summer-dress.jpg' },
    { id: 3, name: 'Wedding Dress', basePrice: 300.00, imageUrl: '/images/wedding-dress.jpg' },
];

const customizations = [
    { id: 1, name: 'Add Embroidery', price: 20.00 },
    { id: 2, name: 'Custom Fit', price: 30.00 },
    { id: 3, name: 'Add Lace', price: 25.00 },
];

const DressCustomizationPage = () => {
    const [selectedDress, setSelectedDress] = useState(null);
    const [selectedCustomizations, setSelectedCustomizations] = useState([]);
    const [cart, setCart] = useState([]);

    const handleSelectDress = (dress) => {
        setSelectedDress(dress);
        setSelectedCustomizations([]);
    };

    const handleToggleCustomization = (customization) => {
        setSelectedCustomizations(prevState =>
            prevState.includes(customization)
                ? prevState.filter(item => item !== customization)
                : [...prevState, customization]
        );
    };

    const handleAddToCart = () => {
        const totalPrice = selectedDress.basePrice + selectedCustomizations.reduce((acc, item) => acc + item.price, 0);
        const cartItem = { ...selectedDress, customizations: selectedCustomizations, totalPrice };
        setCart([...cart, cartItem]);
        setSelectedDress(null);
        setSelectedCustomizations([]);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Customize Your Dress</h1>

            {!selectedDress ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {dresses.map(dress => (
                        <div key={dress.id} className="border p-4 rounded">
                            <img src={dress.imageUrl} alt={dress.name} className="mb-4" />
                            <h2 className="text-2xl font-semibold mb-2">{dress.name}</h2>
                            <p className="text-gray-800 mb-4">${dress.basePrice.toFixed(2)}</p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => handleSelectDress(dress)}
                            >
                                Customize
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Customize {selectedDress.name}</h2>
                    <div className="mb-6">
                        <img src={selectedDress.imageUrl} alt={selectedDress.name} className="mb-4" />
                        <p className="text-gray-800 mb-4">Base Price: ${selectedDress.basePrice.toFixed(2)}</p>
                        <h3 className="text-xl font-semibold mb-2">Select Customizations:</h3>
                        {customizations.map(customization => (
                            <div key={customization.id} className="mb-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={selectedCustomizations.includes(customization)}
                                        onChange={() => handleToggleCustomization(customization)}
                                    />
                                    <span className="ml-2">{customization.name} (+${customization.price.toFixed(2)})</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            )}

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="mb-4 border p-4 rounded">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p>Customizations:</p>
                                <ul className="ml-4">
                                    {item.customizations.map(customization => (
                                        <li key={customization.id}>{customization.name}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-800 mt-2">Total Price: ${item.totalPrice.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DressCustomizationPage;
