module.exports = {
  presets: [
    ["@babel/preset-env", {}],
    [
      "@babel/env",
      {
        targets: {
          node: 12,
        },
      },
    ],
  ],
};
