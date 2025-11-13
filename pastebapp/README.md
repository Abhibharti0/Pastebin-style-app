📝 Paste App

A simple Paste Management Web Application built with React, Redux Toolkit, and React Router, allowing users to create, edit, delete, view, copy, and share text snippets. All pastes are stored in localStorage, so they persist across browser sessions.

✨ Features

🟢 Create new pastes with a title and content

🟢 Edit existing pastes

🟢 View individual pastes in a read-only format

🟢 Delete pastes

🟢 Copy paste content to clipboard with one click

🟢 Search pastes by title

🟢 Share pastes using the device's native share functionality (if supported)

🟢 Persistent storage using localStorage

🟢 Responsive design using Tailwind CSS

🛠 Tech Stack

⚛️ React – Frontend library

🗂 Redux Toolkit – State management

🌐 React Router v6 – Routing

🎨 Tailwind CSS – Styling

🔔 react-hot-toast – Notifications

💾 localStorage – Persistent storage

📂 Folder Structure
src/
├─ components/
│  ├─ Home.js
│  ├─ Navbar.js
│  ├─ Pastes.js
│  └─ ViewPaste.js
├─ redux/
│  └─ pasteSlice.js
├─ App.js
└─ index.js

⚡ Installation

🟢 Clone the repository:

git clone https://github.com/yourusername/paste-app.git
cd paste-app


🟢 Install dependencies:

npm install


🟢 Start the development server:

npm start


🟢 Open http://localhost:3000
 to view the app in your browser.

🚀 Usage

🟢 Create Paste: Enter a title and content, then click “Create My Paste”

🟢 Edit Paste: Click the “Edit” button next to any paste in the list

🟢 View Paste: Click the “View” button to see a read-only view

🟢 Delete Paste: Click “Delete” to remove a paste

🟢 Copy Paste: Click “Copy” to copy content to clipboard

🟢 Share Paste: Click “Share” to share using device capabilities (if supported)

🟢 Search: Use the search bar to filter pastes by title

🤝 Contributing

🟢 Fork the repo

🟢 Create a feature branch: git checkout -b feature/YourFeature

🟢 Commit changes: git commit -m "Add some feature"

🟢 Push to branch: git push origin feature/YourFeature

🟢 Open a Pull Request

📄 License

🟢 This project is licensed under the MIT License