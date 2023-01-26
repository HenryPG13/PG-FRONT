import { io } from 'socket.io-client'

const socket = io("http://henry-pf-backend-production.up.railway.app")

export { socket }