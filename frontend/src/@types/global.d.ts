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