import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </React.Fragment>
  );
};

export default Layout;
