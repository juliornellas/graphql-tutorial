//Importing DB to simulate
import db from "../database/_simulate_db.js";

/**
 * PARENT
 * Refers to the type Author schema
 */

export function authors() {
  return db.authors;
}

export function author(_, { id }) {
  return db.authors.find((author) => author.id === id);
}

export function reviews(parent) {
  return db.reviews.filter((review) => review.author_id === parent.id);
}
