export interface Image {
  url: string;
  altText: string;
  width: number;
  height: number;
  format: "jpeg" | "png" | "gif" | "svg" | "jpg";
}

export interface SlideshowProps {
  slideImages: Image[];
  className: string;
}
