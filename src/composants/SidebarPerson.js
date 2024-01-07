import React from 'react'
import Header from './ListDesign/Header'
import SearchBar from './ListDesign/Search'
import Persons from './ListDesign/Persons'

function SidebarPerson() {
  return (
    <div className='w-[270px] ps-3 bg-slate-50'>
        <Header/>
        <SearchBar/>
        <Persons/>
    </div>
  )
}

export default SidebarPerson