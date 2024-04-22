import { Slideshow } from "../../components/Slider/slideshow";
import { imageHome } from "../../assets/img/images";
import { Image } from "../../types/types";

const Images: Image[] = [
  {
    url: imageHome[0],
    altText: "Glass Railing System",
    width: 5760,
    height: 3240,
    format: "png",
  },
  {
    url: imageHome[1],
    altText: "Steel Railing System",
    width: 1536,
    height: 1536,
    format: "jpg",
  },
  {
    url: imageHome[2],
    altText: "Aluminum Railing System",
    width: 1920,
    height: 1080,
    format: "jpeg",
  },
];

export const Home = () => {
  return (
    <main>
      <Slideshow slideImages={Images} className="" />
    </main>
  );
};
