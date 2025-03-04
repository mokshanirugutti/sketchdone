import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8000 })

wss.on('connection', (ws, request) => {
  const url = request.url;
  if(!url){
    return;
  }
  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token');
  


    console.log('got connection ')
  ws.on('message', (message) => {
    console.log(`Received: ${message}`)
    ws.send(`You sent: ${message}`)
  })

})