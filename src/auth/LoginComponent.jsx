import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function LoginComponent() {
  const clientId =
    "3299070349-n8aqm9af5if97a01qf0k2l270v5gp67p.apps.googleusercontent.com";

  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);

  const handleSuccess = (res) => {
    setUser(res.profileObj);
    setLogged(true);
    console.log("logged in");
  };

  const handleFailure = (res) => {
    console.log(res);
  };

  return (
    <>
      <div id="signInButton">
        {!logged && (
          <GoogleLogin
            clientId={clientId}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            isSignedIn={true}
            cookiePolicy={"single_host_orgin"}
            theme="light"
          />
        )}

        {console.log(user)}
        {logged && (
          <div>
            <h1>{user.givenName}</h1>
            <small>{user.email}</small>
            <br />
            <img src={user.imageUrl} alt="pictures one" style={{borderRadius: 50}} />
          </div>
        )}
      </div>
    </>
  );
}

export default LoginComponent;
