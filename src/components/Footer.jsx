import React from "react";
import { Image, Text } from "@chakra-ui/react";
import "../index.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo" onClick={scrollToTop}>
          <Image src="/assets/wincsvglogo.svg" w="6rem" m="auto" pb=".5rem" />
        </div>

        <Text fontSize="sm">All Rights Reserved 2023</Text>
      </div>
    </div>
  );
}
