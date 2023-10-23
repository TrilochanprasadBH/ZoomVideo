import React from 'react'
import {Routes,Route} from "react-router-dom";
import LobbyScreen from '../screens/LobbyScreen';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LobbyScreen/>}/>
    </Routes>
  )
}

export default AllRoutes