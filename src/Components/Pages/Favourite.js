import React, { useContext } from "react";
import { movieContext } from "../MovieProvider";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [, , , , IMG_API, favourite] = useContext(movieContext);
  // console.log({favourite});
  const setVoteClass = vote => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <>
      <h1
        style={{ marginTop: "7rem", color: "orange" }}
        className="text-center"
      >
        {" "}
        FAVOURITES
      </h1>
      <div className="movie-container">
        {favourite.map(favouriteItem => {
          const {
            title,
            poster_path,
            overview,
            vote_average,
            id
          } = favouriteItem;
          return (
            <div className="movie" key={id}>
              <img src={IMG_API + poster_path} alt={title} />
              <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>
                  {" "}
                  {vote_average}
                </span>
              </div>

              <div className="movie-over">
                <h2>overview:</h2>
                <p>{overview}</p>
                <Link
                  to={`/movieDetails/${id}`}
                  className="btn btn-outline-warning mr-3 button1"
                >
                  Readmore
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favourite;
