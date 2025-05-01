-- 1. Calculate the total sales volume for March 2024
SELECT SUM(amount) as total_sales_march
FROM orders
WHERE strftime('%Y-%m', order_date) = '2024-03';

-- 2. Find the customer who spent the most overall
SELECT 
    customer,
    SUM(amount) as total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;

-- 3. Calculate the average order value for all time
SELECT 
    AVG(amount) as average_order_value
FROM orders;

-- 4. Additional useful queries for verification

-- Verify total sales for March (should be 27,000)
SELECT 
    SUM(amount) as total_sales_march,
    COUNT(*) as number_of_orders
FROM orders
WHERE strftime('%Y-%m', order_date) = '2024-03';

-- Verify Alice's total spending (should be 20,000)
SELECT 
    customer,
    SUM(amount) as total_spent
FROM orders
WHERE customer = 'Alice';

-- Verify average order value (should be 6,000)
SELECT 
    AVG(amount) as average_order_value,
    SUM(amount) as total_sales,
    COUNT(*) as number_of_orders
FROM orders; 