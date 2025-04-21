import { useRef, useEffect } from "react";
import { Map as MaplibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { socket } from "../../../socket";

const HostMap: React.FC = () => {
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

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    socket.connect();

    socket.on("map", (map) => {
      if (mapRef.current) {
        mapRef.current.setCenter(map.center);
        mapRef.current.setZoom(map.zoom);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "20vh" }} />
  );
};

export default HostMap;
