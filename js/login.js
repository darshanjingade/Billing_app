var app = angular.module('BillingApp', []);

app.controller('LoginController', function () {
    var ls = this;
    ls.username = '';
    ls.password = '';

    ls.onSubmit = function () {
        if (ls.username === 'your_username' && ls.password === 'your_password') {
            alert('Login successful!');
            // Redirect to the dashboard or another page as needed.
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };
});