# Playwright-Cucumber

**BDD test framework** combining Playwright's fast, reliable browser automation with Cucumber's plain-English Gherkin scenarios — written in **TypeScript**.

> Tests your product owner can read. Scenarios are living documentation: business-readable on top, robust Playwright automation underneath.

## Features

- 🥒 Gherkin `.feature` files — business-readable scenarios
- 🎭 Playwright-powered step definitions in TypeScript
- 🔁 Automatic re-run of failed scenarios (`@rerun.txt`) for CI stability
- 📄 JSON reporting via `cucumber.json`, ready for report generators

## Example

```gherkin
Feature: User login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When they enter valid credentials
    Then they should land on the dashboard
```

## Getting Started

### Prerequisites

- Node.js 18+

### Install

```bash
git clone https://github.com/asyabhi/Playwright-Cucumber.git
cd Playwright-Cucumber
npm install
npx playwright install
```

### Run the suite

```bash
npm test
```

### Re-run only failed scenarios

```bash
npm run test:rerun
```

*(Check `package.json` for the exact script names and adjust the two commands above if yours differ.)*

## Project Structure

```
├── src/
│   ├── features/        # Gherkin .feature files
│   ├── steps/           # Step definitions (Playwright)
│   └── support/         # Hooks, world, fixtures
├── cucumber.json        # Cucumber configuration
└── playwright.config.ts # Browser configuration
```

*(Adjust the `src/` breakdown to match your actual folders.)*

## Author

**Abhitendra** — QA Lead · 11+ years in testing and automation
GitHub: [@asyabhi](https://github.com/asyabhi)
