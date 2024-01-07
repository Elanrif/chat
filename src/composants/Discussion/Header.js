import React,{userContext,useState,useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UsersContext } from '../../ListPersonContext';

function Header(props) {

        const person = props.person

  return (
    <div className='px-5 flex mt-5 items-center justify-between'>
       <div className='flex space-x-3 items-center'>
         <Avatar
        alt="Remy Sharp"
        src={person.image}
        sx={{ width: 45, height: 45 }}
        />
        <div className='text-blue-500 font-semibold uppercase overflow-hidden'> 
        <h1>{person.name}</h1>
        <p className='text-sm font-normal text-black normal-case'>{person.metier}</p>
         </div>
       </div>

        <div>
        <SearchIcon className='me-2 hover:cursor-pointer' sx={{color:'gray'}}/>
        <FavoriteBorderIcon className='me-2 hover:cursor-pointer' sx={{color:'gray'}}/>
        <NotificationsNoneIcon className='me-2 hover:cursor-pointer' sx={{color:'gray'}}/>
        </div>
    </div>
  )
}

export default Header