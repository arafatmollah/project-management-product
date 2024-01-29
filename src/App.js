import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import Create from '../src/Pages/Create/Create'
import Login from '../src/Pages/Login/Login'
import Signup from '../src/Pages/Signup/Signup'
import Project from '../src/Pages/Project/Project'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Sidebar></Sidebar>
      <div className='container'>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Dashboard></Dashboard>
          </Route>
          <Route exact path='/create'>
            <Create></Create>
          </Route>
          <Route exact path='/project/:id'>
            <Project></Project>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/signup'>
            <Signup></Signup>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
