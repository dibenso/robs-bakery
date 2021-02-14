import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { Jumbotron } from "react-bootstrap";
import { Motion, spring } from "react-motion";
import {
  FaPhoneAlt,
  FaMailBulk,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYelp,
  FaRegLightbulb,
  FaWater,
  FaShuttleVan
} from "react-icons/fa";
import { Element } from "react-scroll";
import Layout from "../components/layout";
import Services from "../components/services";
import ContactForm from "../components/contactForm";
import { APP_NAME } from "../constants";

const styles = {
  jumbotronText: { fontSize: 40, textAlign: "center" },
  section: { textAlign: "center", backgroundColor: "black", paddingTop: "10px", paddingBottom: "10px" },
  sectionHeaderText: { fontWeight: "bold" },
  sectionText: { fontSize: 18, marginLeft: 30, marginRight: 30 },
  sectionImage: { width: "50%", maxHeight: "500px" },
  contactItem: { textDecoration: "none" },
  aboutIcon: { padding: "10px" },
  fbLikeShare: { margin: 20 },
  policyTerms: { margin: 20 }
};

const PictureCarousel = dynamic(() => import('../components/carousel'), { ssr: false });

export default function Home() {
  return (
    <Layout isIndexPage>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The Best Detailing Service Around Somerset, New Jersey. We Come To You And Provide Our Own Water And Electricity"
        />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingsofshinellc.com/" />
        <meta property="og:image" content="https://kingsofshinellc.com/images/logo.jpg" />
        <meta property="og:description" content="Mobile Detailing Near Somerset, New Jersey" />
        <meta property="fb:app_id" content="165428122010707" />
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
      <Jumbotron fluid style={{ ...styles.section, marginTop: "20px" }}>
        <Motion defaultStyle={{ opacity: 0.1 }} style={{ opacity: spring(1, { stiffness: 20, damping: 10 }) }}>
          {interpolatingStyle => (
            <div>
              <h1 style={{ ...styles.jumbotronText, opacity: interpolatingStyle.opacity }}>We Come To You,</h1>
              <h1 style={{ ...styles.jumbotronText, opacity: interpolatingStyle.opacity }}>
                Providing Our Own Water And Electricity.
              </h1>
              <div>
                <FaShuttleVan
                  color="white"
                  size={200}
                  style={{ ...styles.aboutIcon, opacity: interpolatingStyle.opacity }}
                />
              </div>
              <FaWater color="white" size={100} style={{ ...styles.aboutIcon, opacity: interpolatingStyle.opacity }} />
              <FaRegLightbulb
                color="white"
                size={100}
                style={{ ...styles.aboutIcon, opacity: interpolatingStyle.opacity }}
              />
            </div>
          )}
        </Motion>
      </Jumbotron>
      <Element name="about">
        <Jumbotron fluid style={styles.section}>
          <h1 style={styles.sectionHeaderText}>What We Do?</h1>
          <p style={styles.sectionText}>
            Our company is a unique mobile detailing service trained to detail cars, vans, motorcycles, and trucks
            inside and out. Not only do we travel to you, but we ONLY use the highest quality products to assure the
            best detailing experience. We provide our own electricity and water creating minimal work for you! We
            provide a variety of packages, offering different services so you can decide what best fits for your
            vehicle. No matter the package, satisfaction is guaranteed.
          </p>
          <PictureCarousel />
        </Jumbotron>
      </Element>
      <Jumbotron fluid style={styles.section}>
        <h1 style={styles.sectionHeaderText}>Our Mission</h1>
        <p style={styles.sectionText}>
          Here at, Kings of Shine, our mission is to provide high quality detailing services to your front door, office
          parking lot, or wherever is most convenient for you. We take the hassle out of going to the car wash by
          bringing the shine to you!
        </p>
        <img
          src="images/handshake.png"
          alt="Handshake"
          style={{ ...styles.sectionImage, width: "100%", borderRadius: "10px" }}
        />
      </Jumbotron>
      <Element name="services">
        <Jumbotron fluid style={styles.section}>
          <h1 style={{ ...styles.sectionHeaderText, textAlign: "center", marginBottom: "20px" }}>Our Services</h1>
          <Services />
        </Jumbotron>
      </Element>
      <Element name="contact">
        <Jumbotron fluid style={styles.section}>
          <div style={styles.section}>
            <h1 style={styles.sectionHeaderText}>Contact Us</h1>
            <div style={{ marginBottom: "15px" }}>
              <a href="tel:1-914-217-2507" style={styles.contactItem}>
                <FaPhoneAlt />
                {" (914) 217-2507"}
              </a>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <a href="mailto:kingsofshine@outlook.com" style={styles.contactItem}>
                <FaMailBulk />
                {" KingsofShine@outlook.com"}
              </a>
            </div>
            <a href="https://www.facebook.com/KingsofShine-444130726167039/" style={styles.contactItem}>
              <FaFacebookSquare size={60} color="white" />
            </a>
            <a href="https://www.instagram.com/kingsofshine_llc/" style={styles.contactItem}>
              <FaInstagramSquare size={60} color="white" />
            </a>
            <a
              href="https://www.yelp.com/biz/kings-of-shine-mobile-detailing-franklin-township"
              style={styles.contactItem}>
              <FaYelp size={60} color="white" />
            </a>
            <div style={styles.fbLikeShare}>
              <div
                className="fb-like"
                data-href="https://kingsofshinellc.com/"
                data-width="80"
                data-layout="button_count"
                data-action="like"
                data-size="large"
                data-share="true"
              />
            </div>
            <ContactForm />
          </div>
        </Jumbotron>
      </Element>
      <div id="contact" style={styles.section}>
        <footer>
          <p>Kings Of Shine © 2021</p>
          <Link href="/policy" style={styles.policyTerms}>
            Privacy Policy
          </Link>
          {` | `}
          <Link href="/terms" style={styles.policyTerms}>
            Terms of Service
          </Link>
        </footer>
      </div>
    </Layout>
  );
}
