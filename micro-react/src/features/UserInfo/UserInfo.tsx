import { useUserQuery } from "./queries/useUserQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function UserInfoContent() {
  const { data: user } = useUserQuery();

  return (
    <div>
      {user ? (
        <p>Hello, {user.username}! Welcome to the Micro React</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

export default function UserInfo() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoContent />
    </QueryClientProvider>
  );
}
