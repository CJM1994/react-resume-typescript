import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import ME from "../../assets/me.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Connor Mullin</h1>
        <h5 className="text-light">Full-Stack Developer</h5>

        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
