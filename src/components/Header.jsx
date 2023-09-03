import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="public/vite.svg" alt="Logo Marvel univers" />
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
