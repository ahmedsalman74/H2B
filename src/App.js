import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Maincontent from "./Components/Maincontent";
import chatB from "./Components/ChatBot";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Testimonial />
      {/* <Maincontent /> */}
     
       {/* <Footer /> */}
    </div>
  );
}

export default App;
