import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import CreatePage from './Pages/CreatePage'
import HomePage from './Pages/HomePage'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
