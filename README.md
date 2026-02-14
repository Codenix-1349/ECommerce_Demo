# 🛒 SuperDuper eCommerce  
> Modern React e-commerce frontend with persistent cart state, dynamic pricing and dark mode UI

<p align="left">
  <img alt="React" title="React" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" />
  <img alt="Vite" title="Vite" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/vite/vite.png" />
  <img alt="Tailwind CSS" title="Tailwind CSS" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png" />
  <img alt="JavaScript" title="JavaScript" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" />
</p>

---

## 📖 Overview

**SuperDuper eCommerce** ist ein modernes, responsives E-Commerce-Frontend, entwickelt mit React und Vite.

Das Projekt demonstriert saubere Component-Architektur, globales State-Handling, Performance-Optimierung sowie UI-Design mit TailwindCSS und daisyUI.

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
- Produkt-Grid mit Live-Daten (FakeStoreAPI)
- Kategorienfilter (Client-Side Filtering)
- Responsive Card Layout (TailwindCSS)
- Dynamische Preisformatierung (EUR)
- Add-to-Cart mit sofortigem State-Update

### 🛒 Cart System
- Globaler Cart State (MainLayout + OutletContext)
- Persistenter Warenkorb via LocalStorage
- Artikel entfernen
- Mengensteuerung (+ / -)
- Dynamische Zeilensummen
- Automatische Gesamtsumme
- Cart Badge im Navbar

### 🌗 Theming
- Dark / Light Mode Toggle
- DaisyUI Theme Switching

### ⚡ Performance & Architecture
- Route-based code splitting (React.lazy + Suspense)
- useMemo für optimierte Preisberechnungen
- Saubere State-Architektur
- Modularer Utility-Layer

---

## 🧠 Architecture

```
src/
│
├── components/       → UI Components
├── pages/            → Route Pages
├── layouts/          → Layout Structure
├── utils/            → Business Logic
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

Der Cart-State wird zentral im `MainLayout` verwaltet und über `OutletContext` an alle Child-Routen verteilt.

---

## 🛠 Tech Stack

| Layer        | Technologie |
|-------------|------------|
| Frontend     | React 18 |
| Bundler      | Vite |
| Styling      | TailwindCSS |
| UI Library   | daisyUI |
| Routing      | React Router |
| API          | FakeStoreAPI |
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

- Produktdetailseite mit erweiterten Informationen
- Echter Checkout Flow (PayPal / Stripe Backend)
- Backend-Anbindung für Produktverwaltung
- Authentication Layer (User Accounts)
- Testing (Vitest / React Testing Library)
- CI / Deployment Setup (Vercel)

---

## 🎯 What This Project Demonstrates

- React Component Architecture
- Global State Handling
- Route-based Code Splitting
- Performance Optimization (useMemo)
- Persistente UI-State-Logik
- Modern Tailwind Utility Workflow

---

## 👨‍💻 Author

Patrick Neumann  
Junior Full-Stack Developer  

- GitHub: https://github.com/Codenix-1349  
- LinkedIn: https://linkedin.com/in/patrick-neumann-532367276  
