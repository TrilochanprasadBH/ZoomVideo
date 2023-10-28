import { createContext, useContext, useMemo } from "react";
import {io} from "socket.io-client";
import PropTypes from "prop-types"; // Import PropTypes


const SocketContext = createContext(null);


export const  useSocket = ()=> {
    const socket = useContext(SocketContext);
    return socket
}


 export const SocketProvider=({children})=>{
    
    const socket = useMemo(()=>io('localhost:8080'),[])
    //the localhost server our node server is running on 

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}


SocketProvider.propTypes = {
    children: PropTypes.node.isRequired, // Prop validation for children
  };
  
  //this is the recommended way to ensure that your components follow best practices and have proper prop validation.