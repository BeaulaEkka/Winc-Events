import { Button, Heading, Text } from "@chakra-ui/react";
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
        <Heading className="about-welcome-text"> Contact Information</Heading>
        <Text
          mt="1.5rem"
          color="gray.600"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        >
          Address: Blue Street 123 <Text>1234 AB Mocktown</Text>
          <Text>The Netherlands</Text>
          <Heading mt="2rem">Contact :</Heading>{" "}
          <Text color="gray.600">
            <Text mt="2rem">+31 (0)12 34 56 789</Text>
            info@mockwebsite.nl <Text> VAT number NL: 1234.56.789.B01 </Text>
            Chamber of Commerce (KvK) <Text>Mocktown 9876XC</Text>
          </Text>
          <Heading mt="2rem">
            Join us and let us make every moment count!
          </Heading>
        </Text>
        <div className="about-salesbox">
          <Heading>The World is waiting.</Heading>{" "}
          <Heading>Where are you?</Heading>
          <Link to="/">
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
