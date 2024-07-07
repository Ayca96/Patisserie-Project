import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyCard from "./components/MyCard";
import MyCarousel from "./components/MyCarousel";
import About from "./components/About";
import Footer from "./components/Footer";
import Order from "./components/Order";
import Team from "./components/Team";



function App() {
  return (
    <div>
     <MyNavbar/>
     <MyCarousel/>
     <MyCard/>
     <About/>
     <Team/>
     <Order/>
     <Footer/>
     
     
    </div>
  );
}

export default App;
