import { useState } from "react";

import MenuToggle from "./MenuToggle";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLinks";
import { Link } from "@chakra-ui/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Link href="/">
        <Logo
          w="200px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
