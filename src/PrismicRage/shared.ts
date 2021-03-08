import { Exhibition } from "../generated/graphql";

export type PrismicRageImage = {
  alt: string | null;
  copyright: string | null;
  dimensions: { width: number; height: number };
  url: string;
};

export const getPrismicRageImage = (img: any): PrismicRageImage => {
  if (!img.url || typeof img.url !== "string") {
    throw new Error("img doesn't have required img property");
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

export type RageServiceReturn<
  T extends () => Promise<unknown>
> = ReturnType<T> extends Promise<infer P> ? P : never;
