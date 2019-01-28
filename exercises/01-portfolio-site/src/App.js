import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
             <ul>
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/aboutme/">About Me</Link>
               </li>
               <li>
                 <Link to="/skills/">Skills</Link>
               </li>
               <li>
                 <Link to="/projects/">Projects</Link>
               </li>
               <li>
                 <Link to="/contactme/">Contact Me</Link>
               </li>
             </ul>
           </nav>
           <Route path='/aboutme' component={AboutMe}/>
           <Route path='/skills' component={Skills}/>
           <Route path='/projects' component={Projects}/>
           <Route path='/contactme' component={ContactMe}/>
           <Route path='/' exact component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
