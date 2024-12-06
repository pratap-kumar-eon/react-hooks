import axios from 'axios';
import React,{useEffect, useState} from 'react'
const File_URl = 'https://jsonplaceholder.typicode.com/users';

function UseEffectsHook() {
  const [users, setUsers] = useState([])
  
    // useEffect(()=>{
    //     async function fetchData(){
    //     const response = await fetch(File_URl)
    //     const result = await response.json()
    //     setUsers(result);            
    // }
    // fetchData()
    // },[])

    useEffect(()=>{        
        axios.get(File_URl)
        .then((response)=>setUsers(response.data))
        .catch((err)=>{
            console.log(err);
            
        })        
    },[])
    
  return (
    <div>
        <h2>UseEffectsHook</h2>
        <ol>
            {
                users.map((user,id)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ol>
    </div>
  )
}
export default UseEffectsHook;