import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img
          src="https://images.pexels.com/photos/5604256/pexels-photo-5604256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="music festival"
        ></img>
      </div>
      <div className="about-text">
        <p className="about-welcome-text"> Welcome to Winc Events!</p>
        <Text fontSize="1.1rem" mt="1.5rem">
          We are a visionary event management company that hosts a variety of
          exciting experiences for everyone!{" "}
        </Text>
        <Text>
          <br></br>
          From thrilling bungee jumping and hiking adventures to laid-back
          brunch events, we have something for all tastes and preferences.{" "}
        </Text>
        <p>
          Our events cater to families, groups of friends, and corporate teams,
          providing unforgettable experiences that are sure to create lasting
          memories. With Winc Events, you can be sure that you will always find
          an exciting event to participate in, no matter what your interests
          are.{" "}
        </p>
        <Text fontSize="1.5rem">
          <br></br>Join us and let us make every moment count!
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
}
