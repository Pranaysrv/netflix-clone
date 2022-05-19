import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Request";
import "./Banner.css";
//useState is a piece of code that runs on a specific conduition
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
      // console.log(Math.floor(Math.random() * request.data.results.length - 1));
      // from beginning of the array to the end minus one
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className="banner"
      // {/*BackgroundImage*/}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
         "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
       )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        {/*Title*/}

        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/*DivTwoButtons*/}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/*Description*/}
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="bottom__fadeBottom" />
      {/* console.log(movie?.backdrop_path); */}
    </header>
  );
}

export default Banner;
