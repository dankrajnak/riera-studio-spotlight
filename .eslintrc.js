module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "arrow-body-style": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "typescript/no-unused-expression": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "object-shorthand": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "import/order": "warn",
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: { "@typescript-eslint/explicit-module-boundary-types": 0 },
    },
  ],
};
