import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Favorite = ({
  favoriteComic,
  setFavoriteComic,
  handleFavorite,
  favoriteCharacter,
  setFavoriteCharacter,
}) => {
  const navigate = useNavigate();

  //recup les données stock dans le localstorage
  //stockage des favori dans des tableaux
  let favCharacters = [];
  let favComics = [];

  const favCharactersArray = JSON.parse(
    localStorage.getItem("favCharIds") || "0"
  );
  for (let i = 0; i < favCharactersArray.length; i++) {
    let x = favCharactersArray[i];
    favCharacters[i] = JSON.parse(localStorage.getItem([x]) || "");
  }

  const favComicsArray = JSON.parse(localStorage.getItem("favComIds") || "[]");

  // Assure-toi que favComicsArray est un tableau
  if (Array.isArray(favComicsArray)) {
    for (let j = 0; j < favComicsArray.length; j++) {
      let y = favComicsArray[j];

      // Assure-toi que y est une clé valide
      if (y) {
        // Récupère les données du localStorage seulement si la clé est présente
        let storedData = localStorage.getItem(y);

        // Assure-toi que les données sont présentes et valides
        if (storedData) {
          favComics[j] = JSON.parse(storedData);
        } else {
          console.warn(`No data found for key ${y}`);
        }
      } else {
        console.warn(`Invalid key at index ${j}`);
      }
    }
  } else {
    console.error("Invalid data in favComIds");
  }

  // console.log(localStorage.getItem("favComIds"));
  //   console.log(favComics);

  return (
    <div className="favorite-section">
      {favCharacters.length > 0 ? (
        <div>
          <h1>My Favorites Heroes and Vilains from Marvel Universe</h1>

          {favCharacters.map((character) => {
            return (
              <section className="section-fav-char">
                <div className="favorite-characters" key={character._id}>
                  <div className="block-fav-characters">
                    <h2>{character.name}</h2>
                    <div>
                      <FontAwesomeIcon
                        icon="heart-circle-check"
                        className="check-icon"
                        onClick={() => {
                          handleFavorite(
                            favoriteCharacter,
                            setFavoriteCharacter,
                            character,
                            "favCharIds"
                          );
                        }}
                      />
                    </div>

                    <img
                      src={
                        character.thumbnail.path +
                        "/portrait_fantastic." +
                        character.thumbnail.extension
                      }
                      alt="character"
                      key={character._id}
                      onClick={() => navigate(`/character/${character._id}`)}
                    />
                  </div>

                  <div>
                    {character.description ? (
                      <p>{character.description}</p>
                    ) : (
                      <p>S.H.I.E.L.D. Classification</p>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <>
          <h1>My Favorites Heroes and Vilains from Marvel Universe</h1>
          <p className="zero-favorite">No Heroes or Vilains in this section</p>
        </>
      )}

      {favComics.length > 0 ? (
        <div>
          <h1>My Favorites Comics from Marvel Universe</h1>
          {favComics.map((comic) => {
            return (
              <div className="favorite-comics" key={comic._id}>
                <div className="block-fav-comics">
                  <h2>{comic.title}</h2>
                  <FontAwesomeIcon
                    icon="heart-circle-check"
                    className="check-icon"
                    onClick={() => {
                      handleFavorite(
                        favoriteComic,
                        setFavoriteComic,
                        comic,
                        "favComIds"
                      );
                    }}
                  />
                  <img
                    src={
                      comic.thumbnail.path +
                      "/portrait_fantastic." +
                      comic.thumbnail.extension
                    }
                    alt="comic"
                    key={comic._id}
                    onClick={() => navigate(`/comic/${comic._id}`)}
                  />
                </div>

                <div>
                  {comic.description ? (
                    <p>{comic.description}</p>
                  ) : (
                    <p>S.H.I.E.L.D. Classification</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h1>My Favorites Heroes and Vilains</h1>
          <p className="zero-favorite">No Comics in this section</p>
        </>
      )}
    </div>
  );
};

export default Favorite;
