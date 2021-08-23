import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";

function SnackBarMsg() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };
  return (
    <React.Fragment>
      {}
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant("success")}>
        Show success snackbar
      </Button>
    </React.Fragment>
  );
}

export default function NotiStack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackBarMsg />
    </SnackbarProvider>
  );
}
