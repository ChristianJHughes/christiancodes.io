import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  prettier,
  {
    rules: {
      "sort-imports": ["error", { ignoreCase: true }],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**"]),
]);
