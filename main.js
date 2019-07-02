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
    var coffeeSubmit = document.querySelector('#coffee-submit');

    function coffeeTrivia(){
        var randomTrivia = Math.floor(Math.random() * (coffeeFacts.length));
        document.getElementById("message").innerHTML = coffeeFacts[randomTrivia];
    } coffeeSubmit.addEventListener('click', coffeeTrivia);
    var coffeeFacts = [
        'Coffee was the first food to be freeze-dried.',
        '40% of the world’s coffee is produced by Colombia and Brazil.',
        'Kopi Luwak, the world’s most expensive coffee (up to $600 per pound), is made from coffee beans eaten and then excreted by a Sumatran wild cat.',
        'People who drink coffee are less likely to develop cirrhosis.',
        'Coffee is the world\'s 2nd largest traded commodity.',
        'Coffee was banned in Mecca in 1511. It was believed to stimulate radical thinking and idleness.',
        'The word espresso comes from Italian and means “expressed” or “forced out”.',
        'Coffee is a fruit!',
        'Some 16th-century Italian clergymen also tried to ban coffee because they believed it to be "satanic." However, Pope Clement VII loved coffee so much that he lifted the ban and had coffee baptized in 1600.',
    'The average adult in Finland goes through 27.5 pounds of coffee each year, according to the International Coffee Organization.',
    'Beethoven counted the number of coffee beans he used to make his coffee and insisted on 60 beans per cup.',
    'The average coffee drinker consumes 3 cups of coffee per day.',
    'Coffee bushes live 60 to 70 years.',
    'During Turkish wedding ceremonies, grooms were made to vow to always provide their brides with coffee. Failure to do so could result in divorce.',
    'The Boston Tea Party resulted in Americans switching from tea to coffee as an expression of freedom.',     'The term “cup of Joe” comes from the American soldiers also known as GI Joes of WWII who loved their coffee and were big drinkers.'];

}());

