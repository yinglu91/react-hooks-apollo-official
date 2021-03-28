import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import './app.css';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.REACT_APP_STOREFRONT_GRAPHQL_URL}`,
    headers: {
      'X-Shopify-Storefront-Access-Token': `${process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    }
  }),

  cache: new InMemoryCache()
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ),
  document.getElementById('root')
);

// https://github.com/Shopify/storefront-api-examples/tree/master/react-hooks-apollo
