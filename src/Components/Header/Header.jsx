import React, { useEffect } from "react";
import images from "../../assets/images";
import Grid from "../Grid";
const Header = (props) => {
  useEffect(() => {
    const liList = document.querySelectorAll(".header-nav ul li");
    liList.forEach((li) => {
      li.onclick = (e) => {
        const liActive = document.querySelector(".header-nav ul li.active");
        liActive.classList.remove("active");
        e.target.classList.add("active");
      };
    });
  }, []);
  return (
    <div className="row">
      <Grid col={12} mdCol={12} smCol={12}>
        <div className="header-wrapper">
          <div className="header-logo">
            <img src={images.logo} alt="TikTok" />
            <p>Panda NFT</p>
          </div>
          <div className="header-nav">
            <ul>
              <li className="active">Home</li>
              <li>Discover</li>
              <li>Docs</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="header-connect">
            <a href="a">Connect Wallet</a>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Header;
