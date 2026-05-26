import React from "react";
import { Image } from "@imagekit/react";
function ImagePage({ src, alt, w, h }) {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      alt={alt}
      width={w}
      height={h}
    />
  );
}

export default ImagePage;
