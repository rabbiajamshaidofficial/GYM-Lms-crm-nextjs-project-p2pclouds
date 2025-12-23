### 🏋️‍♂️ P2PCloudsGYM — AI-Powered Gym Management SaaS

> **Run Your Gym Like a Business 💪**
> Automate your members, payments, products, and analytics — all in one smart dashboard.

---

### 🌟 Overview

**P2PCloudsGYM** is a modern **Gym Management SaaS** built under the **P2PClouds ecosystem**.
It helps gym owners and managers automate everything from **member onboarding** to **fee tracking**, **eCommerce**, and **AI-driven analytics** — inside a clean, powerful dashboard.

---

### 🚀 Key Features

#### 🧍‍♂️ Member Management

- Add and manage gym members with profile data
- Generate **QR-based membership cards**
- Track member attendance and renewals
- Member portal for profile, payments, and purchases

#### 💳 Fee & Billing System

- Create and manage **membership plans**
- Automatic invoice generation
- Fee reminders & late-fee tracking
- Export reports as **PDF** or **Excel**

#### 🏋️‍♀️ Gym Plans & Subscriptions

- Custom plans (daily, monthly, yearly)
- Add trainer assignments and plan benefits
- Renew or upgrade memberships easily

#### 🛒 Integrated eCommerce Store

- Sell gym supplements, accessories, and merch
- Manage product inventory and online orders
- Secure payment integration
- Sales analytics and profit tracking

#### 📈 Reports & Analytics

- Visual dashboards with charts and growth graphs
- Track active members, renewals, revenue
- Export daily, weekly, or monthly reports
- AI insights for gym performance and trends

#### 🧠 AI-Powered Dashboard

- Predict renewal trends & revenue patterns
- AI chat assistant for gym management queries
- Smart analytics visualized in real time

#### 🧾 Admin & Sub-Agent System

- Multi-branch support
- Role-based access (Owner, Manager, Sub-Agent)
- Activity logs and audit tracking

---

### 🧭 Tech Stack

| Layer                | Technologies                                                                            |
| -------------------- | --------------------------------------------------------------------------------------- |
| **Frontend**         | Next.js 15 (App Router), React 19, TypeScript, TailwindCSS v4, shadcn/ui, Framer Motion |
| **Backend**          | Firebase (Firestore, Auth, Storage, Cloud Functions)                                    |
| **UI Library**       | shadcn/ui + Lucide Icons                                                                |
| **Charts & Reports** | ApexCharts / Recharts / jsPDF                                                           |
| **Hosting**          | Vercel / Firebase Hosting                                                               |
| **Database**         | Firestore (NoSQL)                                                                       |
| **State Management** | Redux Toolkit + Zustand                                                                 |

---

### ⚙️ Installation & Setup

#### 🪄 Prerequisites

- Node.js v18+
- npm or yarn
- Firebase project created

#### 🧩 Steps

```bash
# 1️⃣ Clone the repository
git clone https://github.com/p2pclouds/p2p-gym-saas.git

# 2️⃣ Navigate into the project folder
cd p2p-gym-saas

# 3️⃣ Install dependencies
npm install

# 4️⃣ Set up environment variables
cp .env.example .env.local
# Add your Firebase credentials and API URLs here

# 5️⃣ Run the development server
npm run dev

# 6️⃣ Open in browser
http://localhost:3000
```

---

### 🔐 Environment Variables

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_PWA=true
```

---

### 🧭 Folder Structure

```
p2p-gym-saas/
│
├── components/
│   ├── landing/         # Public landing page sections
│   ├── layout/          # Navbar, Footer, etc.
│   ├── ui/              # shadcn UI components
│   └── dashboard/       # Authenticated admin modules
│
├── app/
│   ├── (public)/        # Marketing pages
│   ├── (dashboard)/     # Admin area routes
│   └── api/             # Server functions
│
├── lib/
│   ├── data.ts          # Static data
│   ├── firebase.ts      # Firebase config
│   └── utils.ts         # Helper functions
│
├── public/
│   ├── images/
│   └── icons/
│
├── redux/
│   └── slices/          # State slices
│
└── README.md
```

---

### 💼 Business Use Cases

- Single Gym Owners 🏋️
- Multi-Branch Gym Chains 🏢
- Fitness Studios 🧘
- Personal Trainers 📊
- Health & Fitness Franchises 🌍

---

### 💚 P2PClouds Ecosystem Integration

This product is part of the **P2PClouds Suite**, alongside:

- 🧠 **SkillUstad LMS** – AI-powered learning platform
- 🧾 **LalaPak Dairy SaaS** – Supplier & accounting automation
- 🎥 **P2P Video Downloader** – Cross-platform video API
- 🤖 **AI Agents & Chatbots Bootcamp**

---

### 🧩 Upcoming Features

✅ Member mobile app (React Native + Firebase)
✅ WhatsApp renewal reminders
✅ AI auto-invoice assistant
✅ Gym-level analytics leaderboard

---

### 📞 Support & Contact

**Website:** [p2pclouds.net](https://p2pclouds.net)
**Email:** [support@p2pclouds.net](mailto:support@p2pclouds.net)
**Founder:** Mian Ahmad Basit
**Brand:** P2PClouds®

---

### ⚡ License

This project is licensed under the **P2PClouds Private License (2025)**.
Unauthorized distribution or resale is strictly prohibited.
