import { Link } from "react-router-dom";
import "./menu.css";
import { menu } from "../../../pages/home/data";
import { AnalyticsBrowser } from "@june-so/analytics-next";
const trackClick = () => {
  let analytics = AnalyticsBrowser.load({
    writeKey: "gkoBrQQfSQxNA0aN",
  });

  analytics.track("click item", {
    browser: "chromeccdcd srce",
  });
};
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link
              className="listItem"
              onClick={trackClick}
              to="/"
              key={listitem.id}
            >
              <img src={listitem.icon} alt="" />
              <span className="listItemTitle">{listitem.title} </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
