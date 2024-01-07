import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';

function Default() {
  return (
    <div className='flex text-slate-500 w-full items-center justify-center p-7'>
          <div className='max-w-[30rem] text-center mx-auto'>
            <DiamondIcon sx={{ fontSize: 100}}/>
            <h1 className='text-lg'> EL-Manar Discussion </h1>
            <p className='mt-5 text-light'>
                 Bienvenue dans note site web,forum de Discussion.
                 commencer a parder avec vos amis proches, et partager 
                 vos moments.Echanger avec des inconnues , partager vos 
                 expériences.
            </p>
          </div>
    </div>
  )
}

export default Default