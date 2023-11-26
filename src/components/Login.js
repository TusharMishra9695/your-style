import React,{useState} from 'react'
import axios from "axios"
export default function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

function login(){
  //  const formData  = new FormData;
  //  formData.append("username","kminchelle")
  //  formData.append("password","0lelplR")
  const formData = {
    username: 'kminchelle',
    password: '0lelplR',
  }
   console.log(formData,"formData")

  axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`,formData).then((res)=>{
    console.log(res,"res")
  })
//   fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'kminchelle',
//     password: '0lelplR',
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then(console.log("hits"));
  console.log("btn  call");
}

  return (
    <div className='login_model'>
      <div className='inside_login'>
      <input type="text" name="username" id="username" placeholder='Username = ' value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className='inside_login'>
      <input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button type="submit" className='login_btn cursor' onClick={login}>Login</button>
      </div>
    </div>
  )
}
