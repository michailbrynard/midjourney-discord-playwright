# Midjourney Discord Playwright

This repository demonstrates using Playwright for prompt automation with Midjourney, as it does not currently provide an API. **Please be aware that this might violate Discord and Midjourney's terms of service and could lead to your Discord account being banned. Use at your own risk.**

The tests in this project may stop working if Discord updates their interface or Midjourney updates their bot. In such cases, you can manually generate new tests using the Playwright codegen tool (`npx playwright codegen https://discord.com/app`). Consult the [Playwright documentation](https://playwright.dev) for more details.

## Requirements

- Discord account
- Midjourney standard plan or higher (required to enable content generation by messaging the Midjourney Discord bot directly, rather than using public channels)

## Getting Started

1. **Install dependencies:** Run `yarn install` to install the required packages.
2. **Configure environment variables:** Create a `.env` file in the root directory with your Discord email address and password (refer to the provided `.env.example` for the format).
3. **Run the login test:** Execute `npx playwright test login`. This will generate an auth file (`playwright/.auth/discordUser.json`) to be used in future tests – it only needs to be created once.
4. **Send a direct message to the Midjourney Bot:** If you haven't already done so, send the Midjourney Bot a direct message to make it appear in your Discord direct messages.
5. **Customize the test:** Edit the `test/prompt.spec.ts` file to suit your specific use case.
6. **Run the prompt generation test:** Enter `npx playwright test prompt` to run the test.