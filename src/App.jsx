// import React, {useState} from 'react'

// const App = () => {

//   let [count,setCount]=useState(0)

//   function click(){
//     if (count<10) {
//       setCount(count+1)
      
//     }
//   }
//   function Dclick(){
//     if (count>0) {
//       setCount(count-1)
      
//     }
//   }


//   return (
//     <div>
//       <div>App{count}</div>
//       <button onClick={click}>Click</button>
//       <button onClick={Dclick}>DClick</button>

//     </div>
//   )
// }

// export default App
// import React,{useState} from 'react'

// const App = () => {

//   const [show,setShow]=useState(true);

//   function click(){
//     setShow(!show)

//   }


//   return (

//     <div>
//       <button className='bg-red-400 p-2 mt-20 ml-10 curser-pointer' onClick={click}>{show? "Show": "Hidden" }</button>
 
//     {
      
//        show? <p>Lorem ipsum dolor sit amet consectetur
//          adipisicing elit. Tenetur, dolorum.</p> :""
//     }
    
    
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'


const App = () => {
  let [count,setCount]=useState(true)

  setInterval(() => {
    setCount(!count)
    
  },1000);

  return (
    <div>
      {
        count?<div className='w-[100%] h-[100vh] bg-red-600'><h1 className='text-[200px]'>Saharian Nafis</h1></div> 
        :<div className='w-[100%] h-[100vh] bg-lime-400'><h1 className='text-[200px]'>Developer</h1></div>
      }
      
      
    </div>
  )
}

export default App