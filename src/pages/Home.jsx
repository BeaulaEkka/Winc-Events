import {} from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
const Home = () => {
  return (
    <div className="about-container">
      <Box position="relative" h="100vh" border="1px solid red">
        <div className="home-hero">
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="music festival"
          ></img>
        </div>

        <div className="home_hero_text">
          <h1>The World is Waiting </h1>
          <h1>Where are you?</h1>
        </div>
      </Box>

      <div className="about-text">
        <Heading className="about-welcome-text">
          {" "}
          Welcome to Winc Events!
        </Heading>
        <Text fontSize="1.1rem" mt="1.5rem">
          We are a visionary event management company located in Amsterdam!{" "}
        </Text>
        <Text>
          <br></br>
          From thrilling bungee jumping and hiking adventures to laid-back
          brunch events, we have something for all tastes and preferences. If
          you can think it , we can arrange it.{" "}
        </Text>
        <Heading mt="1rem" mb="1rem">
          What we do
        </Heading>
        <Text>
          Our events cater to families, groups of friends, and corporate teams,
          providing unforgettable experiences that are sure to create lasting
          memories. With Winc Events, you can be sure that you will always find
          an exciting event to participate in, no matter what your interests
          are.{" "}
        </Text>
      </div>

      <Box>
        <Flex
          w="100%"
          h={{ base: "30%", md: "20%", lg: "15%" }}
          bg="gray.300"
          flexDirection="row"
          flexWrap="wrap-reverse"
          mb="2rem"
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            bg="purple.400"
          >
            {" "}
            <Flex justify="center" align="center" h="100%">
              <Heading textAlign="center">Business Events</Heading>
            </Flex>
          </Box>
          <Box
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            bg="blue.400"
          >
            {" "}
            <Flex justify="center" align="center" h="100%">
              <Heading textAlign="center">Festivals</Heading>
            </Flex>
          </Box>
          <Box w={{ base: "100%", md: "50%", lg: "25%" }} h="30vh" bg="red.400">
            {" "}
            <Flex justify="center" align="center" h="100%">
              <Heading textAlign="center">Event Planing</Heading>
            </Flex>
          </Box>
          <Box
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            bg="yellow.400"
          >
            {" "}
            <Flex justify="center" align="center" h="100%">
              <Heading textAlign="center">parties</Heading>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box className="about-salesbox" m="auto" zIndex={10} w="80%">
        <Text fontSize="1.5rem">
          <br></br>Join us and let us make every moment count!
        </Text>
        <Link to="/events">
          <Button mt="2rem" colorScheme="gray" color="green">
            Book our Events
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Home;
