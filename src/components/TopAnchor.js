import Search from "./../Search";
import { AiFillBell } from "react-icons/ai";
import { FormDown, BladesHorizontal } from "grommet-icons";

const TopAnchor = ({ query, setQuery, searchPhotos }) => {
  return (
    <div className="flex flex-row align-center navheader">
      <div className="flex flex-row align-center nav-sub">
        <div className="brand">
          <BladesHorizontal color="rgb(56, 47, 157)" />
          <span>bluecube</span>
        </div>
        <div className="flex flex-row align-center"style={{gap:'2rem'}}>
          <Search
            onChange={(e) => setQuery(e.target.value)}
            query={query}
            searchPhotos={searchPhotos}
          />
          <Notification />
          <Avatar />
        </div>
      </div>
    </div>
  );
};

const Avatar = () => (
  <div className="flex flex-row align-center avatar">
    <div className="flex flex-row align-baseline">
      <div className="border-round" style={{ width: "2rem", height: "2rem" }}>
        <img
          src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`}
          alt="avatar"
          className="border-round"
        />
      </div>
      <div
        className="border-round"
        style={{
          width: "0.6rem",
          height: "0.6rem",
          background: "#28CC53",
          position: "relative",
          left: "-0.5em",
          border: "1px solid white",
        }}
      />
    </div>

    <div className="flex flex-row align-center">
      <span style={{ fontWeight: "600" }}>Abigail</span>
      <FormDown className="relate-icon" size="14rem" />
    </div>
  </div>
);

const Notification = () => (
  <div className="flex flex-row align-baseline">
    <AiFillBell size="2rem" color="rgb(56, 47, 157)" />
    <span className="flex flex-row align-center justify-center pin">2</span>
  </div>
);

export default TopAnchor;
