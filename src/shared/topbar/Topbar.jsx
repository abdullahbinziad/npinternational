import React from "react";
import { CiLocationOn, CiPhone, CiMail,CiFacebook,CiTwitter } from "react-icons/ci";

const Topbar = () => {
  return (
    <div className="w-3/4 mx-auto ">
      <div className="flex justify-between mt-2 items-center">
        <div className="flex items-center">
          <CiLocationOn /> <p>Los Angeles Gournadi, 1230 Bariasl</p>
        </div>
        <div className="flex">
          <div className="flex items-center">
           
            <CiPhone /> <p>Make a call : +1 (212) 255-5511 | </p>
          </div>
          <div className="flex items-center gap-4 ml-6">
           
            <CiFacebook /> 
            <CiTwitter /> 
            <CiMail /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
