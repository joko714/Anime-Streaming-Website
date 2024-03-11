// script.js

const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocompleteList');

searchInput.addEventListener('input', debounce(searchAnime, 300));

async function searchAnime() {
    const inputValue = searchInput.value.trim().toLowerCase();

    if (inputValue.length === 0) {
        autocompleteList.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/anime?q=${inputValue}`);
        const data = await response.json();

        if (data.results.length > 0) {
            displayAutocompleteResults(data.results);
        } else {
            autocompleteList.style.display = 'none';
        }
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
}

function displayAutocompleteResults(results) {
    autocompleteList.innerHTML = '';

    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.name;
        listItem.addEventListener('click', function() {
            searchInput.value = result.name;
            autocompleteList.style.display = 'none';
        });
        autocompleteList.appendChild(listItem);
    });

    autocompleteList.style.display = 'block';
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
        autocompleteList.style.display = 'none';
    }
});

function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
