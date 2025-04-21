import { socket } from "../../socket";
import { useRef, useEffect } from "react";
import { Map as MaplibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const ReactMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MaplibreMap | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new MaplibreMap({
        container: mapContainerRef.current,
        style: "https://demotiles.maplibre.org/style.json", // public style, change if needed
        center: [0, 0],
        zoom: 2,
      });
    }

    mapRef.current?.on("move", () =>
      socket.emit("map", {
        center: mapRef.current?.getCenter(),
        zoom: mapRef.current?.getZoom(),
      })
    );

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "20vh" }} />
  );
};

export default ReactMap;
