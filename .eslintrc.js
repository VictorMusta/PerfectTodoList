module.exports = {
  ignorePatterns: ["src/protos/protostubs/*"],
    env: {
      browser: true,
      es2021: true,
    },
    globals: {
      React: true,
      JSX: true,
    },
    extends: [
      "standard",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // or error
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-use-before-define": ["error"],
      quotes: [
        1,
        "double",
        {
          avoidEscape: true,
        },
      ],
      semi: [1, "always"],
      "comma-dangle": [1, "only-multiline"],
      "space-before-function-paren": [
        1,
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "multiline-ternary": [0, "never"],
      indent: [0],
      "@typescript-eslint/ban-ts-comment": [0],
    },
  };