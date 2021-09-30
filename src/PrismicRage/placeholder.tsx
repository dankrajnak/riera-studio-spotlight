import { getPlaiceholder, IGetPlaiceholderReturn } from "plaiceholder";
import { getPrismicRageImage, PrismicRageImage } from "./shared";

export interface PrismicRageImageWithBlur extends PrismicRageImage {
  blurDataURL: string;
}

export type ImageWithBlur = {
  img: PrismicRageImage;
  blurs: IGetPlaiceholderReturn;
};

// CAN ONLY BE USED IN getStaticProps.  SHOULD NOT RUN ON CLIENT
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getPrismicRageImageWithPlaceholder = async (
  img: any
): Promise<ImageWithBlur> => {
  const rageImage = getPrismicRageImage(img);

  const blurs = await getPlaiceholder(rageImage.url);

  return {
    img: rageImage,
    blurs,
  };
};
