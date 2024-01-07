import React,{useContext,useEffect,useReducer} from 'react'
import Avatar from '@mui/material/Avatar';
import { UsersContext } from '../../ListPersonContext';
import {Link } from 'react-router-dom';



const handleReducer = (state,action)=>{

      switch(action.type){

        case 'clicked':
        return{
            ...state,
            background : 'bg-slate-200',
            receiver: action.receiver
          }
          
        default : 
        throw Error('Unknown action: ' + action.type);
      }
}


function Persons() {

 const [state, dispatch] = useReducer( handleReducer, {id:0,background : '',receiver:{}})

const {persons,loadReceiver} = useContext(UsersContext)

useEffect(() => {
  loadReceiver(state.receiver)
}, [state.receiver.id])


  return (
    <div className='mt-3'>
        <ul role="list" className="py-6 px-2 divide-y divide-slate-200">
   {persons.map((person,index)=>(
        <React.Fragment key={index}>
              {/*  Remove top/bottom padding when first/last child  */}
            <Link 
            to={`/chat/${person.id}`}
            onClick={()=> dispatch({type:'clicked',receiver:person})}
            className={`${state.receiver.id == person.id && state.background} flex py-4 hover:cursor-pointer hover:rounded-xl px-3 hover:bg-slate-200 duration-300 `}>
                 <Avatar
                    alt="Remy Sharp"
                    src={person.image}
                    sx={{ width: 40, height: 40 }}
                    />
            <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-blue-500">{person.name} </p>
                <p className="text-sm text-slate-500 truncate">{person.email}</p>
            </div>
            </Link>
        </React.Fragment>
   ))}
    </ul>
</div>
  )
}

export default Persons