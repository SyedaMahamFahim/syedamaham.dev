import clientConfig from "./sanity-client-config";
import imageUrlBuilder from "@sanity/image-url";

export const builder = imageUrlBuilder(clientConfig);


export function urlFor(source: any) {
  return builder.image(source);
}

  

