import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const MyComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      {theme}
      <br />
    </>
  );
};

export default MyComponent;
