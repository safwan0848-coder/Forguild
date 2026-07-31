================================================================================
                        FORGUILD PLATFORM - PROJECT DOCUMENTATION
================================================================================

1. OVERVIEW
--------------------------------------------------------------------------------
Forguild is a modern, high-performance web and collaboration application designed 
for global hackathon organizers, developers, designers, innovators, and startup 
builders. The platform enables users to discover upcoming hackathons, form or join 
hackathon teams based on needed skill sets, validate startup ideas, and transform 
hackathon projects into real startups.

Tagline: Build Together. Grow Together.

Key Highlights:
  - Single-Page Application (SPA) architecture built with React 18 & Vite.
  - Seamless Light / Dark Mode theme toggle with system preference auto-detection 
    and persistent storage in localStorage.
  - Glassmorphic UI aesthetic with smooth HSL color gradients, animated background 
    ambient blobs, and responsive cards.
  - 16 interactive page views with live state management (bookmarking, team creation, 
    applicant management, live messaging, and profile editing).


2. TECH STACK & DEPENDENCIES
--------------------------------------------------------------------------------
  - Core Framework:      React 18.2.0
  - Build Tool / Server: Vite 5.1.4
  - Routing:             React Router DOM 6.22.3
  - UI Design & Icons:   Bootstrap 5.3.2, Bootstrap Icons 1.11.3, Lucide React
  - Styling System:      Vanilla CSS3 with CSS Custom Variables (HSL Design Tokens)
  - Runtime Environment: Node.js (v24+) & npm


3. PROJECT DIRECTORY STRUCTURE
--------------------------------------------------------------------------------
Forguild/
│
├── index.html                   # Vite HTML entry point (Bootstrap & Fonts CDN)
├── package.json                 # Project dependencies & npm scripts
├── vite.config.js               # Vite build configuration (Port 3000)
├── PROJECT_DOCUMENTATION.txt    # Project documentation (this file)
├── prd_and_architecture.md      # Product Requirements & Architecture Strategy
│
└── src/
    ├── main.jsx                 # React root DOM rendering & CSS imports
    ├── App.jsx                  # Main application router & global toast provider
    ├── index.css                # Global CSS design tokens, Light/Dark variables & cards
    │
    ├── context/
    │   ├── ThemeContext.jsx     # Dark/Light mode theme state & toggle logic
    │   └── AppContext.jsx       # Global application state (events, teams, profile, chat)
    │
    ├── data/
    │   └── mockData.js          # Initial datasets for events, teams, user, chat & notifications
    │
    ├── components/
    │   ├── Navbar.jsx           # Glassmorphic header with search bar, nav & theme toggle
    │   ├── Footer.jsx           # Global platform footer
    │   ├── EventCard.jsx        # Interactive hackathon card with bookmark button
    │   └── TeamCard.jsx         # Hackathon team card with role badges & join action
    │
    └── pages/
        ├── HomePage.jsx          # Landing page (Hero, featured events, recruiting teams)
        ├── EventsPage.jsx        # Events search & category filtering (AI, Web3, GreenTech)
        ├── EventDetailsPage.jsx  # Event overview, prize breakdown, schedule & rules
        ├── FindTeamPage.jsx      # Team finder filtered by required roles
        ├── TeamDetailsPage.jsx   # Team overview, roster, and applicant submission
        ├── CreateTeamPage.jsx    # Form to create and list a new hackathon team
        ├── TeamRequestsPage.jsx  # Manage incoming applicant requests (Accept/Decline)
        ├── DashboardPage.jsx     # User dashboard with metrics, active teams & activity
        ├── ProfilePage.jsx       # Public developer bio, skills badges & portfolio
        ├── EditProfilePage.jsx   # Form to edit developer profile details & avatar
        ├── SavedEventsPage.jsx   # Filtered list of bookmarked hackathons
        ├── MessagesPage.jsx      # Real-time team chat interface
        ├── NotificationsPage.jsx # Notification center feed with read/clear actions
        ├── SearchResultsPage.jsx # Global search results for hackathons and teams
        ├── LoginPage.jsx         # Sign-in page with authentication form
        └── RegisterPage.jsx      # User sign-up page with role specialization


4. PAGE ROUTES MAP
--------------------------------------------------------------------------------
  URL Path          Page Component        Description
  ----------------  ------------------    ---------------------------------------
  /                 HomePage.jsx          Platform landing page
  /events           EventsPage.jsx        Browse & filter all hackathons
  /events/:id       EventDetailsPage.jsx  Detailed hackathon overview & prize tiers
  /teams            FindTeamPage.jsx      Explore teams recruiting developers
  /teams/:id        TeamDetailsPage.jsx   View team details & apply for roles
  /teams/create     CreateTeamPage.jsx    Assemble and publish a new team
  /teams/requests   TeamRequestsPage.jsx  Review applicant requests for your team
  /dashboard        DashboardPage.jsx     Personalized user metrics & active teams
  /profile          ProfilePage.jsx       View public developer profile & portfolio
  /profile/edit     EditProfilePage.jsx   Update profile information & avatar
  /saved-events     SavedEventsPage.jsx   Bookmarked hackathons list
  /messages         MessagesPage.jsx      Team workspace chat room
  /notifications    NotificationsPage.jsx Notification feed with read state
  /search           SearchResultsPage.jsx Global keyword search results page
  /login            LoginPage.jsx         User login screen
  /register         RegisterPage.jsx      User registration screen


5. DESIGN SYSTEM & THEME CUSTOMIZATION
--------------------------------------------------------------------------------
Theme colors are controlled dynamically via CSS Custom Variables in `src/index.css`:

  Variable           Light Mode Value              Dark Mode Value
  -----------------  ----------------------------  ----------------------------
  --bg-main          #f8fafc (Soft off-white)      #090d16 (Deep dark blue/gray)
  --bg-card          rgba(255, 255, 255, 0.85)     rgba(17, 24, 39, 0.75)
  --text-main        #0f172a (Dark navy)           #f8fafc (Light slate)
  --text-muted       #64748b                       #94a3b8
  --primary          #7e22ce (Vibrant Violet)      #a855f7 (Glowing Violet)
  --gold             #d4af37 (Gold)                #fbbf24 (Glowing Gold)
  --border-glass     rgba(255, 255, 255, 0.6)      rgba(255, 255, 255, 0.08)

To toggle themes programmatically:
  The `ThemeContext` updates `document.documentElement.setAttribute('data-theme', theme)` 
  and stores the choice in `localStorage.getItem('theme')`.


6. HOW TO RUN & BUILD THE PROJECT
--------------------------------------------------------------------------------
  1. Install dependencies:
     $ npm install

  2. Run development server locally (port 3000):
     $ npm run dev

  3. Build for production distribution:
     $ npm run build

  4. Preview production build locally:
     $ npm run preview


7. BACKEND INTEGRATION GUIDELINES
--------------------------------------------------------------------------------
  All application state currently resides in `src/context/AppContext.jsx` initialized 
  from `src/data/mockData.js`. 
  To connect to a REST API or GraphQL backend:
    1. Replace local state handlers (`setEvents`, `setTeams`, `setMessages`) in AppContext 
       with `fetch()` or `axios` API calls.
    2. Connect authentication routes in `LoginPage` and `RegisterPage` to JWT / OAuth2 
       endpoints.

================================================================================
                             END OF DOCUMENTATION
================================================================================
