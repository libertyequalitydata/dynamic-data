import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
//import externals from 'rollup-plugin-node-externals'

const extensions = [".js"];

const pkg = require('./package.json');

const externalPackages = [
  //...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];
// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const regexesOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\/.*)?`));
/*
export default {
  external: regexesOfPackages,
  // ...
};
*/

export default [
  {
    external: regexesOfPackages,
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
      //externals(),
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
