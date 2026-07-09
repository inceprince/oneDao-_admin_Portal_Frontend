# OneDAO Assignment — Ride Admin Dashboard

This is a frontend assignment I built for OneDAO. It's a ride-hailing admin dashboard where you can manage orders, rides, and clients. I tried to make it look clean and responsive.

---

## What I built

The app has two main parts — an auth flow and a dashboard.

**Auth Flow:**
- Register page
- Login page
- OTP verification page

**Dashboard (after login):**
- Overview dashboard with a knowledge base section, statistics chart, and top drivers list
- Orders page — paginated table with all orders, car comfort type, locations, status and income
- Rides page — paginated table showing driver and client info, distance, duration and amount
- Clients page — paginated table with client details, total rides and total spent

There's also a collapsible sidebar that works on mobile with a hamburger menu.

---

## Tech Stack

| Thing | What I used |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM v7 |
| UI | Bootstrap 5 + custom CSS |
| Icons | Font Awesome 7 |
| Charts | Recharts |

---

## Folder Structure

```
src/
├── components/
│   ├── DataTable.jsx       # recent trips table on dashboard
│   ├── KnowledgeBase.jsx   # info cards section
│   ├── Sidebar.jsx         # nav sidebar (works on mobile too)
│   ├── StatisticsChart.jsx # line chart using recharts
│   └── TopDrivers.jsx      # top performing drivers list
├── data/
│   ├── dashboardData.js    # mock data for dashboard widgets
│   └── pagesData.js        # mock data for orders/rides/clients
├── pages/
│   ├── Register.jsx
│   ├── Login.jsx
│   ├── Otp.jsx
│   ├── Dashboard.jsx
│   ├── Orders.jsx
│   ├── Rides.jsx
│   └── Clients.jsx
└── App.jsx                 # routes setup
```

---

## Getting Started

Make sure you have Node.js installed (I used Node 18+).

**Clone the repo:**
```bash
git clone <your-repo-url>
cd onedao-assignment
```

**Install dependencies:**
```bash
npm install
```

**Run the dev server:**
```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

**Build for production:**
```bash
npm run build
```

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Register |
| `/register` | Register |
| `/login` | Login |
| `/otp` | OTP Verification |
| `/dashboard` | Main Dashboard |
| `/orders` | Orders Table |
| `/rides` | Rides Table |
| `/clients` | Clients Table |

---

## Features I'm proud of

- The sidebar closes when you click outside on mobile (overlay click)
- Tables have checkbox selection per page and a "select all" toggle
- Pagination works correctly and shows the right count like "1–5 of 20 items"
- The statistics chart uses Recharts with two lines (average grade and exams)
- Avatar images have a fallback that shows the first letter of the name if the image fails to load

---

## Known Issues / Things to improve later

- There's no actual backend — all data is hardcoded in `src/data/`
- Auth doesn't really work, you can just go to `/dashboard` directly
- The OTP page doesn't validate the code
- I want to add search/filter to the tables in the future

---

## Screenshots

> Add screenshots here once deployed

---

Built by **Prince Singh** as a frontend assignment.
