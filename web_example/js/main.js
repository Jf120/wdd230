// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// MAP EXAMPLE
fetch('./js/data.json').then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    const members = jsonObject['members'];
    getNames(members, '#map');
});

function getNames (members) {
    // Gets the members list and returns only names
    const names = members.map(function (member) {
        return member.name;
    });

    let element = document.querySelector('#map');
    let list = document.createElement('ul');
    
    // With the list of names it creates a list element for each of them
    names.forEach(function (name) {
        let item = document.createElement('li');
        item.innerText = name;
        list.appendChild(item);
    })
    element.appendChild(list);
}

const items = [
    { name: 'Pepperoni Pizza', price: 10.99, category: 'pizza' },
    { name: 'Salami Pizza', price: 8.99, category: 'pizza' },
    { name: 'Mushroom Pizza', price: 8.99, category: 'pizza' },
    { name: 'Soda', price: 3.99 , category: 'beverages'},
    { name: 'Water', price: 3.99 , category: 'beverages'},
    { name: 'Alfredo Pasta', price: 12.99, category: 'pasta'},
    { name: 'Carbonara Pasta', price: 3.99 , category: 'pasta'},
]

function getProduct (items, where) {

    // Uses map to get the name and price of each item
    const names = items.map(function (item) {
        return item.name + ': $' + item.price;
    });

    let element = document.querySelector(where);
    let list = document.createElement('ul');
    // Creates list based on the new items list 
    names.forEach(function (name) {
        let item = document.createElement('li');
        item.innerText = name;
        list.appendChild(item);
    })
    element.appendChild(list);
}

getProduct(items, '#reduce');
reduce();


function reduce () {
    // Creates a total price of the entire menu
    let totalPrice = items.reduce((total, item) => {
        return total + item.price
    }, 0);
    document.querySelector('#total').textContent = `Total Menu: $${totalPrice.toFixed(2)}`;
}

function sortBy() {
    reset();
    const sortBy = document.querySelector("#category").value;

    // Filters each item based on its category
    let list = items.filter(function (item) {
        return item.category === sortBy;
    })
    getProduct(list, '#filter');
}

function reset() {
    document.querySelector("#filter").innerHTML = "";
}

document.querySelector('#category').addEventListener('change', sortBy);