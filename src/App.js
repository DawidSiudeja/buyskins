import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import ErrorPage from './pages/errorpage/ErrorPage'



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>

   </>
  );
}

export default App;
