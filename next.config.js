module.exports = {
  i18n: {
    // support locales
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: {
    loader: "imgix",
    path: "",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
};
