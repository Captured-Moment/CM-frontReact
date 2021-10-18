import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Main from './Pages/Main';
import MyAccount from './Pages/MyAccount';
import MyPage from './Pages/MyPage';
import MyPost from './Pages/MyPost';
import NewPost from './Pages/NewPost';
import Search from './Pages/Search';
import SignUp from './Pages/SignUp';
import Timeline from './Pages/Timeline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/signup" component={SignUp} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/mypost" component={MyPost} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/newpost" component={NewPost} />
      </BrowserRouter>
    </div>
  );
}

export default App;
