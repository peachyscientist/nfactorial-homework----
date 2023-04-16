import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header'
import { Details } from './pages/details/Details';
import Home from './pages/home/Home';
import Create from './components/create/Create';
import { Footer } from './components/footer/Footer';




const App = () => {
  return (
    <>
    
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={Details} />
          <Route exact path='/create' component={Create} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
