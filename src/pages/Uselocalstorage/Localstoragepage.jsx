import { useRef, useState,useEffect } from "react";
import { useLocalstorage } from "./uselocalstorage";
import "./local.css";
import { useTogglehook } from "../Usetoggle/useTogglehook";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router";

export const Localstorage = () => {
   const inputref = useRef()

  const navigate = useNavigate()
  const [userdata, setuserdata] = useState({
    userage: "",
    username: "",
  });
  const { Setitem, Getitem} = useLocalstorage();
  const { handleToggle, togglestate } = useTogglehook();
  const [field, setField] = useState({
    firstname: "",
    age: "",
  });

  useEffect(() => {
    inputref.current.focus()
  }, [])
  
  const backbutton =()=>{
    navigate("/")
  }
  const handleChange = (event) => {
    setField((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(field);
  };

  const Save = () => {
    if (field.firstname==""){
      alert("Please fill the form")
    }
    if (field.age ==""){
      alert("Please fill the form")
      return
    }
    Setitem("name", field.firstname);
    Setitem("age", field.age);
    setField({ firstname: "", age: "" });
      alert("Your details have been set succesfully")
     handleToggle();
  };

  const getdetails = () => {
    const userage = Getitem("age");
    const username = Getitem("name");
    if (userage != null && username != null) {
      setuserdata({
        userage: userage,
        username: username,
      });
    }
  };
  return (
    <div>
      <div className="toogle-arrow">
      <span  onClick={backbutton} ><TbArrowBackUp/></span>
      </div>
      {!togglestate ? (
        <div className="local-main">
          <div>
            <h1>Set your Details in Local Storage</h1>
          </div>
          <div className="label">
            <label htmlFor="">Enter your Name</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="firstname"
              value={field.firstname}
              ref={inputref}
            />
          </div>
          <div className="label">
            <label htmlFor="">Enter your Age</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="age"
              value={field.age}
              
            />
          </div>
          <div>
            <button onClick={Save}>Save</button>
          </div>
        </div>
      ) : (
        <div className="local-main">
          <div>
            <h1>Get your Details from local storage</h1>
          </div>
          <div>
            <button onClick={getdetails}>GET</button>
          </div>
          {userdata.userage && userdata.username && (
            <div className="message">
              <h1>Hi {userdata.username}!</h1>
              <h1>your age is {userdata.userage}?</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
