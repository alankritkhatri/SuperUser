import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page ">
      <div className="bg"> </div>
      <Navbar />
      <div className="landing-text">
        <div className="copyline">
          <h1>Your Last User Analytics and Invoicing Dashboard</h1>
        </div>
        <Link to="/home">
          {" "}
          <button>Try Now</button>
        </Link>
        <img className="scnshot " src="/screenzy-1722425437701.png" alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
