import { GraphQLScalarType, Kind } from 'graphql'

const datetimeScalar = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime custom scalar type',
  serialize(value) {
    return new Date(value).toLocaleString()
  },
  parseValue(value) {
    return value.getTime()
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 13);
    }
    return null;
  },
});

export default datetimeScalar