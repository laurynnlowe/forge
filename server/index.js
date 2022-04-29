const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// import config from './config.js'; no longer necessary?
// import typeDefs from './schema.js'; no, going to use schema.graphql instead
const resolvers = require('./resolvers/resolvers.js');



let server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: {
        prisma,
    }
})

server
    .listen()
    .then(({ url }) => 
    console.log(`server for forge on ${url}`))

