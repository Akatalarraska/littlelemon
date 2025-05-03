import React, { useState } from 'react';

const Reservations = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 2,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
    };

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h1 className="text-3xl font-bold mb-8 text-center">Table Reservation</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block mb-1 font-medium">Number of Guests</label>
                    <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    Reserve Table
                </button>
            </form>
        </div>
    );
};

export default Reservations;