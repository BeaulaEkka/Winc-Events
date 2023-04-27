import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Heading, Text } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <nav className="header-nav">
      <div className="nav-contents">
        <div className="logo-header">
          <Text
            fontSize="sm"
            mb="-1rem"
            ml="1.8rem"
            letterSpacing=".7rem"
            color="white"
          >
            EVENTS
          </Text>
          <Link to="/">
            <Heading
              colorScheme="white"
              p=".5rem"
              color="white"
              _hover={{ fontSize: "2rem", color: "orange" }}
            >
              \ WINC /
            </Heading>{" "}
          </Link>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link className="header-nav-link" to="/">
                Events
              </Link>
            </li>
            <li>
              <Link className="header-nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
