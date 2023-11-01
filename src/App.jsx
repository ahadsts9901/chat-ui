import { useState } from 'react'
import './App.css'
import ChatScreen from './components/chatScreen/ChatScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatScreen/>
    </>
  )
}

export default App
