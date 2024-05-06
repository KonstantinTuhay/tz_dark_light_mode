import React, { useContext } from "react";

const MyComponent = ({ ThemeContext }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      {theme}
      <br />
    </>
  );
};

export default MyComponent;
