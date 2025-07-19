import React, {useState} from 'react'

const App = () => {

  let [count,setCount]=useState(0)

  function click(){
    if (count<10) {
      setCount(count+1)
      
    }
  }
  function Dclick(){
    if (count>0) {
      setCount(count-1)
      
    }
  }


  return (
    <div>
      <div>App{count}</div>
      <button onClick={click}>Click</button>
      <button onClick={Dclick}>DClick</button>

    </div>
  )
}

export default App