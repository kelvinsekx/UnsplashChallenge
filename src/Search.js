import { Search } from "grommet-icons";

const SearchComp = ({ onChange, query, onSubmit, searchPhotos }) => (
  <form
    className="flex flex-row align-center seachComp"
    onSubmit={searchPhotos}
  >
    <Search className="search-icon" />
    <input
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

export default SearchComp;
