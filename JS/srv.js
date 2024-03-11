        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');
        const autocompleteList = document.getElementById('autocompleteList');

        // Simulated anime data with names, corresponding images, and paths
        const animeData = [
            { name: 'Naruto', image: 'IMG/n.jpg', path: 'Naruto-search.html',  additionalText1: 'Naruto', additionalText2: 'Naruto', additionalText2: 'Naruto' },
            { name: 'Dr. Stone 3rd Season Part 2', image: 'IMG/list7.jpg', path: '',  additionalText1: 'Dr.stone', additionalText2: ''},
            { name: 'One Piece', image: 'IMG/l.jpg', path: 'play-about.html' },
            { name: 'Boruto', image: 'https://upload.wikimedia.org/wikipedia/en/d/db/Boruto_manga_vol_1.jpg', path: 'luffy.html', additionalText1:'Baruto' },

            { name: 'Naruto-The Movie', image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/TheLastNarutomovie.jpg', path: '',  additionalText1: 'Naruto', additionalText2: ''},
            { name: 'Attack on Titan', image: 'IMG/at.jpg' },
            { name: 'Naruto: Shippuden ', image: 'https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg', additionalText1: 'Naruto' },
            { name: 'Demon Slayer: Kimetsu no Yaiba', image: 'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',additionalText1: 'Demon Slayer', additionalText2: 'Naruto', additionalText2: '' },
            { name: 'Jujutsu Kaisen', image: 'IMG/jujutsu kaisan.png' },
            { name: 'bleach', image: 'IMG/b.png' },
            { name: 'My Hero Academia', image: 'IMG/sxf.jpg' },
            { name: 'Tokyo Revengers', image: 'IMG/tokyo revengers.jpg' },
            { name: 'Death Note', image: 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg', additionalText1:'Death note'},
            { name: 'Rurouni Kenshin', image: 'IMG/ruro.jpg' },
            { name: 'High school DxD', image: 'https://m.media-amazon.com/images/M/MV5BYjhlYWI2MGUtNjk4ZS00OWJjLWJiZTEtYWYxNTY5MzVhYzI0XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_FMjpg_UX1000_.jpg' },
            { name: 'Chainsaw Man', image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe' },
            { name: 'Black Clover', image: 'https://m.media-amazon.com/images/M/MV5BN2FlYjYxMTMtZGQzYy00OWU2LTkyYWMtNWJhODhmZmM0N2FhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg' },
            { name: 'Gintama', image: 'https://m.media-amazon.com/images/M/MV5BYTFmMGU2OTctY2E4ZC00M2JiLWFkOGMtZDU3NDhmNTFmZjkyXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg' },
            { name:'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You', image:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/100-nin_no_Kanojo_manga_volume_1_cover.jpg/220px-100-nin_no_Kanojo_manga_volume_1_cover.jpg', additionalText1: 'season 1', additionalText2: ''}

        ];

        // Event listener for form submission
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const inputValue = searchInput.value.trim().toLowerCase();
            if (!inputValue) {
                return;
            }

            // Check if the entered anime name exists in the animeData
            const matchedAnime = animeData.find(anime => anime.name.toLowerCase() === inputValue);

            if (matchedAnime) {
                // Redirect to the specified path for the matched anime
                window.location.href = matchedAnime.path;
            } else {
                // Display a message inside the list section
                displayNoResultsMessage();
            }
        });

        // Event listener for input changes
        searchInput.addEventListener('input', function () {
            const inputValue = this.value.trim().toLowerCase();

            if (!inputValue) {
                autocompleteList.innerHTML = ''; // Clear the autocomplete list
                autocompleteList.style.display = 'none';
                return;
            }

            const autocompleteResults = getAutocompleteResults(inputValue);
            displayAutocompleteResults(autocompleteResults);
        });

        // Function to display a message when no matching anime is found
        function displayNoResultsMessage() {
            autocompleteList.innerHTML = ''; // Clear the autocomplete list

            const noResultsItem = document.createElement('li');
            noResultsItem.textContent = '😢 No matching anime found.';
            noResultsItem.classList.add('no-results-message');

            autocompleteList.appendChild(noResultsItem);
            autocompleteList.style.display = 'block';
        }

        // Function to get autocomplete results based on input value
        function getAutocompleteResults(inputValue) {
            return animeData.filter(anime => anime.name.toLowerCase().includes(inputValue));
        }
// Function to display autocomplete results with images and paths
function displayAutocompleteResults(results) {
    autocompleteList.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const listItem = document.createElement('li');

            // Create a container for the content
            const contentContainer = document.createElement('div');
            contentContainer.classList.add('autocomplete-item-content');

            // Create an image element
            const image = document.createElement('img');
            image.src = result.image;
            image.alt = result.name;
            image.classList.add('autocomplete-image');

            // Create a container for text elements
            const textContainer = document.createElement('div');
            textContainer.classList.add('autocomplete-text-container');

            // Create a span for the anime name
            const animeName = document.createElement('span');
            animeName.textContent = result.name;
            animeName.classList.add('autocomplete-text', 'anime-name');

            // Additional text 1
            const additionalText1 = document.createElement('span');
            additionalText1.textContent = result.additionalText1;
            additionalText1.classList.add('autocomplete-text', 'additional-text');

            // Additional text 2
            const additionalText2 = document.createElement('span');
            additionalText2.textContent = result.additionalText2;
            additionalText2.classList.add('autocomplete-text', 'additional-text');

            // Add elements to text container
            textContainer.appendChild(animeName);
            textContainer.appendChild(additionalText1);
            textContainer.appendChild(additionalText2);

            // Add image and text container to the content container
            contentContainer.appendChild(image);
            contentContainer.appendChild(textContainer);

            // Add content container to the list item
            listItem.appendChild(contentContainer);

            // Event listener for list item click
            listItem.addEventListener('click', function () {
                window.location.href = result.path;
            });

            // Append list item to autocomplete list
            autocompleteList.appendChild(listItem);
        });

        // Display the autocomplete list
        autocompleteList.style.display = 'block';
    } else {
        // Display a message when no matching anime is found
        displayNoResultsMessage();
    }
}


        // Close autocomplete list when clicking outside the search container
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.search-container')) {
                autocompleteList.style.display = 'none';
            }
        });