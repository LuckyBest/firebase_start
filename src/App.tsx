import React from "react";
import { PagesRouter } from "./Router/PagesRouter";
import "./App.css";
import { LoginFormError } from "./components/ErrorsComponents/LoginFormError";

export const App = (): JSX.Element => {
  const styles: Record<string, string> = {
    position: "relative",
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
  };

  return (
    <div style={styles}>
      <LoginFormError />
      <PagesRouter />
    </div>
  );
};

export default App;
