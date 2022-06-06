import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'


const App = () => {
  return (
    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>
    </div>
  )
}

export default App