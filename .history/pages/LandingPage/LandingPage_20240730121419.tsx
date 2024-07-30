import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-text">
        <h1>
          One Tool tdo Manage <span>Customer</span>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
