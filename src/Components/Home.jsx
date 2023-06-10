import { Box, Container, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Stack } from '@chakra-ui/react';

import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import vg from '../assests/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  size: '3xl',
  p: '4',
  textTransform: 'uppercase',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} p={16}>
        <Heading
          py={'2'}
          m={'auto'}
          borderBottom={'2px solid black'}
          w={'fit-content'}
        >
          Services
        </Heading>

        <Stack
          h="full"
          px={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={vg} h={['40', '350']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'200%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolore ipsum totam omnis, asperiores molestias itaque
            nisi ipsam incidunt nostrum nemo porro distinctio inventore?
            Asperiores iure, iusto repellendus culpa facilis, a esse ipsum
            laborum sint id porro. Blanditiis repudiandae fugiat unde mollitia
            molestias cupiditate consectetur impedit deserunt odit.
            Perspiciatis, perferendis?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum nisi nostrum esse perspiciatis rem
            molestias in eius ratione temporibus voluptatibus!lorem10
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <div>
    <Carousel
      //   autoPlay
      //   infiniteLoop
      //   interval={2000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} alt="pic1" />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Virtual Reality
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} alt="pic2" />
        <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
          Gaming and Much more
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img3} alt="pic3" />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Watch your best stream
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img4} alt="pic4" />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Artificial Environment
        </Heading>
      </Box>
    </Carousel>
  </div>
);

export default Home;
