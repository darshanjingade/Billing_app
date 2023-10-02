var app = angular.module('BillingApp', []);

app.controller('BillingController', function () {
    var vm = this;

    vm.items = [
        { product: 'Product A', price: 10, quantity: 2 },
        { product: 'Product B', price: 15, quantity: 3 },
        { product: 'Product C', price: 8, quantity: 5 }
    ];

    vm.calculateTotal = function () {
        var total = 0;
        angular.forEach(vm.items, function (item) {
            total += item.price * item.quantity;
        });
        return total;
    };
});
