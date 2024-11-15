/* --- --- --- Imports --- --- ---*/

/* React Imports & Default Imports */
import { Link } from "react-router-dom";

/* React Icons Imports */
import { AiFillPlusSquare } from "react-icons/ai";

/* Chakra UI Imports */
import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (

  
    <Container maxW={"100vw"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }} // 22px on small screens, 28px on larger screens
          fontWeight={"bold"} // bold font weight
          textTransform={"uppercase"} // uppercase text
          textAlign={"center"} // center text
          bgGradient="linear(to-r, #ff7e5f, #feb47b)"// gradient background color
          bgClip={"text"} // clip background to text
          color={"default"}
        >

          {/* Link to the home page */}
          <Link to={"/"}>
            Product Store 🛒
          </Link>

        </Text>

        <HStack spacing={2} alignItems={"center"}>
          {/* Link to the create page */}
          <Link to={"/create"}>
            <Button backgroundColor={"#fefefe"}>
              <AiFillPlusSquare fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌚" : "🌞"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar