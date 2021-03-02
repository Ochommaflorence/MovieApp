import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { movieContext } from "../MovieProvider";

export const Movies = () => {
  const [
    handleOnChange,
    handleOnSubmit,
    searchTerm,
    movies,
    IMG_API,
    ,
    ,
    addFavourite,
    click,
    setClick
  ] = useContext(movieContext);

  return (
    <div>
      <header className="header1">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="search"
            className="search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map(movie => {
          const { title, poster_path, overview, vote_average, id } = movie;
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
                <button
                  className="ml-5 button2"
                  onClick={() => addFavourite(movie)}
                >
                  <i
                    className="fas fa-heart"
                    onClick={() => setClick(true)}
                    style={{ color: click && "red" }}
                  ></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const setVoteClass = vote => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
