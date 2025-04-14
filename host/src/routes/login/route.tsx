import { useLoginMutation } from "@/features/login/mutations/useLoginMutation";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useUserQuery } from "@/features/dashboard/queries/useUserQuery";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [username, setUsername] = useState("");
  const login = useLoginMutation();
  const navigate = useNavigate();

  const { data: user } = useUserQuery();

  useEffect(() => {
    if (user?.username) {
      navigate({ to: "/dashboard" });
    }
  }, [user?.username, navigate]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Host App</h1>
      <form onSubmit={() => login.mutate(username)}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit">Login</button>
      </form>
      <hr />
    </div>
  );
}
