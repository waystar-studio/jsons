$( function() {
	$( "#datepicker_1" ).datepicker({
		dateFormat: "dd-MM-yy"
		,	duration: "fast"
	});
} );

$( function() {
	$( "#datepicker_2" ).datepicker({
		dateFormat: "dd-MM-yy"
		,	duration: "fast"
	});
} );
       
       
       document.addEventListener('DOMContentLoaded', () => {
    const fromAirportInput = document.getElementById('from-airport-input');
    const fromAirportMenu = document.getElementById('from-airport-menu');
    const fromLabel = document.getElementById('from-label');
    const toAirportInput = document.getElementById('to-airport-input');
    const toAirportMenu = document.getElementById('to-airport-menu');
    const toLabel = document.getElementById('to-label');

    let airportsData = [];

    fetch('https://raw.githubusercontent.com/waystar-studio/jsons/main/airports.json')
        .then(response => response.json())
        .then(data => {
            airportsData = data;
            populateDropdown(fromAirportMenu, airportsData);
            populateDropdown(toAirportMenu, airportsData);
        })
        .catch(error => console.error('Error fetching the airport data:', error));

    function populateDropdown(menu, airports) {
        menu.innerHTML = '';
        airports.forEach(airport => {
            const option = document.createElement('div');
            option.classList.add('airport');
            option.innerHTML = `
            <div class="airport-container">
                <div class="airport-code"><p>${airport.code}</p></div>
                <div class="airport-data">
                    <div class="airport-data-city-state-country"><p>${airport.city}, ${airport.state}, ${airport.country}</p></div>
                    <div class="airport-data-name"><p>${airport.name}</p></div>
                </div>
            </div>
            `;
            option.addEventListener('click', () => {
                if (menu === fromAirportMenu) {
                    fromAirportInput.value = `${airport.city}, ${airport.country} (${airport.code})`;
                    fromAirportInput.classList.add('has-label');
                } else {
                    toAirportInput.value = `${airport.city}, ${airport.country} (${airport.code})`;
                    toAirportInput.classList.add('has-label');
                }
                menu.style.display = 'none';
            });
            menu.appendChild(option);

            const hr = document.createElement('hr');
            menu.appendChild(hr);
        });
    }

    
    function toggleDropdown(input, menu) {
        if (menu.style.display === 'block') {
            return;
        }
        menu.style.display = 'block';
        filterDropdown(input, menu);
    }

    function filterDropdown(input, menu) {
        const filter = input.value.toLowerCase();
        const filteredAirports = airportsData.filter(airport => {
            const airportText = `${airport.city} ${airport.country} ${airport.code}`.toLowerCase();
            return airportText.includes(filter);
        });
        populateDropdown(menu, filteredAirports);
    }

    fromAirportInput.addEventListener('click', (e) => {
        toggleDropdown(fromAirportInput, fromAirportMenu);
    });

    toAirportInput.addEventListener('click', (e) => {
        toggleDropdown(toAirportInput, toAirportMenu);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdown input')) {
            fromAirportMenu.style.display = 'none';
            toAirportMenu.style.display = 'none';
        }
    });

    fromAirportInput.addEventListener('input', (e) => {
        filterDropdown(fromAirportInput, fromAirportMenu);
    });

    toAirportInput.addEventListener('input', (e) => {
        filterDropdown(toAirportInput, toAirportMenu);
    }); });
    
    let isOpen = false;

function toggledropdownPassengers() {
    const dropdownPassengers = document.getElementById('dropdownPassengersContent');
    isOpen = !isOpen;
    if (isOpen) {
        dropdownPassengers.classList.add('open');
    } else {
        dropdownPassengers.classList.remove('open');
    }
}

function increment(type) {
    const countSpan = document.getElementById(type + 'Count');
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
}

function decrement(type) {
    const countSpan = document.getElementById(type + 'Count');
    let count = parseInt(countSpan.textContent);
    if (count > 0) {
        count--;
        countSpan.textContent = count;
    }
}

// Function to update input values based on span elements
function updateInputValues() {
    // Get the counts from the span elements
    var adultsCount = document.getElementById('adultsCount').innerHTML;
    var childrenCount = document.getElementById('childrenCount').innerHTML;
    var infantCount = document.getElementById('infantCount').innerHTML;

    // Update corresponding input values
    document.getElementById('adultsInput').value = adultsCount;
    document.getElementById('childrenInput').value = childrenCount;
    document.getElementById('infantInput').value = infantCount;
    
}

// Example functions for incrementing and decrementing counts (assuming you have these already)
function increment(type) {
    var countElement = document.getElementById(type + 'Count');
    countElement.innerHTML = parseInt(countElement.innerHTML) + 1;
    updateInputValues(); // Update input values after incrementing
}

function decrement(type) {
    var countElement = document.getElementById(type + 'Count');
    var currentCount = parseInt(countElement.innerHTML);
    if (currentCount > 0) {
        countElement.innerHTML = currentCount - 1;
        updateInputValues(); // Update input values after decrementing
    }
}


function updatePlaceholder() {
    const classSelect = document.getElementById('classSelect');
    const dropdownPassengersHeader = document.querySelector('.dropdownPassengers-header');
    dropdownPassengersHeader.innerHTML = `<p>Adults: ${document.getElementById('adultsCount').textContent}, Children: ${document.getElementById('childrenCount').textContent},Infants: ${document.getElementById('infantCount').textContent}, ${classSelect.value} </p>`;
  
    document.getElementById('passengers-input').value = dropdownPassengersHeader.textContent
}

function submitSelection() {
    const dropdownPassengers = document.getElementById('dropdownPassengersContent');
    dropdownPassengers.classList.remove('open');
    isOpen = false;
    updatePlaceholder(); // Update header text with selected options
}

function handleDropdownClick(event) {
    event.stopPropagation(); // Prevent dropdown from closing when clicking inside it
}



function closeForm() {
    // Perform any actions you need before closing the form
    // For example, you might want to gather data or perform validation

    // Close the dropdown or form
    toggledropdownPassengers(); // Assuming this function exists to toggle visibility

    // Optionally, you can clear fields or reset the form state
    document.getElementById('adultsCount').textContent = '1';
    document.getElementById('childrenCount').textContent = '0';
    document.getElementById('infantCount').textContent = '0';
    document.getElementById('classSelect').value = 'economy';
}


