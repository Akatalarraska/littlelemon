import React from "react";

const BookingTable = ({ bookings }) => {
    if (bookings.length === 0) return <p>No hay reservas registradas.</p>;

    return (
        <table border="1" style={{ marginTop: "2rem", width: "100%" }}>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Nº de invitados</th>
                    <th>Ocasión</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((b, index) => (
                    <tr key={index}>
                        <td>{b.date}</td>
                        <td>{b.hour}</td>
                        <td>{b.guests}</td>
                        <td>{b.occasion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookingTable;
