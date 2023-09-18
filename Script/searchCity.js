let temp;
// Function to be executed on click
function handleClick() {
	// Change city name and use name to fetch data
	const inputElement = document.querySelector('.home-textinput.input');
	if (inputElement.value !== "" && inputElement.value !== temp ) {	
		cityName = inputElement.value;
		console.log (cityName+ "<--name before function");
		temp = cityName;
		fetchData(cityName);
		console.log (cityName+ "<--name after function");
	}else{
		//alert("Enter a location");
	}
}

// Get the div element by its class name
	const searchDiv = document.querySelector('.home-search');

// Add a click event listener to the div
if (searchDiv) {
	console.log("inside if function")
	searchDiv.addEventListener('click', handleClick);
	} 
	
function fetchData (city) {
//const apiKey = 'ae35ec2f9f983d5fa9a21c085bd025c4';
//apiUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=ae35ec2f9f983d5fa9a21c085bd025c4` 

//const apiKey = 'ae35ec2f9f983d5fa9a21c085bd025c4';

// Construct the URL for the API request
apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
console.log (apiUrl);
// Make a GET request to the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Here, 'data' contains the JSON response from the API
    console.log(data);
    
    // Access specific elements within 'data' and assign them to variables as needed
    longitude = data.coord.lon;
    latitude = data.coord.lat;
	cityName = data.name;
	// Assign the city name to the <p> element
	homeCaptionElement.textContent = cityName;
	console.log(cityName);
	fetchWeatherData();
    /* const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const sunriseTimestamp = data.sys.sunrise;
    const sunsetTimestamp = data.sys.sunset;
	
	if (temperatureElement) {
		temperatureElement.textContent = `${temperature}°`;
	}
	
	// Assign the city name to the <p> element
	homeCaptionElement.textContent = city;
    
    // You can use these assigned values as needed in your application
    console.log("Longitude:", lon);
    console.log("Latitude:", lat);
    console.log("Weather Description:", weatherDescription);
    console.log("Temperature:", temperature);
    console.log("Humidity:", humidity);
    console.log("Sunrise Timestamp:", sunriseTimestamp);
    console.log("Sunset Timestamp:", sunsetTimestamp); */
  })
  .catch(error => {
    console.error('Error:', error);
  });

}
	
	