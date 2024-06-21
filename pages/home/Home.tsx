import "./Home.css";
import TopBox from "../../src/components/topBox/TopBox";
import ChartBox from "../../src/components/ChartBox.ts/ChartBox";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <ChartBox />
      </div>
      <div className="box box4">Box 4</div>
      <div className="box box5">
        <ChartBox />
      </div>
      <div className="box box6">
        {" "}
        <ChartBox />
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  );
};

export default Home;
