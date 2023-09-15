import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

export const useDirection = () => {
  const navigate = useNavigate()
    const [userinput,setuserinput] = useState("")
    const [aftercheck,setaftercheck] = useState(false)
    const [checkdir,setcheckdir] = useState("ltr")

    const handlesave =(e)=>{
      setuserinput(e.target.value)
      
    }
     
    const Check =()=>{
      
      if (userinput ==""){
        alert("Enter any text")
        return
      }else{
         setaftercheck(true)
         
      }
    }

    const Htmldata = useRef(document.documentElement)
    
    const change =()=>{
       if (checkdir === "ltr"){
        Htmldata.current.setAttribute("dir","rtl")
        setuserinput(userinput)
        setcheckdir("rtl")
        console.log(checkdir, "changed rtl");
       }else{
        Htmldata.current.setAttribute("dir","ltr")
        setuserinput(userinput)
        setcheckdir("ltr")
        console.log(checkdir,"changed ltr");
       } 
    }
    const backbtn =()=>{
      navigate("/")
      Htmldata.current.setAttribute("dir","ltr")
    }
   
return{
    Check,
    handlesave,
    userinput,
    aftercheck,
    userinput,
    change,
   checkdir,
   backbtn,
}
}
