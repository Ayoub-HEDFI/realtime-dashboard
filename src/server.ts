import express, { Request, Response } from 'express';
import { createServer } from 'http';
import WebSocket from 'ws';

const app = express();
const httpServer = createServer(app);
const wss = new WebSocket.Server({ server: httpServer });

const counters = {
  juice: 0,
  chocolate: 0
};

app.get('/juice', (req: Request, res: Response) => {
  counters.juice++;
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(counters));
    }
  });
  res.send('Juice route accessed');
});

app.get('/chocolate', (req: Request, res: Response) => {
  counters.chocolate++;
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(counters));
    }
  });
  res.send('Chocolate route accessed');
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
