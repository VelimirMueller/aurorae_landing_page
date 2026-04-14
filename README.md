<div align="center">
  <img src="https://github.com/user-attachments/assets/12134a80-87bf-4ae1-8ee8-aeceb3309204" width="80" height="80" alt="Aurorae Logo">
  <h1>Aurorae Landing Page</h1>
  <p><strong>The official landing page for the Aurorae Project.</strong></p>
  <p>
    Built with <a href="https://vuejs.org/">Vue 3</a> · <a href="https://vuetifyjs.com/">Vuetify 3</a> · <a href="https://www.typescriptlang.org/">TypeScript</a>
  </p>
  <p>
    <a href="https://github.com/VelimirMueller/aurorae_landing_page/actions/workflows/type-check.yml"><img src="https://github.com/VelimirMueller/aurorae_landing_page/actions/workflows/type-check.yml/badge.svg" alt="CI TypeScript Type Check"></a>
    <a href="https://github.com/VelimirMueller/aurorae_landing_page/actions/workflows/lint.yml"><img src="https://github.com/VelimirMueller/aurorae_landing_page/actions/workflows/lint.yml/badge.svg" alt="Lint Code"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
  </p>
</div>

---

## Overview

Aurorae Landing Page is a modern, fully responsive single-page application that serves as the public-facing website for the Aurorae Project. It showcases a polished UI with smooth animations, a themeable design system, and a clean component architecture — all powered by Vuetify 3 and TypeScript.

## Features

- **Pinia-based notification system** — centralized, reactive toast and alert management
- **Reusable form validation composables** — consistent input validation across all forms
- **Modular component library** — easy-to-use, well-structured Vue components
- **Fully themeable UI** — light/dark mode and custom color schemes via Vuetify's theming engine
- **Micro interactions & animations** — subtle, delightful transitions throughout the interface
- **Responsive design** — optimized for desktop, tablet, and mobile viewports

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Vue 3 (Composition API)             |
| UI Library   | Vuetify 3                           |
| Language     | TypeScript                          |
| State        | Pinia                               |
| Routing      | Vue Router                          |
| Build Tool   | Vite                                |
| Testing      | Vitest + Vue Test Utils             |
| Linting      | ESLint                              |
| CI/CD        | GitHub Actions                      |
| Code Quality | SonarCloud                          |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/VelimirMueller/aurorae_landing_page.git
cd aurorae_landing_page

# Install dependencies
yarn install
```

### Development

```bash
# Start the development server
yarn dev
```

The app will be available at `http://localhost:3000` (or the next available port).

### Build

```bash
# Type-check and build for production
yarn build

# Preview the production build
yarn preview
```

### Testing

```bash
# Run unit tests
yarn test

# Run tests with coverage report
yarn coverage
```

### Linting

```bash
# Lint and auto-fix files
yarn lint
```

## Project Structure

```
aurorae_landing_page/
├── .github/            # GitHub Actions workflows & issue templates
├── public/             # Static assets
├── src/                # Application source code
├── tests/              # Unit tests
├── index.html          # Entry HTML file
├── vite.config.mts     # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project metadata & scripts
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
