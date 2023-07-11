import "./App.css"
import Home from "./pages/Home"
import { Rooms } from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/rooms" Component={Rooms} />
        <Route exact path="/rooms/:slug" Component={SingleRoom} />

        <Route path="*" Component={Error} />
      </Routes>
    </>
  )
}

export default App
