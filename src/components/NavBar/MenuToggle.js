import React from "react";
import { Box } from "@chakra-ui/react";
import { GrClose, GrMenu } from "react-icons/gr";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <GrClose /> : <GrMenu />}
    </Box>
  );
};

export default MenuToggle;
