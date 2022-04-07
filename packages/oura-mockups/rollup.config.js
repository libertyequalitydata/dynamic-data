import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js"];

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/esm/bundle.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions }),
      babel({
        babelHelpers: "bundled",
        include: ["src/**/*.js"],
        extensions,
        exclude: "./node_modules/**",
      }),
    ],
  },
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/cjs/bundle.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions }),
      babel({
        babelHelpers: "bundled",
        include: ["src/**/*.js"],
        extensions,
        exclude: "./node_modules/**",
      }),
    ],
  },
];
