import React, { FC } from "react";
import Footer from "../Footer";
import Gnb from "../Gnb";

interface childrenProps {
  children: React.ReactNode;
}
const Layout: FC<childrenProps> = ({ children }) => {
  return (
    <>
      <Gnb />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
