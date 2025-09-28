# VectorThink Client

This is the frontend for VectorThink, a web application that helps you organize and manage your content.

## Features

- **Content Organization:** Organize your content by type (e.g., notes, links, images).
- **AI-Powered Assistant:** Query stored content with contextual AI using RAG + embeddings.(Not live yet)
- **User Authentication:** Secure sign-in and sign-up functionality.
- **Dashboard:** A central place to view and manage all your content.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web development.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **React Router:** For handling routing in the application.
- **Axios:** A promise-based HTTP client for the browser and Node.js.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vectorthink-client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vectorthink-client
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized and minified files for deployment.

## Project Structure

```
.
├── public/
│   └── ... # Public assets
├── src/
│   ├── assets/
│   │   └── ... # Images and other assets
│   ├── components/
│   │   └── ... # Reusable React components
│   ├── icons/
│   │   └── ... # SVG icons
│   ├── pages/
│   │   ├── AiChatBox.tsx
│   │   ├── dashboard.tsx
│   │   ├── SignIn.tsx
│   │   └── Signup.tsx
│   ├── App.tsx # Main application component
│   ├── index.css # Global CSS styles
│   └── main.tsx # Entry point of the application
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Starts a local server to preview the production build.
