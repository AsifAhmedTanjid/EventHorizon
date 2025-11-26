# Event Horizon 🌌

**Event Horizon** is a futuristic event ticketing and management platform built with Next.js 16. It allows users to discover, create, and manage events with a sleek, space-themed UI. The platform features Firebase authentication, real-time event search, category filtering, and user-specific event management.

## Features

- 🎫 Browse and search events across multiple categories
- 🚀 Create and manage your own events
- 🔐 Secure authentication with Firebase (Email/Password & Google Sign-In)
- 🎨 Modern, dark-themed UI with Tailwind CSS & DaisyUI
- 🔍 Real-time search and category filtering
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js App Router

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, DaisyUI 5
- **Authentication:** Firebase Auth
- **State Management:** React Context API, TanStack Query
- **Backend API:** Node.js/Express (deployed separately)
- **Icons:** React Icons
- **Notifications:** React Hot Toast

## Setup & Installation

### Prerequisites

- Node.js 18+ installed
- Firebase project set up
- Backend API running (or use the deployed version)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AsifAhmedTanjid/EventHorizon.git
   cd event-horizon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Route Summary

### Public Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, upcoming events, categories, testimonials |
| `/events` | Browse all events with search & category filtering |
| `/events/[id]` | Event details page with venue, organizer, and booking info |
| `/about` | About EventHorizon and mission statement |
| `/contact` | Contact form and support information |
| `/login` | User login page (email/password & Google) |
| `/register` | User registration page |

### Protected Routes (Requires Authentication)

| Route | Description |
|-------|-------------|
| `/events/add` | Create a new event (authenticated users only) |
| `/events/manage` | Manage your created events (view & delete) |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes (grouped)
│   │   ├── login/
│   │   └── register/
│   ├── events/            # Event-related pages
│   │   ├── [id]/          # Dynamic event detail page
│   │   ├── add/           # Create event page
│   │   └── manage/        # Manage events page
│   ├── about/
│   ├── contact/
│   └── page.jsx           # Homepage
├── components/            # Reusable React components
├── context/               # Context providers (Auth)
└── lib/                   # Firebase config and utilities
```

## API Endpoints

The app connects to a backend API at `https://event-horizon-server.vercel.app`

Key endpoints:
- `GET /events` - Fetch all events
- `GET /events/:id` - Fetch single event
- `GET /search?search=query` - Search events
- `GET /my-events` - Fetch user's created events (authenticated)
- `POST /events` - Create new event (authenticated)
- `DELETE /events/:id` - Delete event (authenticated)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


