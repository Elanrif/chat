import React ,{useState}from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {

  return (
    <div className='relative mt-3 px-2'>
       <div className={`absolute top-1 left-4`}>
         <SearchIcon sx={{ color : 'gray'}}/>
       </div>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
    </div>
  )
}

export default Search