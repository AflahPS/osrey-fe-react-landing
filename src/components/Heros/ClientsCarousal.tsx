import {
  Box, Card, Grid
} from '@mui/material';
import Slider, { Settings } from 'react-slick';

const WithStyles = ({ image }: { image: string; }) => (
  <Card>
    <img
      src={image}
      alt="img"
      width={120}
      height={500}
    />
  </Card>
);

const ClientLogo = () => (
  <Box>
    <WithStyles
      // description="React Carousel with Server Side Rendering Support – Part 1"
      // headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    />
  </Box>
);

export const ClientsCarousal = () => {
  const settings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <Grid
      container
      height={500}
      border="1px solid crimson"
    >
      <Slider {...settings}>
        <ClientLogo />
        <ClientLogo />
        <ClientLogo />
        <ClientLogo />
        <ClientLogo />
        <ClientLogo />
      </Slider>
    </Grid>
  );
};
