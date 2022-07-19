import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="grid wide">
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
