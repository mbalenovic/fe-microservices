import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

interface User {
  username: string;
}

export function useUserQuery() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await api.get("/me");
      return data as User;
    },
  });
}
