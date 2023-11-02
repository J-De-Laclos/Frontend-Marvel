import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeartCircleXmark,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHeartCircleXmark, faHeartCircleCheck);

//Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Favorite from "./pages/Favorite";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // state pour stocker respectivement les personnages et les comics favoris
  const [favoriteCharacter, setFavoriteCharacter] = useState([]);

  const [favoriteComic, setFavoriteComic] = useState([]);

  //utilisation localstorage et spread op... pour initialise les states
  useEffect(() => {
    const loadFavChars = JSON.parse(localStorage.getItem("favCharIds") || "0");
    const loadFavComs = JSON.parse(localStorage.getItem("favComIds") || "0");
    if (loadFavChars !== 0) {
      setFavoriteCharacter([...loadFavChars]);
    }
    if (loadFavComs !== 0) {
      setFavoriteComic([...loadFavComs]);
    }
  }, []);

  //gérer l'ajout et la suppression
  const handleFavorite = (state, setState, data, storageName) => {
    let copyState = state;
    let addToFavorite = true;
    copyState.map((item, index) => {
      if (item === data._id) {
        copyState.splice(index, 1);
        addToFavorite = false;
      }
      return null;
    });
    if (addToFavorite) {
      copyState.push(data._id);
    }
    setState([...copyState]);
    localStorage.setItem(storageName, JSON.stringify(state));

    let storage = localStorage.getItem(data._id || "0");

    if (storage === null) {
      localStorage.setItem(data._id, JSON.stringify(data));
    } else {
      localStorage.removeItem(data._id);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route
          path="/character/:id"
          element={
            <Character
              favoriteCharacter={favoriteCharacter}
              setFavoriteCharacter={setFavoriteCharacter}
              handleFavorite={handleFavorite}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              favoriteComic={favoriteComic}
              setFavoriteComic={setFavoriteComic}
              handleFavorite={handleFavorite}
            />
          }
        />
        <Route
          path="/comic/:comicId"
          element={
            <Comic
              favoriteComic={favoriteComic}
              setFavoriteComic={setFavoriteComic}
              handleFavorite={handleFavorite}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              favoriteComic={favoriteComic}
              setFavoriteComic={setFavoriteComic}
              handleFavorite={handleFavorite}
              favoriteCharacter={favoriteCharacter}
              setFavoriteCharacter={setFavoriteCharacter}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
