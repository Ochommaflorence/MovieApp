import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";


const MovieDetails = () => {

  const [post, setPost] = useState({
    title: "",
    vote_average: "",
    poster_path: ""
    
  });
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=452e28efbbf103395b3f0a542473366d&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPost(data);
      });
  }, [id]);


 
  return (
    <section className="content-wrapper text-center">
    <div className="row">
    <div className="col-md-6 mb-5">
       <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} 
       alt="movie" 
       className="img-fluid"
       style={{height:"600px" , width:"700px"}}
       />
      </div>
      <div className="col-md-6 content">
      <h1>{post.title}</h1>
       <p>{post.overview}</p> 
       <h5>{post.release_date} <span className="ml-3">{post.vote_count}</span></h5>
      <p>{post.popularity}</p>
      <Link to="/movies" className="btn btn-outline-warning mb-3">Go To Movies</Link>
       </div>
       </div>
    </section>
  );
};

export default MovieDetails;
