import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (username: string) => {
      const { data } = await api.post("/login", { username });
      return data;
    },
  });
}
