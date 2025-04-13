import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useUserQuery } from "@/features/queries/useUserQuery";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  const { data: user } = useUserQuery();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to the Frankenstein App
        </h1>
        {!user?.username && (
          <>
            <p className="mb-8">Please log in to continue</p>
            <button
              onClick={() => navigate({ to: "/login" })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </div>
  );
}
