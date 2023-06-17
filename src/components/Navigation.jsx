import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { Heading, Text, Box } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <nav className="header-nav">
      <div className="nav-contents">
        <Box className="logo-header">
          <Text
            fontSize="sm"
            mb="-1rem"
            ml="1.8rem"
            letterSpacing=".7rem"
            color="white"
          >
            EVENTS
          </Text>
          <Heading
            colorScheme="white"
            p=".5rem"
            color="white"
            _hover={{ color: "orange" }}
          >
            <NavLink to="/" as={Link} activeclassname="active">
              \ WINC /{" "}
            </NavLink>
          </Heading>{" "}
        </Box>

        <div className="nav-links">
          <ul>
            <li>
              <NavLink
                as={Link}
                className="header-nav-link"
                to="/"
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                as={Link}
                className="header-nav-link"
                to="/events"
                activeclassname="active"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header-nav-link"
                activeclassname="active"
                as={Link}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
