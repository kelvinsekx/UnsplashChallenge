import React from "react";
//icons
import { FormDown } from "grommet-icons";
import SideNavLinks from "./components/SideNavLink";
import EmptyState from "./components/EmptyState";

import TopAnchor from "./components/TopAnchor";

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

  return (
    <div className="flex flex-row App">
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
              <div
                className="flex flex-row justify-space-between wrap"
                style={{ maxHeight: "8.2rem" }}
              >
                {[
                  "World",
                  "Following",
                  "Popular",
                  "Post",
                  "Gender",
                  "Location",
                  "Profession",
                ].map((e) => (
                  <Flag key={e} elname={e} />
                ))}
              </div>

              <div
                className="flex flex-row align-center wrap pixer"
                style={{ gap: "3rem" }}
              >
                {displayErrorWithFetchIfItExist()}
                {pics.length === 0 ? (
                  <EmptyState />
                ) : (
                  pics.map((e) => <FaceCard key={e.id} photo={e} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Flag = ({ elname }) => (
  <div
    className="flex flex-row  align-center justify-center"
    style={{
      border: "1px solid #fff",
      backgroundColor: "white",
      borderRadius: "5px",
      width: "6rem",
      height: "2rem",
      color: "rgb(56, 47, 157)",
      padding: "0.2em 0.8em",
      marginBottom: "4px",
    }}
  >
    <span>{elname}</span>
    <div className="relate-icon">
      <FormDown color="rgb(56, 47, 157)" />
    </div>
  </div>
);

const SideNav = () => (
  <div className="sidenavWrapper">
    <SideNavLinks />
  </div>
);

export default App;
