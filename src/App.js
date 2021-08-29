// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/pages/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import NotiStack from "./component/NotiStact";

function App() {
  const getToken = localStorage.getItem("token");
  console.log(getToken, "__________________________")

  return (
    <div className="App">
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <NotiStack /> */}
      <Router>
        
      <Navbar />
        {console.log(getToken, "__")}
        {getToken? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/signIn" component={Login} />
          </Switch>
        ) : (
          <Login />
          )}
          <Route exact path="/signUp" component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
