import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  { ignores: ["dist/", "coverage/", ".stryker-tmp/", "reports/"] },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    // Conflicts with Prettier: https://github.com/prettier/eslint-config-prettier#no-unexpected-multiline
    rules: { "no-unexpected-multiline": "off" },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Config files sit outside tsconfig.json, so they get the untyped rules only.
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
