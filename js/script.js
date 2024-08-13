// Simulated user data for validation
const users = {
    medico: { username: 'medico', password: '123456' },
    paciente: { username: 'paciente', password: '123456' }
};

// Function to handle form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists
    if ((username === users.medico.username && password === users.medico.password) ||
        (username === users.paciente.username && password === users.paciente.password)) {
        alert('Login successful!');
        // Redirect based on user role (e.g., to dashboard pages)
        if (username === users.medico.username) {
            window.location.href = 'medico_dashboard.html'; // Redirect to a dashboard or specific page
        } else {
            window.location.href = 'paciente_dashboard.html';
        }
    } else {
        alert('Login failed: Invalid username or password');
    }
}

// Attach the login handler to the form's submit event
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
