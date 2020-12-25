import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import {Dashboard} from './components/dashboard';
import  {addLanguage} from './components/addLanguage';
import {FetchData} from './components/fetchData';

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
            <Route exact path="/user-data" component={FetchData}/>
          </Switch>
          
          </Router>
    </div>
  );
}

export default App;
