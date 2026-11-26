import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    supportFile: false,
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
});
