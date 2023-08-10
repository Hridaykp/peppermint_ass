import React from "react";
import Careers from "../pages/Career";

const Navbar = () => {
    
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://getpeppermint.co/">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active " href="https://getpeppermint.co/about-us/">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="https://getpeppermint.co/solutions/">SOLUTIONS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="https://getpeppermint.co/products/">PRODUCTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="https://getpeppermint.co/resources/">RESOURCES</a>
          </li>
          <li class="nav-item">
            <button class="nav-link active"  onClick={Careers}  >CAREERS</button>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="https://getpeppermint.co/contact-us/">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
