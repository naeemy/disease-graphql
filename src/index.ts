import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import diseaseAPI from './datasources/disease'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    diseaseAPI: new diseaseAPI()
  }),
  cacheControl: {
    defaultMaxAge: 60,
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});