const file = "data.json";
let elements = document.querySelectorAll(".amounts");
let moneyAmount = document.querySelectorAll(".money");

// Fetch data.json so it can be used in JS code:
fetch(file)
.then(response => {
    return response.json();
})
.then(json => {
    displayData(json);
})


// Function for data.json Array to write data in HTML Page:
function displayData(data) {
    for(let i = 0; i < data.length; i++) {
        
        document.getElementById("days").innerHTML = 
        "<p class=mon>" + data[0].day + "</p>" +
        "<p class=tue>" + data[1].day + "</p>" +
        "<p class=wed>" + data[2].day + "</p>" +
        "<p class=thu>" + data[3].day + "</p>" +
        "<p class=fri>" + data[4].day + "</p>" +
        "<p class=sat>" + data[5].day + "</p>" +
        "<p class=sun>" + data[6].day + "</p>";
        
        moneyAmount[i].innerHTML = "$" + data[i].amount;
    }
    toggle(elements, moneyAmount);
}
 
// Function for showing data and adding active class based on Day and click:
function toggle(element, amount) {
    for(let i = 0; i < element.length; i++) {

        // Adding class active based on week day:
        switch(new Date().getDay()) {
            case 0:
                element[6].classList.add("active");
                break;
            case 1:
                element[0].classList.add("active");
                break;
            case 2:
                element[1].classList.add("active");
                break;
            case 3:
                element[2].classList.add("active");
                break;
            case 4:
                element[3].classList.add("active");
                break;
            case 5:
                element[4].classList.add("active");
                break;
            case 6:
                element[5].classList.add("active");
                break;
        }

        // Shoving amount when you hover over the "Graph" element:
        element[i].addEventListener("mouseover", function() {
            amount[i].style.display = "block";

        });

        element[i].addEventListener("mouseout", function() {
            amount[i].style.display = "none";
        });
    }
}