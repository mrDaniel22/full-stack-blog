import React from "react";
import { Image } from "@imagekit/react";
function IkImage({ endPoint, alt, w, h, src }) {
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
{
  /* <Image
      urlEndpoint={endPoint}
      src="https://ik.imagekit.io/Cs201108011/logo.png?tr=w-1920,c-at_max"
      className="w-8 h-6"
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
    /> */
}
export default IkImage;
