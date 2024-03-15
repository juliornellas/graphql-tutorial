//Resolvers
import {
  games,
  game,
  reviews as reviewsByGames,
  deleteGame,
  addGame,
  updateGame,
} from "./GamesResolvers.js";
import {
  reviews,
  review,
  author as authorByReviews,
  game as gameByReviews,
} from "./ReviewsResolvers.js";
import {
  authors,
  author,
  reviews as reviewsByAuthor,
} from "./AuthorResolvers.js";

/*
      QUERY
      Inside the resolvers the attribute (Query) should be the same name as the schema definition.
      So, Query is the entry point to access the resolvers query functions.
  
      Resolvers receive automatically 3 arguments (parent, args, context):
          1. Parent, it refers to the parent resolvers in the resolvers chain. Usual to use _ to refer to this argument
          2. Args it stands for arguments, so you can access any variables sent through the query
          3. Context it refers to the content values across all the resolvers, like authentication, etc. But you can omit if you will not use
      
      RELATED DATA: RELATIONSHIPS
      For each type defined in the schema, that has some relationship, you have to create an attribute named as the same name of the type already created (Game, Author or Review) to mention this relation and now, the PARENT argument it means that you will have access to the related type schema. I.e., you can do nested queries.
      And the attribute inside Game should match with the previous schema attribute on Type Game
      E.g.: Game:{
          reviews: gameReviews
      }
  */
export const resolvers = {
  Query: {
    games,
    game,
    reviews,
    review,
    authors,
    author,
  },
  Game: {
    reviews: reviewsByGames,
  },
  Author: {
    reviews: reviewsByAuthor,
  },
  Review: {
    author: authorByReviews,
    game: gameByReviews,
  },
  Mutation: {
    deleteGame,
    addGame,
    updateGame,
  },
};
