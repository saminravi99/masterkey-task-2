import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compnents/Home/Home';
import NavBar from './compnents/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
     <Routes>
       <Route
          path="/"
          element={<Home />}
       ></Route>
     </Routes>
    </div>
  );
}

export default App;
