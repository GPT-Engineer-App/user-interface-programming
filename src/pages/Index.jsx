import { Box, Flex, Text, Button, Image, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaHome, FaInfo, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <VStack minH="100vh">
      {/* Navigation Bar */}
      <Flex as="nav" w="full" bg="blue.500" color="white" p={4} align="center">
        <HStack spacing={4}>
          <FaHome />
          <Text>Home</Text>
          <FaInfo />
          <Text>About</Text>
          <FaEnvelope />
          <Text>Contact</Text>
        </HStack>
        <Spacer />
        <Button colorScheme="blue" variant="outline">
          Login
        </Button>
      </Flex>

      {/* Main Content */}
      <Flex flex="1" direction="column" align="center" justify="center">
        <Text fontSize="4xl" fontWeight="bold">
          Welcome to Our Website!
        </Text>
        <Text mt={2}>Explore the intriguing world of cybersecurity and hacking.</Text>
        <VStack spacing={4} mt={4}>
          <Text fontSize="xl" fontWeight="bold">
            Latest Hacking Trends
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Cybersecurity Best Practices
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Famous Hackers and Their Impact
          </Text>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWNrZXJ8ZW58MHx8fHwxNzEzNDY1NTE0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hackers Theme" mt={4} boxSize="300px" />
      </Flex>

      {/* Footer */}
      <Box as="footer" w="full" bg="gray.200" p={4}>
        <Text textAlign="center">© 2023 Company Name. All rights reserved.</Text>
      </Box>
    </VStack>
  );
};

export default Index;
