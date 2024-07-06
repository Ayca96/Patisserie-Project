import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyCard from "./components/MyCard";
import MyCarousel from "./components/MyCarousel";
import About from "./components/About";


function App() {
  return (
    <div>
     <MyNavbar/>
     <MyCarousel/>
     <MyCard/>
     <About/>
    </div>
  );
}

export default App;
