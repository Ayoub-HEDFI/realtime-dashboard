import React, { useState, useEffect } from 'react';
import './App.css';

interface Counter {
  juice: number;
  chocolate: number;
}

const App: React.FC = () => {
  const [counters, setCounters] = useState<Counter>({ juice: 0, chocolate: 0 });

  useEffect(() => {
    const ws = new WebSocket(`ws://${window.location.hostname}:3001`);

    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      setCounters(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  // Function to simulate requests
  const simulateRequest = async (route: string) => {
    await fetch(`https://4e52-197-23-196-186.ngrok-free.app${route}`);
  };

  return (
    <div className="container">
      <h1>Realtime Dashboard</h1>
      <div className="grid">
        <div className="counter-card">
          <h2>Juice Requests</h2>
          <h3>{counters.juice}</h3>
        </div>
        <div className="counter-card">
          <h2>Chocolate Requests</h2>
          <h3>{counters.chocolate}</h3>
        </div>
      </div>
      <button onClick={() => simulateRequest('/juice')}>Simulate Juice Request</button>
      <button onClick={() => simulateRequest('/chocolate')}>Simulate Chocolate Request</button>
    </div>
  );
};

export default App;
