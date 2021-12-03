import { ImLocation2 } from "react-icons/im";

const FaceCard = ({ photo }) => (
  <div
    className="flex flex-row justify-center align-center face"
    style={{
      background: `url(${photo.urls.full}) top center no-repeat`,
      backgroundSize: "cover",
    }}
  >
    <div
      className="flex flex-column justify-between"
      style={{ width: "90%", height: "80%" }}
    >
      <div className="flex flex-row align-center0"style={{gap:"0.45em"}}>
        <FaceBar white="put white here"/>
        <FaceBar />
        <FaceBar />
      </div>
      <div
        className="flex flex-column"
        style={{ color: "#f2f2f2", gap: "0.6em" }}
      >
        <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>
          {photo.user.first_name}, 24
        </div>
        <div className="flex flex-row align-center" style={{ fontSize: "89%", gap:'0.5em' }}>
          <span>
            <ImLocation2 />{" "}
          </span>{" "}
          <span> Texas Nigeria</span>
        </div>
      </div>
    </div>
  </div>
);

const FaceBar = ({white = false}) => (
  <div
    className="flex flex-row"
    style={{
      backgroundColor: `${white ? 'white' : "gray"}`,
      width: "2.7rem",
      height: "0.1rem",
      marginTop: "1em",
      padding: "0.05em",
    }}
  ></div>
);

export default FaceCard;
