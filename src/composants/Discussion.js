import React,{useState,useEffect,useContext} from 'react'
import Header from './Discussion/Header'
import Dialog from './Discussion/Dialog'
import Footer from './Discussion/Footer'
import { UsersContext } from '../ListPersonContext'
import { MessageContext } from '../MessageContext'
import axios from 'axios'

function Discussion() {

  const [messages, setMessages] = useState(null)
  const {auth,receiver} = useContext(UsersContext)

useEffect(() => {
  
  loadMessages()
}, [auth.id,receiver.id])

const loadMessages = ()=>{
   
  axios.get("http://localhost:8080/messages", {
    params: {
      sender: auth.id,
      receiver: receiver.id,
    }
  })
  .then((res) => {
    setMessages(res.data);
    console.log("dialog :",res.data)
  })
  .catch((err) => {
    console.error(err);
  });

}

  return (
   <>
    {receiver &&
     <MessageContext.Provider value={{messages,loadMessages}}>
     <div className='w-full relative bg-slate-50'>
       <Header person = {receiver}/>
       <Dialog person = {receiver}/>
      <div className='absolute w-full bottom-0'>
         <Footer person = {receiver}/>
      </div>
    </div>
    </MessageContext.Provider>
    }
   </>
  )
}

export default Discussion