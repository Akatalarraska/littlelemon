function Footer(){
    return(
        <footer className="footer-container">
      <div className="footer-grid">
        
        {/* Doormat Navigation */}
        <div>
          <h3 className="footer-title">Doormat Navigation</h3>
          <ul className="footer-list">
            {["Home", "About", "Menu", "Reservations", "Order Online", "Login"].map((link, index) => (
              <li key={index}><a href="#" className="footer-link">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">Address</p>
          <p className="footer-text">Phone number</p>
          <p className="footer-text">Email</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="footer-title">Social Media Links</h3>
          <p className="footer-text">Address</p>
          <p className="footer-text">Phone number</p>
          <p className="footer-text">Email</p>
        </div>
      </div>
    </footer>
    )
}

export default Footer;