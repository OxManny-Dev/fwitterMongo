import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavTabs from "./components/NavTabs";
import Navbar from './components/Navbar';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';

// You can also just do the code below
// import {
//   UserContainer,
//   SignUp,
// } from './pages';

import {
  UserContainer
} from './pages/User';

import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';

// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/search" component={Search}/>
      <Route path="/users" component={UserContainer}/>
      <Route exact path="/" component={About}/>
    </Router>
  );
}

export default App;
