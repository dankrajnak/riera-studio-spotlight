const Colors = {
  black: "#121212",
  white: "#efefef",
} as const;

type RGB = {
  r: number;
  g: number;
  b: number;
};

const hexToRGB = (hex: string): RGB => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});

type ColorsRGBType = {
  [K in keyof typeof Colors]: ReturnType<typeof hexToRGB>;
};

export const ColorsRGB = Object.keys(Colors).reduce(
  (sum, key) => ({
    ...sum,
    [key]: hexToRGB(Colors[key]),
  }),
  {}
) as ColorsRGBType;

export const RGBToString = ({ r, g, b }: RGB, opacity?: number): string =>
  `rgb${opacity == null ? "" : "a"}(${r},${g},${b}${
    opacity == null ? "" : `, ${opacity}`
  })`;

type ColorsOType = {
  [K in keyof typeof Colors]: (
    opacity?: number
  ) => ReturnType<typeof RGBToString>;
};

export const ColorsA = Object.keys(Colors).reduce(
  (sum, key) => ({
    ...sum,
    [key]: (opacity?: number) => RGBToString(ColorsRGB[key], opacity),
  }),
  {}
) as ColorsOType;

export default Colors;
