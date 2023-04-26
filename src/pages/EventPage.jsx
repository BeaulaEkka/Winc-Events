import React from "react";
import { useToast, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogOverlay,
  Text,
  Heading,
  Button,
  Image,
  Tag,
  Box,
} from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { useParams, Link } from "react-router-dom";
import "../index.css";
import { EventForm } from "../components/EventForm";
import { useState, useRef } from "react";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const users = await fetch("http://localhost:3000/users");

  const categories = await fetch("http://localhost:3000/categories");

  return {
    event: await event.json(),
    users: await users.json(),
    categories: await categories.json(),
  };
};

export const EventPage = () => {
  const { event, users, categories } = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const cancelRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/events/${params.eventId}`, {
      method: "DELETE",
    });

    navigate("/");
    onClose();
    toast({
      title: "Event was Successfully Deleted.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleSave = async (values) => {
    try {
      const { categoryIds, ...rest } = values;
      await fetch(`http://localhost:3000/events/${params.eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...rest,
          categoryIds: categoryIds,
          createdBy: parseInt(values.createdBy),
        }),
      });
      navigate("/");
      toast({
        title: "Event Updated.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
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
    <div className="eventpage-container">
      <Box>
        <div className="event-page-hero">
          <Image src={event.image} alt={event.title} h="50rem" fit="cover" />
        </div>
        <div className="event-hero-text">
          <div className="event-page-hero-card-top"></div>
          <div className="event-hero-text-a">
            <Heading color="blue.500" mt="2rem">
              {event.title}
            </Heading>

            <Text mb="1rem">{event.description}</Text>

            <Text mt=".5rem">
              {categories
                .filter(
                  (category) =>
                    event.categoryIds && event.categoryIds.includes(category.id)
                )
                .map((category, index, arr) => {
                  const isLast = index === arr.length - 1;
                  const color = isLast ? "green" : "blue";
                  return (
                    <Tag
                      size="lg"
                      colorScheme={color}
                      variant="solid"
                      key={category.id}
                      mr=".5rem"
                    >
                      {category.name}
                    </Tag>
                  );
                })}
            </Text>
          </div>
          <div className="event-page-text-sections">
            <div>
              <Text fontSize="xl" as="b">
                Start Time:
              </Text>
              <Text>{event.startTime}</Text>
              <Text fontSize="xl" as="b">
                End Time:
              </Text>
              <Text>{event.endTime}</Text>
            </div>
            <div>
              <div className="eventpage-createdby">
                <Text color="gray.500">Created By :</Text>
                {users.map((user) => {
                  if (user.id === event.createdBy) {
                    return (
                      <React.Fragment key={user.id}>
                        <Image
                          borderRadius="full"
                          boxSize="110px"
                          src={user.image}
                          alt={user.name}
                        />
                        <Text>{user.name}</Text>
                      </React.Fragment>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          <div className="eventpage-links">
            <Button
              mt="2rem"
              colorScheme="blue"
              onClick={() => setIsModalOpen(true)}
            >
              Edit
            </Button>
            <Button mt="2rem" mb="2rem" colorScheme="blue" onClick={onOpen}>
              Delete
            </Button>
            <Link to="/" className="back-link">
              <Text mb="2rem" as="ins" color="blue.500">
                Back to Events
              </Text>
            </Link>
          </div>
        </div>
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}
          leastDestructiveRef={cancelRef}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Delete Event</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this event?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        style={{ height: "auto" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EventForm initialValues={event} onSubmit={handleSave} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
