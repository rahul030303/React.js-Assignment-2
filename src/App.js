import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import {Dashboard} from './components/dashboard';
import  {addLanguage} from './components/addLanguage';
import LazyRender from './components/lazyRender';




function App() {
  return (
    <div>
          <h1>Home Page</h1>
          <Router>
                <ul>
                <li>
                      <Link to="/dashboard">Dashboard</Link></li><br></br><br></br>
                      <li><Link to="/add-language">add languages</Link></li><br></br><br></br>
                    <li>  <Link to="/user-data">userData</Link>
                </li>
                </ul>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/add-language" component={addLanguage}/>
            <Route  path="/user-data" component={LazyRender}/>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
