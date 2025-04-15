import { socket } from "../../socket";
import { useState, useEffect } from "react";

export function ConnectionManager() {
  function connect() {
    console.log("Connecting to socket", socket);
    socket.connect();
  }

  function disconnect() {
    console.log("Disconnecting from socket", socket);
    socket.disconnect();
  }

  return (
    <div>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}

const Map = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div>
      <button onClick={() => {}}>Test Event</button>
      <ConnectionManager />
      <p>Socket Status: {isConnected ? "Connected" : "Disconnected"}</p>
    </div>
  );
};

export default Map;
