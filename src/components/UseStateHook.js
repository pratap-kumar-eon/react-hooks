// increment and decrement of a number

import {React,useState} from 'react'

function UseStateHook() {
  const [count,setCount] = useState(0)
  return (
    <div>
        <p>Count: {count}</p>
        <div><button onClick={()=>setCount(count+1)}>Increment</button></div>
        <div><button onClick={()=>count>0 && setCount(count-1)}>Decrement</button></div>
    </div>
  )
}
export default UseStateHook;