import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader03 from "../components/Loader03";
import "../assets/style/Comic.css";

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
        setTimeout(() => {
          setData(response.data);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [comicId]);

  return isLoading ? (
    <Loader03 />
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
