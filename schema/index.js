/**
 * Typedefs it's like a map to Apollo structure the graph to be handleable by the resolvers
 *
 * Types of data
 * int, float, string, boolean, ID types
 *
 * Type Query defines the entry point queries to access the other types/graphs
 *
 * INPUT
 * Is a way to go to define the group of attributes or specifications for an argument (as an object) received into a Mutation function.
 */

//In the PLATFORM the Array is required, but the items inside can be not required, it means that can be null, if the exclamation mark was not specified.
export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review{
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query{
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation{
        addGame(game: AddGameInput!): Game
        updateGame(id: ID!, update: UpdateGameInput!): Game
        deleteGame(id: ID!): [Game]
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    }

    input UpdateGameInput {
        title: String
        platform: [String!]
    }

`;
