import React from "react";

function Home() {
  return (
    <div>
      <h1 className="header">About</h1>
      <p id="home" className="home">This is a simple example of a React app that uses React Router. The app has three routes: Home, 10 Gallon Tanks, 20 Gallon Tanks, and 30 Gallon Tanks. The app also has a header that displays a hamburger menu. When the user clicks on the hamburger menu, the menu expands to show the links to the different routes. The app uses the BrowserRouter, Route, Routes, and Link components from React Router. The app also uses the useState hook to manage the state of the menu. The app uses CSS to style the components.</p>
    </div>
  );
}

export default Home;