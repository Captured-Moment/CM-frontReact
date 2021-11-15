import { Route, Switch, BrowserRouter} from "react-router-dom";
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
import Footer from "./Component/Footer";
import axios from 'axios';
import { Component } from "react";

export default class App extends Component {

  state = {};
  componentDidMount = () =>{
    axios.get('user').then(
        res => {
          this.setState({
            user: res.data
          });
        },
        err => {
          console.log(err);
        }
    )

  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={() => <Main user={this.state.user} />} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="/signup" component={SignUp} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/mypost" component={MyPost} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/newpost" component={NewPost} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
