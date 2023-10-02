app.controller('LoginController', function () {
    var ls = this;
    ls.username = '';
    ls.password = '';
    ls.data = {}
    ls.loginData = function(param){
        getLoginCridentiels(param)
        .then(function(response){
            ls.data = response.data;
        })
    }

    ls.onSubmit = function () {
        ls.loginData(ls.username)
        if (ls.username === 'your_username' && ls.password === 'your_password') {
            alert('Login successful!');
            // Redirect to the dashboard or another page as needed.
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };
});
