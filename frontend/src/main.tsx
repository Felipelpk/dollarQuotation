import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './services/apollo'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client} > 
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
)
