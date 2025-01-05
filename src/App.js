import Header from './components/headers';
import './style/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TenGallon from './routes/10gallon';
import ThirtyGallon from './routes/30gallon';
import TwentyGallon from './routes/20gallon';
import './style/headerStyle.css';
import Home from './routes/home';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
    
        <div className='tanks-row'>
        <Routes>
          {/* <Route 
            path="/" 
            element={
              <div>
                Home
                <Link to="/10gallon">10 Gallon Tanks</Link>
                <Link to="/20gallon">20 Gallon Tanks</Link>
                <Link to="/30gallon">30 Gallon Tanks</Link>
                </div>
                } 
                /> */}
          <Route path="/" element={<Home />} />
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