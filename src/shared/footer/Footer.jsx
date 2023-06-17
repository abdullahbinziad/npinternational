import React from "react";
import logo from "../../assets/engineer-logo-white.png";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <div>
        <footer className="p-20 w-3/4 grid justify-items-center  grid-cols-3 text-white gap-10 mx-auto">
          <div className="flex  flex-col  text-xl space-y-6">
            <img className="w-64" src={logo} alt="" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature.
            </p>
          </div>
      
          <div className="flex  flex-col  text-xl">
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="flex  flex-col text-xl">
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        
        </footer>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by NP INTERNATIONAL BD Ltd</p>
  </div>
</footer>
      </div>
    </div>
  );
};

export default Footer;
