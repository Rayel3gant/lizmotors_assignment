import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Module from './pages/Module';
import Navbar from "./components/Navbar"
import Temp from './pages/Temp';

function App() {
  return (
    <div className="App bg-[#f0f1ff]">
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/module' element={<Module/>} />
        <Route path='/temp' element={<Temp/>} />
      </Routes>
    </div>
  );
}

export default App;
