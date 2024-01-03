import React from "react";
import "./mobile.accessibility.css";
import mobileImg from "../../../assets/images/mobile/mobilehomeimg.png";
import LanguagesComponent from "../../../components/languages.component";

const MobileView = () => {
  return (
    // <main>
    //   <img
    //     src={mobileImg}
    //     alt="Catriece's memoji"
    //     style={{
    //       width: "100%",
    //     }}
    //   />
    //   <body
    //     id="heading-div"
    //     role="main"
    //     aria-label="Headings"
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <h1
    //       id="Introduction"
    //       aria-label="Introduction"
    //       style={{ fontFamily: "Quattrocento" }}
    //     >
    //       I'm Catriece
    //     </h1>
    //     <h2
    //       id="Job-Title"
    //       aria-label="Job Title"
    //       style={{ fontFamily: "Lora", textAlign: "center" }}
    //     >
    //       A FRONTEND SOFTWARE DEVELOPER
    //     </h2>
    //     <h3
    //       id="Role-Description"
    //       aria-label="Role Description"
    //       style={{ fontFamily: "QuattrocentoSans" }}
    //     >
    //       here to code your ideas into reality
    //     </h3>
    //   </body>
    //   <LanguagesComponent height={"35px"} width={"35px"} />
    // </main>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        SORRY TO MISS YOU! MY PORTFOLIO IS CURRENTLY UNDER CONSTRUCTION
      </h1>
      <h2>If you could, come back tomorrow</h2>
    </div>
  );
};

export default MobileView;
