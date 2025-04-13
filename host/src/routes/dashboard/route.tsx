import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import ReactApp from "microReact/Dashboard";
import SolidApp from "@/features/dashboard/components/SolidApp";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Suspense fallback={<div>Loading React Micro Frontend...</div>}>
        <ReactApp />
      </Suspense>
      <SolidApp />
    </>
  );
}
