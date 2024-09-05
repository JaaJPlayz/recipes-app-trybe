# Recipes App - Client Side 🍽️

Welcome to the client side of the Recipes App! 🍲 This application allows users to search for a variety of delicious recipes and manage their accounts with a secure login system. Built using a modern tech stack, this project leverages Redux, TypeScript, React, Cypress, and Vite to deliver a smooth and interactive user experience.

## Features 🚀

- **Recipe Search**: Explore a plethora of recipes for various dishes.
- **User Authentication**: Secure login system with bcrypt for password hashing.
- **Interactive UI**: Responsive and intuitive user interface.

## Tech Stack 🛠️

- **React**: For building the user interface.
- **Redux**: For state management.
- **TypeScript**: For static typing and enhanced code quality.
- **Cypress**: For end-to-end testing.
- **Vite**: For fast development and build processes.

## Getting Started 🏃‍♂️

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 18.x)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:JaaJPlayz/recipes-app-trybe.git
   cd recipes-app-client
   ```

2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   This will start the Vite development server and open the app in your default web browser.

### Running Tests 🧪

To run the Cypress end-to-end tests:

1. **Start the app** (if not already running):

   ```bash
   npm run dev
   ```

2. **Open Cypress**:

   ```bash
   npm run cy:open
   ```

   Or using yarn:

   ```bash
   yarn cy:open
   ```

   This will open the Cypress test runner where you can execute the tests.


## Folder Structure 📂

- **`src/`**: Contains the source code.
  - **`components/`**: React components.
  - **`pages/`**: Page components.
  - **`redux/`**: Redux actions, reducers, and store.
  - **`types/`**: TypeScript type definitions.
  - **`utils/`**: Utility functions and helpers.
- **`public/`**: Static assets.
- **`cypress/`**: Cypress tests.

## Contributing 🤝

We welcome contributions! If you have suggestions or find bugs, please open an issue or create a pull request.

