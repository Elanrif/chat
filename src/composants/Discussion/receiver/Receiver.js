import React,{useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import { UsersContext } from '../../../ListPersonContext'; 

function Receiver(props) {
const {receiver} = useContext(UsersContext)

  return (
    <React.Fragment>
       {
          props.msg &&
          <div className='flex my-3 space-x-3 items-center'>
         <Avatar
        alt="Remy Sharp"
        src={receiver.image}
        sx={{ width: 25, height: 25 }}
        />
        <div className='max-w-96 rounded-xl bg-slate-100 p-3'> 
        <p className='text-sm font-normal text-black normal-case'> 
         {props.msg.content}
        </p>
         </div>
       </div>
        }
    </React.Fragment>
  )
}

export default Receiver