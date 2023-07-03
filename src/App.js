import './App.css';
import Home from './routes_component/Home'
import Login from './routes_component/Login';
import Registration from './routes_component/Registeration'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/new_registration' Component={Registration}/>
          <Route path='/login' Component={Login}/>
          <Route exact path='/' Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
