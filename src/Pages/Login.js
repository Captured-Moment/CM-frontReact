import '../Assets/style.css';
import Header from '../Component/Header';
import LoginForm from './LoginForm';
import axios from 'axios';
import React, { Redirect, Component, useEffect,useState } from 'react';

// export default class Login extends Component{
const Login = () => {

  // axios 사용해서 서버랑 통신
  useEffect(() => {
    axiosTest();
  })

  const axiosTest = () => {
    axios.post("/signin", data)
    .then(res => 
      console.log(res.data))
    .catch(err=>console.log(err))
  }

  const data = {
    email: "capturedmoment@naver.com",
    pw: "appsapps"
  }

  const [user, setUser] = useState({email: "",password:""});
  const [error, setError] = useState("");

  const Logout = () => {
    setUser({
      email: "",
      password: ""
    });
  }

  const Login = details => {
    console.log(details);

    if(details.email === data.email && details.password===data.pw){
      console.log("LoggedIn");
      setUser({
        email: details.email,
        password: details.password
      })
    }else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  }


  return (
    <div>
      <Header />
      {(user.email !== "") ? (
        <div>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick="location.href='/'">GO MAIN</button>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  )
}

export default Login;
