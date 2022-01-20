import './App.css'
import {Route ,  Switch  , Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>My Articles</h1>
        {/* <a  href="/">Home </a>
        <a href="/About">About </a>
        <a href="/Contact">Contact </a> */}

        <Link to="/">Home </Link>
        <Link to="/About">About </Link>
        <Link to="/Contact">Contact </Link>
      </nav>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/About">
        <About/>
      </Route>
      <Route path="/Contact">
        <Contact/>
      </Route>
      </Switch>
    </div>
  );
}

export default App
