let games = [
  { id: "1", title: "Game 1", platform: ["Switch"] },
  { id: "2", title: "Game 2", platform: ["PS5", "Xbox"] },
  { id: "3", title: "Game 3", platform: ["PS5", "Xbox", "PC"] },
  { id: "4", title: "Game 4", platform: ["Switch"] },
  { id: "5", title: "Game 5", platform: ["PS5", "Xbox", "PC"] },
];

let authors = [
  { id: "1", name: "Author 1", verified: true },
  { id: "2", name: "Author 2", verified: false },
  { id: "3", name: "Author 3", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem Ipsum", author_id: "1", game_id: "2" },
  { id: "2", rating: 10, content: "lorem Ipsum", author_id: "2", game_id: "1" },
  { id: "3", rating: 7, content: "lorem Ipsum", author_id: "3", game_id: "3" },
  { id: "4", rating: 5, content: "lorem Ipsum", author_id: "2", game_id: "4" },
  { id: "5", rating: 8, content: "lorem Ipsum", author_id: "2", game_id: "5" },
  { id: "6", rating: 7, content: "lorem Ipsum", author_id: "1", game_id: "2" },
  { id: "7", rating: 10, content: "lorem Ipsum", author_id: "3", game_id: "1" },
];

export default { games, authors, reviews };
