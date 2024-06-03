import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Pet Expo, your ultimate destination for everything related
          to pets! Whether you're a passionate pet owner or simply adore
          animals, Pet Expo offers a diverse range of resources, products, and
          services to cater to all your pet needs.
        </Typography>
        <Typography variant="body1" paragraph>
          At Pet Expo, we're committed to fostering a thriving community where
          pet lovers can come together, share experiences, and learn from one
          another. Our mission is to promote responsible pet ownership and
          provide valuable insights into the best practices for caring for your
          beloved companions.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team comprises dedicated individuals who are not only pet
          enthusiasts but also experts in various aspects of pet care, including
          nutrition, training, grooming, and health. We're here to offer
          guidance, support, and expert advice to ensure that you and your pets
          lead happy, healthy lives together.
        </Typography>
        <Typography variant="body1" paragraph>
          Pet Expo hosts a variety of events, workshops, and seminars throughout
          the year, covering a wide range of topics related to pet care,
          behavior, and training. Whether you're a new pet parent seeking
          guidance or a seasoned pet owner looking to expand your knowledge, our
          events provide valuable insights and opportunities to connect with
          fellow pet lovers.
        </Typography>
        <Typography variant="body1" paragraph>
          In addition to our online platform, Pet Expo also operates physical
          stores in various locations, offering a curated selection of premium
          pet products and supplies. Our stores provide a welcoming environment
          where you can shop for high-quality pet essentials and receive
          personalized recommendations from our knowledgeable staff.
        </Typography>
        <Typography variant="body1" paragraph>
          For any inquiries, suggestions, or feedback, feel free to{" "}
          <Link to="/ContactUs">contact us</Link>.
        </Typography>
        <Typography variant="body1">
          Our customer support team is available Monday through Friday, from
          9:00 AM to 5:00 PM (EST), to assist you with any questions or concerns
          you may have. We value your input and strive to provide exceptional
          service to our customers.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing Pet Expo as your trusted partner in pet care.
          We're dedicated to serving you and your furry, feathered, or scaled
          friends with the utmost care and compassion. Join us on this exciting
          journey as we celebrate the unconditional love and joy that pets bring
          into our lives!
        </Typography>
      </Container>
    </>
  );
};

export default AboutUs;
