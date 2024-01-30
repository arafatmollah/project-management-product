import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// styles
import './App.css'

// pages & components
import Dashboard from './Pages/Dashboard/Dashboard'
import Create from './Pages/Create/Create'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Project from './Pages/Project/Project'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import OnlineUsers from './Components/OnlineUsers'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/project/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" /> }
                {!user && <Login /> }
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" /> }
                {!user && <Signup /> }
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers></OnlineUsers>}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App