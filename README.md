# N. L. Dalmia Institute — Frontend

The frontend application for the **N. L. Dalmia Institute of Management Studies and Research (NLDIMSR)** website, built with Next.js, React, TypeScript, and Tailwind CSS.

- **Live Website:** https://www.nldalmia.in/
- **Repository:** https://github.com/rohitdevc/nldalmia-frontend

## Overview

This project powers the institute's public-facing website, providing information about academic programs, admissions, faculty, placements, campus life, research, events, and institutional activities.

The application uses Next.js App Router and integrates with content services to render website information and generate a searchable content index.

## Features

- **Academic Programs:** Explore management programs and executive education offerings.
- **Admissions:** Access admissions-related information and application links.
- **Faculty and Research:** Browse faculty profiles, research, and institutional publications.
- **Placements:** Explore placement highlights, recruiters, reports, and related resources.
- **News and Activities:** Discover events, blogs, awards, media, and campus activities.
- **Content Search:** Generate a searchable index of website pages and content categories.
- **SEO Support:** Includes structured data, route redirects, and route-specific indexing controls.
- **Analytics and Chatbot Integrations:** Includes Google Tag Manager and an external chatbot integration.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | React framework and application routing |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling |
| ESLint 9 | Code linting |
| npm | Dependency management |
| Docker | Containerized deployment |

Additional libraries support content searching, date handling, sliders, icons, responsive interfaces, and form validation.

## Prerequisites

Install the following before running the project:

- Node.js 22 or a compatible version supported by the project
- npm
- Access to the content API and any required configuration values

The Docker configuration uses Node.js 22 Alpine.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rohitdevc/nldalmia-frontend.git
cd nldalmia-frontend
```

### 2. Install dependencies

```bash
npm ci --legacy-peer-deps
```

The repository's npm configuration enables legacy peer dependency handling, and the Docker build uses the same installation option.

### 3. Configure environment variables

Create a local `.env` file in the project root and configure the values required by your environment.

The Docker configuration references these variables:

```dotenv
API_DOMAIN_NAME=
NEXT_PUBLIC_PATH=
NEXT_PUBLIC_DOMAIN_NAME=
```

Replace the empty values with the appropriate development or deployment configuration. The content-fetching libraries and search-index generation script may require additional configuration.

**Important:** Do not commit credentials, private tokens, or other secrets to the repository.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server on port 8000. |
| `npm run build` | Generates the search index and builds the production application. |
| `npm run start` | Starts the production server on port 8000. |
| `npm run lint` | Runs ESLint. |

The production build runs the `prebuild` script automatically to generate the search index before executing `next build`.

## Project Structure

```text
nldalmia-frontend/
├── app/                  # Next.js application routes and layouts
├── components/           # Reusable UI components
├── context/              # React context providers
├── hooks/                # Custom React hooks
├── lib/                  # Content services and shared utilities
├── public/               # Static assets
├── scripts/              # Build-time and utility scripts
├── types/                # TypeScript definitions
├── generated/            # Generated search index
├── Dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Docker Compose configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── package-lock.json     # Dependency lockfile
└── tsconfig.json         # TypeScript configuration
```

Generated files and some directories may be created during development or builds.

## Production Build

Create a production build with:

```bash
npm run build
```

Run the built application with:

```bash
npm run start
```

The application listens on port `8000` by default.

## Docker Deployment

The repository includes a multi-stage Dockerfile and a Docker Compose configuration.

After creating a `.env` file with the required configuration, build and start the container:

```bash
docker compose up --build -d
```

The Compose configuration maps host port `8000` to container port `8000`.

To view container logs:

```bash
docker compose logs -f web
```

To stop the container:

```bash
docker compose down
```

Ensure the required build arguments, runtime configuration, and content API access are configured for the target environment before deployment.

## Code Quality

Run ESLint to check the codebase:

```bash
npm run lint
```

## Contributing

Before submitting changes:

1. Follow the existing project structure and coding conventions.
2. Run the linter and verify the production build.
3. Test affected pages and functionality.
4. Keep environment-specific configuration and secrets out of version control.

## License

No license information has been verified for this repository. Contact the repository owner before redistributing or reusing project code.

---

Built with Next.js, React, TypeScript, and Tailwind CSS.