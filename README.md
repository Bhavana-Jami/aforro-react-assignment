# Afforo React Assignment - Sales Dashboard

## Live Demo

🔗 Deployed on Vercel:
[](https://aforro-react-assignment.vercel.app/)

---

## Overview

This project is a **Sales Dashboard application** built as part of a React assignment. It consists of two main parts:

1. **UI Implementation** – Replicating a dashboard layout from Figma
2. **API Integration & Data Table** – Fetching and displaying user data with search, filter, and sorting

The application demonstrates **component-based architecture, clean UI design, and data handling using React hooks**.

---

## Features

### Dashboard UI

* Sidebar navigation with icons
* Top navbar with search and profile section
* Sales summary cards
* Multiple charts (Line & Bar)
* Top products table with progress bars
* Sales mapping section
* Volume vs Service Level chart

---

### Users Section (API Integration)

* Fetches data from:

  ```
  https://jsonplaceholder.typicode.com/users
  ```

#### Table includes:

* Name
* Email
* Company Name
* City

#### Functionalities:

* Search (by name or email)
* Sorting (A–Z / Z–A)
* Filter (by city)
* Loading state handling
* Error handling
* Empty state message

#### Implementation Detail:

* Custom hook (`useUsers`) manages:

  * API fetching
  * Search, filter, sort logic
  * State management

---

## Tech Stack

* React (Functional Components + Hooks)
* TypeScript
* Tailwind CSS
* React Router
* Recharts (for charts)
* React Icons

---

## Libraries Used

```json
{
  "@tailwindcss/vite": "^4.2.2",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-icons": "^5.6.0",
  "react-router-dom": "^7.14.1",
  "recharts": "^3.8.1",
  "tailwindcss": "^4.2.2"
}
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the development server

```bash
npm run dev
```

---

### 4. Open in browser

```
http://localhost:5173
```

---

## Project Structure

```
src/
  components/
    Sidebar.tsx
    Navbar.tsx
    SalesCard.tsx
    charts/
  pages/
    Dashboard.tsx
    Users.tsx
  hooks/
    useUsers.ts
  services/
    api.ts
```

---

##  Routing

* `/` → Dashboard
* `/users` → Users Table

---

## Key Decisions

* Used **Tailwind CSS** for fast and consistent UI development
* Implemented **custom hook** (`useUsers`) for better separation of logic
* Used **Recharts** for lightweight and responsive charts
* Kept static data co-located with components to avoid overengineering

---

## Assumptions

* Chart data is static (for UI representation)
* Map section is simplified (no heavy geo libraries)
* API is public and does not require authentication

---

## Future Improvements

* Add pagination to users table
* Add debounced search
* Improve map visualization with real geo data
* Make table component reusable
* Add dark mode support

---

## Conclusion

This project focuses on:

* Clean UI implementation
* Structured React architecture
* Efficient state and data handling

It reflects practical frontend development skills aligned with real-world applications.

---
