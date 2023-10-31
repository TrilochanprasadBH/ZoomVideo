import  {useCallback, useState, useEffect} from 'react'
import { useSocket } from '../context/SocketProvider';

const LobbyScreen = () => {
  const [email,setEmail]=useState("");
  const [room, setRoom]=useState(""); 

    const socket = useSocket();
    console.log(socket);


  const handleSubmit= useCallback((e)=>{
   e.preventDefault()
    console.log({email, room});
    socket.emit('room:join', {email, room});
    //sending data to server 
  },[email, room, socket]) 
 
  //if dependecny is not given useCallback will run only on initial render [] , and upon changing input email room also , 
  //console wont show updated values as dependency is empty 
  const handleJoinRooms= useCallback((data)=>{
   const {email, room } = data  
   console.log(email, room); 
  },[])
  
  
  useEffect(()=>{
        socket.on('room:join', handleJoinRooms)

        return ()=>{
          socket.off('room:join', handleJoinRooms)
        }
  },[socket, handleJoinRooms])
  
  
  return (
    <div>
      <h3>Video Lobby</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' />
        <br />
        <label htmlFor='room'>Room</label>
        <input value={room} onChange={(e)=>setRoom(e.target.value)} type="number" id='room' />
        <br />
        <button>Join Room</button>
      </form>
    </div>
  )
}

export default LobbyScreen 
