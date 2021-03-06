import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client/core";
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>  
  </Router>
);


