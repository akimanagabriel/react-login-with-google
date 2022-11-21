import React from "react";
import { GoogleLogout } from "react-google-login";

function LogoutComponent() {
  const clientId =
    "3299070349-n8aqm9af5if97a01qf0k2l270v5gp67p.apps.googleusercontent.com";
  const handleLogout = (res) => {console.log(res)};

  return (
    <>
      <div id="signOutButton">
        <GoogleLogout clientId={clientId} onLogoutSuccess={handleLogout} />
      </div>
    </>
  );
}

export default LogoutComponent;
