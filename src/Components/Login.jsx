import {
  Heading,
  VStack,
  Input,
  Container,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          w={['full', '96']}
          my={'16'}
          alignItems={'stretch'}
          spacing={'8'}
          m={'auto'}
        >
          <Heading>Welcome Back</Heading>

          <Input
            placeholder="Email"
            type={'email'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type={'Password'}
            required
            focusBorderColor="purple.500"
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </Button>

          <Button colorScheme="purple" type="submit">
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to="/signup">Sign up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
