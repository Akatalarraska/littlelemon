import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking">
            <div className="confirmation-card">
                <h2>✅ Your reservation has been confirmed!</h2>
                <p>We look forward to serving you at Little Lemon.</p>
                <Link to="/" className="back-home-btn">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};


export default ConfirmedBooking;