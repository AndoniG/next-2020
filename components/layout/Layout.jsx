import { Container } from "semantic-ui-react";

import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
  </React.Fragment>
);

export default Layout;
