import Header from "./Components/Header";
import Content from "./Components/Content";
import Discover from "./Components/Discover";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="grid wide">
        <Header />
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
