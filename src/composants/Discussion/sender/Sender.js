import React,{useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import { UsersContext } from '../../../ListPersonContext';

function Sender(props) {
const {auth} = useContext(UsersContext)
  return (
    <React.Fragment>
        {
          props.msg &&  
          <div className='flex my-3 justify-end me-4'>
          <div className='mt-2 flex space-x-3 items-center'>

        <div className='max-w-96 rounded-xl bg-blue-500 p-3'> 
        <p className='text-sm font-normal text-white normal-case'>
            {props.msg.content} 
        </p>
         </div>
           <Avatar
        alt="Remy Sharp"
        src={auth.image}
        sx={{ width: 25, height: 25 }}
        />

         </div>
        </div>
        }
       
    </React.Fragment>
  )
}

export default Sender