import logoImg from "../../components/Header/react-core-concepts.png";
import { Link } from "react-router-dom";
import "../../App.css";
import './Header.css';

export default function Header() {
  return (
    <div className="mainheader bg-black shadow-md p-4 flex items-center justify-between">
      <div className="mainlogo">
        <img src={logoImg} alt="Logo" className="h-12 w-auto" />
      </div>
      <div className="menu">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white-700 hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white-700 hover:text-blue-600 transition">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/game" className="text-white-700 hover:text-blue-600 transition">
                Game
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
