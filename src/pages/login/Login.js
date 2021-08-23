import React, { useState } from "react";
import { postData } from "../../api/CommonApi";
import { readLoginUser } from "../../api/Link";

export default function Login() {
  const initialState = { userName: null, password: null };
  const [loginData, setLoginData] = useState(initialState);

  // const onChangeText = (prop) => (event) => {
  //   setLoginData({ ...loginData, [prop]: event.target.value });
  // };

  const onChangeText = (event) => {
    console.log(event.target.name, "target name");
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("inside login");
    console.log(loginData, "login data");

    // let data = {
    //   userName: loginData.userName,
    //   password: loginData.password,
    // };

    // // let data = new FormData();
    // // data.append("userName", loginData.userName);

    // postData(
    //   readLoginUser,
    //   data,
    //   (res) => {
    //     console.log(res.data, "res");
    //   },
    //   (err) => {
    //     console.log(JSON.stringify(err, null, 2));
    //   }
    // );
  };
  return (
    <>
      <h3>Login</h3>
      <form>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="userName"
            value={loginData.userName}
            // onChange={onChangeText("userName")}
            onChange={(event) => onChangeText(event)}
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            // onChange={onChangeText("password")}
            onChange={(event) => onChangeText(event)}
            placeholder="Enter Password"
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  );
}
