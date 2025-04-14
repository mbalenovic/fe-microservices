import { createFileRoute } from "@tanstack/react-router";
import SolidApp from "@/features/dashboard/components/SolidApp";
import Widget from "@/features/dashboard/components/Widget";
import ReactApp from "@/features/dashboard/components/ReactApp";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Widget title="Micro Solid">
        <SolidApp />
      </Widget>
      <Widget title="Micro React">
        <ReactApp />
      </Widget>
    </div>
  );
}
