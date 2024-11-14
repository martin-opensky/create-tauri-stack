import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

const typeDefs = `#graphql
  type Query {
    currentTime: String
  }

  type Mutation {
    greet(name: String!): String
  }
`;

const resolvers = {
  Query: {
    currentTime: () => new Date().toLocaleTimeString(),
  },
  Mutation: {
    greet: (_: any, { name }: { name: string }) => {
      return `GraphQL says: Hello, ${name}!`;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault()
  ],
  introspection: true, // Enables schema introspection
  csrfPrevention: process.env.NODE_ENV === 'production',
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
console.log(`📭 Query at: ${url}graphql`); 