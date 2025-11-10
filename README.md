
1. COMPLETE README DOCUMENTATION 
# Flowbit Backend – Analytics Dashboard API

This repository contains the backend (Express + TypeScript + Prisma + PostgreSQL) portion of the Flowbit Analytics Dashboard assignment.

The backend provides all required REST APIs for:
- Metrics (stats)
- Invoice trends
- Vendor spend
- Category spend
- Cashflow data
- Invoices listing with search
- Chat-with-data backend proxy

---

## ✅ Tech Stack

**Runtime:** Node.js + TypeScript  
**Framework:** Express.js  
**Database:** PostgreSQL (Neon)  
**ORM:** Prisma  
**Monorepo:** npm workspaces  
**AI Layer (placeholder):** Vanna API endpoint

---

## ✅ Project Structure


/apps
/api → Backend (Express)
/packages
/db → Prisma schema, seed script
/...
/data → Analytics_Test_Data.json


---

## ✅ Environment Variables

Create `packages/db/prisma/.env` with:


DATABASE_URL="postgresql://<user>:<password>@<host>/<db>?sslmode=require"


Create `apps/api/.env` with:


VANNA_API_BASE_URL="http://localhost:8000
" # or hosted Vanna (not implemented here)


---

## ✅ Database Schema (Prisma)

Tables created:

- **Vendor**
- **Invoice**
- **LineItem**
- **Payment**

The schema is defined in:



packages/db/prisma/schema.prisma


---

## ✅ Seeding the Database

The JSON dataset (`Analytics_Test_Data.json`) is located at:



packages/db/prisma/data/Analytics_Test_Data.json


To run the seed:



cd ~/Documents/flowbit
npx tsx packages/db/prisma/seed.ts


This:
- Parses the JSON
- Creates vendor, invoice, line item, payment records
- Normalizes nested data

---

## ✅ Starting the Backend



cd apps/api
npm run dev


Server runs at:



http://localhost:5050


---

## ✅ API Endpoints

### 1. **GET /api/stats**
Returns totals for dashboard overview cards.

### 2. **GET /api/invoice-trends**
Returns monthly invoice count + spend.

### 3. **GET /api/vendors/top10**
Top 10 vendors by total spend.

### 4. **GET /api/category-spend**
Spend grouped by category.

### 5. **GET /api/cashflow**
Cash outflow grouped by payment date.

### 6. **GET /api/invoices**
Returns list of all invoices  
Supports search:



/api/invoices?search=Amazon


### 7. **POST /api/chat-with-data**
Forwards natural-language query to Vanna API (placeholder).

---

## ✅ Notes on Chat-With-Data (Vanna)

The backend includes a route:



POST /api/chat-with-data


It forwards NL queries to a Vanna server.

Since this repo focuses on **backend only**, a full Vanna setup is **not implemented**, but the API structure is ready.

---

## ✅ How to Run Entire Project

1. Install dependencies


npm install


2. Generate Prisma client


npx prisma generate --schema packages/db/prisma/schema.prisma


3. Seed database


npx tsx packages/db/prisma/seed.ts


4. Start backend


cd apps/api
npm run dev


---

## ✅ Deliverables Completed

- ✅ Backend APIs implemented
- ✅ PostgreSQL (Neon) connected
- ✅ Prisma schema + migrations
- ✅ Seed script for data ingestion
- ✅ JSON dataset imported
- ✅ REST endpoints for dashboard + chat
- ✅ Documentation provided (this file)

---

## ✅ Author
**Lakshmi Hari Priya Nammi**

