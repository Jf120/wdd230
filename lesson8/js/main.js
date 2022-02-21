document.querySelector('#date').innerHTML = document.lastModified;
// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();