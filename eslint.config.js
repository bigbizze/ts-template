// noinspection JSUnusedLocalSymbols
const { defineConfig, globalIgnores } = require("eslint/config");

const tseslint2 = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");
const noNullPlugin = require("eslint-plugin-no-null");
const jsdocPlugin = require("eslint-plugin-jsdoc");
const unusedImports = require("eslint-plugin-unused-imports");
const importNewlines = require("eslint-plugin-import-newlines");
const globals = require("globals");
const { includeIgnoreFile } = require("@eslint/compat");
const appRootPath = require("app-root-path");
const { resolve } = require("path");
const stylistic = require("@stylistic/eslint-plugin");

const gitignorePath = resolve(appRootPath.path, ".gitignore");

const ignores = [
  "node_modules/",
  "types/supabase/supabase.ts",
  "public/",
  ".*/",
  "!.storybook/",
  "aws/cdk/",
  "next-server/.next/",
  "**/node_modules/",
  "next-server/public"
];

module.exports = defineConfig([
  includeIgnoreFile(gitignorePath),
  globalIgnores(ignores),
  {
    ignores: ignores,
    files: [ "**/*.{js,ts}" ],
    plugins: {
      "@stylistic": stylistic,
      "no-null": noNullPlugin,
      "jsdoc": jsdocPlugin,
      "unused-imports": unusedImports,
      "import-newlines": importNewlines
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
        ...globals.jest,
        ...globals.node,
        chrome: "readonly",
        "NodeJS": true,
        browser: true,
        node: true,
        gapi: true,
        Result: true,
        err: true,
        ok: true,
        withResult: true,
        Failure: true,
        Success: true,
        partitionResults: true
      }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-spread": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-undef": "error",
      "@typescript-eslint/dot-notation": "off",
      "@stylistic/indent": [ "error", 2, {
        "SwitchCase": 1
      } ],
      "@stylistic/member-delimiter-style": [ "error", {
        "overrides": {
          "typeLiteral": {
            "multiline": {
              "delimiter": "comma",
              "requireLast": false
            },
            "singleline": {
              "delimiter": "comma"
            }
          },
          "interface": {
            "multiline": {
              "delimiter": "comma",
              "requireLast": false
            },
            "singleline": {
              "delimiter": "comma"
            }
          }
        }
      } ],
      "@stylistic/member-ordering": "off",
      "@stylistic/naming-convention": "off",
      "@stylistic/no-empty-function": "off",
      "@stylistic/no-explicit-any": "off",
      "@stylistic/no-inferrable-types": "off",
      "@stylistic/no-parameter-properties": "off",
      "@stylistic/no-require-imports": "off",
      "@stylistic/no-shadow": [ "off", {
        "hoist": "all"
      } ],
      "no-unused-expressions": [ "warn", {
        "allowShortCircuit": true
      } ],
      "@stylistic/no-use-before-define": "off",
      "@stylistic/no-var-requires": "off",
      "space-before-function-paren": [ "error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      } ],
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/type-annotation-spacing": "error",
      "array-bracket-spacing": [ "warn", "always", {
        "objectsInArrays": true,
        "singleValue": true,
        "arraysInArrays": false
      } ],
      "brace-style": [ "error", "1tbs" ],
      "comma-dangle": "error",
      "computed-property-spacing": [ "warn", "never" ],
      "curly": "off",
      "default-case": "off",
      "dot-notation": "off",
      "eol-last": "off",
      "eqeqeq": [ "error", "smart" ],
      "for-direction": "off",
      "guard-for-in": "error",
      "id-denylist": [ "off", "any", "number", "Number", "String", "undefined", "Boolean", "boolean", "string", "Undefined" ],
      "id-match": "off",
      "import/no-anonymous-default-export": "off",
      "jsdoc/check-alignment": "off",
      "jsdoc/check-indentation": "off",
      "jsdoc/newline-after-description": "off",
      "key-spacing": [ "warn", {
        "beforeColon": false,
        "mode": "strict",
        "afterColon": true
      } ],
      "no-bitwise": "off",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-console": "off",
      "no-constant-condition": "off",
      "no-debugger": "warn",
      "no-empty": "off",
      "no-empty-function": "off",
      "no-eval": "error",
      "no-extra-boolean-cast": "off",
      "no-fallthrough": "error",
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": "off",
      "no-new-wrappers": "error",
      "no-null/no-null": "off",
      "no-param-reassign": "error",
      "no-prototype-builtins": "off",
      "no-redeclare": "off",
      "no-shadow": "off",
      "no-trailing-spaces": "off",
      "no-underscore-dangle": "off",
      "no-unused-labels": "error",
      "no-unused-vars": "off",
      "no-var": "error",
      "object-curly-spacing": [ "warn", "always", {
        "objectsInObjects": true,
        "arraysInObjects": true
      } ],
      "prefer-const": "off",
      "quotes": [ 2, "double" ],
      "radix": "error",
      "semi": "error",
      "semi-style": "error",
      "spaced-comment": "off",
      "sort-imports": "off",
      "unused-imports/no-unused-imports": "error"
    }
  },

  // TypeScript-specific config
  {
    files: [ "**/*.{ts,tsx}" ],
    ignores,
    plugins: {
      "@typescript-eslint": tseslint2
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: [ "./tsconfig.json", "./next-server/tsconfig.json", "./mcp/tsconfig.json", "./browser-extension/tsconfig.json" ],
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [ "warn", {
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_?.*$",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^.*$"
      } ],
      "@typescript-eslint/prefer-namespace-keyword": "error"
    }
  },
  {
    files: [ "./next-server/**/*.{ts,tsx}" ],
    ignores,
    plugins: {
      "@typescript-eslint": tseslint2
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./next-server/tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [ "warn", {
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_?.*$",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^.*$"
      } ],
      "@typescript-eslint/prefer-namespace-keyword": "error"
    }
  }
]);