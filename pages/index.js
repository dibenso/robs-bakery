import { useState, useEffect } from "react";
import Head from "next/head";
import { Jumbotron, Button } from "react-bootstrap";
import { FaMailBulk, FaPhoneAlt, FaFacebookSquare, FaInstagramSquare, FaYelp } from "react-icons/fa";
import Layout from "../components/layout";
import Menu from "../components/menu";
import ContactForm from "../components/contactForm";
import { smoothScroll } from "../util";
import { APP_NAME } from "../constants";

const styles = {
  jumbotronText: { fontSize: 50 },
  header: {
    background: "url(images/background.jpg) center center fixed",
    margin: 0,
    height: "100vh"
  },
  section: {
    paddingLeft: "5%",
    paddingRight: "5%",
    textAlign: "center",
    color: "black",
    marginBottom: 0,
    fontSize: "1.5rem"
  }
};

export default function Home() {
  const [degrees, setDegrees] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (degrees === 360) setDegrees(0);
      else setDegrees(currentDegrees => currentDegrees + 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout isIndexPage>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Customized Cakes and Cupcakes ✨" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />
        <meta property="fb:app_id" content="" />
      </Head>
      <div id="fb-root" />
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=3740384169408901&autoLogAppEvents=1"
        nonce="YQqhaBhv"
      />
      <script async src="https://www.instagram.com/embed.js" />
      <Jumbotron fluid style={styles.header} id="home">
        <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <h1 style={{ ...styles.jumbotronText, fontWeight: "bold", color: "black" }}>{`Welcome To ${APP_NAME}`}</h1>
          <p style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>The most delicious bakery around!</p>
          <p style={{ marginTop: "20vh" }}>
            <Button variant="primary" size="lg" block onClick={() => smoothScroll("menu")}>
              Check out our menu
            </Button>
            <Button variant="secondary" size="lg" block onClick={() => smoothScroll("contact")}>
              Get in touch with us
            </Button>
          </p>
        </div>
      </Jumbotron>
      <Jumbotron fluid style={{ ...styles.section, backgroundColor: "#ff80c0" }} id="about">
        <img
          src="/images/donut.png"
          alt="Donut"
          style={{ marginBottom: 50, width: 250, height: 250, transform: `rotate(${degrees}deg)` }}
        />
        <div style={styles.section}>
          <p>
            {`${APP_NAME} seeks to bring quality fresh bakery foods to our customers. We're committed to providing unique treats to everyone. Stop by today to try out some of our delicious desserts, cookies, cakes, and more!`}
          </p>
        </div>
      </Jumbotron>
      <Jumbotron fluid style={{ ...styles.section, backgroundColor: "#d1aed7" }} id="menu">
        <h1>Our Delicious Menu</h1>
        <Menu />
      </Jumbotron>
      <Jumbotron id="contact" fluid style={{ paddingTop: 0, marginBottom: 0, backgroundColor: "#bac5e2" }}>
        <img src="/images/melting.png" alt="Melting Chocolate" style={{ width: "100%" }} />
        <div style={styles.section}>
          <h1 style={styles.sectionHeaderText}>Contact Us</h1>
          <div style={{ marginBottom: 20 }}>
            <a href="https://www.instagram.com/emilias.cakeandbake/?hl=en" style={styles.contactItem}>
              <FaInstagramSquare size={120} color="#53230c" />
            </a>
          </div>
          <ContactForm />
        </div>
      </Jumbotron>
    </Layout>
  );
}
