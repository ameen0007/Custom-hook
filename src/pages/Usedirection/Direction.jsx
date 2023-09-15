
import './direction.css'
import { useDirection } from './useDirection'
import { TbArrowBackUp } from "react-icons/tb";
import { useEffect, useRef } from 'react';

export const Direction = () => {

  const inputref = useRef()
  useEffect(() => {
      inputref.current.focus()
  }, [])
  
  
  const {Check,handlesave,userinput,aftercheck,change,checkdir,backbtn} = useDirection()
 

  return (
    <div>
      <div className='direct-icon'>
      <span onClick={backbtn}><TbArrowBackUp/></span>
      </div>
      { !aftercheck ?
      <div className='direct-main'>
        <div >
          <h1 className='label' >Check your Text "dir" direction</h1>
          </div>
          <div >
            <input ref={inputref} onChange={handlesave} value={userinput} type="text"/>
          </div>
          <div>
            <button onClick={Check} >Check</button>
          </div>
      </div>
      :
      <div className='Name'>
        <h1>your text dir value is "{checkdir}"</h1>
        <div className='dirinput'>
         <h1>"{userinput}"</h1>
         </div>
         <div className='btn'>
          <button onClick={change}>{checkdir === "ltr" ? "Change to rtl ?"  : "?Change to ltr "}</button>
         </div>
      </div>
          }
    </div>
  )
}
