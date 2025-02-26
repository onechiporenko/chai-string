import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import mocha from "eslint-plugin-mocha";
import n from "eslint-plugin-n";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.node } } },
  pluginJs.configs.recommended,
  {
    plugins: {
      n,
    },
  },
  {
    files: ["test/**/*.js"],
    plugins: {
      mocha,
    },
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
  prettier,
];
