import "./navbar.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo--wrapper">
        <a className="navbar__logo" href="#">
          <LogoIcon />
        </a>
      </div>

      <nav className="navbar__wrapper">
        <a href="#" className="navbar__nav">
          {" "}
          Features
        </a>
        <a href="#" className="navbar__nav">
          Partners
        </a>
        <a href="#" className="navbar__nav">
          Stories
        </a>
      </nav>
      <div className="navbar__button-btn">
        <button className="navbar__button">Download for free</button>
      </div>
    </div>
  );
};
