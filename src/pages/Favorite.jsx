import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favorite = ({
  favoriteComic,
  setFavoriteComic,
  handleFavorite,
  favoriteCharacter,
  setFavoriteCharacter,
}) => {
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
  //   console.log(favCharactersArray);
  //   console.log(favCharacters);
  const favComicsArray = JSON.parse(localStorage.getItem("favComIds") || "0");
  for (let j = 0; j < favComicsArray.length; j++) {
    let y = favComicsArray[j];
    favComics[j] = JSON.parse(localStorage.getItem([y]) || "");
  }
  //   console.log(favComics);

  return (
    <div className="favorite-section">
      {favCharacters.length > 0 ? (
        <div className="favorite-characters">
          <h1>My Favorites Heroes and Vilains from Marvel Universe</h1>
          {favCharacters.map((character) => {
            return (
              <div key={character._id}>
                <h2>{character.name}</h2>
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
                <img
                  src={
                    character.thumbnail.path +
                    "/portrait_fantastic." +
                    character.thumbnail.extension
                  }
                  alt="character"
                />
                {character.description ? (
                  <p>{character.description}</p>
                ) : (
                  <p>S.H.I.E.L.D. Classification</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h1>My Favorites Heroes and Vilains from Marvel Universe</h1>
          <p>No Heroes or Vilains in this section</p>
        </>
      )}

      {favComics.length > 0 ? (
        <div className="favorite-comics">
          <h1>My Favorites Comics from Marvel Universe</h1>
          {favComics.map((comic) => {
            return (
              <div key={comic._id}>
                <h2>{comic.name}</h2>
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
                />
                {comic.description ? (
                  <p>{comic.description}</p>
                ) : (
                  <p>S.H.I.E.L.D. Classification</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h1>My Favorites Heroes and Vilains</h1>
          <p>No Comics in this section</p>
        </>
      )}
    </div>
  );
};

export default Favorite;
