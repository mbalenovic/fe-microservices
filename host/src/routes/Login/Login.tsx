import { useState, Suspense, lazy } from "react";
import { useLoginMutation } from "./mutations/useLoginMutation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy load the Dashboard component with error handling
const Dashboard = lazy(() =>
  import("microReact/Dashboard").catch((error) => {
    console.error("Failed to load micro-frontend:", error);
    return {
      default: () => <h3>React Micro Frontend is currently unavailable</h3>,
    };
  })
);

const queryClient = new QueryClient();

function Login() {
  const [username, setUsername] = useState("");
  const login = useLoginMutation();

  return (
    <div style={{ padding: 20 }}>
      <h1>Host App</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={() => login.mutate(username)}>Login</button>
      <hr />
      <Suspense fallback={<div>Loading React Micro Frontend...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
}
