import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Loader04 from "../components/Loader04";
import "../assets/style/Comics.css";

const Comics = ({ favoriteComic, setFavoriteComic, handleFavorite }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const nbItemsInit = [25, 50, 75, 100];
  const [nbItems, setNbItems] = useState(nbItemsInit[1]);

  const [searchComic, setSearchComic] = useState("");
  const [pageComic, setPageComic] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--f5vs5q45f4mj.code.run/comics?title=${searchComic}&skip=${
            (pageComic - 1) * nbItems
          }&limit=${nbItems}`
        );
        // console.log(response.data);
        setTimeout(() => {
          setData(response.data);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [searchComic, pageComic, nbItems]);

  return isLoading ? (
    <Loader04 />
  ) : (
    <>
      {/* Faire ma recherche de Comics */}
      <section className="search-page">
        <input
          type="text"
          name="searchComic"
          placeholder="Marvel Universe Comics..."
          onChange={(event) => {
            setSearchComic(event.target.value);
          }}
          value={searchComic}
        />

        {/* Selecteur de nombre de Comics par page */}
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
            setPageComic(pageComic - 1);
          }}
          className={pageComic === 1 ? `disable` : `previous`}
        >
          Previous
        </div>
        <div
          onClick={() => {
            setPageComic(pageComic + 1);
          }}
          className={
            pageComic === Math.ceil(data.count / data.limit)
              ? `disable`
              : `next`
          }
        >
          Next
        </div>
      </div>

      {/* Mise en place des Comics */}
      <section className="comics-section">
        {data.results.map((comic) => {
          if (
            comic.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return null;
          } else {
            return (
              <article key={comic._id}>
                <h2>{comic.title}</h2>

                <img
                  src={
                    comic.thumbnail.path +
                    "/portrait_uncanny." +
                    comic.thumbnail.extension
                  }
                  alt="cover"
                  onClick={() => navigate(`/comic/${comic._id}`)}
                />

                {comic.description ? (
                  <p>{comic.description}</p>
                ) : (
                  <p>WARNING - S.H.I.E.L.D Classification</p>
                )}
                {favoriteComic.includes(comic._id) ? (
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
                ) : (
                  <FontAwesomeIcon
                    icon="heart-circle-xmark"
                    className="x-icon"
                    onClick={() => {
                      handleFavorite(
                        favoriteComic,
                        setFavoriteComic,
                        comic,
                        "favComIds"
                      );
                    }}
                  />
                )}
              </article>
            );
          }
        })}
      </section>

      <div className="change-pages">
        <div
          onClick={() => {
            setPageComic(pageComic - 1);
          }}
          className={pageComic === 1 ? `disable` : `previous`}
        >
          Previous
        </div>

        <div
          style={{
            color: "whitesmoke",
            fontFamily: "Marvel",
            fontSize: "20px",
          }}
        >
          <span>
            Page{" "}
            <input
              style={{
                color: "whitesmoke",
                textAlign: "center",
                fontSize: "20px",
              }}
              type="number"
              min="1"
              max={Math.ceil(data.count / data.limit)}
              value={pageComic}
              onChange={(e) => {
                const value = e.target.value;
                setPageComic(
                  value > 0
                    ? Math.min(value, Math.ceil(data.count / data.limit))
                    : 1
                );
              }}
            />
            / {Math.ceil(data.count / data.limit)}
          </span>
        </div>

        <div
          onClick={() => {
            setPageComic(pageComic + 1);
          }}
          className={
            pageComic === Math.ceil(data.count / data.limit)
              ? `disable`
              : `next`
          }
        >
          Next
        </div>
      </div>
    </>
  );
};

export default Comics;
