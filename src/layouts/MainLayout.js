import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const MainLayout = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <div>{props.children}</div>
      <br />
      <Footer />
    </div>
  );
};

export default MainLayout;
