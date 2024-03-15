//Importing DB to simulate
import db from "../database/_simulate_db.js";

/**
 * PARENT
 * Refers to the type Review schema
 */

export function reviews() {
  return db.reviews;
}

export function review(_, { id }) {
  return db.reviews.find((review) => review.id === id);
}

export function author(parent) {
  return db.authors.find((author) => author.id === parent.author_id);
}

export function game(parent) {
  return db.games.find((review) => review.id === parent.game_id);
}
