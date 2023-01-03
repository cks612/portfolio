import React, { FC } from "react";
import Footer from "../Footer";
import Gnb from "../Gnb";

interface childrenProps {
  children: React.ReactNode;
}
const Layout: FC<childrenProps> = ({ children }) => {
  return (
    <div className="bg-primary">
      <Gnb />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
