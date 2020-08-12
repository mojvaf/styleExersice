import React from "react";
import "./App.css";
import { Button } from "./Buttons";
import { SecondButton } from "./Buttons";
import Header from "./components/Header";
import StyledHeader from './components/StyledHeader'


function App() {
  return (
    <div>
      <Header />
      hello from app
      <StyledHeader title='I am props' />
      <Button>click me</Button>
      <SecondButton>click me i'm second</SecondButton>
    </div>
  );
}

export default App;