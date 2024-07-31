import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/footer";
const LandingPage = () => {
  return (
    <div className="landing-page flex-col">
      <div className="bg"> </div>
      <Navbar />
      <div className="landing-text">
        <h1>
          One Tool to Manage <span>Customer</span>
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
