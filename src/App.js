import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import SinglePost from "./components/singlePost/SinglePost";
function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" ><Home /></Route>
        <Route exact path="/register" >{user?<Home/>:<Register />}</Route>
        <Route exact path="/login" >{user?<Home/>:<Login />}</Route>
        <Route exact path="/write" >{user?<Write />:<Register/>}</Route>
        <Route exact path="/settings" >{user?<Settings />:<Register/>}</Route>
        <Route exact path="/post/:postId"><SinglePost /></Route>
      </Switch>
    </Router>
  );
}

export default App;
