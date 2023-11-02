import React from 'react'
import {Routes,Route} from "react-router-dom";
import LobbyScreen from '../screens/LobbyScreen';
import Room from '../screens/Room';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LobbyScreen/>}/>
        <Route path='/room/:roomId' element={<Room/>}/>
    </Routes>
  )
}

export default AllRoutes