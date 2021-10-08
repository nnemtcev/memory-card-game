import React from "react";
import { Box, Image } from "@chakra-ui/react";

import logoImg from "./logo.png";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src={logoImg} alt="logo" />
    </Box>
  );
}
