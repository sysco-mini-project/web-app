
import CustomAppBar from "../../componenets/appBar";
import { LayoutView } from "./style";

const Layout = ({ children, ...rest }) => {


  return (
    <LayoutView>
      <CustomAppBar></CustomAppBar>
      <main className="contents">{children}</main>
    </LayoutView>
  );
};

export default Layout;