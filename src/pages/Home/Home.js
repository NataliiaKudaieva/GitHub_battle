import { Link } from "react-router-dom";
import Battle from "../Battle/Battle";

const Home = () => {
  return (
    <div className="home-container">
      <h1>GitHub Battle: Battle your friends..and stuff</h1>
      <Link to="battle" className="button">
        Battle
      </Link>
    </div>
  );
};
export default Home;
