# 🛒 SuperDuper eCommerce  
> Modern React E-Commerce Frontend mit Cart State Management & Theming

<p align="left">
  <img alt="React" title="React" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" />
  <img alt="Vite" title="Vite" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/vite/vite.png" />
  <img alt="Tailwind CSS" title="Tailwind CSS" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png" />
  <img alt="JavaScript" title="JavaScript" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" />
  <img alt="HTML" title="HTML" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/html/html.png" />
  <img alt="CSS" title="CSS" height="32" style="margin-right:18px;" src="https://raw.githubusercontent.com/github/explore/main/topics/css/css.png" />
</p>





---

## 📖 Overview

**SuperDuper eCommerce** ist ein modernes, responsives E-Commerce-Frontend, entwickelt mit React und Vite.
---

## 🖼 UI Preview

<table>
  <tr>
    <td><b>Home / Product Overview</b><br/>Categories + Product Grid</td>
    <td><b>Cart</b><br/>Qty Controls + Line Totals + Total</td>
  </tr>
  <tr>
    <td>
      <img width="900" alt="Home - Product overview" src="https://github.com/user-attachments/assets/1c2e6f05-77f0-4978-9926-309484362c5e" />
    </td>
    <td>
      <img width="900" alt="Cart" src="https://github.com/user-attachments/assets/292d225f-bfb2-4b54-816f-d457feaf39fb" />
    </td>
  </tr>
</table>


Das Projekt demonstriert saubere Component-Architektur, globales State-Handling, Routing-Struktur sowie UI-Design mit TailwindCSS und daisyUI.

Der Fokus liegt auf:

- State Management
- Component Reusability
- Clean Architecture
- UI/UX Struktur
- Performance durch useMemo

---

## ✨ Features

### 🛍 Product System
- Produkt-Grid mit API-Daten (FakeStoreAPI)
- Kategorienfilter
- Responsive Card Layout
- Preisformatierung (EUR)

### 🛒 Cart System
- Globaler Warenkorb
- Mengensteuerung (+ / -)
- Dynamische Zeilensummen
- Automatische Gesamtsumme
- Cart-Badge im Navbar
- OutletContext State Sharing

### 🌗 Theming
- Dark / Light Mode
- DaisyUI Theme Switching
- Persistente UI-Struktur

### ⚡ Performance
- useMemo für optimierte Berechnungen
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
├── context/          → (Optional Erweiterung)
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

### 1. Clone Repository

```bash
git clone https://github.com/Codenix-1349/ECommerce_Demo.git
cd ECommerce_Demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Dev Server

```bash
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

## 📦 Future Improvements

- Persistenter Warenkorb via LocalStorage
- Produktdetailseite
- Artikel entfernen
- Stripe / PayPal Integration (Backend)
- Authentication Layer
- Testing (Vitest)
- Code Splitting
- Deployment (Vercel)

---

## 🎯 What This Project Demonstrates

- React Component Architecture
- State Lifting & Context Patterns
- Performance Optimization (useMemo)
- Clean Folder Structure
- Tailwind Utility Workflow
- Modern Frontend Tooling

---

## 👨‍💻 Author

Patrick Neumann  
Junior Full-Stack Developer  

- GitHub: https://github.com/Codenix-1349  
- LinkedIn: https://linkedin.com/in/patrick-neumann-532367276  
