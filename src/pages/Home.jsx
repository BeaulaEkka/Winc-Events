import {} from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
  const [isTextBoxVisible2, setIsTextBoxVisible2] = useState(false);
  const [isTextBoxVisible3, setIsTextBoxVisible3] = useState(false);
  const [isTextBoxVisible4, setIsTextBoxVisible4] = useState(false);

  const handleBoxClick = () => {
    setIsTextBoxVisible((prevState) => !prevState);
  };
  const handleBoxClick2 = () => {
    setIsTextBoxVisible2((prevState) => !prevState);
  };
  const handleBoxClick3 = () => {
    setIsTextBoxVisible3((prevState) => !prevState);
  };
  const handleBoxClick4 = () => {
    setIsTextBoxVisible4((prevState) => !prevState);
  };

  return (
    <div className="about-container">
      <Box position="relative" h="100vh">
        <div className="home-hero">
          <img
            src="https://images.pexels.com/photos/1936954/pexels-photo-1936954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="balloons"
          ></img>
        </div>

        <div className="home_hero_text">
          <h1>The World is Waiting </h1>
          <h1>Where are you?</h1>
        </div>
      </Box>

      <div className="home-text">
        <Heading className="about-welcome-text">
          {" "}
          Welcome to Winc Events!
        </Heading>
        <Text
          mt="1.5rem"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        >
          We are a visionary event management company located in Amsterdam!{" "}
        </Text>
        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          <br></br>
          From thrilling bungee jumping and hiking adventures to laid-back
          brunch events, we have something for all tastes and preferences. If
          you can think it , we can arrange it.{" "}
        </Text>
        <Heading mt="1rem" mb="1rem">
          What we do
        </Heading>
        <Text
          mb="1.5rem"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        >
          Our events cater to families, groups of friends, and corporate teams,
          providing unforgettable experiences that are sure to create lasting
          memories. With Winc Events, you can be sure that you will always find
          an exciting event to participate in, no matter what your interests
          are.{" "}
        </Text>
      </div>

      <Box w="80%" m="auto">
        <Flex
          w="100%"
          h={{ base: "30%", md: "20%", lg: "15%" }}
          flexDirection="row"
          flexWrap="wrap"
          mb="3rem"
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "25%" }}
            flexGrow={{ base: 1, md: 1 }}
            h="30vh"
            backgroundImage="url('assets/officeparty.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "purple.400",
              color: "white",
            }}
            onClick={handleBoxClick}
            bg={isTextBoxVisible ? "purple.400" : undefined}
            color={isTextBoxVisible ? "white" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%" color="white">
              <Heading textAlign="center">Business Events</Heading>
            </Flex>
          </Box>

          {isTextBoxVisible && (
            <Box
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
              bg="gray.50"
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  Winc Events specializes in organizing and managing exceptional
                  business events tailored to meet the unique needs and goals of
                  companies. We understand the significance of business events
                  as powerful tools for networking, collaboration, and
                  professional growth. At Winc Events, we offer comprehensive
                  event planning services for various business occasions,
                  including conferences, seminars, trade shows, product
                  launches, corporate retreats, and more. Our team of
                  experienced professionals works closely with clients to create
                  engaging and impactful events that leave a lasting impression
                  on attendees. We provide end-to-end event management
                  solutions, handling everything from venue selection and
                  logistics to program development and on-site coordination.
                  With meticulous attention to detail, we ensure seamless
                  execution and deliver memorable experiences for participants.
                  Our business events focus on fostering meaningful connections
                  and facilitating knowledge exchange among industry
                  professionals.{" "}
                </Text>
                <Text mt="1.5rem">
                  We curate insightful keynote speeches, panel discussions,
                  workshops, and interactive sessions led by industry experts
                  and thought leaders. These activities offer valuable insights,
                  inspiration, and opportunities for attendees to enhance their
                  skills, gain industry knowledge, and stay ahead in their
                  respective fields. Moreover, we understand the importance of
                  creating an engaging and enjoyable atmosphere. We incorporate
                  innovative technologies, creative branding, and immersive
                  experiences to make each event memorable and impactful.
                  Whether it&apos;s through interactive exhibits, networking
                  sessions, or entertainment programs, we strive to create an
                  atmosphere that encourages meaningful interactions and builds
                  lasting connections.{" "}
                </Text>{" "}
                <Text mt="1.5rem">
                  At Winc Events, our mission is to deliver exceptional business
                  events that drive growth, foster collaboration, and provide
                  valuable experiences for our clients and their attendees. We
                  combine our expertise, attention to detail, and passion for
                  excellence to create impactful events that leave a lasting
                  impression. Let us help you bring your business events to life
                  and make them unforgettable experiences for all involved.
                </Text>
              </Text>
            </Box>
          )}
          <Box
            flexGrow={{ base: 1, md: 3 }}
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            backgroundImage="url('assets/festival.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "blue.400",
              color: "white",
            }}
            onClick={handleBoxClick2}
            bg={isTextBoxVisible2 ? "blue.400" : undefined}
            color={isTextBoxVisible2 ? "white" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%" color="white">
              <Heading textAlign="center">Festivals</Heading>
            </Flex>
          </Box>
          {isTextBoxVisible2 && (
            <Box
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
              bg="gray.50"
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  Winc Events is proud to organize vibrant and unforgettable
                  festivals for people of all ages and interests. We believe
                  that festivals are more than just events; they are immersive
                  experiences that bring communities together and create lasting
                  memories.
                </Text>
                <Text mt="1.5rem">
                  Our team works tirelessly to curate unique festival
                  experiences that cater to a variety of tastes and preferences.
                  Whether you&apos;re a music lover, a food enthusiast, or an
                  art aficionado, we have a festival that will captivate your
                  senses and ignite your passion.
                </Text>
                <Text mt="1.5rem">
                  Our festivals feature a diverse range of activities,
                  performances, and attractions. From live music concerts and
                  art exhibitions to culinary delights and interactive
                  workshops, there&apos;s something for everyone to enjoy. We
                  collaborate with talented artists, musicians, chefs, and
                  performers to ensure that each festival offers a captivating
                  lineup of entertainment.
                </Text>
                <Text mt="1.5rem">
                  We also prioritize creating a welcoming and inclusive
                  atmosphere at our festivals. We aim to foster a sense of
                  community by providing spaces for social interaction,
                  networking, and connection. Whether you&apos;re attending with
                  friends, family, or as a solo adventurer, you&apos;ll find
                  friendly faces and engaging experiences at every turn.
                </Text>
                <Text mt="1.5rem">
                  At Winc Events, we strive to make our festivals
                  environmentally conscious and sustainable. We implement
                  eco-friendly practices, promote recycling and waste reduction,
                  and collaborate with local businesses to support the community
                  and minimize our ecological footprint.
                </Text>
                <Text mt="1.5rem">
                  Join us at our upcoming festivals and immerse yourself in a
                  world of excitement, creativity, and celebration. Discover new
                  passions, make new connections, and create memories that will
                  last a lifetime. Get ready to be captivated by the magic of
                  our festivals!
                </Text>
              </Text>
            </Box>
          )}
          <Box
            flexGrow={{ base: 1, md: 2 }}
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            backgroundImage="url('assets/officemeet.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "red.400",
              color: "white",
            }}
            onClick={handleBoxClick3}
            bg={isTextBoxVisible3 ? "red.400" : undefined}
            color={isTextBoxVisible3 ? "white" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%" color="white">
              <Heading textAlign="center">Event Planing</Heading>
            </Flex>
          </Box>
          {isTextBoxVisible3 && (
            <Box
              bg="gray.50"
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  Winc Events specializes in comprehensive event planning
                  services for a wide range of occasions. Whether you&apos;re
                  organizing a corporate conference, a charity gala, a product
                  launch, or any other event, our team is here to ensure its
                  success from start to finish.
                </Text>
                <Text mt="1.5rem">
                  With our meticulous attention to detail and extensive industry
                  knowledge, we handle all aspects of event planning, including
                  venue selection, logistics management, program development,
                  and on-site coordination. Our goal is to bring your vision to
                  life while delivering a seamless and unforgettable experience
                  for you and your attendees.
                </Text>
                <Text mt="1.5rem">
                  We understand that every event is unique, and we tailor our
                  services to meet your specific requirements. From
                  conceptualizing event themes and designing captivating event
                  spaces to coordinating with vendors and managing guest
                  registrations, our dedicated team will be with you every step
                  of the way.
                </Text>
                <Text mt="1.5rem">
                  With our extensive network of trusted partners and suppliers,
                  we can source high-quality resources, audiovisual equipment,
                  catering services, and entertainment options to enhance your
                  event&apos;s atmosphere. We stay up-to-date with the latest
                  industry trends and technologies, ensuring that your event
                  incorporates innovative elements to leave a lasting impression
                  on your guests.
                </Text>
                <Text mt="1.5rem">
                  At Winc Events, we take pride in delivering flawless event
                  experiences that exceed expectations. Leave the intricate
                  planning and coordination to us, and enjoy the peace of mind
                  that comes with knowing your event is in expert hands. Let us
                  turn your vision into reality and create an exceptional event
                  that leaves a lasting impression on all attendees.
                </Text>
              </Text>
            </Box>
          )}
          <Box
            flexGrow={{ base: 1, md: 3 }}
            w={{ base: "100%", md: "50%", lg: "25%" }}
            h="30vh"
            color="white"
            backgroundImage="url('assets/party.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            _hover={{
              bg: "yellow.400",
              color: "white",
            }}
            onClick={handleBoxClick4}
            bg={isTextBoxVisible4 ? "yellow.400" : undefined}
          >
            {" "}
            <Flex justify="center" align="center" h="100%">
              <Heading textAlign="center">parties</Heading>
            </Flex>
          </Box>
          {isTextBoxVisible4 && (
            <Box
              pt="4rem"
              pb="4rem"
              pr={{ base: "10%", md: "12%", lg: "13%" }}
              pl={{ base: "10%", md: "12%", lg: "13%" }}
              bg="gray.50"
            >
              <Text
                lineHeight={7}
                fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
              >
                <Text>
                  At Winc Events, we specialize in creating memorable parties
                  for various occasions, including children&apos;s birthday
                  parties, office ice parties, and friend gatherings. We
                  understand that each party is unique and deserves special
                  attention to detail to ensure a fun and unforgettable
                  experience for all attendees.
                </Text>
                <Text mt="1.5rem">
                  For children&apos;s birthday parties, we offer a range of
                  themes and entertainment options that cater to different ages
                  and interests. Our team will work closely with you to plan
                  age-appropriate activities, arrange decorations, and provide
                  engaging entertainment, ensuring that the birthday child and
                  their friends have a fantastic celebration.
                </Text>
                <Text mt="1.5rem">
                  Office ice parties are a great way to boost team morale and
                  create a relaxed and enjoyable atmosphere. We can help you
                  organize themed parties, complete with decorations, music, and
                  interactive games. Our goal is to foster team bonding and
                  create an environment where colleagues can socialize, have
                  fun, and strengthen professional relationships.
                </Text>
                <Text mt="1.5rem">
                  Whether it&apos;s a casual get-together or a milestone
                  celebration, our services for friend parties ensure a seamless
                  and entertaining experience. We can assist with venue
                  selection, catering, music, and thematic elements to match the
                  desired ambiance. Our team will collaborate with you to bring
                  your vision to life, creating a memorable and enjoyable party
                  for you and your friends.
                </Text>
                <Text mt="1.5rem">
                  Winc Events is dedicated to providing exceptional party
                  planning services, taking care of every aspect of the event to
                  ensure a stress-free experience for our clients. Let us help
                  you create unforgettable parties that will leave a lasting
                  impression on you and your guests.
                </Text>
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
      <Box className="about-salesbox" m="auto" zIndex={10} w="80%">
        <Text fontSize="1.5rem">
          <br></br>Join us and let us make every moment count!
        </Text>
        <Link to="/events">
          <Button mt="2rem" colorScheme="gray" color="green">
            Book our Events
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Home;
