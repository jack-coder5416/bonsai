import React from 'react';
import './Footer.css'; // Import your CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>PRODUCT</h3>
          <ul>
            <li>Proposals</li>
            <li>Contracts</li>
            <li>Invoicing</li>
            <li>Client CRM</li>
            <li>Time Tracking</li>
            <li>Task Tracking</li>
            <li>Forms</li>
            <li>Accounting</li>
            <li>Bonsai Tax</li>
            <li>Bonsai Cash</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FREE RESOURCES</h3>
          <ul>
            <li>Freelance Resources</li>
            <li>Freelance Blog by Bonsai</li>
            <li>How to Write a Contract</li>
            <li>Online Signature Maker</li>
            <li>Self-Employed Taxes Hub</li>
            <li>Self-Employed Tax Calculator</li>
            <li>Self-Employed Tax Deductions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Templates</h3>
          <ul>
            <li>Invoice Templates</li>
            <li>Proposal Templates</li>
            <li>Contract Templates</li>
            <li>Agreement Templates</li>
            <li>Scope of Work Templates</li>
            <li>Quote Templates</li>
            <li>Credit Note Templates</li>
            <li>Estimate Templates</li>
            <li>Form Templates</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>BONSAI</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Privacy policy | Legal | Affiliates | Write for Us | Comparisons</p>
      </div>
    </footer>
  );
}

export default Footer;
