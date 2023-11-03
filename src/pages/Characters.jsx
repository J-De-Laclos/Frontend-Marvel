import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Characters = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const nbItemsInit = [25, 50, 75, 100];
  const [nbItems, setNbItems] = useState(nbItemsInit[1]);

  const [searchCharacter, setSearchCharacter] = useState("");
  const [pageCharacter, setPageCharacter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--f5vs5q45f4mj.code.run/characters?name=${searchCharacter}&skip=${
            (pageCharacter - 1) * nbItems
          }&limit=${nbItems}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [searchCharacter, pageCharacter, nbItems]);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      {/* Faire ma recherche de Characters */}
      <section className="search-page">
        <input
          type="text"
          name="searchCharacter"
          placeholder="Marvel Universe Heroes and Vilains..."
          onChange={(event) => {
            setSearchCharacter(event.target.value);
          }}
          value={searchCharacter}
        />
        {/* Selecteur de nombre de Characters par page */}
        <select
          name="limit"
          id="limit"
          value={nbItems}
          onChange={(event) => {
            setNbItems(event.target.value);
          }}
        >
          {nbItemsInit.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </section>
      {/* Mise en place des boutons next et previous page */}
      <div className="change-pages">
        <div
          onClick={() => {
            setPageCharacter(pageCharacter - 1);
          }}
          className={pageCharacter === 1 ? `disable` : `previous`}
        >
          Previous
        </div>
        <div
          onClick={() => {
            setPageCharacter(pageCharacter + 1);
          }}
          className={
            pageCharacter === Math.ceil(data.count / data.limit)
              ? `disable`
              : `next`
          }
        >
          Next
        </div>
      </div>
      <div className="characters-section">
        {data.results.map((character) => {
          if (
            character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return null;
          } else {
            return (
              <article
                key={character._id}
                onClick={() => navigate(`/character/${character._id}`)}
              >
                <h2>{character.name}</h2>

                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt=""
                />
                {character.description ? (
                  <p>{character.description}</p>
                ) : (
                  <p>S.H.I.E.L.D. Classification</p>
                )}
              </article>
            );
          }
        })}
      </div>
    </>
  );
};

export default Characters;
