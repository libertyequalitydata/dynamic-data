import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js"];

export default [
  {
    input: "src/index.js",
    output: [
      {
        exports: "auto",
        dir: "dist/cjs",
        format: "cjs",
      },
      {
        dir: "dist/esm",
        format: "esm",
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
