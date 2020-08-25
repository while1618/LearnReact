import React from "react";

const Loader = props => {
  return <div>{props.message}</div>;
}

Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
