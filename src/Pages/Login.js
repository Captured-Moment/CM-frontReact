// import React, { useEffect } from 'react';
// import '../Assets/style.css';
// import Header from '../Component/Header';
// import Footer from '../Component/Footer';
// import axios from 'axios';

// function Login() {
//     useEffect(()=>{
//         const email = document.getElementById("email");
//             const password = document.getElementById('pw')
//             axios({
//                 method:"POST",
//                 url: 'https://reqres.in/api/login',
//                 data:{
//                     "email": email.value,
//                     "password": password.value
//                 }
//             }).then((res)=>{
//                 console.log(res);
//             }).catch(error=>{
//                 console.log(error);
//                 throw new Error(error);
//             });
//         }
//     )

//     const bigLogo = {
//         width: "80px",
//         height: "80px",
//         backgroundRepeat: "noRepeat",
//         maxWidth: "980px",
//         padding: "5px",
//         margin: "0 auto",
//         position: "relative",
//         marginTop: "80px"
//     }
//     const Pagelogin = {
//         marginTop: "80px",
//         marginBottom: "20px",
//         display: "flex"
//     }
//     const password = {
//         marginBottom: "20px",
//         display: "flex"
//     }
//     const btnLogin = {
//         display: "block",
//         alignItems: "center",
//         background: "#A96280",
//         fontSize: "15px",
//         width: "306px",
//         height: "39px"
//     }
//     const spanBar = {
//         margin: "0 auto",
//         textAlign: "center",
//         marginTop: "20px",
//         marginBottom: "30px",
//         fontSize: "13px",
//         fontWeight: "300",    
//         width: "320px",
//         paddingBottom: "20px", 
//         borderBottom: "1px solid #c4c4c4"
//     }
//     const kakaoLogin = {
//         position: "relative",
//         display: "block",
//         alignItems: "center",
//         width: "306px",
//         height: "39px",
//         margin: "0 auto",
//         marginTop: "30px",
//         borderRadius: "10px",
//         // border: "none",
//         color: "#000000",
//         background: "#FDE500",
//         border: "1px solid rgba(0,0,0,0.3)",
//         fontSize: "15px"
//     }
    
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


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Login;