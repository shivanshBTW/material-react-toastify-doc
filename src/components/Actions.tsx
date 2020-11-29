import React from "react";
import { Button, Container } from "./Actions.styles";

type Fn = () => void;

interface ActionsProps {
  showToast: Fn;
  updateToast: Fn;
  clearAll: Fn;
  handleReset: Fn;
}

export const Actions: React.FC<ActionsProps> = (props) => {
    let {clearAll, handleReset, showToast, updateToast}=props
  return (
    <Container>
      <Button lookAtMe onClick={showToast}>
        <span role="img" aria-label="show alert">
          🚀
        </span>{" "}
        Show Toast
      </Button>
      <Button onClick={updateToast}>
        <span role="img" aria-label="update"></span> Update
      </Button>
      <Button onClick={clearAll}>
        <span role="img" aria-label="clear all">
          💩
        </span>{" "}
        Clear All
      </Button>
      <Button onClick={handleReset}>
        <span role="img" aria-label="reset options">
          🔄
        </span>{" "}
        Reset
      </Button>
    </Container>
  );
};
