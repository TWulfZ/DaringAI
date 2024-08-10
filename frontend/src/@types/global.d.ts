interface CardDataExample {
  id: string;
  title: string;
  content: string;
  language: string;
  code: string;
}

interface CardDataChallenge {
  id: string;
  title: string;
  content: string;
  language: string;
}

interface BoardData {
  id: string;
  title: string;
  cardsExample: CardDataExample[];
  cardsChallenge: CardDataChallenge[];
}

// New types

interface HistoryBoard {
  board_id: string;
  title: string;
  author_id: string;
  created_at: string;
  updated_at: string;
}

interface Example {
  example_id: string;
  title: string;
  content: string;
  language: string;
  code: string;
  board_id: string;
  created_at: string;
}

interface Challenge {
  challenge_id: string;
  title: string;
  content: string;
  language: string;
  board_id: string;
  created_at: string;
}

interface Board {
  board_id: string;
  title: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  cards_challenge: Challenge[];
  cards_example: Example[];
}