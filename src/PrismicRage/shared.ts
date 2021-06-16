import { ImageLoader } from "next/image";

export type PrismicRageImage = {
  alt: string | null;
  copyright: string | null;
  dimensions: { width: number; height: number };
  url: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getPrismicRageImage = (img: any): PrismicRageImage => {
  if (!img.url || typeof img.url !== "string") {
    throw new Error(
      `img doesn't have required url property. ${JSON.stringify(img)}`
    );
  }
  let url: string = img.url;
  const questionIndex = url.indexOf("?");
  if (questionIndex !== -1) {
    url = url.substr(0, questionIndex);
  }
  return {
    ...img,
    url,
  };
};

export const imgixLoader: ImageLoader = ({ src, width, quality }) => {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params: Record<string, string> = {
    auto: "format",
    fit: "max",
    width: width?.toString(),
  };

  if (quality) {
    params.q = quality.toString();
  }
  const url = new URL(src);
  const passedParams = url.searchParams;

  // Override all default params.
  for (const [key, val] of passedParams.entries()) {
    params[key] = val;
  }
  return `${url.protocol}//${url.host}${url.pathname}?${new URLSearchParams(
    params
  ).toString()}`;
};

export type RageServiceReturn<T extends (...arg0: any) => Promise<unknown>> =
  ReturnType<T> extends Promise<infer P> ? P : never;
