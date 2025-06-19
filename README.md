# 🚀 Build a Simple Chrome Extension from Scratch

Welcome! This repository is a beginner-friendly guide and codebase for building your **first Chrome Extension**. Whether you're exploring browser extension development or just love tinkering with frontend projects — this one's for you!

---

## 🧠 What Is a Chrome Extension?

A **Chrome Extension** is a small software program that enhances or modifies the browsing experience in Google Chrome.

### ✅ Functionally:

- It can **add new features** to Chrome (like a to-do list, password manager, or color picker).
- It can **interact with web pages**, change how they look or behave.
- It can add **custom UI elements**, like buttons or popup windows.
- It can automate tasks, remember preferences, or enhance productivity.

### 🧑‍💻 Programmatically:

- A Chrome Extension is made using **HTML**, **CSS**, and **JavaScript** — just like a normal website.
- The core is the **`manifest.json`** file — it tells Chrome what your extension does, what files it uses, and what permissions it needs.
- You can write:

  - **Popup Scripts**: JS that runs when the user clicks your extension icon.
  - **Content Scripts**: JS injected into websites to modify them.
  - **Background Scripts**: JS that runs in the background to handle events or persistent logic.

---

## 🔍 What This Extension Does

This Chrome Extension makes it easy to **look up any word on Wikipedia directly from any web page**.

### ✨ How it works:

1. **Select and highlight** any word or phrase on a webpage.
2. **Right-click** the highlighted text.
3. In the context menu, choose **“Look up on Wikipedia”**.
4. A new tab will open with the relevant Wikipedia article for that word or phrase.

### 📌 Example:

Highlight `Machine Learning` on any website → Right-click → Click **“Look up on Wikipedia”** → You’ll be taken to [https://en.wikipedia.org/wiki/Machine_learning](https://en.wikipedia.org/wiki/Machine_learning)

### 🧠 Why it’s useful:

- Quick reference while reading articles, blogs, or research papers.
- No need to open a new tab and manually type.
- Works on **any selectable text** across the web.

---

## 📁 Project Structure

```
simple-chrome-extension/
├── manifest.json          # Configuration file for the extension
├── lookup.js              # Logic for the extension
├── icons/                 # Extension icons (16x16, 48x48, 128x128)
└── README.md              # You're here!
```

---

## ⚙️ How to Use

1. **Clone the repository**

   ```bash
   git clone https://github.com/bhumiii2114/simple-chrome-extension.git
   ```

2. **Open Chrome** and go to `chrome://extensions/`

3. **Enable Developer Mode** (top right toggle)

4. **Click "Load unpacked"** and select the project folder

5. Your extension will now appear in the Chrome toolbar! 🎉

6. Select and highlight the text and right-click to use the extension.

---

## 🛠 Features

- 🔍 **Wikipedia Lookup via Right-Click**
  Instantly search Wikipedia for any selected word or phrase using the browser's context menu.

- ⚡ **Fast & Lightweight**
  No heavy UI or popup — just select, right-click, and go.

- 🌐 **Works on Any Website**
  Supports text selection from any webpage you visit.

- 🧭 **Automatic Tab Redirection**
  Opens the relevant Wikipedia article in a **new tab** without disrupting your current page.

- 🧱 **Simple Codebase**
  Built with just HTML and JavaScript using Chrome’s `contextMenus` API and `manifest v3`.
