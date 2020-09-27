import React, { useEffect } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = props => {
    useEffect(() => {
      if (!props.auth)
        props.history.push("/");
    }, [props.auth, props.history]);

    return <ChildComponent {...props} />;
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};