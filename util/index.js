import { scroller } from "react-scroll";

export const smoothScroll = elementName => {
  scroller.scrollTo(elementName, {
    duration: 1000,
    smooth: true,
    offset: -150
  });
};

export const utcTime = () => new Date().getTime();
