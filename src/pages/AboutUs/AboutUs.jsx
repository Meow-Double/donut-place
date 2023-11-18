import React from "react";

import cl from "./AboutUs.module.scss";
import Header from "./Header/Header";
import Info from "./Info/Info";
import Sponsors from "./Sponsors/Sponsors";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Info />
      <div className="inner">
        <Sponsors />
      </div>
      <div className={cl.info}>
        <img src="./img/bg-2-about.jpg" alt="" />
        <p>You can also become our sponsor, all you have to do is write to the email below. If you are not interested, we would be happy for you to check out our products. 
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
