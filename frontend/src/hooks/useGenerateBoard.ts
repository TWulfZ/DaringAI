import { useMutation, useQueryClient } from "@tanstack/react-query";
import { generateBoard } from "@services/apiDev";

export function useGenerateBoard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (prompt: string) => generateBoard(prompt),

    onMutate: () => {
      console.log("mutating");
    },

    onError: (error) => {
      console.error(error);
    },

    onSuccess: (data) => {
      console.log("success");
      console.log(data);
    },

    onSettled: (_, error) => {
      console.log("settled");
      if (error) {
        console.error(error);
      } else {
        queryClient.invalidateQueries({ queryKey: ["history_boards"]});
      }
    },
  });
}
