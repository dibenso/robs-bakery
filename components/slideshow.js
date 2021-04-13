import { Carousel } from "react-bootstrap";

export default function Slideshow() {
  return (
    <Carousel pause={false} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block"
          src="/images/cupcakes.webp"
          alt="Cupcakes"
          style={{ width: "80%", margin: "0 auto" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src="/images/icing.webp" alt="Icing" style={{ width: "80%", margin: "0 auto" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/images/foils.webp"
          alt="Cupcake Foils"
          style={{ width: "80%", margin: "0 auto" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}
