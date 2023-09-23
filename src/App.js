import './App.css';
import FrontPage from './components/FrontPage';
import { Routes, Route } from "react-router-dom";
import Verification from './components/Verification';
import Success from './components/Success';

function App() {
  return (
   <>
      <Routes>
        <Route exact path=''element={<FrontPage/>}/>
        <Route exact path="/Verification" element={<Verification/>}/>
        <Route exact path="/Success" element={<Success/>}/>
        
    </Routes>
   
   </>
  );
}

export default App;
