//icons
import { FormDown } from "grommet-icons";

const FlagStyles = {
  border: "1px solid #f2f2f2",
  backgroundColor: "white",
  borderRadius: "5px",
  width: "5rem",
  height: "2rem",
  color: "rgb(56, 47, 157)",
  padding: "0.2em 0.8em",
  marginBottom: "4px",
};

const Flag = ({ elname }) => (
  <div
    className="flex flex-row  align-center justify-center"
    style={FlagStyles}
  >
    <span>{elname}</span>
    <div className="relate-icon">
      <FormDown color="rgb(56, 47, 157)" />
    </div>
  </div>
);

export const Flags = () => {
  const Styles = {
    maxHeight: "8.2rem",
    padding: "0.4em 0.5em",
  };
  return (
    <div
      className="flex flex-row justify-space-between wrap"
      style={Styles}
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
  );
};
