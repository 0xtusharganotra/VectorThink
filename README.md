<div align="center">
  <img src="public/assets/vectorthink-logo.png" alt="VectorThink Logo" width="200"/>
  <h1 align="center">VectorThink Client</h1>
</div>

This is the frontend for VectorThink, your personal AI-powered second brain. VectorThink helps you store, organize, and retrieve information effortlessly.

## ✨ About The Project

VectorThink is an intuitive and powerful platform designed to serve as your secure, AI-powered digital second brain. It transforms your raw, stored information into readily accessible knowledge, allowing you to manage, organize, and effortlessly interact with your personal content corpus.

### Key Features:

- **Intelligent & Factual Q&A**: Our assistant leverages Retrieval-Augmented Generation (RAG) to provide answers grounded only in your stored content, eliminating the guesswork and hallucinations common in general-purpose LLMs.

- **Personalized Search Security (Multi-Tenant)**: Every search is filtered by user ID. Your queries only run against your own data, ensuring complete privacy and security in a multi-user environment.

- **State-of-the-Art Indexing**: Content is converted into rich, 3072-dimensional vector embeddings using Google's Gemini embedding model (gemini-embedding-001), ensuring high semantic accuracy when retrieving complex information.

- **Intuitive Content Management**: Easily store and organize various content types (notes, links, etc.) through a clean user dashboard.

- **Session-Based Chat**: Conversation is managed per session with a clear 20-message limit to maintain speed and resource efficiency.

- **User Authentication**: Secure sign-in and sign-up using JWT and strong password hashing using bcrypt.

## 🚀 Tech Stack

This project is built with a modern and robust tech stack:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - A next-generation frontend tooling that is fast and lean.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [React Router](https://reactrouter.com/) - For handling routing in the application.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

or

SignIn with test credentials on we app hosted on vercel - (id - vectortest@gmail.com | password - Vector@123)

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/vectorthink-client.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd vectorthink-client
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Starts a local server to preview the production build.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
