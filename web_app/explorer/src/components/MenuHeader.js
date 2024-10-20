import drivedatadollarsLogo from '../img/drivedatadollars_logo.png';

import {
  Center,
  Image,
  Heading,
  Text
} from '@chakra-ui/react'

const MenuHeader = () => {
  return (
    <Center
      borderBottomColor={'gray.300'}
      borderBottomWidth={'1px'}
      borderBottomStyle={'solid'}
      backgroundColor={'white'}
      p={3}
    >
      <Image
        src={drivedatadollarsLogo}
        alt='Logo'
        w={'40px'}
        mr={3}
      />
      <Heading
        fontSize='2xl'
        color={'gray.700'}
      >
        <Text
          color="#35505e"
          as="span"
        >DriveData</Text>
        <Text
          color="#a68281"
          as="span"
        >Dollars </Text>
        <Text
          color="#35505e"
          as="span"
        >Explorer </Text>
      </Heading>
    </Center>
  );
};

export default MenuHeader;
