import React ,{useState} from "react";
import "../App.css";


const Login =(props)=>
{ const [enteredName, setEnteredName] = useState("");
const [enteredAge, setEnteredAge] = useState("");
const usernameEntered = (event) => {
    setEnteredName(event.target.value);
  };
  const ageEntered = (event) => {
    setEnteredAge(event.target.value);
  };
  const isLoggedIn =()=>
  {
      props.isLoggedIn();
  }
const onSubmitHandler = (event) => {
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length == 0 ||
      +enteredAge < 1
    ) {
      return;
    }
    event.preventDefault();
    localStorage.setItem("username",enteredName);

    setEnteredName("");
    setEnteredAge("");
    console.log(localStorage.getItem('username'));
  };
    return(
        <div >
        <form  className="login" onSubmit={onSubmitHandler}>
        <label htmlFor="username"> Username</label>
        <input 
          id="username"
          type="text"
          value={enteredName}
          onChange={usernameEntered}
        ></input>
        <label htmlFor="Age">Password</label>
        <input
          id="Age"
          type="numbers"
          value={enteredAge}
          onChange={ageEntered}
        ></input>
        <button style={{marginTop:"5px",padding:"2px"}} onClick={isLoggedIn} type="submit"> LOGIN</button>
      </form>
      </div>
        
    )
}


export default Login ;
