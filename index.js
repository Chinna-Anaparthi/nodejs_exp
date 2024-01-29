const WebSocket = require('ws');

const server = new WebSocket.Server({port : 8099})
server.on('connection', (ws) => {
  console.log('Client connected');

  
  setInterval(()=>
  {
    ws.send("hello world!")
  },3000)
})
