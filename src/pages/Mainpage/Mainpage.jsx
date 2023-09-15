
import { useNavigate } from 'react-router'
import './mainpage.css'
export const Mainpage = () => {
    
    const navigate = useNavigate()

   const handletoggle =()=>{
       navigate('/toggle')
   }
   const handlestorage =()=>{
    navigate('/localstorage')
}
const handledirection =()=>{
    navigate('/direction')
}


  return (
    <div className='main-container'>
        <div>
            <button onClick={handletoggle} >Toggle</button>
        </div>
        <div>
            <button onClick={handlestorage}>Localstorage</button>
        </div>
        <div>
           <button onClick={handledirection}>Direction</button>
        </div>
    </div>
  )
}
