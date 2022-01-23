import React, { useState } from "react";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import GameCard from "./components/GameCard";
import SignUp from "./components/SignUp";
import Janken from "./pages/janken";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
      <Header score={score} />
        <Switch>
          
           <Route exact path="/">
            <Janken setMyChoice={setMyChoice} score={score} myChoice={myChoice}></Janken>
          </Route> 
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
          <Route path="/game/signUp">
            <SignUp />
          </Route>
          <Route path="/game/CardGame">
            <GameCard />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
