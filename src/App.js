import React from 'react';
import './App.css';
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"
import OrderOnline from './components/OrderOnline.jsx';
import ConfirmedBooking from './components/ConfirmedBooking.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import BookingForm from './components/BookingForm';

function App () {
  return (
    <div>
      <React.Fragment>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<BookingForm />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
            <Route path="/order-online" element={<OrderOnline />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;