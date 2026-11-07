# Fit Log – Workout Planner

A modern, responsive, and user-friendly workout planning application built with **Next.js, React, TypeScript, and Tailwind CSS**. Fit Log helps users explore workouts, manage their personal workout plans, and organize their daily fitness activities.

## Overview

Fit Log is designed to make workout planning simple and organized. Users can browse different workout exercises, explore workout details, add exercises to their personal plans, and manage their daily workout routines through an intuitive interface.

## Features

- **Browse Workouts:** Explore available workout exercises.
- **Workout Details:** View individual workout information.
- **Add to My Plan:** Add your favorite workouts to your personal plan.
- **Today's Plan:** Organize and manage daily workout activities.
- **Remove Workouts:** Easily remove exercises from your saved plan.
- **Context API:** Manage workout data and application state.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Loading UI:** Custom loading component for a better user experience.
- **404 Page:** Custom not-found page for invalid routes.
- **Dynamic Routing:** Access individual workout details using dynamic routes.

## Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | React framework |
| React | UI development |
| TypeScript | Type safety |
| Tailwind CSS | Styling and responsive design |
| React Context API | Global state management |
| React Toastify | Toast notifications |

## Project Structure

```text
fit-log/
│
├── public/
│   ├── banner.png
│   ├── file.svg
│   ├── globe.svg
│   ├── logo.png
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/
│   │   ├── My-plan/
│   │   │   └── page.tsx
│   │   │
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── Components/
│   │   ├── workoutDetails/
│   │   │   └── Addbtn.tsx
│   │   ├── Banner.tsx
│   │   ├── Card.tsx
│   │   ├── ClientLayout.tsx
│   │   ├── Myplan.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavbarBtn.tsx
│   │   └── Navlinks.tsx
│   │
│   ├── context/
│   │   └── WorkoutContext.tsx
│   │
│   ├── lib/
│   │   └── api.ts
│   │
│   └── types/
│       └── workoutTypes.ts
│
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd fit-log
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

https://fit-log-rfg5.vercel.app/My-plan

The application will now be running locally.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build the application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/My-plan` | Personal workout plan |
| `/workout/[id]` | Individual workout details |

## Future Improvements

- User authentication and personalized profiles.
- Workout progress tracking.
- Weekly and monthly workout statistics.
- Exercise search and filtering.
- Advanced workout recommendations.

## Author

**ASHRAF ALI**

GitHub: [Your GitHub Profile](https://github.com/Ashrafalicodes)

---

If you find this project useful, feel free to explore the repository and share your feedback.

**Built with Next.js and TypeScript.**