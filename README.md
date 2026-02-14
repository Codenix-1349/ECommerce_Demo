# 🛒 SuperDuper eCommerce  
> Modern React e-commerce frontend with persistent cart state, external REST API integration and dark mode UI

<p align="left">
  <img alt="React" title="React" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" />
  <img alt="Vite" title="Vite" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/vite/vite.png" />
  <img alt="Tailwind CSS" title="Tailwind CSS" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png" />
  <img alt="JavaScript" title="JavaScript" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" />
</p>

---

## 📖 Overview

**SuperDuper eCommerce** is a modern, responsive e-commerce frontend built with React and Vite.

The application consumes live product data from an external REST API (FakeStoreAPI) and demonstrates clean component architecture, global state management, performance optimization, and UI design using TailwindCSS and daisyUI.

---

## 🖼 UI Preview

<table>
  <tr>
    <td><b>🏠 Home</b><br/><i>Product Overview</i></td>
    <td><b>🛒 Cart</b><br/><i>Dynamic Totals</i></td>
    <td><b>🌙 Dark Mode</b><br/><i>Theming</i></td>
  </tr>
  <tr>
    <td>
      <img width="420"
           alt="Home - Product overview"
           src="https://github.com/user-attachments/assets/1c2e6f05-77f0-4978-9926-309484362c5e" />
    </td>
    <td>
      <img width="420"
           alt="Cart"
           src="https://github.com/user-attachments/assets/292d225f-bfb2-4b54-816f-d457feaf39fb" />
    </td>
    <td>
      <img width="420"
           alt="Dark Mode UI"
           src="https://github.com/user-attachments/assets/d2d14c45-1dd6-4351-9aec-eb0a9c0d9e1c" />
    </td>
  </tr>
</table>

---

## ✨ Features

### 🛍 Product System
- Product grid powered by external REST API (FakeStoreAPI)
- Asynchronous data fetching (async/await)
- Category filtering (client-side)
- Responsive card layout (TailwindCSS)
- Dynamic price formatting (EUR)
- Add-to-cart with immediate state update

### 🛒 Cart System
- Global cart state (MainLayout + OutletContext)
- Persistent cart via LocalStorage
- Remove items
- Quantity control (+ / -)
- Dynamic line totals
- Automatic total calculation
- Cart badge in navbar

### 🌗 Theming
- Dark / Light mode toggle
- DaisyUI theme switching

### ⚡ Performance & Architecture
- Route-based code splitting (React.lazy + Suspense)
- useMemo for optimized price calculations
- Clean state architecture
- Modular utility layer

---

## 🧠 Architecture

```
src/
│
├── components/       → UI components
├── pages/            → Route pages
├── layouts/          → Layout structure
├── utils/            → Business logic
│
├── App.jsx
└── main.jsx
```

### State Flow

```
MainLayout
  ↓
OutletContext
  ↓
Pages (Home / Cart)
  ↓
Components
```

The cart state is managed centrally inside `MainLayout` and distributed to child routes via `OutletContext`.

---

## 🛠 Tech Stack

| Layer        | Technology |
|-------------|------------|
| Frontend     | React 18 |
| Bundler      | Vite |
| Styling      | TailwindCSS |
| UI Library   | daisyUI |
| Routing      | React Router |
| API          | FakeStoreAPI (REST) |
| Language     | JavaScript (ES6+) |

---

## 🚀 Getting Started

```bash
git clone https://github.com/Codenix-1349/ECommerce_Demo.git
cd ECommerce_Demo
npm install
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

## 📦 Future Improvements

- Product detail page with extended information
- Real checkout flow (PayPal / Stripe backend)
- Backend integration for product management
- Authentication layer (user accounts)
- Testing (Vitest / React Testing Library)
- CI / deployment setup (Vercel)

---

## 🎯 What This Project Demonstrates

- React component architecture
- External REST API integration
- Asynchronous data handling
- Global state management
- Route-based code splitting
- Performance optimization (useMemo)
- Persistent UI state logic
- Modern Tailwind utility workflow

---

## 👨‍💻 Author

Patrick Neumann  
Frontend-Focused Full-Stack Developer  

- GitHub: https://github.com/Codenix-1349  
- LinkedIn: https://linkedin.com/in/patrick-neumann-532367276  
