import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8000 })

wss.on('connection', (ws) => {
    console.log('got connection ')
  ws.on('message', (message) => {
    console.log(`Received: ${message}`)
    ws.send(`You sent: ${message}`)
  })

})