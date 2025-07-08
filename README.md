# **SafeWords: Your Private Text Encryption & Decryption Tool 🔒**

Protect your sensitive information with **SafeWords** – a robust, client-side encryption and decryption tool that ensures your data never leaves your browser. 🚀 Seamlessly encrypt any text with a strong password, generating a secure Base64-encoded string. Share it anywhere, knowing that only someone with the correct password can unlock its contents. Ideal for secure notes, confidential messages, or developer secrets. Your privacy, our priority! ✨

## 🚀 Installation

Getting SafeWords up and running on your local machine is straightforward. Follow these steps to set up the development environment:

*   **1. Clone the Repository:**
Start by cloning the project to your local machine using Git:

```bash
git clone git@github.com:Charmingdc/SafeWords
cd SafeWords
```

*   **2. Install Dependencies:**
Navigate into the project directory and install all required dependencies using npm:

```bash
npm install
```

*   **3. Start the Development Server:**
Once dependencies are installed, you can launch the development server:

```bash
npm run dev
```
This command will start the application, typically accessible at `http://localhost:5173/` in your web browser.

*   **4. Build for Production (Optional):**
To create a production-ready build of the application, run:

```bash
npm run build
```
This will generate optimized static assets in the `dist` directory.

## 📝 Usage

SafeWords is designed for intuitive and secure text handling. Here’s how you can use it to encrypt and decrypt your information:

1.  **Access the Application:**
After starting the development server, navigate to `http://localhost:5173/` (or the appropriate URL) in your web browser. You'll land on the introductory page. Click the "Get Started" button to proceed to the main encryption/decryption interface.

2.  **Choose Your Operation:**
On the main page, you'll see two buttons: "Encryption" and "Decryption".
*   Select **Encryption** if you want to secure new text.
*   Select **Decryption** if you have an encrypted message you wish to reveal.

3.  **Input Your Data and Password:**
*   **Text Area:** Depending on your chosen operation, enter or paste the plain text you wish to encrypt, or the Base64-encoded encrypted string you want to decrypt.
*   **Password Field:** Input a strong, memorable password. This password is crucial for both encrypting and decrypting your data, so ensure it's kept private and secure. For decryption, you must use the exact password that was originally used for encryption.

4.  **Perform the Operation:**
Once you've entered both your text/data and the password, click the prominent button at the bottom (which will display "SECURE" for encryption or "ACCESS" for decryption).

5.  **View and Manage Your Output:**
*   **Output Modal:** A modal will appear displaying your encrypted Base64 string (for encryption) or your decrypted plain text (for decryption).
*   **Copy to Clipboard:** Use the "Copy" button to quickly copy the output to your clipboard for sharing or further use.
*   **Save Encryptions (Encryption Only):** If you've encrypted text, you'll have an option to "Save" the encrypted output along with its password to your browser's local IndexedDB storage. This is stored entirely client-side, ensuring privacy.
*   **Close Modal:** Click "Close" to dismiss the output modal.

6.  **View Saved Encryptions:**
On the main application page, you can click the "View Saved Encryptions" button. This will open a modal displaying all entries you've previously saved. You can then click on individual entries to view their full content and password, copy them, or delete them from your local storage.

## ✨ Key Features

SafeWords is built with a focus on security, usability, and privacy:

*   **End-to-End Privacy:** Your data is encrypted and decrypted entirely within your browser, ensuring no sensitive information ever touches a server.
*   **Portable Output:** Encrypted messages are generated as compact, Base64-encoded strings, making them easy to share across any platform or medium.
*   **Secure Note Sharing:** Ideal for confidentially transmitting sensitive details, such as API keys, login credentials, or private messages.
*   **Platform Agnostic:** Encrypted messages can be sent via email, chat applications, social media, or even public posts, accessible only by those with the correct password.
*   **Developer-Friendly:** A robust tool for developers needing to securely share configuration values, tokens, or environment variables without relying on complex external tools.
*   **Minimal & Instant:** Enjoy a frictionless experience with no sign-ups, accounts, or tracking. Just paste, protect, and go.
*   **Local Storage (IndexedDB):** Securely save your encrypted entries directly in your browser's IndexedDB, maintaining full control over your data.
*   **Dark/Light Mode:** Toggle between light and dark themes for a comfortable viewing experience.

## 🛠️ Technologies Used

SafeWords leverages a modern web development stack to deliver a secure and responsive user experience:

| Technology         | Description                                                                                              | Link                                                              |
| :----------------- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **React (v19.1.0)** | A declarative, component-based JavaScript library for building user interfaces.                          | [React Official Site](https://react.dev/)                         |
| **TypeScript (v5.x)** | A superset of JavaScript that adds static types, enhancing code quality and developer productivity.      | [TypeScript Official Site](https://www.typescriptlang.org/)       |
| **Vite (v7.0.0)**   | A blazing-fast build tool and development server, offering a streamlined development workflow.           | [Vite Official Site](https://vitejs.dev/)                         |
| **Tailwind CSS (v3.x)** | A utility-first CSS framework for rapidly building custom designs without leaving your HTML.             | [Tailwind CSS Official Site](https://tailwindcss.com/)            |
| **Web Cryptography API** | Browser-native API used for robust client-side encryption and decryption.                             | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) |
| **IndexedDB**      | A low-level API for client-side storage of significant amounts of structured data, ensuring privacy.     | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) |
| **React Router DOM (v7.x)** | Declarative routing library for React applications.                                                      | [React Router](https://reactrouter.com/)                          |
| **Lucide React**   | A collection of beautiful, community-maintained icons for React projects.                                | [Lucide Icons](https://lucide.dev/)                               |
| **Sonner**         | An opinionated toast component for React, providing elegant and accessible notifications.                | [Sonner GitHub](https://sonner.emilkowalski.no/)                  |

## 🤝 Contributing

We welcome contributions to SafeWords! Whether it's a bug report, a new feature, or an improvement to the documentation, your input is highly valued.

*   **1. Fork the Repository:**
Start by forking the SafeWords repository to your GitHub account.

*   **2. Clone Your Fork:**
Clone your forked repository to your local machine:

```bash
git clone https://github.com/YourUsername/SafeWords.git
```

*   **3. Create a New Branch:**
Before making changes, create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/fix-description-error
```

*   **4. Make Your Changes:**
Implement your changes, ensuring your code adheres to the existing style and best practices. Write clear, concise commits.

*   **5. Test Your Changes:**
Before submitting, thoroughly test your changes to ensure they work as expected and don't introduce new issues.

*   **6. Push Your Branch:**
Push your changes to your forked repository on GitHub:

```bash
git push origin feature/your-feature-name
```

*   **7. Open a Pull Request:**
Finally, open a pull request from your branch to the `main` branch of the original SafeWords repository. Provide a clear description of your changes and why they are necessary.

Thank you for helping to improve SafeWords!

## 📜 License

No explicit license file has been provided with this project. Please refer to the repository owner for licensing details or consider it proprietary unless otherwise stated.

## ✍️ Author

SafeWords was crafted with dedication by:

**Charmingdc**
*   **GitHub**: [@Charmingdc](https://github.com/Charmingdc)
*   **Twitter**: [@Charmingdc01](https://twitter.com/Charmingdc01)
*   **LinkedIn**: [Adebayo Muis](https://www.linkedin.com/in/adebayo-muis)

---


[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)