const {Server} = require("socket.io");
const io= new Server(8080, {
    cors:true 
})

io.on("connection", (socket)=>{
    console.log("socket is connected, this is id",socket.id)
})
