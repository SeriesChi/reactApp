import React, { useState } from "react";
import { postData } from "../../api/CommonApi";
import { readLoginUser } from "../../api/Link";
import FormInput from "../../component/FormInput";
import FormButton from "../../component/FormButton";

export default function Login() {
  const initialState = { userName: null, password: null };
  const [loginData, setLoginData] = useState(initialState);
  const [msg, setMsg] = useState();

  // const onChangeText = (prop) => (event) => {
  //   setLoginData({ ...loginData, [prop]: event.target.value });
  // };

  const onChangeText = (event) => {
    console.log(event.target.name, "target name");
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    // event.preventDefault();
    console.log("inside login");
    console.log(loginData, "login data");

    postData(
      readLoginUser,
      loginData,
      (res) => {
        console.log(res.data.msg, "res");
        console.log(res, "data");
        console.log(res.data.token, "token");
        setMsg(res.data.msg);
        localStorage.setItem("token", res.data.token);
      },
      (err) => {
        console.log(JSON.stringify(err, null, 2));
      }
    );
  };
  return (
    <>
      <h3>Login</h3>
      {/* <div>{msg}</div> */}
      <form>
        <div className="width-100">
          <FormInput
            label="User Name"
            name="userName"
            className="width-50"
            value={loginData.userName}
            onChangeText={onChangeText}
          />
        </div>
        <div className="width-100">
          <FormInput
            label="Password"
            name="password"
            type="password"
            className="width-50"
            value={loginData.password}
            onChangeText={onChangeText}
          />
        </div>
        <FormButton
          title="Sign In"
          color="primary"
          handleSubmit={handleLogin}
        />
      </form>
    </>
  );
}
