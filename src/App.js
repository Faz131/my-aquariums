import Header from './components/headers.js';
import './style/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TenGallon from './routes/10gallon.js';
import ThirtyGallon from './routes/30gallon.js';
import TwentyGallon from './routes/20gallon.js';
import './style/headerStyle.css';
import Home from './routes/home.js';

function App() {
  return (
    <BrowserRouter>
      <>
      
        <Header />
    
        <div className='tanks-row'>
        <Routes>
  
          <Route path="/Home" element={<Home />} />
          <Route path="/10gallon" element={<TenGallon />} /> 
          <Route path="/20gallon" element={<TwentyGallon />} />  
          <Route path="/30gallon" element={<ThirtyGallon />} />  
        </Routes>
          </div>

        
      </>
    </BrowserRouter>
  );
}

export default App;