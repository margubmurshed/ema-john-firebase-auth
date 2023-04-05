import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <>
      <nav>
        <div className="header container">
          <div>
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <ul>
            <li>
              <a href="/order">Order</a>
            </li>
            <li>
              <a href="/order-review">Order Review</a>
            </li>
            <li>
              <a href="/manage-inventory">Manage Inverntory</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
