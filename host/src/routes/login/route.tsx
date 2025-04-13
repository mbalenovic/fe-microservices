import { useLoginMutation } from "@/features/mutationts/useLoginMutation";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useUserQuery } from "@/features/queries/useUserQuery";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [username, setUsername] = useState("");
  const login = useLoginMutation();
  const navigate = useNavigate();

  const { data: user } = useUserQuery();

  if (user?.username) {
    navigate({ to: "/dashboard" });
  }

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
    </div>
  );
}
