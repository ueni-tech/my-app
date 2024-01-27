import { Button } from '@chakra-ui/react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme='teal'>ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
