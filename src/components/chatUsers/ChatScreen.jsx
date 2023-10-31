import React from 'react'
import "./ChatScreen.css"
import { ArrowLeft, PlusLg, ThreeDotsVertical } from 'react-bootstrap-icons'
import { IoMdSend } from "react-icons/io"

const ChatScreen = () => {
  return (
    <div className='chat'>
      <header>
        <div className='headSect'>
        <ArrowLeft/>
        <img className='chatScreenImg' src="" alt="image" />
        <b>Ahad STS</b>
        </div>
        <div className='headSect'>
        <b className='lastSeen'>9:30 AM</b>
        <ThreeDotsVertical/>
        </div>
      </header>
     
    <form action="" id="send">
      <input hidden type="file" id='chatFile' />
      <label htmlFor="chatFile">
        <PlusLg className='ChatInputIcon'/>
      </label>
      <input type="text" placeholder='Type a message' className='chatInput' />
      <button className='chatButton' type='submit'>
        <IoMdSend style={{fontSize:"1.5em"}}/>
      </button>
    </form>

    </div>
  )
}

export default ChatScreen