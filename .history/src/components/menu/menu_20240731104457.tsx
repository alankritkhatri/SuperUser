import { Link } from "react-router-dom";
import "./menu.css";
import { menu } from "../../data";
import { Upcomingmenu } from "../../data";
import { useEffect } from "react";

const Menu = () => {
  const upcomingFeatureAlert = () => {
    alert(
      "Hi! This is an upcoming feature.This will be launched by next month !!"
    ); // Display an alert when the menu item is clicked
  };
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link className="listItem" to={listitem.url} key={listitem.id}>
              <img src={listitem.icon} alt="" />
              <span className="listItemTitle">{listitem.title} </span>
            </Link>
          ))}
        </div>
      ))}
      {Upcomingmenu.map((item) => (
        <button className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link className="listItem" to={listitem.url} key={listitem.id}>
              <img src={listitem.icon} alt="" />
              <span onClick={upcomingFeatureAlert} className="listItemTitle">
                {listitem.title}{" "}
              </span>
            </Link>
          ))}
        </button>
      ))}
    </div>
  );
};

export default Menu;
