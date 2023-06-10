import {
  Box,
  Stack,
  VStack,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Enter e-mail for updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              border={'none'}
              focusBorderColor={'none'}
              placeholder="Enter e-mail"
              outline={'none'}
              borderRadius={'none'}
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '2px solid white']}
          borderRight={['none', '2px solid white']}
          py={['3', 'none']}
        >
          <Heading textTransform={'uppercase'}>Video Hub</Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://github.com/abiralkoju">Github</a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://instagram.com/abiral_iii">Instagram</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
