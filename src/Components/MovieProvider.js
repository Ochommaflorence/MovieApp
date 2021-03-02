import React, { createContext, useState, useEffect } from "react";

export const movieContext = createContext();

export const MovieProvider = props => {
  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=452e28efbbf103395b3f0a542473366d&page=1";

  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=452e28efbbf103395b3f0a542473366d&query=";

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = API => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        //  console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = e => {
    setSearchTerm(e.target.value);
  };

  // onclick of changing colors for the add button
  const [click, setClick] = useState(false);

  // adding movies to favourites
  const [favourite, setFavourite] = useState([]);

  // Saving data to localStorage
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("movies"));

    if (movieFavourites) {
      setFavourite(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = items => {
    localStorage.setItem("movies", JSON.stringify(items));
  };

  // Add to cart function
  const addFavourite = movie => {
    const newFavouriteList = [...favourite, movie];
    setFavourite(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <movieContext.Provider
      value={[
        handleOnChange,
        handleOnSubmit,
        searchTerm,
        movies,
        IMG_API,
        favourite,
        setFavourite,
        addFavourite,
        click,
        setClick
      ]}
    >
      {props.children}
    </movieContext.Provider>
  );
};
