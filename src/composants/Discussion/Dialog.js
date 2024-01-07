import React,{useState,useEffect, useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import Sender from './sender/Sender';
import Receiver from './receiver/Receiver';
import { UsersContext } from '../../ListPersonContext';
import { MessageContext } from '../../MessageContext';
import axios from 'axios';

function Dialog() {
    
const {messages,loadMessages} = useContext(MessageContext)
const {auth,receiver} = useContext(UsersContext)


  return (
    <div className='ps-5 mt-9'>
     
     {messages && messages.map((message,index)=>{
      return(
        <React.Fragment key={index}>
            {
              message.sender.id === auth.id ? 
              <Sender msg={message}/>:<Receiver msg={message}/>
            }
        </React.Fragment>
      )
     })}

  {/*     <Sender message="bonjour jeune fille comment allez vous ? , j'espère que vous allez bien."/>
      <Sender message="je cherche une personne qui répond au nom de Manar, c'est vous n'est ce pas ? "/>
      <Sender message="je veux te marier,tu me plais et je suis une personne qui travaille et qui a une situation très bonne."/>

      <Receiver message=" ummmm...oui c'est moi , je suis un enfant , je ne sais pas cuisiner. je ne connais pas ces choses là. 
        je ne sais pas faire le ménage, je ne sais pas manger ni dormir."/>
        
          <Sender message="tu es très belle, mais c'est pas un problème, on peut apprendre ça. par le temps tu apprendras ne t'inquiète pas."/>
          <Receiver message = "je sais juste cuisiner les oeufs , et le thé."/>

 */}
    </div>
  )
}

export default Dialog