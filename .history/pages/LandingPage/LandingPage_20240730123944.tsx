import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="bg"></div>
      <Navbar />
      <div className="landing-text">
        <h1>
          One Tool to Manage <span>Customer</span>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
