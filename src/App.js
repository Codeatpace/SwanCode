import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './screen/Home'
import Portfolio from './screen/Portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </div>
    </Router>
    );
}

export default App;
