// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage"

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>

    </>
  )
}

export default App
