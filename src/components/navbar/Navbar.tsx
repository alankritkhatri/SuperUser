import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>Super Admin</span>
        </div>
      </Link>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />

        <div className="notifications">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://yt3.googleusercontent.com/nrefx19H-uS5kwx-tSsTGju0hPqNj9VLRgo4elKpMbsrsnsDLHGqmV4wb_04Sp8voDPJVTppYg=s176-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
