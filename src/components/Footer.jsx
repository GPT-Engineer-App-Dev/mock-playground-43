import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" p={4} textAlign="center">
      © {new Date().getFullYear()} My Company
    </Box>
  );
};

export default Footer;
