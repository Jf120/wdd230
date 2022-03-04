// Fetch data from the JSON file
fetch('./js/data.json').then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    members.forEach(displayMembers);
});


function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    // Add address, phone, and website to the card
    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = `${member.phone}`;
    website.textContent = `${member.website}`;
    website.setAttribute('href', `${member.website}`);

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');

    // Change h3 attributes
    name.setAttribute('style', 'display: none;');

    // Add/append to the section(card)
    card.setAttribute('class', "info-holder");
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('section.cards').appendChild(card);
}

function listView() {
    let info = document.querySelector('section.cards');
    info.style.display = "flex";
    info.style.flexDirection = "column";

    let holder = document.getElementsByClassName('info-holder');
    console.log(holder);
    for (let i = 0; i < holder.length; i++) {
        holder[i].style.display = "flex";
        holder[i].style.flexDirection = "row";
        holder[i].style.justifyContent = "space-evenly";
        holder[i].style.alignItems = "center";
        holder[i].style.boxShadow = "0px 0px #000000";

        if (i % 2 === 0) {
            holder[i].style.backgroundColor = "#d4d4d4";
        }
    }
    
    let logo = document.getElementsByTagName('img');
    console.log(logo);
    for (let i = 4; i < logo.length - 1; i++) {
        logo[i].style.display = "none";
    }

    let title = document.getElementsByTagName('h3');
    for (let i = 0; i < title.length; i++) {
        title[i].style.display = "block";
    }
    
    let smallScreen = window.matchMedia("(max-width: 490px)");
    if (smallScreen.matches) {
        console.log("Small screen");    
        let infoHolder = document.getElementsByClassName('info-holder');
        for (let i = 0; i < infoHolder.length; i++) {
            infoHolder[i].style.display = "flex";
            infoHolder[i].style.flexDirection = "column";
        }
    }
    else {
        console.log("Large screen");
        let infoHolder = document.getElementsByClassName('info-holder');
        for (let i = 0; i < infoHolder.length; i++) {
            infoHolder[i].style.display = "flex";
            infoHolder[i].style.flexDirection = "row";
        }
    }
}

function cardView() {
    let info = document.querySelector('section.cards');
    info.style.display = "grid";

    let holder = document.getElementsByClassName('info-holder');
    console.log(holder);
    for (let i = 0; i < holder.length; i++) {
        holder[i].style.backgroundColor = "#ffffff";
        holder[i].style.display = "block";
        holder[i].style.boxShadow = "5px 5px #000000";
    }

    let logo = document.getElementsByTagName('img');
    console.log(logo);
    for (let i = 4; i < logo.length; i++) {
        logo[i].style.display = "block";
        logo[i].style.margin = "10px auto 0 auto";
    }

    let title = document.getElementsByTagName('h3');
    for (let i = 0; i < title.length; i++) {
        title[i].style.display = "none";
    }
}

let smallScreen = window.matchMedia("(max-width: 490px)");

function smallScreenList() {
    if (smallScreen.matches) {
        console.log("Small screen");    
        let infoHolder = document.getElementsByClassName('info-holder');
        for (let i = 0; i < infoHolder.length; i++) {
            infoHolder[i].style.display = "flex";
            infoHolder[i].style.flexDirection = "column";
        }
    }
}
smallScreen.addEventListener("change", smallScreenList);

let buttonList = document.querySelector('#list');
buttonList.addEventListener("click", listView);

let buttonCard = document.querySelector('#card');
buttonCard.addEventListener("click", cardView);

import * as main from './main.js';

main.setDate();
main.navBar();
main.iconMenu();