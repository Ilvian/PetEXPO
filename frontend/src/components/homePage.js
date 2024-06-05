import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "./header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
            backgroundColor: "red",
            color: "white",
            py: 8,
            px: 2,
            textAlign: "center",
          }}
        >
          <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Pet Expo
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Discover the Joy of Pets
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem" }}>
            The Pet Expo is the premier event for pet enthusiasts, pet owners,
            and animal lovers. Our expo features a variety of pet categories
            including dogs, cats, birds, and more. It's a place where you can
            learn about different breeds, find pet products and services, and
            connect with other pet lovers.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem" }}>
            Whether you're looking to adopt a new furry friend, find the best
            food and toys for your pet, or simply enjoy a day out with your
            family, the Pet Expo has something for everyone. Join us for a
            fun-filled day of activities, workshops, and exhibitions.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem" }}>
            Our mission is to promote responsible pet ownership, support animal
            welfare organizations, and provide a platform for pet-related
            businesses to showcase their products and services. We believe that
            pets bring joy and companionship into our lives, and we are
            dedicated to celebrating the special bond between people and their
            pets.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem" }}>
            At the Pet Expo, you'll find a wide range of exhibitors offering the
            latest in pet products, from nutritious pet food and fun toys to
            stylish accessories and grooming services. Attend informative
            sessions hosted by pet care experts, participate in engaging
            workshops, and watch exciting live demonstrations.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem" }}>
            Our event is not just for current pet owners but also for those
            considering adopting a pet. Meet adorable animals from local
            shelters and rescue organizations, and learn how you can provide a
            loving home to a pet in need.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem" }}>
            Don't miss out on this fantastic opportunity to celebrate the world
            of pets and everything they bring into our lives. We look forward to
            seeing you at the Pet Expo!
          </Typography>
        </Container>
      </Box>
      <Container sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Explore Our Pet Categories
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <Link to="/dogs">
            <Card>
              <CardMedia
                component="img"
                alt="Dogs"
                height="200"
                image="https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Dogs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover various dog breeds, training tips, and more.
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
          <Link to="/cats">
            <Card>
              <CardMedia
                component="img"
                alt="Cats"
                height="200"
                image="https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2022/05/cats-party-0516221.jpg"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Cats
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn about different cat breeds, health care, and more.
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
          <Link to="/birds">
            <Card>
              <CardMedia
                component="img"
                alt="Birds"
                height="200"
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cf650e2-c36a-4819-ac67-4ceafb6b8c8a/dfpv3e6-da6c9ddf-769f-454f-8719-30479542c4c3.png/v1/fill/w_1095,h_730,q_70,strp/3_birds_one_stone__2__by_ai_visions_dfpv3e6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvOGNmNjUwZTItYzM2YS00ODE5LWFjNjctNGNlYWZiNmI4YzhhXC9kZnB2M2U2LWRhNmM5ZGRmLTc2OWYtNDU0Zi04NzE5LTMwNDc5NTQyYzRjMy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XKc_SRaua5gNLvNNLTtc8Th_c4E8MNLCv5RxFInQd5s"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Birds
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore the world of birds, their care, habitat and more.
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
};

export default HomePage;
