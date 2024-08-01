import "./LandingPage.css";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/footer";

const LandingPage = () => {
  return (
    <div className="landing-page ">
      <div className="bg"> </div>
      <Navbar />
      <div className="landing-text">
        <h1>User Revenue and Invoice Mangement Redefined.</h1>
        <h2></h2>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
