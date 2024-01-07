import React,{useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import { UsersContext } from '../../ListPersonContext';
import AccountMenu from './AccountMenu';
function Header() {

 const {auth} = useContext(UsersContext)
  return (
    <div className='flex mt-5 items-center justify-between'>
       <div className='flex space-x-3 items-center'>
         <Avatar
        alt="Remy Sharp"
        src={auth.image}
        sx={{ width: 45, height: 45 }}
        />
        <div className='text-blue-500 font-semibold uppercase overflow-hidden'> 
        <h1>{auth.name}</h1>
        <p className='text-sm font-normal text-black normal-case'>{auth.metier}</p>
         </div>
       </div>
        <AccountMenu/>
    </div>
  )
}

export default Header