import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <div className="logo ">
          <img src="/image-removebg-preview.png" alt="" />
          <span className="superuser">SuperUser</span>
          <span className="beta font-extralight">beta</span>
        </div>
      </Link>
      <div className="icons">
        <div className="user">
          <img
            src="https://yt3.googleusercontent.com/nrefx19H-uS5kwx-tSsTGju0hPqNj9VLRgo4elKpMbsrsnsDLHGqmV4wb_04Sp8voDPJVTppYg=s176-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span>Jane</span>
        </div>
        <button>
          <Link style={{ display: "none" }} to="./home">
            Login
          </Link>
        </button>

        <button>
          <Link style={{ display: "none" }} className="" to="/">
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
