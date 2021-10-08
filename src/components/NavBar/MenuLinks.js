import React from "react";
import { Stack, Box } from "@chakra-ui/react";

import MenuItem from "./MenuItem";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem color="#000" colorScheme="blackAlpha" to="/">
          Home
        </MenuItem>
        <MenuItem color="#000" to="/leaderboard">
          Leaderboard
        </MenuItem>
        <MenuItem color="#000" to="/privacy-policy">
          Privacy Policy
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
