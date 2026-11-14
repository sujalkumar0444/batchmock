# Batch Operations – Listing, Search & Pagination

Full-stack interview assignment: React (Vite + Tailwind) frontend and Node.js (Express) backend.

## Tech Stack

| Layer    | Stack                                      |
|----------|--------------------------------------------|
| Frontend | React 19, Vite 8, Tailwind CSS 4, Axios    |
| Backend  | Node.js, Express 5, CORS                   |
| Data     | Local mock JavaScript array (no database)  |

## Requirements

- **Node.js** `>= 20` (works on Node 20, 22, and 24+)
- **npm** `>= 10` (works with npm 10 and npm 12 when paired with a supported Node version)

> Note: npm 12 requires Node `^22.22.2`, `^24.15.0`, or `>=26`. On Node 20, use npm 10 (bundled with Node).

## Project Structure

```
assignment/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   │   └── batches.js
│   ├── app.js
│   └── server.js
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
└── README.md
```

## Setup & Run

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

API runs at **http://localhost:5000**

### 2. Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

App runs at **http://localhost:5173**

## API

### `GET /api/batches`

Query parameters:

| Param    | Description                          | Default |
|----------|--------------------------------------|---------|
| `page`   | Page number                          | `1`     |
| `limit`  | Records per page                     | `5`     |
| `search` | Search by batch code or course name  | `""`    |
| `status` | `Running` / `Upcoming` / `Completed` | `""`    |
| `centre` | Exact centre name                    | `""`    |

Example:

```
GET /api/batches?page=1&limit=5&search=full&status=Running&centre=London-HQ
```

Response shape:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 5,
    "totalRecords": 10,
    "totalPages": 2
  }
}
```

### `GET /api/centres`

Returns distinct centre names for the filter dropdown.

## Features

- Batch listing table (data from API only)
- Search by batch code / course name
- Filter by status and centre (combined with search)
- Pagination (5 records per page)
- Loading, error, and empty states
- Create Batch button (UI only)

## Notes

- Only **GET** APIs are implemented (no POST/PUT/PATCH/DELETE).
- No database — mock data lives in `backend/data/batches.js`.
