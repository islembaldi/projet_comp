import React from "react";
import "./App.css";
import ProfilePhoto from "./component/Profile/ProfilePhoto";
import FullName from "./component/Profile/FullName";
import Address from "./component/Profile/Address";

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>

      <ProfilePhoto />
      <FullName />
      <p> @islem</p>
      <Address />
      <br />
      <br />
      <button className="animated-button"> set as Profile Picture </button>
    </div>
  );
}

export default App;
