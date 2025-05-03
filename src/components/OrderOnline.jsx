import React, { useState } from 'react';

const OrderOnline = () => {
    const [cart, setCart] = useState([]);

    const menuItems = [
        { id: 1, name: "Greek Salad", price: 12.99 },
        { id: 2, name: "Bruschetta", price: 7.99 },
        { id: 3, name: "Lemon Dessert", price: 5.99 },
    ];

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Order Online</h1>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Menú */}
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {menuItems.map((item) => (
                            <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                                <button 
                                    onClick={() => addToCart(item)}
                                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                                >
                                    Add +
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carrito */}
                <div className="md:w-1/3 border rounded-lg p-4">
                    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <ul className="space-y-2">
                                {cart.map((item, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span>{item.name}</span>
                                        <span>${item.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t mt-4 pt-4 font-bold">
                                Total: ${total.toFixed(2)}
                            </div>
                            <button className="bg-yellow-500 text-black px-4 py-2 mt-4 rounded w-full hover:bg-yellow-600">
                                Checkout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderOnline;