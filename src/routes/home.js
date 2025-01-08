import React from "react";
import '../style/rotation.css';
// import '../style/App.css';
import img1 from '../images/IMG_2341.JPEG';
import img2 from '../images/IMG_2345.JPEG';
import img3 from '../images/IMG_2392.JPEG';
import img4 from '../images/IMG_2430.JPEG';
import img5 from '../images/IMG_2565.JPEG';
import img6 from '../images/IMG_2576.JPEG';

function Home() {
  return (
    <div>
      <h1 className="header">About</h1>
      <p id="home" className="home">This is a simple example of a React app that uses React Router. The app has three routes: Home, 10 Gallon Tanks, 20 Gallon Tanks, and 30 Gallon Tanks. The app also has a header that displays a hamburger menu. When the user clicks on the hamburger menu, the menu expands to show the links to the different routes. The app uses the BrowserRouter, Route, Routes, and Link components from React Router. The app also uses the useState hook to manage the state of the menu. The app uses CSS to style the components.</p>
      <div className="image-rotation">
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
        <img src={img4} alt="Image 4" />
        <img src={img5} alt="Image 5" />
        <img src={img6} alt="Image 6" />
      </div>
    </div>
  );
}

export default Home;