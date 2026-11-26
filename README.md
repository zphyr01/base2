# Bit

An interactive web app for mastering low-level programming, from logic gates to the Linux command line.

## Cloud Architecture (Microsoft Azure)

**Bit** is structured as a decoupled full-stack application prepped for zero-cost cloud deployment on **Microsoft Azure** with automated CI/CD via **GitHub Actions**.

<!-- ```mermaid
graph LR
    User([User Browser]) -->|HTTPS| SWA[Azure Static Web Apps<br/>Next.js Frontend]
    SWA -->|REST API| AppService[Azure App Service<br/>Node.js + Express + TypeScript]
    GitHub[GitHub Repository] -.->|GitHub Actions CI/CD| SWA
    GitHub -.->|GitHub Actions CI/CD| AppService
``` -->

### Azure Services & Design
* **Frontend (`client/`):** Built with **Next.js** and configured for **Azure Static Web Apps** (Free Tier) for global CDN delivery and automatic SSL.
* **Backend (`server/`):** REST API built with **Node.js, Express, and TypeScript** (`src/index.ts` compiled to `dist/index.js`), configured for **Azure App Service** (Linux F1 Free Tier) with a `/api/health` monitoring endpoint.
* **CI/CD Automation:** Configured with **GitHub Actions** (`.github/workflows/azure-server.yml`) to automatically typecheck, compile TypeScript, and deploy backend updates on every push to `main`.

---

## Local Development Setup

### 1. Backend (`server/`)
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
*Health check endpoint:* `http://localhost:5000/api/health`

### 2. Frontend (`client/`)
```bash
cd client
cp .env.example .env.local
npm install
npm run dev
```
*Local app:* `http://localhost:3000`

## Testing

Cypress manages testing for this project

### E2E testing

```shell
nmp run cy:run
```

### Component testing

``` shell
npx cypress run --component --spec "cypress/component/backend-status.cy.tsx"
```

Both tests can be run interactively via the GUI with `npm run cy:open`