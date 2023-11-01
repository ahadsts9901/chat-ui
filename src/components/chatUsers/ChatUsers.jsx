import React from 'react'
import "./ChatUsers.css"
import "../chatScreen/ChatScreen.css"
import { ArrowLeft, ThreeDotsVertical, Search as SearchBs } from "react-bootstrap-icons"
import SingleChatUser from '../singleChatUser/SingleChatUser_'

const ChatUsers = () => {
  return (
    <div className='chatUsers'>
      <header>
        <div className='headSect'>
        <ArrowLeft/>
        <img className='chatScreenImg' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAMFBMVEXk5ueutLfp6+ymrbCrsbTBxsjT1tjX2tzGyszJzc/a3d6yuLu4vcC7wMPf4eLO0tRx/FlkAAAC+ElEQVR4nO2a0ZKrIAyGIQKCKL7/2y5tbbfbVk2oicws/8XZPTN78c1PEkOCUk1NTU1NTU1NTU1NTU1N/0Vw/wmbf8YvUH2w05g1+Xk4EQeGeeyMMfqq/IuZnDoFB5LVC8ZDxkR/Ckn3SrLgBGmU8ObJL00cRFnsKsmVJshFTVo3ZYGZpFCGbRBJmLSPkmFGEZSd85F0ZkShSAQwbGfQHxjHzOLQKBmGFwXwJJnFc54SeIItGaZnZEmRgpJzic8YCCRbeI2hkWQWy4ZCSaIFho0FX1seLDMXC5Ukiyt6h47OEhMLCrG43MSUSYD9Kv5hYQoYWqFbWCxLwAwlLHrkYSlB0ZqFpS8I3XxIFbF0jeWjmM6oBIWJpaY8IjZ1i3jqS011t6bvUdF3WjN1vBX1L1X1dVX1uzXdA2q6H9HvjYwTzYru01RjOG3JMBRjeOcvxMaBlYQ2r+OcBN1UzxxTYVsHxtLyJFR/Z5h6qFchhvAyrlxh4t6eRAxF1bQ/yqnt1q0xbP3TGsz6vpGtZdmgUT4a8woyzufsqEG56bqX1vd/bX/OfnrB6Wdvpyzr3Zl7+xvNk06lUIObg/fWWu/D7Pok/8ICVMpHM+muuzxneFL+f7TBJbGoSc7HqF9T6CmXTIx2Zq8xAEMYzefC8pbd1nEeWArrdnw0iCvHIRcT6l0tu3P8qw9QYe/bvIpjhyO9gRQIZ/NGo+1xdxOYCz158uaYuNlqDwg0R8RNog86PtOM34YNOHLurNN8+azrIFMWmK+sGY9EuWRUXwgDZUP3TXVlXXkOFQYVzR6gbC3CAQP0OSEWhjyVZ4iVBwyx7KHerRXD0O4tResZvAhTIpi4guUuvDGuYAlBEj5+yxZoNBjk2zvCeLBcEccyCKAgRzT8gXuDwdiSuAN3YUEYIxItFyGmVwJJdBNiLD4L2YJY6MAkhIKIXpCyBXFITB3UR5adrgrEwiVr73V60TuBQu0925cLXb27d4udoHaqHUhqx5empqampqYz9AOGsSRnmF9oWgAAAABJRU5ErkJggg==" alt="image" />
        <b>Ahad STS</b>
        </div>
        <div className='headSect'>
        <ThreeDotsVertical/>
        </div>
      </header>
      <form id='chatSearch'>
        <input type="search" placeholder='Search Here. . .' />
        <button type='submit'><SearchBs/></button>
      </form>
      <div className='chatUsersChats'>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
        <SingleChatUser/>
      </div>
    </div>
  )
}

export default ChatUsers