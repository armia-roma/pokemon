import { Button, HStack } from "@chakra-ui/react";

export default function DemoPage() {
  return (
    <HStack spacing={4}>
      <Button colorScheme="blue" >
        Click me
      </Button>
      <Button colorScheme="green">
        Click me
      </Button>
    </HStack>
  );
}