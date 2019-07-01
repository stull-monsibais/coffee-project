(function() {
    "use strict";
    var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');

    function renderCoffee(coffee) {
        var html = '<div class="col-md-6">';
        html += '<h2 class="coffee-name">' + coffee.name + '</h2>';
        html += '<span>' + coffee.roast + '</span>';
        html += '</div class="col">';

        return html;
    }

    function renderCoffees(coffees) {
        var html = '';
        for (var i = 0; i <= coffees.length - 1; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

//put coffee in ascending order
// var newRoast = document.querySelector('#new-roast');
// var newName = document.querySelector('#new-name');

    var input = document.querySelector("#coffee-search");

//for searching coffee
    function searchCoffee(e) {
        e.preventDefault();
        var filter = input.value;
        var filteredCoffee = [];
        console.log(filteredCoffee);

        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().indexOf(filter) > -1) {
                filteredCoffee.push(coffee);
            }
        });

        tbody.innerHTML = renderCoffees(filteredCoffee);
    }
    input.addEventListener('keyup', searchCoffee);
    submitButton.addEventListener('click', searchCoffee);


//for selecting roast
    function searchRoast(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var selectedRoast = roastSelection.value;
        var filteredCoffees = [];

        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            } else if ((coffee.name).includes(selectedRoast)) {
                filteredCoffees.push(coffee);
            } else if (selectedRoast === "all") {
                filteredCoffees.push(coffee)
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

    roastSelection.addEventListener('change', searchRoast);

//for adding new roast/coffee
    var coffeeAdd = document.querySelector('#new-name');
    var roastAdd = document.querySelector('#new-roast');
    var userSubmit = document.querySelector('#new-submit');

    function addCoffee(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var newCoffee = {};
        newCoffee.id = coffees.length + 1;
        newCoffee.name = coffeeAdd.value;
        newCoffee.roast = roastAdd.value;
        coffees.push(newCoffee);
        tbody.innerHTML = renderCoffees(coffees)
    }

    userSubmit.addEventListener('click', addCoffee);

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'},
    ];
    tbody.innerHTML = renderCoffees(coffees);

}());

