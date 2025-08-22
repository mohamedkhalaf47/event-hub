# Event-Hub 🎉

Event-Hub is a modern, frontend-only event management platform built to
help users discover, create, and RSVP to community events like meetups,
workshops, and social gatherings. Designed with a sleek, responsive UI,
it showcases my skills as a 3rd-year student in building dynamic React
applications for a portfolio project.

---

## 🚀 Features

- 🔍 **Event Discovery**: Browse and search events by title, location,
  or category with a ticket-like experience.
- 📅 **Event Creation**: Organizers can create events with details
  like title, description, date, and location.
- 🎟️ **RSVP Management**: View and manage RSVPs with role-based access
  (Participants RSVP, Organizers manage their events).
- 📍 **Category-Based Browsing**: Explore events by categories (e.g.,
  Workshops, Social).
- 👤 **User Profiles**: Display user info and event history (organized
  or attended).
- 🌙 **Modern UI**: Clean, accessible design with Tailwind CSS and
  Shadcn/ui.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop.

---

## 🔗 Demo

[Live Demo (Placeholder: Add your Vercel deployment link here once
deployed.)](https://khalaf-eventhub.netlify.app/)

---

## 🛠️ Tech Stack

- ⚡ **Vite**: Fast frontend tooling for development and build.
- ⚛️ **React**: Component-based UI library for dynamic interfaces.
- 🔷 **TypeScript**: Strongly typed JavaScript for robust code.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for styling.
- 🧩 **Shadcn/ui**: Reusable, customizable UI components.
- 🛣️ **React Router**: Client-side routing for seamless navigation.

---

## 📂 Project Structure

```bash
src/
├── components/    # Reusable UI components (e.g., EventCard, Navbar)
├── pages/         # App pages (Home, EventCreation, EventDetail, etc.)
├── hooks/         # Custom React hooks (e.g., useAuth, useEvents)
├── assets/        # Static assets (images, icons)
└── App.tsx        # Main app entry with routing
```

---

## 🎨 Design

### Color Palette

- Primary: Soft Blue (#4B6CB7) -- Buttons, links, highlights.
- Secondary: Warm Coral (#FF6B6B) -- CTAs (e.g., RSVP, Create Event).
- Background: Off-White (#F8FAFC) -- Clean base.
- Text Primary: Dark Gray (#1A202C) -- Readable text.
- Accent: Light Green (#48BB78) -- Success states, RSVP updates.

### Typography

- Primary Font: **Inter (sans-serif)** -- Body text, buttons (Regular
  400, Medium 500, Bold 700).
- Secondary Font: **Poppins (sans-serif)** -- Headings, titles (Medium
  500, SemiBold 600).
- Sizes:
  - Headings: text-2xl (24px mobile), text-3xl (32px desktop).
  - Body: text-base (16px mobile), text-lg (18px desktop).
  - Small text: text-sm (14px).

---

## 📋 Pages

- **Homepage**: Event grid, search bar, and category filters.
- **Event Creation**: Form for organizers to create events.
- **Event Detail**: Event details, RSVP button (role-based), live
  counter placeholder.
- **Profile**: User info, tabs for organized/attended events.
- **Search Results**: Filtered event grid based on search query.
- **My RSVPs**: List of user's RSVP'd events with cancel options
  (role-based).
- **Event Categories**: Browse events by category (e.g., Workshops,
  Social).

---

## 🛡️ Role-Based Access

- **Participant**: Can RSVP to events and cancel own RSVPs.
- **Organizer**: Can manage RSVPs for their events (add, edit,
  delete).
- **Admin**: Full RSVP control for all events.
- **Guest**: View events, prompted to sign up for RSVPs.\
  _(Note: Role-based logic is mocked in frontend; backend integration
  pending.)_

---

## 🏗️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mohamedkhalaf47/event-hub.git

# Navigate to the project folder
cd event-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open <http://localhost:5173> in your browser.

---

## 🚧 Future Enhancements

- Backend integration with Express and MongoDB for data persistence.
- Real-time Events updates using Socket.io.
- Authentication with JWT for secure role-based access.
- Deployment to Vercel for live demo.

---

## 👨‍💻 About the Developer

Hi, I'm **Mohamed Khalaf**, a 3rd-year business information system student
passionate about building full-stack applications. Event-Hub is a
portfolio project showcasing my skills in React, TypeScript, and modern
UI design. Connect with me on
[LinkedIn](https://www.linkedin.com/in/mohamed-m-khalaf/) or check out my
other projects on [GitHub](https://github.com/mohamedkhalaf47).

---

## 📜 License

This project is licensed under the **MIT License**.

© 2025 Mohamed Khalaf
