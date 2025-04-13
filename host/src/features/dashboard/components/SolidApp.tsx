import { useRef, useEffect, Suspense } from "react";
import { render } from "solid-js/web";
import App from "microSolid/App";

function useSolidApp() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dispose = render(() => App({}), container);
    return () => dispose();
  }, []);

  return containerRef;
}

export default function SolidApp() {
  const containerRef = useSolidApp();

  return (
    <div id="solid-container">
      <Suspense fallback={<div>Loading Solid Micro Frontend...</div>}>
        <div ref={containerRef} />
      </Suspense>
    </div>
  );
}
