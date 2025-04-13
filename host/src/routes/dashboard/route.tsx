import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import Dashboard from "microReact/Dashboard";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Suspense fallback={<div>Loading React Micro Frontend...</div>}>
      <Dashboard />
    </Suspense>
  );
}
