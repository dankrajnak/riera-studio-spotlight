import { getPlaiceholder } from "plaiceholder";
import { getPrismicRageImage, PrismicRageImage } from "./shared";

export interface PrismicRageImageWithBlur extends PrismicRageImage {
  blurDataURL: string;
}

// CAN ONLY BE USED IN getStaticProps.  SHOULD NOT RUN ON CLIENT
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getPrismicRageImageWithPlaceholder = async (
  img: any
): Promise<PrismicRageImageWithBlur> => {
  const rageImage = getPrismicRageImage(img);
  const { base64 } = await getPlaiceholder(rageImage.url);
  return {
    ...rageImage,
    blurDataURL: base64,
  };
};
