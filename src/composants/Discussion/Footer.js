import React,{useState,useContext} from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { UsersContext } from '../../ListPersonContext';
import { MessageContext } from '../../MessageContext';

function Footer() {

  const [ msg, setMsg] = useState({
    content : ''
   })

   const {auth,receiver,handleload} = useContext(UsersContext)
   const {loadMessages} = useContext(MessageContext)

 const handleChange = (e) => {

    const { name, value } = e.target;

    setMsg((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {

    e.preventDefault()

    axios.post("http://localhost:8080/messages", null,{
    params: {
      content:msg.content,
      sender_id: auth.id,
      receiver_id: receiver.id,
    }
  })
  .then((res) => {
    // Traitement des messages
    console.log(res.data);
    handleload()
    loadMessages()

    setMsg({
      content:''
    })
  })
  .catch((err) => {
    console.error(err);
  })

  }


  return (
    <form className='flex py-3 px-4 bg-white justify-between items-center' onSubmit={handleSubmit}>
        <div className='relative w-full'>

        <input className="placeholder:italic w-full placeholder:text-slate-400 block bg-white  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm" placeholder="Taper un message..." 
        type="text" name="content" value={msg.content}
        onChange={handleChange}/>
         </div>

         <Button 
         type="submit"
         variant="contained" 
         className="me-3" 
         sx={{width:30,height:30, borderRadius: '50%' }} 
         endIcon={<SendIcon />}
          />
    </form>
  )
}

export default Footer