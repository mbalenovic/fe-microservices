import { Suspense } from "react";
import ReactApp from "microReact/Dashboard";

export default () => {
  return (
    <Suspense fallback={<div>Loading React Micro Frontend...</div>}>
      <ReactApp />
    </Suspense>
  );
};
