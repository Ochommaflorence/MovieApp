import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import { Movies } from "./Components/Pages/Movies";
import Favourite from "./Components/Pages/Favourite";
import { MovieProvider } from "./Components/MovieProvider";
import MovieDetails from "./Components/Pages/MovieDetails";
import Footer from "./Components/Footer";
// import ScrollToTop from '../ScrollToTop';

function App() {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/movies">
            <Movies />
          </Route>

          <Route path="/favourite">
            <Favourite />
          </Route>

          <Route path="/movieDetails/:id">
            <MovieDetails />
          </Route>
        </Switch>
        <Footer />/
      </div>
    </MovieProvider>
  );
}

export default App;
