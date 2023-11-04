import fullhero from "../assets/images/fullhero03.jpg";
import { useNavigate } from "react-router-dom";
import "../assets/style/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      <img
        src={fullhero}
        alt="profil des héros marvel"
        onClick={() => navigate("/characters")}
      />
    </section>
  );
};

export default Home;
