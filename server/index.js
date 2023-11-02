const {Server} = require("socket.io");
const io= new Server(8080, {
    cors:true 
})

//to track which email is in which room 
 const emailToSocket = new Map();
 const SocketToEmail = new Map(); 



io.on("connection", (socket)=>{
    console.log("socket is connected, this is id",socket.id)
    //receiving from server 
    socket.on('room:join', (data)=>{
        console.log(data);
        const {email, room}= data 
        emailToSocket.set(email, socket.id)
        SocketToEmail.set(socket.id, email)
        
        //when another  user joins same room we need to emit and notify existing user , for tht 
        io.to(room).emit('user:joined', {email, id:socket.id})
        socket.join(room); 
      
        //sending room join event from backend 
        io.to(socket.id).emit('room:join', data); 
       
    })
})

