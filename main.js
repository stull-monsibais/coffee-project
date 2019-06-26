"use strict";
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.getElementById('roast-selection');

function renderCoffee(coffee) {
    var html = '<div class="col-md-6">';
    html += '<h2 class="coffee-name">' + coffee.name + '</h2>';
    html += '<span>' + coffee.roast + '</span>';
    html+= '</div class="col">';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//put coffee in ascending order
var newRoast = document.querySelector('#new-roast');
var newName = document.querySelector('#new-name');



// coffees.filter(function(coffeeName){
//     return coffeeName.match;
//
// });
//
// for coffee list filter

function coffeeSearch(){
    var input = document.getElementById("coffee-search").value;
    console.log(typeof input);
    var filteredCoffee = [];
    console.log(filteredCoffee);
    var selectedRoast = roastSelection.value;

    coffees.forEach(function(coffee){
        if ((coffee.name.innerText.toLowerCase()) === input) {
            filteredCoffee.push(coffee.name);
        } else if ((coffee.roast === input)) {
            filteredCoffee.push(coffee.roast);
        } else if (selectedRoast === "all"){
            filteredCoffee.push(coffee.name);
        }
        // }else if (txtValue.toLowerCase().indexOf(filteredCoffee) > -1) {
        //         coffeeName[i].style.display = "";
        //     } else {
        //         coffeeName[i].style.display = "none";
        //     }
        });
    tbody.innerHTML = renderCoffees(filteredCoffee);
    }





//for adding coffee
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    // if (selectedRoast === "all"){
    //
    // }
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }  else if ((coffee.name).includes(selectedRoast)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

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

submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', coffeeSearch);
