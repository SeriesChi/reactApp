import { TextField } from "@material-ui/core";
import React from "react";

export default function FormInput(props) {
  return (
    <>
      <TextField
        required
        id="filled-required"
        onChange={props.onChangeText}
        {...props}
        variant="outlined"
      />
    </>
  );
}
