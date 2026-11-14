# Batch Operations

Batch listing page with search, filters, and pagination.

## Tech stack

- Frontend: React, Vite, Tailwind CSS, Axios
- Backend: Node.js, Express
- Data: mock JavaScript array (no database)

## Prerequisites

- Node.js 20 or higher
- npm 10 or higher

## Project structure

```
assignment/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   │   └── batches.js
│   ├── utils/
│   ├── app.js
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── pages/
        ├── services/
        ├── hooks/
        ├── App.jsx
        └── main.jsx
```

## Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

Server: http://localhost:5000

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App: http://localhost:5173

## API

### GET /api/batches

Query params:

| Param  | Description                         | Default |
|--------|-------------------------------------|---------|
| page   | Page number                         | 1       |
| limit  | Records per page                    | 5       |
| search | Batch code or course name           |         |
| status | Running / Upcoming / Completed      |         |
| centre | Centre name                         |         |

Example:

```
GET /api/batches?page=1&limit=5&search=full&status=Running&centre=London-HQ
```

Response:

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

### GET /api/centres

Returns centre names for the filter dropdown.

## Notes

- Only GET APIs are implemented
- Create Batch button is UI only
- Mock data is in `backend/data/batches.js`
