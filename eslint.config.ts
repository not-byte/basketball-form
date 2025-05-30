import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(eslintConfigPrettier, {
    ignores: ["node_modules", "dist", "src/public", ".nuxt"]
});
