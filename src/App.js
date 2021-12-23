import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import UseEffect from './component/UseEffect';
import UseLayoutEffect from './component/UseLayoutEffect';
import UseReducer from './component/UseReducer';
import UseRef from './component/UseRef';
import UseState from './component/UseState';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Nav></Nav>
      
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/useeffect' element={<UseEffect />}></Route>
            <Route path='/usestate' element={<UseState />}></Route>
            <Route path='/usereducer' element={<UseReducer />}></Route>
            <Route path='/useref' element={<UseRef />}></Route>
            <Route path='/uselayouteffect' element={<UseLayoutEffect />}></Route>
          </Routes>
      </Router>
    </div>
  );
}



const Home = () => {
  return (
    <h3>
      Home Page
    </h3>
  )
}


export default App;
