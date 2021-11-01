import '../Assets/style.css';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import axios from 'axios';
import React, { Redirect, Component } from 'react';

export default class Login extends Component {
  state = {}

    handleSubmit = e => {   
        e.preventDefault();

        const data = {
            email: this.email,
            pw: this.password
        }

        axios.post('signin',data)
        .then(
            res => {
                localStorage.setItem('token', res.data.token);  
                this.setState({
                    loggedIn: true
                })
            }
        )
        .catch (
            err => {
                console.log(err);
            }
        )
        
    }

    render() {
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

    if(this.state.loggedIn) {
        return <Redirect to={'/'} />;
    }
      
    return (
      <div>
        <Header />
        <div>
          <form onSubmit={this.handleSubmit}>
            <img style={bigLogo} src={require('../Assets/images/BigLogo.svg').default} alt="" />
              
              <div className="form-group">
                  {/* <label>Email</label> */}
                  <input type="email" style={Pagelogin} placeholder="Email"
                      onChange={e => this.email = e.target.value}></input>
              </div>
              <div className="form-group">
                  <input type="password" style={password} placeholder="Password"
                      onChange={e => this.password = e.target.value}></input>
              </div>
              
              <button style={btnLogin}>Login</button>

              <div style={spanBar}>
                <span>비밀번호 찾기</span><span>&nbsp;|&nbsp; </span>
                <a style={{textDecoration: "none", color: "black"}} href="/signup">회원가입</a>
              </div>

              <button style={kakaoLogin} type="button" value="카카오로 로그인" onclick="alert('로그인시도')">카카오로 로그인</button>
          </form>
        </div>
        <Footer />
      </div>
      )
  }

}
// function Login() {
    
    
//     return (
//         <div>
//             <Header />
//             <div>
//                 <img style={bigLogo} src={require('../Assets/images/BigLogo.svg').default} alt="" />
//                 <form>
//                     <input style={Pagelogin} type="text" name="email" placeholder="아이디" />
//                     <input style={password} type="password" name="password" placeholder="비밀번호" />
//                     <input style={btnLogin} type="button" value="로그인" onclick="alert('로그인시도')" />
//                     <div style={spanBar}>
//                         <span>비밀번호 찾기</span><span>&nbsp;|&nbsp; </span>
//                         <a style={{textDecoration: "none", color: "black"}} href="/signup">회원가입</a>
//                     </div>
//                 </form>

//                 <input style={kakaoLogin} type="button" value="카카오로 로그인" onclick="alert('로그인시도')" />
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default Login;
