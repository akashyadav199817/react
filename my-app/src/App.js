import './App.css';
import Header from './components/header'
import Oldzak from './components/Welcome'
import Login from './components/Login'
import Sidebar from './components/sidebar'
import Hello from './Middlecontent'
import About from './About'
import Contact from './Contact'
import { Route, Switch } from 'react-router-dom'
import { Component } from 'react';

class App extends Component{
  
  render(){
    return(
      <>
      <Header/>
        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login} />
          <Route path="/about" component={About}/>
          <Route path="/" component={Hello}/>
        </Switch>
       <Oldzak/>
      </>
    );
  }
} 

export default App;
