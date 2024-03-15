import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//Types & Resolvers
import { typeDefs } from "./schema/index.js";
import { resolvers } from "./resolvers/index.js";

//Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   context: ({ req, res }) => ({ req, res }),
});

//Start the server
const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`Server ready at ${url}`);
