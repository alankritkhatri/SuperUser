// git remote add origin https://github.com/alankritkhatri/SuperAdmin.git
// git branch -M main
// git push -u origin main
import Home from "../pages/home/Home";
import Users from "../pages/users/users";
import Products from "../pages/products/products";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "../pages/login/login";
import "./styles/global.css";
// Import June SDK:
import { AnalyticsBrowser } from "@june-so/analytics-next";

// Near the entrypoint of your app, instantiate AnalyticsBrowser:
let analytics = AnalyticsBrowser.load({
  writeKey: "gkoBrQQfSQxNA0aN",
});

function App() {
  analytics.identify("USER_ID", {
    email: "a@example.com",
    // Optional
    name: "ab",
    avatar: "https://avatar.com/asd809sdhoif9as10nc29.png",
    // Add anything else about the user here
  });
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainter">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
