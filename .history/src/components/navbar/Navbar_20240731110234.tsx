import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <div className="logo ">
          <img className="w-36" src="/image-removebg-preview.png" alt="" />
          <span>SuperUser</span>
          <span className="font-extralight">beta</span>
        </div>
      </Link>
      <div className="icons">
        <div className="notifications">
          <img src="/public/notifications.svg " alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://yt3.googleusercontent.com/nrefx19H-uS5kwx-tSsTGju0hPqNj9VLRgo4elKpMbsrsnsDLHGqmV4wb_04Sp8voDPJVTppYg=s176-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span>Jane</span>
        </div>
        <button>
          <Link to="./home">Login</Link>
          <Link className="" to="/">
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
