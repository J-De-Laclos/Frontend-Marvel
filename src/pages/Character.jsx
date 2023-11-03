import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Loader02 from "../components/Loader02";

const Character = ({
  handleFavorite,
  favoriteCharacter,
  setFavoriteCharacter,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cover, setCover] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--f5vs5q45f4mj.code.run/characterId/${params.id}`
        );
        // console.log(response.data);
        setData(response.data);

        const responseCover = await axios.get(
          `https://site--backend-marvel--f5vs5q45f4mj.code.run/comics/character/${params.id}`
        );
        setCover(responseCover.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [params.id]);
  return isLoading ? (
    <Loader02 />
  ) : (
    <>
      <section className="character-section">
        <img
          src={
            data.thumbnail.path +
            "/portrait_incredible." +
            data.thumbnail.extension
          }
          alt="image"
        />

        <div>
          <h2>{data.name}</h2>
          <span className="favorite-character">
            {favoriteCharacter.includes(data._id) ? (
              <FontAwesomeIcon
                icon="heart-circle-check"
                className="check-icon"
                onClick={() => {
                  handleFavorite(
                    favoriteCharacter,
                    setFavoriteCharacter,
                    data,
                    "favCharIds"
                  );
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon="heart-circle-xmark"
                className="x-icon"
                onClick={() => {
                  handleFavorite(
                    favoriteCharacter,
                    setFavoriteCharacter,
                    data,
                    "favCharIds"
                  );
                }}
              />
            )}
          </span>
          {data.description ? (
            <p>{data.description}</p>
          ) : (
            <p>
              WARNING - The information regarding this individual has been
              classified as secret by S.H.I.E.L.D
            </p>
          )}
        </div>
      </section>
      <h2 className="find">Find me in : </h2>

      <section className="comics-from-character">
        {cover.comics.map((comic) => {
          return (
            <img
              key={comic._id}
              src={
                comic.thumbnail.path +
                "/portrait_fantastic." +
                comic.thumbnail.extension
              }
              alt="cover"
              onClick={() => navigate(`/comic/${comic._id}`)}
            />
          );
        })}
      </section>
    </>
  );
};

export default Character;
