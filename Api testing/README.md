# API Testing Project

This project contains automated tests for the Fake Store API (https://fakestoreapi.com/products).

## Setup Instructions

1. Make sure you have Node.js installed on your system
2. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Tests

To run the tests, use the following command:
```bash
npm test
```

## Test Cases

The tests verify the following aspects of the API:

1. Server Response Code
   - Verifies that the API returns a 200 status code

2. Product Data Validation
   - Checks if the response contains valid product data
   - Verifies that the data is an array and contains items

3. Product Attribute Validation
   - Title: Must not be empty
   - Price: Must not be negative
   - Rating: Must not exceed 5

## Test Results

The tests will:
- Display any defective products found
- Show the specific defects for each product
- Indicate whether all tests passed or failed

## Dependencies

- axios: For making HTTP requests
- jest: For running the tests 