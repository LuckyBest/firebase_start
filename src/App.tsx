import React from "react";
import { PagesRouter } from "./Router/PagesRouter";
import "./App.css";

export const App = (): JSX.Element => {
  const styles: Record<string, string> = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
  };

  return (
    <div style={styles}>
      <PagesRouter />
    </div>
  );
};

export default App;
