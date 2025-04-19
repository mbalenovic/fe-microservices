import { Suspense } from "react";
import Map from "microReact/Map";

export default () => {
  return (
    <Suspense fallback={<div>Loading React Micro Frontend...</div>}>
      <Map />
    </Suspense>
  );
};
