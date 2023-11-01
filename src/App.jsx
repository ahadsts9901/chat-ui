import { useState } from 'react'
import './App.css'
import ChatUsers from './components/chatUsers/ChatUsers'
// import ChatScreen from './components/chatScreen/ChatScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ChatScreen/> */}
      <ChatUsers/>
    </>
  )
}

export default App
