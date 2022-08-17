import React from 'react';
import AboutMe from './components/AboutMe';
import Intro from "./components/Intro";
import Navbar from './components/Navbar';
import "../src/App.css"
import Service from './components/Service';
import RecentWork from './components/RecentWork';

function App() {
  return (
    <>
    <Navbar />
    <Intro />
    <AboutMe />
    <Service />
    <RecentWork />
    </>
  );
}

export default App;
