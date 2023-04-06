# Midjourney Discord Playwright
Midjourney does not yet provide an API and so this is an example of using Playwright for prompt automation. Note that this may be be against the Discord and Midjourney terms of service and using this may result in your Discord account getting banned. Use at own risk.

The tests in this project are also likely to stop working whenever Discord updates their interface or Midjourney updates their bot. In that case you can manually generate new tests by making use of the Playwright codegen tool (`npx playwright codegen https://discord.com/app`). Check the [Playwright docs](https://playwright.dev/) for more details.

## Requirements
- Discord account
- Midjourney standard plan or higher (this is needed to enable generation by messaging the Midjourney discord bot directly rather than using the public channels)

## Getting started
 - Install the required packages with `yarn install`
 - Add your Discord email address and password to a `.env` file in the root directory (check `.env.example` for the format).
 - Run the login test: `npx playwright test login`. This will generate an auth file: `playwright/.auth/discordUser.json` which will be used in future tests (This file only needs to be generated once).
 - If you haven't already, send the Midjourney Bot a direct message so that it appears in your discord direct messages.
 - Edit the test/prompt.spec.ts file to match your use-case.
 - Run the prompt generation test: `npx playwright test prompt`