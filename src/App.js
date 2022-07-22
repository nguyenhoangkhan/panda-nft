import Header from "./Components/Header";
import Content from "./Components/Content";
import Discover from "./Components/Discover";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import DetailPage from "./Components/DetailPage";

function App() {
  return (
    <div className="App">
      <div className="grid wide">
        <Header />
        <Routes>
          <Route path="home" element={<Content />} />
          <Route path="discover" element={<Discover />} />
          <Route path="detailpage">
            <Route path=":nameId" element={<DetailPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
