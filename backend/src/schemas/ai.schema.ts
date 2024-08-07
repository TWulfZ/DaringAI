export type BoardSchema = {
  title: string;
  cardsExample: {
    title: string;
    content: string;
    language: string;
    code: string;
  }[];
  cardsChallenge: {
    id: string;
    title: string;
    content: string;
    language: string;
  }[];
};