
import Contact from './components/contact';
import Home from './components/home';
import MyJourney from './components/myJourney';
import Navbar from './components/Navbar'; // Import the Navbar component
// import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Home/>
      <MyJourney/>
      <Skills />
      {/* <Portfolio/> */}
      <Contact/>
     
 
    </div>
  );
};

export default App;
