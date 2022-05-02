//server imported from webpack; must be reconfigured for create-react-app


const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const{ ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const { BaseRedisCache } = require('apollo-server-cache-redis'); //check set up
// const Redis = require('ioredis');

// import config from './config.js'; no longer necessary?
// import typeDefs from './schema.js'; no, going to use schema.graphql instead
const resolvers = require('./resolvers/resolvers.js');
const bodyParser = require ('body-parser');


async function startApolloServer(typeDefs, resolvers){

    const app = express();
    const httpServer = http.createServer(app);

    app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));


    app.use(express.static(path.join(__dirname, '..', 'public/')))

    app.use((req, res, next) => {
        if (path.extname(req.path).length) {
          const err = new Error('Not found')
          err.status = 404
          next(err)
        } else {
          next()
        }
      })

//catch all error handler

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  })
  
//   error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

    let server = new ApolloServer({
        typeDefs: fs.readFileSync(
            path.join(__dirname, 'schema.graphql'),
            'utf8'
        ),
        resolvers,
        // cache: new BaseRedisCache({
        //     client: new Redis({
        //         host: 'redis-server',
        //     })
        // }),
        context: {
            prisma,
        },
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({
        app,
        path: '/graphql',
    })

    await new Promise(resolve => httpServer.listen({ port: 4000}, resolve));
    console.log(`📙  ForgeBook server ready at http://localhost:4000`)
}

startApolloServer()

//restructuring express and apollo servers
const app = express();
app.use(bodyParser.json)