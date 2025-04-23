
import Contact from './components/contact';
import Home from './components/home';
import MyJourney from './components/myJourney';
import Navbar from './components/Navbar'; // Import the Navbar component
import Skills from './components/skills';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Home/>
      <MyJourney/>
      <Skills />
      <Contact/>

      
 
    </div>
  );
};

export default App;
