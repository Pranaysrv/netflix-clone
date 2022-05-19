// 98032ed6a477d0530cc8aec884023c83

import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow // defaluts to true when not assigned
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
      <h1 className="desx">
        This netflix clone is developed by{" "}
        <a href="https://raj577.github.io" target="_blank">
          r
        </a>{" "}
        using tmdb movie api and react
      </h1> */}
    </div>
  );
}

export default App;
