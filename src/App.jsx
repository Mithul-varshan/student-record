import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./App.css"


function App() {
  const [username,setusername] = useState("");
  const [password,Setpassword] = useState("");
  const navigate = useNavigate();

  const handlelogin = () => {
    if(username === "mithul" && password === "1234")
    {
      navigate("/student-record/details")
    }
    else{
      alert("Invalid Credentials")
      setusername("");
      Setpassword("");
    }
  }

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <input className="username-input" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)}></input>
      <input className="password-input" placeholder="Password" value={password} onChange={(e) => Setpassword(e.target.value)}></input>
      <button className="login-btn" onClick={handlelogin}>Login</button>
    </div>
  )
}

export default App
