import React from "react";
import "./App.css";
import "./media-queries.css";
import Sidebar from "./side-bar/side-bar.js";
import Header from "./header/header.js";
import Playlists from "./container-playlists/playlists.js";
import Footer from "./footer/footer.js";
// import "./clock.js";

function App() {
  return (
    <main className="main-container">
      <Sidebar />
      <Header />
      <Playlists />
      <Footer />
    </main>
  );
}

export default App;
