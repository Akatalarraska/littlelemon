import React from 'react';

const Menu = () => {
    const menuItems = [
        { id: 1, name: "Greek Salad", price: "$12.99", description: "Fresh cucumbers, tomatoes, olives, and feta cheese." },
        { id: 2, name: "Bruschetta", price: "$7.99", description: "Toasted bread topped with tomatoes, garlic, and basil." },
        { id: 3, name: "Lemon Dessert", price: "$5.99", description: "Sweet lemon cake with a citrus glaze." },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                        <p className="text-yellow-600 font-semibold mt-2">{item.price}</p>
                        <button className="bg-black text-white px-4 py-2 mt-4 rounded w-full hover:bg-gray-800">
                            Add to Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;