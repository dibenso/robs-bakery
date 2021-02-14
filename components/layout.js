import { Container, Navbar, Nav } from "react-bootstrap";
import { FaInstagramSquare, FaFacebookSquare, FaYelp } from "react-icons/fa";
import { scroller } from "react-scroll";
import { APP_NAME } from "../constants";

const styles = {
  appContainer: { backgroundColor: "black" },
  navbar: { backgroundImage: "linear-gradient(#9c052d, #330100)" },
  navbarBrand: { color: "#ffffff", textShadow: "3px 3px #000000", fontWeight: "bold", fontSize: "30px" },
  navbarLinks: { float: "right", textAlign: "right", fontWeight: "bold", marginLeft: "20px" }
};

const smoothScroll = elementName => {
  scroller.scrollTo(elementName, {
    duration: 1000,
    smooth: true,
    offset: -150
  });
};

export default function Layout({ isIndexPage, children }) {
  return (
    <div id="home" style={styles.appContainer}>
      <Navbar variant="dark" style={styles.navbar} expand="lg" sticky="top">
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
                <Nav.Link href="#services" style={styles.navbarLinks} onClick={() => smoothScroll("services")}>
                  Services
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
                <Nav.Link href="/#services" style={styles.navbarLinks}>
                  Services
                </Nav.Link>
                <Nav.Link href="/#about" style={styles.navbarLinks}>
                  About
                </Nav.Link>
                <Nav.Link href="/#home" style={styles.navbarLinks}>
                  Home
                </Nav.Link>
              </div>
            )}
            <div>
              <Nav.Link
                href="https://www.yelp.com/biz/kings-of-shine-mobile-detailing-franklin-township"
                style={{ ...styles.navbarLinks, display: "inline-block" }}>
                <FaYelp size={30} color="white" />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/kingsofshine_llc/"
                style={{ ...styles.navbarLinks, display: "inline-block" }}>
                <FaInstagramSquare size={30} color="white" />
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/KingsofShine-444130726167039/"
                style={{ ...styles.navbarLinks, display: "inline-block" }}>
                <FaFacebookSquare size={30} color="white" />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>{children}</Container>
    </div>
  );
}
