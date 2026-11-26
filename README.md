# Bit

An interactive web app for mastering low-level programming, from logic gates to the Linux command line.

## Tech Stack 🚀

### Frontend

 - NextJS (with Typescript)
 - TailwindCSS

### Backend
 - Swagger
 - Node + ExpressJS(with Typescript)
 - MongoDB(configured with CosmosDB for connection to MS Azure)

### Containerization
 - Docker

### Testing

 - Cypress (e2e and component testing)

#### E2E testing

```shell
nmp run cy:run
```

#### Component testing

``` shell
npx cypress run --component --spec "cypress/component/backend-status.cy.tsx"
```

Both tests can be run interactively via the GUI with `npm run cy:open`


## Cloud Architecture (Microsoft Azure) ☁️

**Bit** is structured as a decoupled full-stack application prepped for zero-cost cloud deployment on **Microsoft Azure** with automated CI/CD via **GitHub Actions**.

**Azure Services & Design**
* **Frontend (`client/`):** The **Next.js** frontend is configured for **Azure Static Web Apps** (Free Tier) for global CDN delivery and automatic SSL.
* **Backend (`server/`):** REST API built with **Node.js, Express, and TypeScript** (`src/index.ts` compiled to `dist/index.js`), configured for **Azure App Service** (Linux F1 Free Tier) with a `/api/health` monitoring endpoint.

## Local Dev Setup 🖥️

(_prior to cloud deployment_)

### 1. Backend (`server/`)
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
*Health check endpoint:* `http://localhost:4000/api/health`

### 2. Frontend (`client/`)
```bash
cd client
cp .env.example .env.local
npm install
npm run dev
```
*Local app:* `http://localhost:3000`