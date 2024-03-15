//Importing DB to simulate
import db from "../database/_simulate_db.js";

/**
 * PARENT
 * Refers to the type Game schema
 */

export function games() {
  return db.games;
}

export function game(_, { id }) {
  return db.games.find((game) => game.id === id);
}

export function reviews(parent) {
  return db.reviews.filter((review) => review.game_id === parent.id);
}

export function deleteGame(_, { id }) {
  return db.games.filter((game) => game.id !== id);
}

export function addGame(_, args) {
  const game = {
    id: toString(db.games.length + 1),
    ...args.game,
  };
  db.games.push(game);
  return game;
}

export function updateGame(_, args) {
  db.games = db.games.map((game) => {
    if (game.id === args.id) return { ...game, ...args.update };
    return game;
  });
  return db.games.find((games) => games.id === args.id);
}
