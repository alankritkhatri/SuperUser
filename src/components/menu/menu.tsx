import { Link } from "react-router-dom";
import "./menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link className="listItem" to="/">
          <img src="home.svg" alt="" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link className="listItem" to="/profile">
          <img src="profile.svg" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Main</span>
        <Link className="listItem" to="/">
          <img src="home.svg" alt="" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link className="listItem" to="/profile">
          <img src="profile.svg" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
