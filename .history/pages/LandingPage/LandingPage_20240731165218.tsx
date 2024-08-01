import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/footer";

const LandingPage = () => {
  return (
    <div className="landing-page ">
      <div className="bg"> </div>
      <Navbar />
      <div className="landing-text flex">
        <h1>Your Last User,Revenue and Invoicing Dashboard</h1>
        <h2>hi</h2>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
