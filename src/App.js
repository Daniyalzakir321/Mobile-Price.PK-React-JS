import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/" component={Header}>
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route exact path="/About" component={About} >
            <About />
          </Route>

          <Route exact path="/Blogs" component={Blogs} >
            <Blogs />
          </Route>

          <Route exact path="/Contact" component={Contact} >
            <Contact />
          </Route>

        </Switch>
      </Router >

     </div >
  );
}

export default App;
