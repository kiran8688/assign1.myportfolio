# Reinvented MyResume Template

This project is a complete reinvention of the "MyResume" HTML/CSS template into a modern tech stack utilizing React, TailwindCSS, and FastAPI.
The functionality and aesthetic feel have been preserved while migrating away from legacy static files and PHP handlers.

## Architecture

- **Frontend**: React (Vite) + TailwindCSS
- **Backend**: Python FastAPI
- **Icons**: React Icons
- **HTTP Client**: Axios

## Features Preserved

- Sidebar Navigation with smooth scrolling behavior.
- Hero, About, Skills, Resume sections replicated accurately.
- Fully responsive design using TailwindCSS utility classes.
- Contact form that interacts with the newly built Python FastAPI backend.

## Requirements

### Backend
- Python 3.8+
- FastAPI
- Uvicorn
- Pydantic

### Frontend
- Node.js (v14+)
- npm or yarn

## How to Run Locally

### 1. Backend (FastAPI)

1. Navigate to the `backend` directory:
   cd backend
2. Create a virtual environment and activate it (optional but recommended)
3. Install dependencies:
   pip install -r requirements.txt
4. Run the development server:
   uvicorn main:app --reload
   *The backend will be available at http://127.0.0.1:8000.*

### 2. Frontend (React + Vite)

1. Open a new terminal and navigate to the `frontend` directory:
   cd frontend
2. Install dependencies:
   npm install
3. Run the development server:
   npm run dev
   *The frontend will typically be available at http://127.0.0.1:5173.*

## Project Structure

backend/                  # Python FastAPI application
  main.py               # API endpoints (e.g., /contact)
  requirements.txt      # Python dependencies
frontend/                 # React application
  public/               # Static assets (images, icons)
  src/
    components/       # Reusable React components (Hero, About, etc.)
    App.jsx           # Main application layout
    main.jsx          # Entry point
    index.css         # Tailwind directives and base styles
  tailwind.config.js    # Tailwind configuration
  package.json          # Node dependencies
documentation/            # Project documentation (this file)
