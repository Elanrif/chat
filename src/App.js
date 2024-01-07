import './App.css';
import {useEffect, useState } from 'react';
import {UsersContext } from './ListPersonContext';
import Chat from './composants/Chat';
import { Routes, Route, useNavigate } from "react-router-dom";
import Discussion from './composants/Discussion';
import Login from './composants/Forms/Login';
import Register from './composants/Forms/Register';
import axios  from 'axios';
import Default from './composants/Discussion/Default';

function App() {

  const authenticate = sessionStorage.getItem("auth") ? JSON.parse( sessionStorage.getItem("auth")) : null ; 

  const [auth,setAuth] = useState({
    id : 0,
    name:'',
    password:''
  }) 

  const navigate = useNavigate()

  const [persons, setPersonnes] = useState([])

  const [receiver, setReceiver] = useState({})

  const loadReceiver = (person)=>{
    setReceiver(person)
  }
  
  const handleload = ()=>{
    axios.get("http://localhost:8080/persons")
    .then((res) => {
      
      const persons = res.data.filter(person => person.id !== auth.id);
      setPersonnes(persons)
      })
      .catch((err) => {
        console.log(err);
      })
  }

useEffect(() => {
  handleload()
  !authenticate && navigate("/")
}, [])


useEffect(() => {
  authenticate && setAuth(authenticate)
  authenticate && handleload()
}, [auth.id])


  return (
    <>
    {persons.length > 1 &&
    <UsersContext.Provider value = {{persons,handleload,loadReceiver,receiver,setAuth,auth}}>
     <Routes>
            <Route path="/chat" element={<Chat />} >
              <Route index  element={<Default/>}/>
              <Route path=":personID" element={<Discussion/>}/>
          </Route>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
 </UsersContext.Provider>}
    </>
  );
}

export default App;
