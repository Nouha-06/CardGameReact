import { Box } from '@mui/material';
import * as React from 'react';
import Play from "../components/Play";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Game from "../components/Game";

export default function Janken({setMyChoice,score,myChoice,setScore}) {
    return (
        
        <Box>
          
          <Play setMyChoice={setMyChoice} />
          {/* <Switch>
            <Route path="/game">
              <Game myChoice={myChoice} score={score} setScore={setScore} />
            </Route> 
        </Switch> */}
        </Box>
    )
}

