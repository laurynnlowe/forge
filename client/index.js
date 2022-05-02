import React from 'react';
import ReactDOM from 'react-dom'
import BuildBook from './BuildBook'
import App from './App'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";

const httpLink= createHttpLink({
  uri: 'http://localhost:4001'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client} >
      <Router >
        <Nav />
        <App />
      </Router>
    </ApolloProvider>,
  document.getElementById('root') 
);