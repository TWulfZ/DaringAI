import { getBoard } from "@services/apiDev";
import { useQuery } from "@tanstack/react-query";

export const useGetBoard = (boardId: string | undefined) => {
  return useQuery({
    queryKey: ["selected_board", { boardId }],
    queryFn: () => getBoard(boardId!),
    enabled: !!boardId,
  });
};

export default useGetBoard;
