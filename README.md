# ⚛️ Weather React Client

[![Framework: React](https://img.shields.io/badge/Framework-React-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Build Tool: Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Client: Zod-OpenAPI](https://img.shields.io/badge/Client-Zod--OpenAPI-blue?style=flat-square)](https://github.com/asteasolutions/zod-to-openapi)
[![Connected To: Weather API](https://img.shields.io/badge/API-Weather_API-orange?style=flat-square)](https://github.com/andyfrith/weather-api)

A clean, foundational **React.js** application designed to consume the [Weather API](https://github.com/andyfrith/weather-api). This project serves as a streamlined starting point for developers looking to build modern frontends with **strict contract-based integration**.

## ✨ Key Features

- **📝 Zod OpenAPI Client**: Leverage the power of Zod and OpenAPI to ensure that the data consumed from the API is always valid and correctly typed.
- **🏗️ Foundational Build**: A simple, un-opinionated starting point focused on clean data fetching and state management.
- **🛡️ Contract-First Development**: By using the Zod OpenAPI client, the frontend stays perfectly in sync with the backend's documented schema.
- **⚡ Vite-Powered**: Instant hot-reloading and an optimized build pipeline for a superior developer experience.

---

## 🔗 The Integration Layer

This client connects to the **Weather API** (Hono/Bun). Instead of loose `fetch` calls, it utilizes a generated or schema-driven client via **Zod OpenAPI**. This eliminates the common "API drift" problem where frontend types become outdated compared to the actual API responses.

### Why this matters:

- **Validation at the Edge**: Data is validated as it enters the React application.
- **Intelligent Autocomplete**: TypeScript knows exactly what the weather object looks like based on the API's OpenAPI specification.
- **Error Resilience**: Unexpected API changes are caught at the networking layer before they crash the UI.

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/) installed.

### 2. Installation

```bash
git clone [https://github.com/andyfrith/weather-reactjs.git](https://github.com/andyfrith/weather-reactjs.git)
cd weather-reactjs
npm install  # or bun install
```
