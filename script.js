//created a function fidMovies
function findMovies() {
  // created a variable called movieName to extract the information from the input field and got the value of it
  let movieName = document.getElementById("search-input").value;
  // Now i use axios to get the data from the API and then use response to get the data from the API and console.log it
  axios.get(`https://www.omdbapi.com/?apikey=f0b3dbf7&s=${movieName}`)
    .then(response => {
      console.log(response.data);

      // Check if the response has the Search key with an array of movies
      if (response.data.Search) {
        // letting movies hold the entire array of the search
        let movies = response.data.Search;
        let display = document.getElementById("display");
        display.innerHTML = ''; // Clear the display

        // Loop through each movie and append its details to the display
        movies.forEach(movie => {
          // Using ForEach to loop through the movies array and useing the innerHTML to append the movie details to the display and adding the title and year to the display
          display.innerHTML += `
            <div class="movie">
              <img src="${movie.Poster}" alt="Movie Poster">
              <h3>${movie.Title}</h3>
              <p>${movie.Year}</p>
            </div>
          `;
        });
      } else {
        console.error('No movies found.');
      }
    })
    .catch(error => {
      console.error('Error fetching the API:', error);
    });
}
