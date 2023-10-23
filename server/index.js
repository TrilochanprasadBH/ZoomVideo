const {Server} = require("socket.io");
const io= new Server(8080)

io.on("connection", (socket)=>{
    console.log("socket is connected, this is id",socket.id)
})
