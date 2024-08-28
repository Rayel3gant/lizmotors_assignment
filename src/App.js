import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Module from './pages/Module';
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App bg-[#f0f1ff]">
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/module' element={<Module/>} />
        
      </Routes>
    </div>
  );
}

export default App;
