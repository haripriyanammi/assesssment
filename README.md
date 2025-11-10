Flowbit Backend – Analytics Dashboard API (Assignment Submission)

This repository has the backend portion of the assignment given by Flowbit Private Limited for the Full Stack Developer Internship.
It includes:
-> PostgreSQL + Prisma database
-> Fully normalized schema
-> Seed script using Analytics_Test_Data.json
-> REST APIs for all dashboard modules
-> Functional Express server
-> Working endpoints for Analytics, Trends, Vendors, Invoices, Category Spend, Cashflow
-> GitHub-ready monorepo backend structure
Frontend (Next.js) and Vanna AI (Python) are not included in this submission.

->Tech Stack (Backend Only)
Node.js + TypeScript
Express.js
Prisma ORM
PostgreSQL (Neon Cloud)
npm workspaces monorepo

Folder structure:

flowbit/
 ├── apps/
 │    └── api/           # Express backend
 ├── packages/
 │    └── db/            # Prisma + database layer
 └── data/
      └── Analytics_Test_Data.json

->Database
Tables Implemented
Vendors
Invoices
LineItems
Payments
Relationships
Vendor 1 — n Invoices
Invoice 1 — n Line Items
Invoice 1 — n Payments

->Seeding
Run:
npx tsx packages/db/prisma/seed.ts
This loads Analytics_Test_Data.json into PostgreSQL (Neon).

✅ Available API Endpoints
📊 1. Stats
GET /api/stats
Returns totals for dashboard cards:
Total Spend
Total Invoices
Documents Uploaded
Average Invoice Value

📈 2. Invoice Trends
GET /api/invoice-trends
Month-wise count + spend.

🏆 3. Top Vendors
GET /api/vendors/top10
Top 10 vendors by total spend.

🧾 4. Invoices
GET /api/invoices
Fetch all invoices (with search).

🧩 5. Category Spend
GET /api/category-spend
Spend aggregated by category.

💵 6. Cashflow
GET /api/cashflow
Grouped payments per date.

🤖 7. Chat With Data (API Ready)
POST /api/chat-with-data
This endpoint forwards the query to Vanna AI (not included in backend-only submission).

✅ Environment Variables
Backend requires:
DATABASE_URL=<your-neon-postgres-url>
VANNA_API_BASE_URL=http://localhost:8000 (placeholder)

✅ How to Run
1. Install dependencies
npm install

2. Generate Prisma Client
npx prisma generate --schema packages/db/prisma/schema.prisma

3. Start backend
cd apps/api
npm run dev


Server runs at:
http://localhost:5050/api

✅ Notes:
This submission includes only the backend, as per the selected task.
All backend endpoints work and have been tested using real database data.
