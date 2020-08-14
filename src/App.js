import React from "react";
import "./App.css";
import Hero from './components/Hero'
import image1 from './components/image/spring.jpg'
import image2 from './components/image/summer.jpg'
import image3 from './components/image/fall.jpg'
import image4 from './components/image/winter.jpg'
import Banner from './components/Banner'

function App() {
  return (
    <div>
      hello
      <Hero img={image1}>  <Banner title='spring' color='blue' /></Hero>

      <Hero img={image2}>  <Banner title='summer' /></Hero>
      <Hero>  <Banner title='fall' /></Hero>
      <Hero img={image4} >  <Banner title='winter' /></Hero>

    </div>
  );
}

export default App;