import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  const gAuthApi = useRef(null);

  useEffect(() => {
    const onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
        signIn(gAuthApi.current.currentUser.get().getId());
      } else {
        signOut();
      }
    };

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "402178580726-9168un3bcniaink68qus0005lqv6m9h4.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        gAuthApi.current = window.gapi.auth2.getAuthInstance();

        onAuthChange(gAuthApi.current.isSignedIn.get());
        gAuthApi.current.isSignedIn.listen(onAuthChange);
      });
    });
  }, [signIn, signOut]);

  const onSignInClick = () => {
    gAuthApi.current.signIn();
  };

  const onSignOutClick = () => {
    gAuthApi.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return gButton(null, "Loading...");
    } else if (isSignedIn) {
      return gButton(onSignOutClick, "Sign Out");
    } else {
      return gButton(onSignInClick, "Sign In with Google");
    }
  };

  const gButton = (onClick, text) => {
    return (
      <button className="ui red google button" onClick={onClick}>
        <i className="google icon" />
        {text}
      </button>
    );
  }

  return (
    <div>
      {renderAuthButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
