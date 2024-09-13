document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (userId === 'adm' && password === 'adm') {
        window.location.href = 'userHomepage.html';
    } else {
        alert('Invalid credentials!');
    }
});
