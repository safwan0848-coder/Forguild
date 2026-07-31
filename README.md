# Forguild

Forguild is an event platform with a React/Vite frontend and a Django backend, organized as a monorepo.

## Project Structure

```text
Forguild/
├── frontend/             # React/Vite application
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/              # Django backend
│   ├── forguild_project/ # Django project settings
│   ├── event_platform/   # Django app
│   ├── manage.py
│   └── requirements.txt
│
└── docs/                 # Project documentation
    ├── prd_and_architecture.md
    ├── PROJECT_DOCUMENTATION.md
    └── future_roadmap.md
```

## Setup & Development

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

### Backend
1. Navigate to the backend directory: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment (e.g. `.\venv\Scripts\activate` on Windows).
4. Install dependencies: `pip install -r requirements.txt`
5. Run the server: `python manage.py runserver`

## Documentation
Additional documentation and future plans can be found in the `docs/` folder.
