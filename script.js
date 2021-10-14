//select elements in the DOM
const form = document.querySelector("form");
const input = document.querySelector(".form-control");
const mapDisplay = document.querySelector(".map");
const favoritesLink = document.querySelector(".favorite-list");
const chart = document.querySelector(".chart");
const total = document.getElementById("total");
const cities = document.querySelectorAll("#city-list");
const message = document.getElementById("message");

//use to add the number of favorites currently stored on the button
let favoriteCount = JSON.parse(localStorage.getItem("favorites"));

if (!favoriteCount) {
  favoriteCount = 0;
} else {
  favoriteCount = favoriteCount.length;
}

total.innerText = `(${favoriteCount})`;
//funcion that adds beer emoji markers to the map and the info window
const addMarker = (name, street, link, coordinates, map) => {
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: "images/beer-emoji.jpg",
  });
  const infoWindow = new google.maps.InfoWindow({
    content: `<h6>${name} </h6>
               <p>${street}</p>
               <a href = "${link}" target ="_blank"> Link to website</a>
               <button style =" border-radius: 10%; display: block; margin-top: 10px; color: white; background-color: blue;" class="save" data-name ="${name}">Add to favorites</button>
               `,
  });
  //adds event listener to each marker, that opens it up when clicked
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
};

//function from google maps API
function initMap() {
  //if there are already favorites in the list, automatically display the link to the favrite button
  if (favoriteCount > 0) {
    favoritesLink.style.display = "block";
  }
  //adds autocomplete functionality to the search bar
  const autocomplete = new google.maps.places.Autocomplete(input);

  //add event listener to the form that triggers when submit button is clicked
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    //store the input value into a variable. Output returns city, state, country. we only need the city. therefore, you can split the string into an array and only save the fist index which is always the city

    const city = input.value.split(",")[0];
    console.log(city);
    //fetches data with the city typed into input bar
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //changes the display of the map from none to block. Map is originally set to display of none
        chart.style.display = "none";
        mapDisplay.style.display = "block";

        //stores the array of data to a variable

        const breweries = data;
        console.log(breweries);

        //creates an array of just the coordinates for each brewery. This filters out all the breweries that have null coordinates
        const coordinates = breweries.map((brewery) => {
          return [brewery.latitude, brewery.longitude];
        });

        //need to get a non null coordinate to set the initial map
        const validCoords = coordinates.filter((coord) => {
          return coord[0] !== null;
        });

        //sets what the initial map looks like

        const options = {
          zoom: 12,
          center: {
            //picked coordinates from one of the breweries to focus the map. Need to think of a better way to do this.
            lat: Number(validCoords[3][0]),
            lng: Number(validCoords[3][1]),
          },
        };

        //creates map
        const map = new google.maps.Map(
          document.querySelector(".map"),
          options
        );

        //for each brewery, creates a marker on the map.

        breweries.forEach((brewery) => {
          if (brewery.latitude !== null && brewery.longitude !== null) {
            addMarker(
              brewery.name,
              brewery.street,
              brewery.website_url,
              {
                lat: Number(brewery.latitude),
                lng: Number(brewery.longitude),
              },
              map
            );
          }
        });
        //function that saves breweries to list
        const saveToFavorites = (breweryName) => {
          //gives you all the brewery information that matches the target name
          const brewery = breweries.find((currentBrewery) => {
            return currentBrewery.name === breweryName;
          });

          let favoriteListJSON = localStorage.getItem("favorites");

          //converts the watchlist object from JSON to an array
          let favoriteList = JSON.parse(favoriteListJSON);

          //if favorite list is empty, create new array
          if (!favoriteList) {
            favoriteList = [];
          }

          //push selected brewery into the array
          favoriteList.push(brewery);

          //converts array back into JSON
          favoriteListJSON = JSON.stringify(favoriteList);

          //adds the brewery to the local storage
          localStorage.setItem("favorites", favoriteListJSON);
        };

        //add event listener to add buttons on the info windows
        document.addEventListener("click", (e) => {
          if (e.target.classList.contains("save")) {
            const breweryName = e.target.dataset.name;

            saveToFavorites(breweryName);

            //adds message to user saying that the brewery was added for 2 seconds.
            const renderAlert = () => {
              message.innerText = `${breweryName} has been added to your favorites!`;
            };

            renderAlert();

            const removeAlert = () => {
              message.innerText = "";
            };

            setTimeout(removeAlert, 2000);

            //adds 1 to the favorite counter when a new favorite is added

            favoriteCount++;
            total.innerText = `(${favoriteCount})`;
            favoritesLink.style.display = "block";
          }
        });
      });
  });

  //event listener for when the user clicks on city from table

  cities.forEach((city) => {
    city.addEventListener("click", function (e) {
      e.preventDefault();

      //store the input value into a variable. Output returns city, state, country. we only need the city. therefore, you can split the string into an array and only save the fist index which is always the city

      const cityName = city.textContent.split(",")[0];
      console.log(cityName);

      //fetches data with the city typed into input bar
      fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityName}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //changes the display of the map from none to block. Map is originally set to display of none
          chart.style.display = "none";
          mapDisplay.style.display = "block";

          //stores the array of data to a variable

          const breweries = data;
          console.log(breweries);

          //creates an array of just the coordinates for each brewery. This filters out all the breweries that have null coordinates
          const coordinates = breweries.map((brewery) => {
            return [brewery.latitude, brewery.longitude];
          });

          //need to get a non null coordinate to set the initial map
          const validCoords = coordinates.filter((coord) => {
            return coord[0] !== null;
          });

          //sets what the initial map looks like

          const options = {
            zoom: 12,
            center: {
              //picked coordinates from one of the breweries to focus the map. Need to think of a better way to do this.
              lat: Number(validCoords[3][0]),
              lng: Number(validCoords[3][1]),
            },
          };

          //creates map
          const map = new google.maps.Map(
            document.querySelector(".map"),
            options
          );

          //for each brewery, creates a marker on the map.

          breweries.forEach((brewery) => {
            if (brewery.latitude !== null && brewery.longitude !== null) {
              addMarker(
                brewery.name,
                brewery.street,
                brewery.website_url,
                {
                  lat: Number(brewery.latitude),
                  lng: Number(brewery.longitude),
                },
                map
              );
            }
          });
          //function that saves breweries to list
          const saveToFavorites = (breweryName) => {
            //gives you all the brewery information that matches the target name
            const brewery = breweries.find((currentBrewery) => {
              return currentBrewery.name === breweryName;
            });

            let favoriteListJSON = localStorage.getItem("favorites");

            //converts the watchlist object from JSON to an array
            let favoriteList = JSON.parse(favoriteListJSON);

            //if favorite list is empty, create new array
            if (!favoriteList) {
              favoriteList = [];
            }

            //push selected brewery into the array
            favoriteList.push(brewery);

            //converts array back into JSON
            favoriteListJSON = JSON.stringify(favoriteList);

            //adds the brewery to the local storage
            localStorage.setItem("favorites", favoriteListJSON);
          };

          //add event listener to add buttons on the info windows
          document.addEventListener("click", (e) => {
            if (e.target.classList.contains("save")) {
              const breweryName = e.target.dataset.name;

              saveToFavorites(breweryName);

              //adds message to user saying that the brewery was added for 2 seconds.
              const renderAlert = () => {
                message.innerText = `${breweryName} has been added to your favorites!`;
              };

              renderAlert();

              const removeAlert = () => {
                message.innerText = "";
              };

              setTimeout(removeAlert, 2000);

              //adds 1 to the favorite counter when a new favorite is added

              favoriteCount++;
              total.innerText = `(${favoriteCount})`;
              favoritesLink.style.display = "block";
            }
          });
        });
    });
  });
}