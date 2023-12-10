import "./App.css";
import Header from "./components/Header/Header";
import Join from "./components/Join Our Discord/Join";
import AboutUs from "./components/AboutUs/AboutUs";
import TheArtist from "./components/The Artist/TheArtist";
import Meet from "./components/Meet/Meet";
import RoadMap from "./components/RoadMap/RoadMap";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Join/>
      <AboutUs/>
      <TheArtist/>
      <Meet/>
      <RoadMap/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
