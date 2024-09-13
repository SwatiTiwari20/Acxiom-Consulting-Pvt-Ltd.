document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const adminId = document.getElementById('adminId').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (adminId === 'adm' && password === 'adm') {
        window.location.href = 'adminHomepage.html';
    } else {
        alert('Invalid credentials!');
    }
});
