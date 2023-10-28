import  {useCallback, useState} from 'react'

const LobbyScreen = () => {
  const [email,setEmail]=useState("");
  const [room, setRoom]=useState(""); 

  const handleSubmit= useCallback((e)=>{
   e.preventDefault()
    console.log({email, room});
  },[email, room]) 
 
  //if dependecny is not given useCallback will run only on initial render [] , and upon changing input email room also , 
  //console wont show updated values as dependency is empty 
  
  
  
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
