import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "../index.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo" onClick={scrollToTop}>
          <Text fontSize="sm" mb="-1rem" ml=".4rem" letterSpacing=".8em">
            EVENTS
          </Text>
          <Heading colorScheme="white" p=".5rem">
            \ WINC /
          </Heading>
        </div>

        <Text fontSize="sm">All Rights Reserved 2023</Text>
      </div>
    </div>
  );
}
