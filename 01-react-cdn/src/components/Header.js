import { LOGO_URL } from "../utility/constants";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utility/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus===true ? "🟢" : "🔴" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
