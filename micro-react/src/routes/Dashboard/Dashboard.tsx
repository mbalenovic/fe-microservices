import { useUserQuery } from "./queries/useUserQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function DashboardContent() {
  const { data: user } = useUserQuery();

  return (
    <div>
      <h2>Dashboard (React Micro Frontend)</h2>
      {user ? <p>Welcome, {user.username}</p> : <p>Please log in.</p>}
    </div>
  );
}

export default function Dashboard() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContent />
    </QueryClientProvider>
  );
}
