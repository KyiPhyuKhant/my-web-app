
import logoImg from "../../components/Header/react-core-concepts.png";
import { Link } from "react-router-dom";
import "../../App.css";
import './Header.css';

export default function Header() {  
  return (
    <div className="mainheader">
      <div className="mainlogo">
        <img src={logoImg} alt="Logo" />
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
