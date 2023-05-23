import './App.css';
import Bottom from './components/Boottom';
import Footer from './components/Footer';
import Karusel from './components/Karusel';
import Monitor from './components/Monitor';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Showcase from './components/Showcase';
import WinMadal from './components/WinMadal';



function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Showcase/>
      <Karusel/>
      <WinMadal/>
      <Monitor/>
      <Section/>
      <Footer/>
      <Bottom/>
    </div>
    </>
  );
}

export default App;
