import "./App.css";
import LoginButton from "./auth/LoginComponent";
import LogoutButton from "./auth/LogoutComponent";
import { gapi } from "gapi-script";
import { useEffect } from "react";

function App() {
  const clientId =
    "3299070349-n8aqm9af5if97a01qf0k2l270v5gp67p.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: clientId, scope: "" });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
