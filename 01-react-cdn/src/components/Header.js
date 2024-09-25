import { LOGO_URL } from "../utility/constants";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utility/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header flex justify-between shadow-lg mb-2 p-2">
      <div className="logo-container">
        <img
          className="w-20"
          src= {LOGO_URL}
          alt=""
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus===true ? "🟢" : "🔴" }
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
