import React from 'react';
import './App.css';
import Nav from "./components/Nav.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;