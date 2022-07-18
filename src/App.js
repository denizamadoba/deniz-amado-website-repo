import Nav from './components/Nav'
import Footer from './components/Footer'
import IntroStripe from './components/IntroStripe'
import ExperienceStripe from './components/ExperienceStripe'
import SkillsStripe from './components/SkillsStripe'
import AboutStripe from './components/AboutStripe'
import "./index.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" exact element= {
            <>
              <IntroStripe></IntroStripe>
              <ExperienceStripe></ExperienceStripe>
              <SkillsStripe></SkillsStripe>
              <AboutStripe></AboutStripe>
            </>
          }/>
        </Routes>
        <Footer />
      </header>
    </div>
    </Router>
  );
}

export default App;
