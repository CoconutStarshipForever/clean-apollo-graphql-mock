import { ApolloServer } from 'apollo-server'
import { TypeDefs } from './GraphqlAPI'
import { Resolver } from './GraphqlAPI'
const { createStore } = require('./utils');

const LaunchAPI = require('./DataSource/Launch');
const UserAPI = require('./DataSource/User');

const store = createStore();


const server = new ApolloServer({
  typeDefs: TypeDefs,
  resolvers: Resolver,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  }),
  introspection: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
