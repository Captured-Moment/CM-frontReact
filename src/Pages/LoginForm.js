import React, {useState} from "react";

function LoginForm({Login,error}) {
    const [details, setDetails] = useState({email:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <img style={bigLogo} src={require('../Assets/images/BigLogo.svg').default} alt="" />

            <div className="form-group">
                <input id="email" type="email" name="email" style={Pagelogin} placeholder="Email"
                onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
            </div>
            <div className="form-group">
                <input id="password" type="password" style={password} placeholder="Password"
                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>

            <button type="submit" style={btnLogin} value="LOGIN">Login</button>
            <div style={spanBar}>
              <span>비밀번호 찾기</span><span>&nbsp;|&nbsp; </span>
              <a style={{textDecoration: "none", color: "black"}} href="/signup">회원가입</a>
            </div>
            <button style={kakaoLogin} type="button" value="카카오로 로그인" onclick="alert('로그인시도')">카카오로 로그인</button>
        </form>

    )
}


export default LoginForm;

// 해당 페이지 CSS
const bigLogo = {
    width: "80px",
    height: "80px",
    backgroundRepeat: "noRepeat",
    maxWidth: "980px",
    padding: "5px",
    margin: "0 auto",
    position: "relative",
    marginTop: "50px"
  }
  const Pagelogin = {
    marginTop: "50px",
    marginBottom: "15px",
    textAlign: "center",
    display: "flex",
    color: "black"
  }
  const password = {
    marginBottom: "15px",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    color: "black"
  }
  const btnLogin = {
  position: "relative",
  display: "block",
  alignItems: "center",
  width: "306px",
  height: "39px",
  margin: "0 auto",
  marginTop: "15px",
  borderRadius: "10px",
  // border: "none",
  color: "#000000",
  background: "#A96280",
  border: "1px solid rgba(0,0,0,0.3)",
  fontSize: "15px"
  }
  const spanBar = {
    margin: "0 auto",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "15px",
    fontSize: "13px",
    fontWeight: "300",    
    width: "320px",
    paddingTop: "20px", 
    borderTop: "1px solid #c4c4c4"
  }
  const kakaoLogin = {
    position: "relative",
    display: "block",
    alignItems: "center",
    width: "306px",
    height: "39px",
    margin: "0 auto",
    marginTop: "10px",
    borderRadius: "10px",
    // border: "none",
    color: "#000000",
    background: "#FDE500",
    border: "1px solid rgba(0,0,0,0.3)",
    fontSize: "15px"
  }