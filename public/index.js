// Fetch random joke on page load
document.addEventListener("DOMContentLoaded", () => {
    fetchRandomJoke();
});

function fetchRandomJoke() {
    fetch("/jokebook/categories") // Fetch available categories
        .then(response => response.json())
        .then(categories => {

            // Select a random category
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            return fetch(`/jokebook/${randomCategory}`);
        })

        .then(response => response.json())
        .then(jokes => {

            // Select a random joke from the fetched jokes
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

            const randomJokeElement = document.getElementById("random-joke");
            randomJokeElement.innerHTML = `
            <p><strong>Joke:</strong> ${randomJoke.joke}</p>
            <p><strong>Response:</strong> ${randomJoke.response}</p>
        `;
        })
        .catch(error => console.error("Error fetching random joke:", error));
}
