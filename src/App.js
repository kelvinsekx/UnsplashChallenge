import React from "react";
import SideNavLinks from "./components/SideNavLink";
import EmptyState from "./components/EmptyState";

import TopAnchor from "./components/TopAnchor";
import {Flags} from './components/Flag'

import { createApi } from "unsplash-js";
import FaceCard from "./FaceCard";

const unsplash = createApi({
  accessKey: "MYITu_PH87BCU2-PmZccQa_jANeRJqM4ICJuE5363hw",
});

const { useState } = React;
function App() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  // tell us if error exist in fetch
  const [error, setError] = useState(false);
  // show error component whem it exist
  const displayErrorWithFetchIfItExist = () =>
    error && (
      <span style={{ color: "red" }}>
        problem fetching...check your internet
      </span>
    );

  const searchPhotos = async (e) => {
    setError(false);
    e.preventDefault();
    console.log(query);
    unsplash.search
      .getPhotos({
        query: query,
        page: 1,
      })
      .then((json) => {
        console.log(json.response);
        setPics(json.response.results);
        //clean up the query
        setQuery("");
      })
      .catch((e) => {
        console.log(e);
        setError("there is error");
      });
  };
  const MainState = pics.length === 0 ? (
    <EmptyState />
  ) : (
    pics.map((e) => <FaceCard key={e.id} photo={e} />)
  )

  return (
    <div className="flex flex-column App">
      <div className="flex flex-column flex-grow">
        <TopAnchor
          query={query}
          setQuery={setQuery}
          searchPhotos={searchPhotos}
        />

        <div id="main" className="flex flex-column">
          <div className="flex flex-row">
            <SideNav />
            <div className="flex flex-column body" style={{ gap: "2rem" }}>
              <Flags />
              {displayErrorWithFetchIfItExist()}
              <div
                className="flex flex-row align-center wrap pixer"
                style={{ gap: "3rem" }}
              >
                {MainState}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SideNav = () => (
  <div className="sidenavWrapper">
    <SideNavLinks />
  </div>
);

export default App;