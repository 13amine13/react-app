import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
            <h4> company </h4>
            <ul>
                <li><a href="#"> about us</a></li>
                <li><a href="#"> privacy policy</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4> autre </h4>
        </div>
        <div class="footer-col">
            <h4> follow us </h4>
            <div class="social-links">
             <a href="#"><i class="fab fa-facebook"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
      </div>

    </div>
      <p>&copy; 2023 MyWebsite. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
