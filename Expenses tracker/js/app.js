// Array to store expenses
let expenses = [];

/**
 * Adds a new expense to the list
 */
function addExpense() {
    const category = document.getElementById('category').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    // Input validation
    if (!category || isNaN(amount) || amount <= 0) {
        alert('Please enter valid category and amount');
        return;
    }

    // Add expense to array
    expenses.push({ category, amount });

    // Update the display
    updateExpensesList();

    // Clear input fields
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
}

/**
 * Updates the expenses list in the table
 */
function updateExpensesList() {
    const tbody = document.querySelector('#currentExpenses tbody');
    tbody.innerHTML = '';

    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.category}</td>
            <td>$${expense.amount.toLocaleString()}</td>
            <td><button onclick="removeExpense(${index})">Remove</button></td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Removes an expense from the list
 * @param {number} index - Index of the expense to remove
 */
function removeExpense(index) {
    expenses.splice(index, 1);
    updateExpensesList();
}

/**
 * Calculates and displays expense statistics
 */
function calculateExpenses() {
    if (expenses.length === 0) {
        alert('Please add some expenses first');
        return;
    }

    // Calculate total expenses
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    // Calculate average daily expense (assuming 30 days in a month)
    const avgDaily = total / 30;

    // Get top 3 expenses
    const topExpenses = [...expenses]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 3);

    // Update the results display
    document.getElementById('totalExpenses').textContent = total.toLocaleString();
    document.getElementById('avgDailyExpense').textContent = avgDaily.toLocaleString(undefined, {
        maximumFractionDigits: 2
    });

    const topExpensesList = document.getElementById('topExpenses');
    topExpensesList.innerHTML = '';
    topExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.category}: $${expense.amount.toLocaleString()}`;
        topExpensesList.appendChild(li);
    });

    // Show results
    document.getElementById('results').style.display = 'block';
} 