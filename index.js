const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const myType = require('graphql-test-mod-obj-type');

const app = express();

const schema = new GraphQLSchema({ query: myType })

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000);