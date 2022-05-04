import React from "react";
import { PagesRouter } from "./Router/PagesRouter";
import "./App.css";
import { ErrorComponent } from "./components/ErrorsComponents/ErrorComponent";

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
      <ErrorComponent />
      <PagesRouter />
    </div>
  );
};

export default App;
