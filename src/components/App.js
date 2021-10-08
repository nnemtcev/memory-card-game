import "./global-styles.css";

import React from "react";

import GameInterface from "./GameInterface";
import NavBar from "./NavBar/NavBar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box id="load-spinner" m={2}>
      <NavBar />
      <GameInterface />
    </Box>
  );
}

export default App;
