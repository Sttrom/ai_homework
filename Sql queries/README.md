# SQL Sales Analysis Queries

This project contains SQL queries to analyze sales data for an online store.

## Files

1. `setup.sql` - Contains the table creation and sample data
2. `queries.sql` - Contains the analysis queries

## How to Run the Queries

You can run these queries using any SQLite-compatible tool. Here are some options:

1. **SQLite Command Line Tool**:
   ```bash
   sqlite3 sales.db < setup.sql
   sqlite3 sales.db < queries.sql
   ```

2. **DB Browser for SQLite** (GUI tool):
   - Download from: https://sqlitebrowser.org/
   - Open the database
   - Execute the SQL files

3. **Online SQLite Playground**:
   - Copy the contents of setup.sql and queries.sql
   - Paste into an online SQLite playground

## Expected Results

1. **Total sales for March 2024**: 27,000
2. **Top-spending customer**: Alice (20,000)
3. **Average order value**: 6,000

## Query Explanations

1. **Total March Sales**:
   - Filters orders from March 2024
   - Sums the amount column

2. **Top Customer**:
   - Groups orders by customer
   - Calculates total spent per customer
   - Orders by total spent in descending order
   - Returns the top customer

3. **Average Order Value**:
   - Calculates the average of all order amounts
   - Considers orders from the last three months

## Verification Queries

Additional queries are included to verify the results:
- Detailed March sales breakdown
- Alice's total spending verification
- Complete average order value calculation 