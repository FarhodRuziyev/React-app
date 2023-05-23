import './App.css';
import Navbar from './component/Navbar/Navbar';
import Showcasetop from './component/Showcasetop';
import Koza from './component/Koza';
import Xumdon from './component/Xumdon';
import Sektion from './component/Sektion';
import Ekran from './component/Ekran';
import User from './component/User';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Showcasetop/>
        <Koza/>
        <Xumdon/>
        <Sektion/>
        <Ekran/>
        <User/> 
        <Footer/>
      </div>
    </>
  );
}

export default App;
