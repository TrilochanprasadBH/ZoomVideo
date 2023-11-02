import { useCallback, useEffect, useState } from "react"
import { useSocket } from "../context/SocketProvider"
import ReactPlayer from "react-player";
import { useRef } from "react";
import peer from "../service/peer";


const Room = () => {
  const [userSocketId, setUserSocketId]= useState(null);
  const [MyStream, SetMyStream]= useState(null);
  const videoRef = useRef()
    const socket = useSocket();

  const handleAnotherUser = useCallback(({email, id})=>{
            console.log(`this person email ${email} and id ${id}joined room`);
            setUserSocketId(id);
  },[])

  const handleCallUser= useCallback(async()=>{
        //to call means we need to stream ourself now , hence 
       try {
        const stream = await navigator.mediaDevices.getUserMedia({audio:true, video:true})
        SetMyStream(stream);
        if(videoRef.current){
            videoRef.current.srcObject = stream 
        }
       } catch (error) {
        console.log("Error accessing a web cam", error);
       }
       
  },[])

  useEffect(()=>{
    socket.on('user:joined', handleAnotherUser)

    return ()=>{
        socket.off('user:joined', handleAnotherUser)
    }
    //cleaner function using return 

  },[socket, handleAnotherUser])
  
    return (
    <div>
        {userSocketId ? 'You are connected':'Only you in this room'}
        {userSocketId && <button onClick={handleCallUser}>CALL</button>}
        {/* {MyStream &&  <video ref={videoRef} autoPlay playsInline muted width="350px" height="350px"></video> } */}
        {MyStream && (<><h4>This is my video</h4> <ReactPlayer playing muted width={"300px"} height={"300px"} url={MyStream}/></>)}
    </div>
  )
}

export default Room 