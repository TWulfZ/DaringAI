import { getHistory } from "@services/apiDev"
import { useQuery } from "@tanstack/react-query"

export const useGetHistory = () => {
  return useQuery({
    queryKey: ['history_boards'],
    queryFn: getHistory,
  })
}

export default useGetHistory