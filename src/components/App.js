import "./global-styles.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import GameInterface from "./GameInterface";
import NavBar from "./NavBar/NavBar";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Leaderboard from "./routes/Leaderboard";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Box id="load-spinner" m={2}>
          <Switch>
            <Route exact path="/" component={GameInterface} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        </Box>
      </Router>
    </>
  );
}

export default App;
