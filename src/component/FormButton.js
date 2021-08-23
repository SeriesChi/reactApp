import { Button } from "@material-ui/core";
import React from "react";

export default function FormButton(props) {
  return (
    <>
      <Button
        variant="outlined"
        color={props.color}
        onClick={props.handleSubmit}
      >
        {props.title}
      </Button>
    </>
  );
}
