import './App.css';
import Navbar from './myComponents/Navbar';
import Home from './myComponents/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './myComponents/Footer';
import About from './myComponents/About';
import Campus from './myComponents/Campus';
import Hostel from './myComponents/Hostel';
import AcademicPrograms from './myComponents/AcademicPrograms';
// import TextSlider from './myComponents/TextSlider';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <TextSlider /> */}
          </Route>
          <Route exact path="/about">
            <About key="about"/>
          </Route>
          <Route exact path="/academicprograms">
            <AcademicPrograms key="academicprograms"/>
          </Route>
          <Route exact path="/campus">
            <Campus key="campus"/>
          </Route>
          <Route exact path="/hostel">
            <Hostel key="hostel"/>
          </Route>
        </Switch>
        <Footer />
        {/* <TextSlider /> */}
      </Router>
    </>
  );
}

export default App;
