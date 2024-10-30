// Get references to HTML elements
const ticketContainer = document.getElementById('ticketContainer');
const errorMessage = document.getElementById('errorMessage');

// Task #2: Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() {
    try {
        // Fetch ticket data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Failed to fetch tickets');
        }

        // Parse response data
        const tickets = await response.json();

        // Check if tickets are found
        if (!tickets.length) {
            throw new Error('No unresolved tickets available');
        }

        // Clear the container and display tickets
        ticketContainer.innerHTML = '';
        displayTickets(tickets);

    } catch (error) {
        // Display error message
        errorMessage.style.display = 'block';
        errorMessage.textContent = `Error: ${error.message}`;
    } finally {
 // Task #4: Use finally to Ensure Cleanup
        if (ticketContainer.innerHTML === 'Loading tickets...') {
            ticketContainer.innerHTML = 'No tickets to display.';
        }
    }
}

    // Task #3: Display Tickets Dynamically on the Page
function displayTickets(tickets) {
    tickets.forEach(ticket => {
        // Create a div for each ticket
        const ticketDiv = document.createElement('div');
        ticketDiv.classList.add('ticket');
        ticketDiv.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
        `;
        ticketContainer.appendChild(ticketDiv);
    });
}

// Call the function to fetch tickets on page load
fetchTickets();
