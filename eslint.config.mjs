import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        $: "readonly",
        CookieConsent: "readonly",
        lucide: "readonly",
      },
    },
    rules: {
      "no-var": "off",
      "prefer-const": "warn",
    },
  },
];
