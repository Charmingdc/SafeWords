# **SafeWords: Secure Your Text Messages!** 🛡️

SafeWords is a modern, intuitive web application meticulously crafted with React and TypeScript, designed to provide a secure and straightforward way to encrypt and decrypt sensitive text data directly in your browser. Leveraging the powerful Web Cryptography API (SubtleCrypto) for robust AES-GCM encryption with PBKDF2 key derivation, this project ensures your information remains confidential and accessible only to those with the correct password. Say goodbye to insecure plain text and embrace a new era of digital privacy! ✨

---

## 🚀 Installation

To get SafeWords up and running on your local machine, follow these simple steps:

### Prerequisites
Make sure you have Node.js (which includes npm) installed. You can also use yarn or pnpm.

### Clone the Repository
Begin by cloning the project to your local development environment:
```bash
git clone git@github.com:Charmingdc/SafeWords
cd SafeWords
```

### Install Dependencies
Navigate into the project directory and install the necessary dependencies:
```bash
npm install
# or yarn install
# or pnpm install
```

### Run the Development Server
Once dependencies are installed, you can start the development server:
```bash
npm run dev
```
This command will launch the application, typically on `http://localhost:5173`. Open your browser and navigate to this address to see SafeWords in action!

---

## 💡 Usage

SafeWords provides a user-friendly interface for both encrypting and decrypting text.

### Encrypting Your Data
1.  **Select "Encryption"**: On the homepage, ensure the "Encryption" option is selected.
2.  **Enter Text**: Type or paste the text you wish to encrypt into the large text area.
3.  **Set a Password**: In the input field below, enter a strong password. Remember this password, as it will be required for decryption!
4.  **Secure Your Data**: Click the "SECURE" button. A modal will appear displaying your encrypted text and the password you used.
5.  **Copy and Store**: Use the "Copy" button to easily copy the encrypted string to your clipboard. You should store this string and the password securely.

### Decrypting Your Data
1.  **Select "Decryption"**: Switch to the "Decryption" option on the homepage.
2.  **Paste Encrypted Data**: Paste your previously encrypted string into the large text area.
3.  **Enter Password**: Provide the exact password that was used during the encryption process in the password input field.
4.  **Access Your Data**: Click the "ACCESS" button. If the password is correct, a modal will display your original decrypted text.
5.  **Copy Decrypted Text**: You can copy the decrypted text to your clipboard using the provided button.

---

## ✨ Features

*   **Robust Encryption/Decryption**: Implements AES-GCM (Advanced Encryption Standard in Galois/Counter Mode) for strong symmetric encryption, utilizing PBKDF2 (Password-Based Key Derivation Function 2) for secure key derivation from user-provided passwords.
*   **Intuitive User Interface**: A clean, modern, and responsive design built with Tailwind CSS, offering a seamless experience for both encryption and decryption operations.
*   **Clipboard Integration**: Effortlessly copy encrypted or decrypted results to your clipboard with a single click, enhancing user convenience.
*   **Dynamic Theming**: Supports both light and dark modes, automatically adapting to system preferences or allowing users to toggle themes manually for a personalized experience.
*   **Input Validation**: Ensures that both the text data and a password are provided before any cryptographic operation is performed, preventing common errors and guiding the user.
*   **Secure Password Handling**: Passwords are never stored directly; instead, they are used to derive cryptographic keys via PBKDF2 with high iteration counts, significantly enhancing security against brute-force attacks.
*   **Future-Ready Architecture**: Built with Vite and TypeScript, providing an extremely fast development experience, robust type safety, and a scalable project structure.
*   **Saved Entries Management (Planned)**: An initial UI for viewing saved entries is in place, demonstrating a future feature to persist and manage encrypted data locally.

---

## 🛠️ Technologies Used

| Technology | Description |
|---|---|
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) | A declarative, component-based JavaScript library for building user interfaces. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | A strongly typed programming language that builds on JavaScript, enhancing code quality and maintainability. |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | A next-generation frontend tooling that provides an extremely fast development experience with hot module replacement. |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) | A utility-first CSS framework for rapidly building custom designs directly in your HTML. |
| ![React Router DOM](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white) | Declarative routing for React applications, enabling seamless navigation between views. |
| ![Sonner](https://img.shields.io/badge/Sonner-A2A2A2?style=for-the-badge&logo=npm&logoColor=white) | An elegant and accessible toast component for React, providing non-blocking notifications. |
| ![Lucide React](https://img.shields.io/badge/Lucide-2D2D2D?style=for-the-badge&logo=lucide&logoColor=white) | A beautiful collection of open-source, customizable SVG icons designed for React applications. |
| ![Web Cryptography API](https://img.shields.io/badge/Web_Cryptography_API-336699?style=for-the-badge&logo=webauthn&logoColor=white) | Browser-native API used for performing cryptographic operations, ensuring high security standards. |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) | A pluggable JavaScript linter that helps identify and report on patterns found in ECMAScript/JavaScript code. |
| ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white) | A tool for transforming CSS with JavaScript plugins, used here for Tailwind CSS and Autoprefixer. |
| ![Autoprefixer](https://img.shields.io/badge/Autoprefixer-CC3333?style=for-the-badge&logo=npm&logoColor=white) | A PostCSS plugin that parses CSS and adds vendor prefixes to rules using Can I Use data. |

---

## 🤝 Contributing

We welcome contributions to SafeWords! Whether it's a new feature, a bug fix, or an improvement to the documentation, your efforts are highly appreciated.

Here's how you can contribute:

*   🍴 **Fork the repository**: Start by forking the SafeWords repository to your GitHub account.
*   🌿 **Create a new branch**: Create a new branch for your feature or bug fix:
```bash
git checkout -b feature/your-feature-name
```
*   💻 **Make your changes**: Implement your changes and test them thoroughly.
*   💾 **Commit your changes**: Write clear and concise commit messages.
```bash
git commit -m "feat: Add new encryption algorithm"
```
*   ⬆️ **Push to your branch**: Push your local branch to your forked repository.
```bash
git push origin feature/your-feature-name
```
*   ➡️ **Open a Pull Request**: Submit a pull request to the `main` branch of the original repository. Describe your changes in detail and include any relevant screenshots or steps to reproduce if it's a bug fix.

---

## 📄 License

This project is currently unlicensed.

---

## 👤 Author Info

*   **Your Name**
*   GitHub: [@Charmingdc](https://github.com/Charmingdc)
*   LinkedIn: [Adebayo Muis](https://linkedin.com/in/adebayo-muis)
*   Twitter: [@Charmingdc01](https://twitter.com/Charmingdc01)

---

---
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/Charmingdc/SafeWords/actions)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)