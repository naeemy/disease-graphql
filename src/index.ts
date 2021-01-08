import { ApolloServer } from 'apollo-server'

// typeDefs
import countryType from './typeDefs/country'

// resolvers
import countryResolvers from './resolvers/country'

const typeDefs = [countryType]
const resolvers = [countryResolvers]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});