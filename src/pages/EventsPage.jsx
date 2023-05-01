import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import {
  Card,
  Heading,
  Stack,
  Text,
  Flex,
  Box,
  Image,
  Tag,
  Button,
} from "@chakra-ui/react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Filter from "../components/Filter";
import { EventForm } from "../components/EventForm";
import { useState } from "react";

export const loader = async () => {
  // const events = await fetch("http://localhost:3000/events");
  // const categories = await fetch("http://localhost:3000/categories");
  // return { events: await events.json(), categories: await categories.json() };
  const events = await fetch("https://mock-winc-events.onrender.com/events");
  const categories = await fetch(
    "https://mock-winc-events.onrender.com/categories"
  );
  return { events: await events.json(), categories: await categories.json() };
};

export const EventsPage = () => {
  const { events, categories } = useLoaderData();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setsearchParams] = useSearchParams();
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const categoryIdsFilter = searchParams.getAll("categoryIds");

  const filteredEvents = categoryIdsFilter.length
    ? events.filter((event) =>
        categoryIdsFilter.every(
          (categoryId) =>
            event.categoryIds &&
            event.categoryIds.includes(parseInt(categoryId))
        )
      )
    : events;

  const handleCreate = async (values) => {
    const { categoryIds, ...rest } = values;
    try {
      const response = await fetch(
        `https://mock-winc-events.onrender.com/events`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...rest,
            categoryIds: categoryIds,
            createdBy: parseInt(values.createdBy),
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      onClose();
      navigate("/");
      toast({
        title: "Event Created.",
        description: "We've created a new Event for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error(`Error: ${error}`);
      toast({
        title: "Error occurred.",
        description: error.message || "Something went wrong.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <Heading mt="2rem" ml="3%" color="blue.500">
        List of Events
      </Heading>
      <div className="filter-nav">
        <Filter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setsearchParams={setsearchParams}
        />
      </div>
      <Button
        mt="2rem"
        colorScheme="blue"
        onClick={onOpen}
        className="add-new-event-button"
      >
        Add New Event
      </Button>
      <Flex flexWrap="wrap" justifyContent="center">
        {filteredEvents
          .filter(
            (event) =>
              searchValue.toLowerCase() === "" ||
              Object.values(event)
                .join("")
                .toLowerCase()
                .includes(searchValue.toLowerCase())
          )
          .map((event) => (
            <Box
              key={event.id}
              width={{ base: "100%", sm: "50%", md: "40%", lg: "30%" }}
              m={2}
            >
              <Link to={`event/${event.id}`}>
                <Card
                  type="outline"
                  borderRadius="lg"
                  mt="1.5rem"
                  transition="transform .2s ease-out"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <div className="eventspage-card-images">
                    <Image
                      w="100%"
                      h="350px"
                      src={event.image}
                      alt={event.title}
                      fit="cover"
                      overflow="hidden"
                      borderTopRadius="lg"
                    />
                  </div>
                  <Stack p={4}>
                    <Heading size="md">{event.title}</Heading>
                    <Text>{event.description}</Text>
                    <Text color="gray.500">Start Time:</Text>
                    <Text>{event.startTime}</Text>
                    <Text color="gray.500">End Time:</Text>
                    <Text>{event.endTime}</Text>
                    <Text color="gray.500">Location :</Text>
                    <Text>{event.location}</Text>

                    <Text>
                      {categories
                        .filter(
                          (category) =>
                            event.categoryIds &&
                            event.categoryIds.includes(category.id)
                        )
                        .map((category) => (
                          <Tag
                            size="lg"
                            colorScheme={
                              category.name === "sports" ? "green" : "blue"
                            }
                            variant="solid"
                            key={category.id}
                            mr=".5rem"
                          >
                            {category.name}
                          </Tag>
                        ))}
                    </Text>
                  </Stack>
                </Card>
              </Link>
            </Box>
          ))}
      </Flex>
      <Button mt="2rem" colorScheme="blue" onClick={onOpen}>
        Add New Event
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="blue.500">Add New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EventForm onSubmit={handleCreate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
