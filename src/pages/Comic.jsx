import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comic = ({ favoriteComic, setFavoriteComic, handleFavorite }) => {
  const { comicId } = useParams();
  // console.log(comicId);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--f5vs5q45f4mj.code.run/comic/${comicId}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [comicId]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <section className="comic-section" key={comicId}>
        <h2>{data.title}</h2>
        <img
          src={
            data.thumbnail.path +
            "/portrait_incredible." +
            data.thumbnail.extension
          }
          alt="Marvel Comic"
        />
        {favoriteComic.includes(comicId) ? (
          <FontAwesomeIcon
            icon="heart-circle-check"
            className="check-icon"
            onClick={() => {
              handleFavorite(
                favoriteComic,
                setFavoriteComic,
                data,
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
                data,
                "favComIds"
              );
            }}
          />
        )}
        {data.description ? (
          <p>{data.description}</p>
        ) : (
          <p>WARNING - S.H.I.E.L.D Classification</p>
        )}
      </section>
    </>
  );
};

export default Comic;
