import Home from "../pages/home/Home";
import Users from "../pages/users/users";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "../pages/login/login";
import "./styles/global.css";
import Product from "../pages/product/Product";
import UserPage from "../pages/UserPage/UserPage";
import ProductsPage from "../pages/products/ProductsPage";
import Invoices from "../pages/Invoices/Invoices";
import LandingPage from "../pages/LandingPage/LandingPage";
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="bg"></div>
        <Navbar />
        <div className="container">
          <div className="menuContainter">
            <Menu />
          </div>
          <div className="contentContainer m-auto">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Product />,
        },
        {
          path: "users/:id",
          element: <UserPage />,
        },
        {
          path: "products/:id",
          element: <ProductsPage />,
        },
        {
          path: "invoices",
          element: <Invoices />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
