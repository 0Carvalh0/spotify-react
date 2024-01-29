import "./App.css";
import "./media-queries.css";
import Sidebar from "./side-bar/side-bar";
import Header from "./header/header";
import Playlists from "./container-playlists/playlists"
import Footer from "./footer/footer";

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
