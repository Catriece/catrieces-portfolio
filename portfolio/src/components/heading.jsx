import React from "react";

const Heading = ({ name }) => {
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: "65px",
        fontFamily: "Bebas Neue",
        fontWeight: 900,
        marginTop: "50px",
        marginRight: "auto",
        marginBottom: 15,
        marginLeft: "auto",
        letterSpacing: "10px",
      }}
    >
      {name}
    </p>
  );
};

export default Heading;
