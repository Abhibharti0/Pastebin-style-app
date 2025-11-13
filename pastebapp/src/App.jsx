import { useState } from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import ViewPaste from './assets/components/ViewPaste'
import Pastes from './assets/components/Pastes'


const router =createBrowserRouter(
[
  {
    path:"/",
    element:
    <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path:"/pastes",
    element:
    <div>
       <Navbar />
      <Pastes />
    </div>
  },
  {
    path:"/paste/:pasteId",
    element:
    <div>
       <Navbar />
      <ViewPaste />
    </div>
  }
]
)


function App() {
  

  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
