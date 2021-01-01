import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ApplicationsPage from "./routes/ApplicationsPage/ApplicationsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ApplicationsPage />
    </div>
  );
}

export default App;
