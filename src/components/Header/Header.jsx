import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div className="header container">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/order-review">Order Review</Link>
            </li>
            <li>
              <Link to="/manage-inventory">Manage Inverntory</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
