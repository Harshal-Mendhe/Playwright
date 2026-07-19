// @ts-check
import { defineConfig, devices } from '@playwright/test';

// @see https://playwright.dev/docs/test-configuration

const config = ({
  testDir: './tests',
  timeout : 900000,

  reporter :  [
    ['html'],
    ['allure-playwright']
],


  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on'
  },

});

module.exports = config
