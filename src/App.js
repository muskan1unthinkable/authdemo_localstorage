import { useState ,useEffect} from 'react';
import './App.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn,setIsLoggedIn]= useState(false);
  // console.log(isLoggedIn)
  useEffect(()=>
  { const loggedinfo= localStorage.getItem("username");
  // localStorage.removeItem("username");
    console.log(loggedinfo)
    if(loggedinfo!==null)
    setIsLoggedIn(true)

  },[isLoggedIn])
  const onLogout=()=>
  { 
    setIsLoggedIn(false)

  }
  const  onLogin=()=>
  {
    setIsLoggedIn(true)
  }
  return (
    <> 
    
    {isLoggedIn===false ? <Login isLoggedIn={onLogin}/>:<Navbar isLoggedOut={onLogout}/>}
    

   
    </>
  );
}

export default App;
