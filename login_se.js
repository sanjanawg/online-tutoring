document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (validateForm(username, password)) {
        // You can perform additional actions, such as sending data to the server
        console.log('Form is valid. Logging in...');
      }
    });
  
    function validateForm(username, password) {
      if (!username.trim() || !password.trim()) {
        alert('Please enter both username and password.');
        return false;
      }
      return true;
    }
  });
  