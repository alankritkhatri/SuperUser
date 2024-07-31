import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/footer";
const LandingPage = () => {
  return (
    <div className="landing-page ">
      <div className="bg"> </div>
      <Navbar logout="none" />
      <div className="landing-text">
        <h1>One Tool to Manage Customers</h1>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
