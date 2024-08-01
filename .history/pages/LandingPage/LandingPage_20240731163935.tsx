import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/footer";

const LandingPage = () => {
  return (
    <div className="landing-page ">
      <div className="bg"> </div>
      <Navbar />
      <div className="landing-text">
        <h1>
          Streamline enterprise operations: manage users, products, and invoices
          while tracking company analytics
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
