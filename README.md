# **SafeWords: Secure Your Digital Messages**

SafeWords is a robust web application engineered with React and TypeScript, designed to give you complete control over the privacy of your sensitive text data. 🔐 It provides powerful client-side encryption and decryption capabilities using the browser's native Web Cryptography API, ensuring your information remains confidential. Additionally, it integrates IndexedDB for persistent local storage, allowing you to securely save and retrieve your encrypted entries directly in your browser.

## 🚀 Getting Started

To get SafeWords up and running on your local machine, follow these straightforward steps.

### ✨ Prerequisites

Before you begin, ensure you have the following installed:

*   Node.js (LTS version recommended)
*   npm or yarn

### ⚙️ Installation Steps

1.  **Clone the Repository**:
Start by cloning the project to your local machine using Git:

```bash
git clone git@github.com:Charmingdc/SafeWords
```

2.  **Navigate to the Project Directory**:
Change into the newly created project folder:

```bash
cd SafeWords
```

3.  **Install Dependencies**:
Install all required project dependencies:

```bash
npm install
# or yarn install
```

4.  **Start the Development Server**:
Launch the application in development mode:

```bash
npm run dev
# or yarn dev
```

The application should automatically open in your default browser, typically at `http://localhost:5173`.

## 📖 Usage

SafeWords provides a highly intuitive interface for managing your encrypted and decrypted text.

🔑 **Encryption Process**:
1.  On the home page, ensure "Encryption" is selected as the operation type.
2.  Enter the text you wish to secure into the larger input area. This is where your confidential message goes.
3.  In the second input field, set a strong, memorable password. This password is absolutely critical for future decryption, so keep it safe!
4.  Click the "Secure" button to initiate the encryption process.
5.  A modal will pop up displaying your newly encrypted text and the password used. You can easily copy this encrypted output to your clipboard for sharing or storage, or save it directly within the application for future access.

🔓 **Decryption Process**:
1.  Switch the operation type to "Decryption".
2.  Paste the encrypted data you received or previously saved into the main input field.
3.  Enter the exact password that was used during the encryption of that data. Any mismatch will result in decryption failure.
4.  Click the "Access" button to decrypt the data.
5.  A modal will present the original, decrypted text.

💾 **Viewing Saved Encryptions**:
*   Click the "View Saved Encryptions" button available on the home page.
*   This will open a modal showcasing all the encrypted entries you've chosen to save locally.
*   Clicking on an individual entry will expand it, revealing both the full encrypted data and its corresponding password. From here, you can conveniently copy either the data or delete the entry if it's no longer needed.

💡 **Theme Toggling**:
*   SafeWords supports both a clean light theme and a sleek dark theme.
*   Simply click the sun or moon icon located in the top navigation bar to seamlessly switch between the two. Your selected theme preference will be automatically saved for your next visit.

## ✨ Features

Here's a snapshot of the core capabilities that make SafeWords a reliable choice for securing your data:

*   🔒 **Client-Side Encryption & Decryption**: Leverages the powerful Web Cryptography API (AES-GCM with PBKDF2) for robust and secure text transformation directly in your browser.
*   💾 **Local Persistent Storage**: Safely stores your encrypted entries and their respective passwords using IndexedDB, offering privacy and convenient offline access to your secrets.
*   📋 **Instant Copy to Clipboard**: Quickly copy any encrypted or decrypted output to your clipboard with a single click, enhancing workflow efficiency.
*   🎨 **Dynamic Theme Switching**: Provides a toggle between light and dark modes, with your preferred theme persistently saved across browsing sessions for a consistent user experience.
*   🚀 **Intuitive User Interface**: Designed with a clean and user-friendly layout, built using modern React components and styled efficiently with Tailwind CSS.
*   ⚡ **Real-time Notifications**: Integrates Sonner for stylish and informative toast notifications, providing immediate feedback on operations like copying, saving, and error handling.
*   🛡️ **Input Validation**: Ensures that both the data and password fields are adequately populated before processing, guiding users towards successful operations and preventing common input errors.

## 💻 Technologies Used

SafeWords is built upon a contemporary and robust web development stack, leveraging powerful tools and libraries:

| Technology           | Description                                                                                                    | Link                                                                      |
| :------------------- | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| **React 19**         | A declarative, efficient, and flexible JavaScript library for building dynamic user interfaces.                | [React](https://react.dev/)                                               |
| **TypeScript**       | A strongly typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability. | [TypeScript](https://www.typescriptlang.org/)                             |
| **Vite**             | A next-generation frontend tooling that provides a lightning-fast development experience with hot module replacement. | [Vite](https://vitejs.dev/)                                               |
| **Tailwind CSS**     | A utility-first CSS framework for rapidly building custom designs directly in your HTML.                       | [Tailwind CSS](https://tailwindcss.com/)                                  |
| **React Router DOM** | A collection of navigational components that enable declarative routing in your React applications.            | [React Router](https://reactrouter.com/)                                  |
| **Web Cryptography API** | The browser-native API providing low-level cryptographic primitives for secure operations.                       | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) |
| **IndexedDB API**    | A low-level API for client-side storage of significant amounts of structured data, including files/blobs.        | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) |
| **Sonner**           | An elegant, accessible, and customizable toast component for React applications.                                | [Sonner](https://sonner.emilkowalski.pl/)                                 |
| **Lucide React**     | A beautiful collection of customizable and tree-shakable open-source icons for React projects.                   | [Lucide React](https://lucide.dev/)                                       |

## 🤝 Contributing

I warmly welcome contributions to SafeWords! If you have ideas for new features, bug fixes, or general improvements, please consider contributing.

🌟 **Fork the Repository**:
Start by forking the repository to your own GitHub account.

🚀 **Clone Your Fork**:
```bash
git clone https://github.com/YOUR_USERNAME/SafeWords.git
```

💡 **Create a New Branch**:
Create a dedicated branch for your feature or fix:

```bash
git checkout -b feature/your-awesome-feature
# or bugfix/your-bug-fix
```

🛠️ **Make Your Changes**:
Implement your improvements or fixes within this new branch.

✅ **Commit Your Changes**:
Write clear, concise, and descriptive commit messages.

⬆️ **Push to Your Fork**:
Push your changes to your forked repository:

```bash
git push origin feature/your-awesome-feature
```

🤝 **Open a Pull Request**:
Finally, open a pull request to the `main` branch of the original SafeWords repository, providing a detailed explanation of your changes.

Your contributions are truly valued and help make SafeWords even better!

## 📜 License

This project is open source and available under no specific license. Feel free to use and modify the code for your own purposes.

## 🧑‍💻 Author

Connect with the developer behind SafeWords:

-   **GitHub**: [Charmingdc](https://github.com/Charmingdc)
-   **LinkedIn**: [Adebayo Muis](https://linkedin.com/in/your-profile)
-  **Twiter**: [@Charmingdc01](https://twitter.com/Charmingdc01)
-   **Portfolio**: [adebayomuis.vercel.app](https://adebayomuis.vercel.app)

---

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

---
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)