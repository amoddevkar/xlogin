import './App.css';
import { useState } from "react";
function App() {
  const name = "user"
  const pass = "password"
  const [err, setErr] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (username == name && password == pass) {
      setMsg(true)
    } else setErr(true)
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      {msg ? <p>Welcome, user!</p> :
        <>
          {err && <p>Invalid username or password</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Username:</label>
            <input id="name" type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} required />
            <br />
            <label htmlFor='pass'>Password:</label>
            <input id="pass" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} required />
            <br />
            <button type="submit" >Submit</button>
          </form></>
      }

    </div >
  );
}

export default App;
