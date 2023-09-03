import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GCIcTubh-eZHBmhWDiKo5sBX5AkAR1FWmA&usqp=CAU"
          alt="Logo Marvel "
        />
      </Link>
      <nav>
        <Link to="/characters" className="header-link">
          <span>Characters</span>
        </Link>
        <Link to="/comics" className="header-link">
          <span>Comics</span>
        </Link>
        <Link to="/favorite" className="header-link">
          <span>My Favorite</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
