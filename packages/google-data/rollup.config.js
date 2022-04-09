import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [".js"];

export default {
  input: ["src/index.js"],
  output: [
    {
      //file: "dist/esm/bundle.js",
      dir: "dist/esm",
      format: "esm",
      preserveModules: true,
      sourcemap: true,
    },
    {
      //file: "dist/esm/bundle.js",
      exports: "auto",
      dir: "dist/cjs",
      format: "cjs",
      preserveModules: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      include: ["src/**/*.js"],
      extensions,
      exclude: "./node_modules/**",
    }),
  ],
};
