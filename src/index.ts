import { ApolloServer } from "apollo-server";
import {typeDefs} from "./schema";

import {resolvers} from "./resolvers";

import {starWarsAPI} from "./datasource/people";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    starWarsAPI: new starWarsAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
        Server is running!
        Listening on port 4000
      `);
});
