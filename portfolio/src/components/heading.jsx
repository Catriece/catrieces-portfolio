import React from "react";

const Heading = ({ name }) => {
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: "65px",
        fontFamily: "Source Code",
        fontWeight: 900,
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 0,
      }}
    >
      {name}
    </p>
  );
};

export default Heading;
