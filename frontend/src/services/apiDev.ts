import apiClient from "@lib/apiClient";

// POST
export const generateBoard = async (prompt: string) => {
  return (await apiClient.post<HistoryBoard>("/boards/generate", { prompt })).data;
};

// GET
export const getBoard = async (id: string | undefined) => {
  return (await apiClient.get<Board>(`/boards/${id}`)).data;
};

export const getHistory = async () => {
  return (await apiClient.get<HistoryBoard[]>("/boards/history")).data;
};

export const getCardExample = async (exampleId: string) => {
  return (await apiClient.get<CardDataExample>(`/boards/example/${exampleId}`)).data;
};

export const getCardChallenge = async ( challengeId: string) => {
  return (await apiClient.get<CardDataChallenge>(`/boards/challenge/${challengeId}`)).data;
};
