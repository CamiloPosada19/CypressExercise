const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin; // Paquete de badeball debido a la actualizacion del 100
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
  const allureWriter = require('@shelex/cypress-allure-plugin/writer');

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   return config;
// }

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 880,
  defaultCommandTimeout:10000,
  e2e: {
    
    baseUrl:'https://www.google.es/',
    async setupNodeEvents(on, config) {
      allureWriter(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    //baseUrl: "http://google.es", //Problema redirreccion
    chromeWebSecurity: false,
  },
});
