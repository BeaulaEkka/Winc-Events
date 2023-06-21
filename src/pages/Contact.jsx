import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img
          src="https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="music festival"
        ></img>
      </div>
      <div className="about-text">
        <Flex
          flexDirection={["column", "row"]}
          flexWrap="wrap"
          justifyContent={"space-between"}
          gap={"2rem"}
        >
          <Box>
            <Heading className="about-welcome-text"> Adress</Heading>
            <Text
              mt="1rem"
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              Address: Blue Street 123 <Text>1234 AB Mocktown</Text>
              <Text>The Netherlands</Text>
            </Text>
          </Box>

          <Box>
            <Heading color="black">Contact</Heading>{" "}
            <Text
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              <Text mt="1rem">+31 (0)12 34 56 789</Text>
              info@mockwebsite.nl
              <Text>Mocktown 9876XC</Text>
            </Text>
          </Box>

          <Box>
            <Heading color="black">Info</Heading>{" "}
            <Text
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              <Text mt="1rem">Chamber of Commerce (KvK) </Text>
              <Text> VAT number NL: 1234.56.789.B01 </Text>
            </Text>
          </Box>
        </Flex>

        <Heading mt="5rem" color="black">
          Join us and let us make every moment count!
        </Heading>

        <div className="about-salesbox">
          <Heading>The World is waiting.</Heading>{" "}
          <Heading>Where are you?</Heading>
          <Link to="/events">
            <Button mt="2rem" colorScheme="gray" color="green">
              Book our Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
