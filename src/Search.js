import { Search as SearchIcon } from "grommet-icons";
import "./components/search.css";

const SearchComp = ({ onChange, query, onSubmit, searchPhotos }) => (
  <form
    className="flex flex-row align-center seachComp"
    style={Styles.searchcomponent}
    onSubmit={searchPhotos}
  >
    <SearchIcon className="search-icon" />
    <input
      style={Styles.input}
      type="text"
      name="search"
      onChange={onChange}
      value={query}
      placeholder={`Try "face" or "cities"`}
    />
    <button
      className="flex flex-row align-center justify-center button"
      type="submit"
      onSubmit={onSubmit}
    >
      Search
    </button>
  </form>
);

const Styles = {
  searchcomponent: {
    width: "80%",
    height: "3rem",
    padding: "0 0 0 0.6em",
    gap: "1em",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid #f2f2f2",
  },
  input: {
    // flexGrow: "1",
    height: "90%",
    width:'70%',
    border: "none",
    borderRadius: "0.5em",
    padding: "0 1em",
  },
};
export default SearchComp;
