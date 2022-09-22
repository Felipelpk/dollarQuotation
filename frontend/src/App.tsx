import { NewExchangeDolar } from './components/NewExchangeDolar'
import { Flex, Text, Heading, HStack } from '@chakra-ui/react';

function App() {

  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      padding="3rem"
      bgColor="#1a202c"
      color="#edf2f7"
      flexDir="column"
    >
      <HStack justify="center" alignItems="center">
        <Heading
          bgGradient='linear(to-l, #a8ff78, #78ffd6)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          $
        </Heading>
        <Heading
          letterSpacing="-0.1rem"
        >
          Cotação do Dolar
        </Heading>
      </HStack>
      <NewExchangeDolar />
    </Flex>
  )
}

export default App
