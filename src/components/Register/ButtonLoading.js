import React from "react";
import "./Register.scss";
import LinearProgress from "@material-ui/core/LinearProgress";

const Buttons = ({ onClick, title, loading, className }) => {
  if (loading) {
    return <LinearProgress className="lodings" />;
  }
  return (
    <button
      variant="contained"
      type="submit"
      className={className}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Buttons;
