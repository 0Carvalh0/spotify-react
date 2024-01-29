import "./App.css";
import Sidebar from "./side-bar/side-bar";
import Header from "./header/header";
import Footer from "./footer/footer";

function App() {
  return (
    <main className="main-container">
      <Sidebar />,
      <Header />,
      <Footer />
    </main>
  );
}

export default App;
