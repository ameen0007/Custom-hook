import { useState } from 'react'


export const useTogglehook = () => {
  
  const [state , setstate] = useState(false)

  const handleToggle = ()=>{
    setstate ((prev)=> prev = !prev)
  }
   
  return {
     handleToggle,
     togglestate : state
  }
  
} 