# GraphQL

A comphrension course of GraphQL.

Using Node.js and Apollo Server.

GraphQL define the schema that describes the shape of the graph available on it, and it can be very similar to the database schema.
GraphQL is a layer between the database and the client side queries.

## First steps

1. Initialize the npm

> npm init --yes && npm pkg set type="module"

2. Install the packages

> npm install @apollo/server graphql

3. Create a server js file and point it to the 'main' attribute in package.json file.

> touch server.js

4. In server.js, import:

> import { ApolloServer } from "@apollo/server";
> import { startStandaloneServer } from "@apollo/server/standalone";

5. Start to build the server.

6. In the VSCode, install the extension: _GraphQL: Syntax Highlighting_.

7. Create a file: _schema.js_ and use _#graphql_ before starting the definitions to get the highlighting in the code.

8. Install nodemon package and create an alias in the package.json file to run it.
