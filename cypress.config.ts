import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

const setupNodeEvents = async (on: any, config: any) => {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );
  return config;
};

export default defineConfig({

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/features/*.feature',
    baseUrl: 'https://www.facebook.com/',
    defaultCommandTimeout: 10000,
    env: {

    },
  },
});