
import Contact from './components/contact';
import Footer from './components/Footer';
import Home from './components/home';
import MyJourney from './components/myJourney';
import Navbar from './components/Navbar'; // Import the Navbar component
// import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Home/>
      <MyJourney/>
      <Skills/>
      {/* <Portfolio/> */}
      <Contact/>
      <Footer/>
     
 
    </div>
  );
};

export default App;
