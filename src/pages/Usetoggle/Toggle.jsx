
import { useTogglehook } from './useTogglehook'
import './toggle.css'
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from 'react-router';

export const Toggle = () => {
  const navigate = useNavigate()
   const {togglestate,handleToggle} = useTogglehook()
 const backbutton =()=>{
   navigate("/")
 }

  return (
    <div className='toogle-arrow'>
      <span onClick={backbutton} ><TbArrowBackUp/></span>
    <div className='toggle-main'>
       
        {togglestate ?
        <div className='btn'>
            <div>
            <h1>Welcome User..!</h1>
        </div>
        <div className='btn-2'>
            <button onClick={handleToggle} >Logout</button>
        </div>
        </div>
        :
        <div className='btn'>
        <div>
        <h1>Please Login</h1>   
       </div> 
       
         <div className='btn-1'>
        <button onClick={handleToggle}>Login</button>
          </div>
          </div>
         }
         </div>
    </div>
  )
}
