import { Container, Navbar, Nav } from "react-bootstrap";
import { smoothScroll } from "../util";
import { APP_NAME } from "../constants";

const styles = {
  appContainer: { backgroundColor: "white" },
  navbarBrand: {
    color: "#ffffff",
    textShadow: "3px 3px #000000",
    fontWeight: "bold",
    fontSize: "30px",
    fontFamily: "BrandFont"
  },
  navbarLinks: { float: "right", textAlign: "right", fontWeight: "bold", marginLeft: "20px" },
  trueFluid: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    marginRight: "auto",
    marginLeft: "auto"
  }
};

export default function Layout({ isIndexPage, children }) {
  return (
    <div id="home" style={styles.appContainer}>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/" style={styles.navbarBrand}>
          {APP_NAME}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {isIndexPage ? (
              <div>
                <Nav.Link href="#contact" style={styles.navbarLinks} onClick={() => smoothScroll("contact")}>
                  Contact
                </Nav.Link>
                <Nav.Link href="#menu" style={styles.navbarLinks} onClick={() => smoothScroll("menu")}>
                  Menu
                </Nav.Link>
                <Nav.Link href="#about" style={styles.navbarLinks} onClick={() => smoothScroll("about")}>
                  About
                </Nav.Link>
                <Nav.Link href="#home" style={styles.navbarLinks} onClick={() => smoothScroll("home")}>
                  Home
                </Nav.Link>
              </div>
            ) : (
              <div>
                <Nav.Link href="/#contact" style={styles.navbarLinks}>
                  Contact
                </Nav.Link>
                <Nav.Link href="/#menu" style={styles.navbarLinks}>
                  Menu
                </Nav.Link>
                <Nav.Link href="/#about" style={styles.navbarLinks}>
                  About
                </Nav.Link>
                <Nav.Link href="/#home" style={styles.navbarLinks}>
                  Home
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid style={styles.trueFluid}>
        {children}
      </Container>
    </div>
  );
}
