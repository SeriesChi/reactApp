import React, { useState } from "react";
import { postData } from "../../api/CommonApi";
import { createSignUp } from "../../api/Link";
import FormButton from "../../component/FormButton";
import FormInput from "../../component/FormInput";
// import NotiStack from "../../component/NotiStact";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();
  const [signUpData, setSignUpData] = useState({
    name: null,
    userName: null,
    address: null,
    phoneNumber: null,
    password: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onChangeText = (event) => {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  };

  // const setMsg = () => {
  //   console.log("indes");
  //   setShowAlert(true);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setMsg();
    postData(
      createSignUp,
      signUpData,
      (res) => {
        console.log("User Successfully Created");
        history.push("/");
      },
      (err) => {
        console.log(JSON.stringify(err, null, 2));
      }
    );
  };
  return (
    <>
      <h3>SignUp</h3>
      <form className="formRow">
        <div className="width-100">
          <FormInput
            label="Name"
            name="name"
            className="width-50"
            value={signUpData.name}
            onChangeText={onChangeText}
          />
        </div>

        <div className="width-100">
          <FormInput
            label="Username"
            name="userName"
            className="width-50"
            value={signUpData.userName}
            onChangeText={onChangeText}
          />
        </div>

        <div className="width-100">
          <FormInput
            label="Address"
            name="address"
            className="width-50"
            value={signUpData.address}
            onChangeText={onChangeText}
          />
        </div>

        <div className="width-100">
          <FormInput
            label="Phone Number"
            name="phoneNumber"
            className="width-50"
            type="number"
            value={signUpData.phoneNumber}
            onChangeText={onChangeText}
          />
        </div>

        <div className="width-100">
          <FormInput
            label="Password"
            name="password"
            className="width-50"
            type="password"
            value={signUpData.password}
            onChangeText={onChangeText}
          />
        </div>
      </form>
      <FormButton
        title="Sign Up"
        color="primary"
        loading={isLoading}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
