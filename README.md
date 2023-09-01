## I created a app by running the following commands:

##### npx create-react-app weather-dashboard
##### cd weather-dashboard
## I created necessary UI components for Weather Station Dashboard, like Header, CityInput, WeatherDisplay, and Globe.

## For Fetching Weather Data from API (openweathermap.org), I wrote code in APP.js

## I Handled API Limits and Errors

#### Rate Limiting: I introduced a MAX_API_REQUESTS constant to specify the maximum number of API requests allowed. Before making an API request, we check if the user has exceeded this limit. If they have, we throw an error indicating that the rate limit has been reached. You can set MAX_API_REQUESTS to the rate limit specified by your API provider.

#### API Error Handling: If the API returns an error response, we check the HTTP status code to determine the type of error. If the status code is 404 (Not Found), we throw an error indicating that the city was not found. Otherwise, we extract the error message from the API response and throw an error with that message.

#### API Request Count: We keep track of the number of API requests made using the apiRequests state variable. After successfully fetching weather data, we increment this count to monitor the rate of API requests.

## To display normal globe use command to install : npm install three and also I wrote code.
## API Key
